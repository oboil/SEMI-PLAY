"use client";

import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { auth } from "@/lib/firebase-client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type InquiryStatus = "pending" | "completed" | "collaboration";

interface Inquiry {
  id: string;
  name: string;
  organization: string;
  position?: string;
  phone: string;
  email: string;
  content: string;
  status: InquiryStatus;
  createdAt: Timestamp | null;
}

const statusConfig = {
  pending: {
    label: "확인 전",
    color: "bg-red-100 text-red-800 border-red-300",
  },
  completed: {
    label: "답변 완료",
    color: "bg-blue-100 text-blue-800 border-blue-300",
  },
  collaboration: {
    label: "협업",
    color: "bg-green-100 text-green-800 border-green-300",
  },
};

export default function InquiryList() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      console.log("=== Firestore 데이터 가져오기 시작 ===");
      console.log("현재 인증 사용자:", auth?.currentUser?.email);

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
          status: docData.status || "pending", // 기본값 설정
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

  const updateInquiryStatus = async (
    inquiryId: string,
    newStatus: InquiryStatus
  ) => {
    try {
      setIsUpdating(true);
      const inquiryRef = doc(db, "inquiries", inquiryId);
      await updateDoc(inquiryRef, {
        status: newStatus,
      });

      // 로컬 상태 업데이트
      setInquiries((prev) =>
        prev.map((inq) =>
          inq.id === inquiryId ? { ...inq, status: newStatus } : inq
        )
      );

      // 선택된 문의도 업데이트
      if (selectedInquiry?.id === inquiryId) {
        setSelectedInquiry((prev) =>
          prev ? { ...prev, status: newStatus } : null
        );
      }

      console.log("✓ 상태 업데이트 완료:", inquiryId, "->", newStatus);
    } catch (error) {
      console.error("❌ 상태 업데이트 실패:", error);
      alert("상태 업데이트에 실패했습니다.");
    } finally {
      setIsUpdating(false);
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
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상세
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inquiries.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
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
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${
                        statusConfig[inquiry.status].color
                      }`}
                    >
                      {statusConfig[inquiry.status].label}
                    </span>
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full p-6 my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4 sticky top-0 bg-white pb-3 border-b">
              <h2 className="text-xl font-bold text-black">문의 상세</h2>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 mt-4">
              {/* 상태 변경 */}
              <div>
                <label className="text-sm font-medium text-gray-500 block mb-2">
                  상태
                </label>
                <Select
                  value={selectedInquiry.status}
                  onValueChange={(value: InquiryStatus) =>
                    updateInquiryStatus(selectedInquiry.id, value)
                  }
                  disabled={isUpdating}
                >
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        확인 전
                      </span>
                    </SelectItem>
                    <SelectItem value="completed">
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        답변 완료
                      </span>
                    </SelectItem>
                    <SelectItem value="collaboration">
                      <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        협업
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

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

            <div className="mt-6 pt-4 flex justify-end border-t sticky bottom-0 bg-white">
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
