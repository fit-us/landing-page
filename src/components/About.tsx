import watch from "../assets/watch.svg";

const About = () => {
  return (
    <div className="relative z-0 h-full flex flex-col justify-between">
      <div>
        <div className="flex flex-col pl-[200px] pt-[120px] text-white relative">
          <h2 className="mb-1">ABOUT FIT-US</h2>
          <p className="text-3xl my-1 font-bold">
            병원에 가기 부담스러워서 혼자서 앓고 있나요?
          </p>
          <p className="text-3xl my-1 font-bold">FIT-US가 도와드릴게요!</p>
          <p className="pt-12 leading-relaxed">
            FIT-US는 경증 공황증을 앓는 모든 이들을 위한 케어 서비스입니다.
            <br />
            웨어러블 기기를 통해 사용자의 실시간 바이오데이터를 수집하고,
            이상징후가 발견될 경우 인지행동치료(CBT)를 할 수 있도록 도와줍니다.
            <br />
            병원에 가기 부담스러웠던 당신, 이젠 FIT-US와 함께 언제 어디서든
            건강한 라이프를 즐겨보세요!
          </p>
          <img
            src={watch}
            alt="AppleWatch"
            className="absolute z-10 right-0 top-0 w-5/12"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
