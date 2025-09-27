"use client";

import { useState } from "react";
import {
  User,
  Building,
  Briefcase,
  Phone,
  Mail,
  Edit,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Banner from "@/components/Banner";

interface ContactFormData {
  name: string;
  organization: string;
  position: string;
  phone: string;
  email: string;
  content: string;
  privacyAgreed: boolean;
}

interface FormErrors {
  name?: string;
  organization?: string;
  position?: string;
  phone?: string;
  email?: string;
  content?: string;
  privacyAgreed?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    organization: "",
    position: "",
    phone: "",
    email: "",
    content:
      "아래의 정보를 작성해 주시면 빠른 상담이 가능합니다.\n\n교육 대상:\n\n교육 일정:\n\n교육 인원:",
    privacyAgreed: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    field: keyof ContactFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해 주세요.";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "소속을 입력해 주세요.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "전화번호를 입력해 주세요.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해 주세요.";
    } else if (!/^\S+@\S+$/i.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해 주세요.";
    }

    if (!formData.content.trim()) {
      newErrors.content = "내용을 입력해 주세요.";
    }

    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = "개인정보보호정책에 동의해 주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* 배너 섹션 */}
      <Banner greeting="안녕하세요," title="SEMI PLAY 입니다." />

      {/* 빠른 문의 섹션 */}
      <section className="py-9 px-3">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-9 text-black">
            빠른 문의
          </h2>

          {/* 문의 방법 아이콘들 */}
          <div className="flex justify-center gap-6 mb-12">
            <div className="w-24 h-24 bg-[#DAE2F9] rounded-2xl flex items-center justify-center">
              <Mail className="w-12 h-12 text-[#1D1B20]" />
            </div>
            <div className="w-24 h-24 bg-[#DAE2F9] rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-12 h-12 text-black" />
            </div>
            <div className="w-24 h-24 bg-[#DAE2F9] rounded-2xl flex items-center justify-center">
              <Instagram className="w-12 h-12 text-black" />
            </div>
            <div className="w-24 h-24 bg-[#DAE2F9] rounded-2xl flex items-center justify-center">
              <Phone className="w-12 h-12 text-black" />
            </div>
          </div>

          {/* 문의 폼 */}
          <div className="space-y-6">
            {/* 이름 */}
            <div className="bg-[#E3E3EB] rounded-lg p-6">
              <div className="flex items-center gap-3">
                <User className="w-9 h-9 text-[#1D1B20]" />
                <label className="text-lg font-medium text-black whitespace-nowrap">
                  이름 *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="이름을 입력해 주세요."
                  className="text-lg bg-transparent border-none shadow-none text-[#4C4C4C] placeholder:text-[#4C4C4C] h-9 flex-1"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* 소속 */}
            <div className="bg-[#E3E3EB] rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Building className="w-9 h-9 text-[#1D1B20]" />
                <label className="text-lg font-medium text-black whitespace-nowrap">
                  소속 *
                </label>
                <Input
                  value={formData.organization}
                  onChange={(e) =>
                    handleInputChange("organization", e.target.value)
                  }
                  placeholder="소속을 입력해 주세요."
                  className="text-lg bg-transparent border-none shadow-none text-[#4C4C4C] placeholder:text-[#4C4C4C] h-9 flex-1"
                />
              </div>
              {errors.organization && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.organization}
                </p>
              )}
            </div>

            {/* 직위 */}
            <div className="bg-[#E3E3EB] rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Briefcase className="w-9 h-9 text-[#1D1B20]" />
                <label className="text-lg font-medium text-black whitespace-nowrap">
                  직위
                </label>
                <Input
                  value={formData.position}
                  onChange={(e) =>
                    handleInputChange("position", e.target.value)
                  }
                  placeholder="직위를 입력해 주세요."
                  className="text-lg bg-transparent border-none shadow-none text-[#4C4C4C] placeholder:text-[#4C4C4C] h-9 flex-1"
                />
              </div>
            </div>

            {/* 전화번호 */}
            <div className="bg-[#E3E3EB] rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Phone className="w-9 h-9 text-[#1D1B20]" />
                <label className="text-lg font-medium text-black whitespace-nowrap">
                  전화번호 *
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="전화번호를 입력해 주세요."
                  className="text-lg bg-transparent border-none shadow-none text-[#4C4C4C] placeholder:text-[#4C4C4C] h-9 flex-1"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* 이메일 */}
            <div className="bg-[#E3E3EB] rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Mail className="w-9 h-9 text-[#1D1B20]" />
                <label className="text-lg font-medium text-black whitespace-nowrap">
                  이메일 *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="이메일을 입력해 주세요."
                  className="text-lg bg-transparent border-none shadow-none text-[#4C4C4C] placeholder:text-[#4C4C4C] h-9 flex-1"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* 내용 */}
            <div className="bg-[#E3E3EB] rounded-lg p-6">
              <div className="flex items-start gap-3 mb-3">
                <Edit className="w-9 h-9 text-[#1D1B20] mt-1" />
                <label className="text-lg font-medium text-black">내용 *</label>
              </div>
              <Textarea
                value={formData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                placeholder="아래의 정보를 작성해 주시면 빠른 상담이 가능합니다."
                className="text-lg bg-transparent border-none shadow-none text-[#4C4C4C] placeholder:text-[#4C4C4C] min-h-[150px] resize-none"
              />
              {errors.content && (
                <p className="text-red-500 text-xs mt-1">{errors.content}</p>
              )}
            </div>

            {/* 개인정보 동의 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.privacyAgreed}
                  onChange={(e) =>
                    handleInputChange("privacyAgreed", e.target.checked)
                  }
                  className="w-6 h-6 accent-black"
                />
                <label className="text-base underline cursor-pointer">
                  개인정보보호정책에 동의합니다. *
                </label>
              </div>
              {errors.privacyAgreed && (
                <p className="text-red-500 text-xs">{errors.privacyAgreed}</p>
              )}
            </div>

            {/* 제출 버튼 */}
            <div className="flex justify-center pt-6">
              <Button
                onClick={handleSubmit}
                className="bg-[#D7E2FF] border-2 border-[#294677] text-black font-medium text-lg px-9 py-4 h-auto rounded-lg hover:bg-[#C0D3FF]"
                variant="outline"
              >
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
