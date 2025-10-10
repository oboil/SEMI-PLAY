import Banner from "@/components/Banner";
import Team from "./team";
import News from "./news";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* 배너 섹션 */}
      <Banner greeting="안녕하세요," title={<>SEMI PLAY 입니다.</>} />

      <main>
        <Team />
        <News />
      </main>
    </div>
  );
}
