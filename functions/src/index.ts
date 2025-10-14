import { onDocumentCreated } from "firebase-functions/v2/firestore";
import * as admin from "firebase-admin";
import { Resend } from "resend";
import { defineSecret } from "firebase-functions/params";

// Firebase Admin 초기화
admin.initializeApp();

// Secrets 정의
const resendApiKey = defineSecret("RESEND_API_KEY");
const adminEmail = defineSecret("ADMIN_EMAIL");

// Resend는 함수 내부에서 초기화
export const sendInquiryNotification = onDocumentCreated(
  {
    document: "inquiries/{inquiryId}",
    region: "asia-northeast3",
    secrets: [resendApiKey, adminEmail],
  },
  async (event) => {
    // Resend 초기화 (함수 내부에서)
    const resend = new Resend(resendApiKey.value());

    const snapshot = event.data;
    if (!snapshot) {
      console.log("문서 데이터가 없습니다");
      return;
    }

    const data = snapshot.data();
    const inquiryId = event.params.inquiryId;

    console.log("새 문의 접수:", inquiryId);

    // 관리자 이메일 파싱
    const adminEmails = adminEmail
      .value()
      .split(",")
      .map((email) => email.trim());

    try {
      const { data: emailData, error } = await resend.emails.send({
        from: "SEMI PLAY <onboarding@resend.dev>",
        to: adminEmails,
        subject: `[SEMI PLAY] 새로운 문의: ${data.name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #003E81 0%, #367AC4 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">새로운 문의가 접수되었습니다</h1>
            </div>
            
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 12px 12px;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #003E81; margin-top: 0; font-size: 18px; border-bottom: 2px solid #003E81; padding-bottom: 10px;">
                  기본 정보
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; width: 100px;"><strong>이름</strong></td>
                    <td style="padding: 8px 0; color: #333;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>소속</strong></td>
                    <td style="padding: 8px 0; color: #333;">${
                      data.organization
                    }</td>
                  </tr>
                  ${
                    data.position
                      ? `
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>직위</strong></td>
                    <td style="padding: 8px 0; color: #333;">${data.position}</td>
                  </tr>
                  `
                      : ""
                  }
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>전화번호</strong></td>
                    <td style="padding: 8px 0; color: #333;">${data.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>이메일</strong></td>
                    <td style="padding: 8px 0; color: #333;">
                      <a href="mailto:${
                        data.email
                      }" style="color: #003E81; text-decoration: none;">${
          data.email
        }</a>
                    </td>
                  </tr>
                </table>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #003E81; margin-top: 0; font-size: 18px; border-bottom: 2px solid #003E81; padding-bottom: 10px;">
                  문의 내용
                </h2>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 6px; white-space: pre-wrap; line-height: 1.6; color: #333;">
${data.content}
                </div>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; text-align: center;">
                <p style="color: #666; margin: 0 0 15px 0; font-size: 14px;">
                  접수일시: ${new Date().toLocaleString("ko-KR", {
                    timeZone: "Asia/Seoul",
                  })}
                </p>
                <a href="https://yourdomain.com/admin/dashboard" 
                   style="display: inline-block; background: #003E81; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                  관리자 페이지에서 확인하기
                </a>
              </div>
            </div>
            
            <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 0;">SEMI PLAY - 반도체를 손으로 만나다</p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("❌ 이메일 발송 실패:", error);
        return;
      }

      console.log("✅ 이메일 발송 성공:", emailData);
    } catch (error) {
      console.error("❌ 이메일 발송 중 오류:", error);
    }
  }
);
