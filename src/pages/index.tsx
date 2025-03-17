import Image from "next/image";

import homeBackgroundHero from "@/assets/home-bg-hero.png";
import homeFooterDevices from "@/assets/home-footer-devices.png";

/*
import homeImageWatch from "@/assets/home-img-watch.svg";
import homeImageWatchface1 from "@/assets/home-img-watchface1.png";
import homeImageWatchface2 from "@/assets/home-img-watchface2.png";
import homeImageWatchface3 from "@/assets/home-img-watchface3.png";
import homeImageWatchface4 from "@/assets/home-img-watchface4.png";
import homeImageWatchface5 from "@/assets/home-img-watchface5.png";
*/

import { ChevronRight } from "lucide-react";

import { NavTop } from "@/components/NavTop";
import { HeroMain } from "@/components/HeroMain";
import { HeroFooter } from "@/components/HeroFooter";
import { AboutPanicDisorder } from "@/components/AboutPanicDisorder";
import { AboutPanicDisorderChart } from "@/components/AboutPanicDisorderChart";
import { FitUsProgram, FitUsProgramMobile } from "@/components/FitUsProgram";

export default function Home() {
    return (
        <div className="relative">
            <Image
                src={homeBackgroundHero}
                alt="울고있는 사람"
                className="absolute z-[-1] h-screen w-full object-cover"
            />

            <NavTop />
            <div className="relative mx-auto h-[calc(100vh-60px)] text-white">
                <HeroMain />
                <HeroFooter />
            </div>

            <AboutPanicDisorder />
            <AboutPanicDisorderChart />

            <div className="w-full">
                <div className="mx-auto w-full max-w-[1200px] p-10 py-14 md:p-16 md:py-20 lg:p-24 lg:py-28">
                    <h2 className="text-[#B7B7B7]">FIT-US PROGRAM</h2>
                    <h1 className="mb-6 text-2xl font-bold">
                        FIT-US는 개인화된 인지행동치료를 제공해요
                    </h1>

                    <div className="text-sm">
                        <p>
                            FIT-US는 사용자의 안정상태 바이오데이터를 기준으로,
                            이상징후가 탐지되면 웨어러블기기에서 경고알림을
                            보냅니다.
                        </p>
                        <p>
                            이후, 스마트폰의 FIT-US 앱을 통해 대화를 기반으로
                            인지행동치료를 진행합니다.
                        </p>
                        <p>
                            이상징후에 대한 원인을 찾고 안정상태로 돌아오면
                            대화는 종료되며, 인지행동치료에 대한 평가를 할 수
                            있습니다.
                        </p>
                        <p>이를 통해 CBT의 효과 및 내역 확인이 가능합니다.</p>
                    </div>
                </div>

                <FitUsProgram />
                <FitUsProgramMobile />

                <div
                    className="relative flex flex-col justify-start w-full h-screen"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 30%, #9D4EDD 100%)",
                    }}
                >
                    <div className="mx-auto my-20 h-[400px] border-l-2 border-primary"></div>

                    <p className="text-xs text-center">EARLY MEETING</p>
                    <h1 className="text-3xl font-bold text-center">
                        가장 빠르게 FIT-US를 경험해보세요
                    </h1>

                    <button className="flex p-2 px-5 mx-auto my-8 font-semibold text-white rounded-full w-fit bg-primary">
                        체험단 지원하기
                        <ChevronRight />
                    </button>

                    <div className="flex justify-center overflow-hidden">
                        <Image
                            className="absolute bottom-0 z-[-1] mx-auto block w-full max-w-[1200px] object-cover"
                            src={homeFooterDevices}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
