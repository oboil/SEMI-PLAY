import { onDocumentCreated } from "firebase-functions/v2/firestore";
import * as admin from "firebase-admin";
import { Resend } from "resend";
import { defineSecret } from "firebase-functions/params";

// Firebase Admin 초기화
admin.initializeApp();

// Secrets 정의
const resendApiKey = defineSecret("RESEND_API_KEY");
const adminEmail = defineSecret("ADMIN_EMAIL");

export const sendInquiryNotification = onDocumentCreated(
  {
    document: "inquiries/{inquiryId}",
    region: "asia-northeast3",
    secrets: [resendApiKey, adminEmail],
  },
  async (event) => {
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
      // 1. 관리자에게 이메일 발송
      const { data: adminEmailData, error: adminError } =
        await resend.emails.send({
          from: "SEMI PLAY <admin@semi-play.kr>",
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

      if (adminError) {
        console.error("❌ 관리자 이메일 발송 실패:", adminError);
      } else {
        console.log("✅ 관리자 이메일 발송 성공:", adminEmailData);
      }

      // 2. 문의 접수자에게 확인 이메일 발송
      const { data: customerEmailData, error: customerError } =
        await resend.emails.send({
          from: "SEMI PLAY <noreply@semi-play.kr>",
          to: data.email,
          subject: "[SEMI PLAY] 문의가 정상적으로 접수되었습니다",
          html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #003E81 0%, #367AC4 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">문의가 접수되었습니다</h1>
            </div>
            
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 12px 12px;">
              <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                <p style="color: #333; line-height: 1.8; margin: 0 0 20px 0; font-size: 16px;">
                  <strong>${data.name}</strong>님, 안녕하세요.<br/>
                  SEMI PLAY에 문의해 주셔서 감사합니다.
                </p>
                <p style="color: #666; line-height: 1.8; margin: 0 0 20px 0;">
                  고객님의 문의가 정상적으로 접수되었습니다.<br/>
                  담당자 확인 후 빠른 시일 내에 연락드리겠습니다.
                </p>
                
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #003E81;">
                  <h3 style="color: #003E81; margin: 0 0 15px 0; font-size: 16px;">접수하신 내용</h3>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 6px 0; color: #666; width: 80px;"><strong>이름</strong></td>
                      <td style="padding: 6px 0; color: #333;">${data.name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #666;"><strong>소속</strong></td>
                      <td style="padding: 6px 0; color: #333;">${
                        data.organization
                      }</td>
                    </tr>
                    ${
                      data.position
                        ? `
                    <tr>
                      <td style="padding: 6px 0; color: #666;"><strong>직위</strong></td>
                      <td style="padding: 6px 0; color: #333;">${data.position}</td>
                    </tr>
                    `
                        : ""
                    }
                    <tr>
                      <td style="padding: 6px 0; color: #666;"><strong>연락처</strong></td>
                      <td style="padding: 6px 0; color: #333;">${
                        data.phone
                      }</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #666;"><strong>접수일시</strong></td>
                      <td style="padding: 6px 0; color: #333;">${new Date().toLocaleString(
                        "ko-KR",
                        { timeZone: "Asia/Seoul" }
                      )}</td>
                    </tr>
                  </table>
                </div>
              </div>
              
              <div style="background: #e8f2ff; padding: 20px; border-radius: 8px; text-align: center;">
                <p style="color: #003E81; font-weight: bold; font-size: 18px; margin: 0 0 10px 0;">
                  감사합니다.<br/>
                  곧 연락드리겠습니다.
                </p>
                <p style="color: #666; font-size: 14px; margin: 0;">
                  문의사항이 더 있으시면 언제든 연락 주세요.
                </p>
              </div>
            </div>
            
            <div style="text-align: center; padding: 20px; color: #999; font-size: 12px; border-top: 1px solid #eee;">
              <p style="margin: 0 0 5px 0;">SEMI PLAY - 반도체를 손으로 만나다</p>
              <p style="margin: 0;">본 메일은 발신전용입니다.</p>
            </div>
          </div>
        `,
        });

      if (customerError) {
        console.error("❌ 고객 이메일 발송 실패:", customerError);
      } else {
        console.log("✅ 고객 이메일 발송 성공:", customerEmailData);
      }
    } catch (error) {
      console.error("❌ 이메일 발송 중 오류:", error);
    }
  }
);
