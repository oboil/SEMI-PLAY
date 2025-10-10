"use client";

import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { db, auth } from "@/lib/firebase";

interface Inquiry {
  id: string;
  name: string;
  organization: string;
  position?: string;
  phone: string;
  email: string;
  content: string;
  createdAt: Timestamp;
}

export default function InquiryList() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      console.log("=== Firestore 데이터 가져오기 시작 ===");
      console.log("현재 인증 사용자:", auth.currentUser?.email);

      const q = query(
        collection(db, "inquiries"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      console.log("✓ 가져온 문서 수:", querySnapshot.size);

      const data = querySnapshot.docs.map((doc) => {
        const docData = doc.data();
        console.log("문서 ID:", doc.id, "데이터:", docData);
        return {
          id: doc.id,
          ...docData,
        } as Inquiry;
      });

      console.log("✓ 변환 완료된 데이터 총", data.length, "개");
      setInquiries(data);
    } catch (error) {
      console.error("❌ 문의 데이터 로딩 실패:", error);

      if (error instanceof Error) {
        console.error("에러 메시지:", error.message);
      }

      // Firebase 에러인 경우
      const firebaseError = error as { code?: string; message?: string };

      let errorMessage = "문의 데이터를 불러오는데 실패했습니다.";
      if (firebaseError.code === "permission-denied") {
        errorMessage =
          "데이터 접근 권한이 없습니다. Firestore 보안 규칙을 확인해주세요.";
      } else if (firebaseError.code === "unavailable") {
        errorMessage = "네트워크 연결을 확인해주세요.";
      }

      alert(errorMessage + "\n\n개발자 콘솔을 확인해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: Timestamp | null) => {
    if (!timestamp) return "-";
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-gray-500">로딩 중...</p>
      </div>
    );
  }

  return (
    <div>
      {/* 문의 목록 테이블 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                이름
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                소속
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                연락처
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                이메일
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                접수일시
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상세
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inquiries.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  문의 내역이 없습니다.
                </td>
              </tr>
            ) : (
              inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {inquiry.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {inquiry.organization}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {inquiry.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {inquiry.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(inquiry.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => setSelectedInquiry(inquiry)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      보기
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 상세 모달 */}
      {selectedInquiry && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-black">문의 상세</h2>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  이름
                </label>
                <p className="text-gray-900">{selectedInquiry.name}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">
                  소속
                </label>
                <p className="text-gray-900">{selectedInquiry.organization}</p>
              </div>

              {selectedInquiry.position && (
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    직위
                  </label>
                  <p className="text-gray-900">{selectedInquiry.position}</p>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-gray-500">
                  전화번호
                </label>
                <p className="text-gray-900">{selectedInquiry.phone}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">
                  이메일
                </label>
                <p className="text-gray-900">{selectedInquiry.email}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">
                  내용
                </label>
                <p className="text-gray-900 whitespace-pre-wrap">
                  {selectedInquiry.content}
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">
                  접수일시
                </label>
                <p className="text-gray-900">
                  {formatDate(selectedInquiry.createdAt)}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
