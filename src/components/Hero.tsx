import bg from "../assets/bgimg.webp";

const Hero = () => {
  return (
    <div className="absolute inset-0 bg-black">
      <img src={bg} alt="bgimg" className="w-full h-[75%] object-cover" />
      <div className="text-white pl-28 pt-[70px]">
        <div className="flex flex-col pl-[90px]">
          <h1 className="font-bold text-3xl">
            가장 빠르게 FIT-US를 경험해보세요!
          </h1>
          <div className="flex items-center mt-4">
            <div className="ml-[680px] w-[680px] border border-white relative after:absolute after:right-[-10px] after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-[6px] after:border-transparent after:border-l-white" />
            <button className="relative z-10 ml-16 px-6 py-2 bg-main text-white rounded-[15px] font-medium ">
              체험단 지원하기 {">"}
            </button>
          </div>
          <p className="pt-4 text-lg">
            FIT-US는 다양한 사용자의 고민을 공감하고자 체험단을 모집하고
            있습니다.
            <br />
            FIT-US의 개인화된 케어 서비스를 통해 CBT를 경험해보세요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
