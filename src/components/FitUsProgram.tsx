import homeRingWatch from "@/assets/home-ring-watch.png";
import homeRingChat from "@/assets/home-ring-chat.png";
import homeRingEvaluation from "@/assets/home-ring-evaluation.png";

import { Marker } from "./Marker";
import Image from "next/image";
import { Program } from "./Program";

export const FitUsProgram = () => {
    return (
        <div
            className="relative mx-auto my-20 hidden aspect-square w-[40%] max-w-[440px] place-items-center rounded-full md:hidden lg:grid"
            style={{
                background:
                    "linear-gradient(101deg, #F5F5F5 26.44%, #9D4EDD 73.56%)",
            }}
        >
            <div className="grid aspect-square w-[98%] place-items-center rounded-full bg-white text-primary">
                FIT-US PROGRAM
            </div>

            <Marker
                left={-100}
                top={-50}
                direction="reverse"
                title="이상징후 탐지"
                description={[
                    "심박수, 심전도, 호흡수, 산소포화도, 최대 산소 섭취량",
                    "5가지 항목에 대한 이상징후를 탐지합니다.",
                ]}
            />

            <Marker
                left={-230}
                top={50}
                direction="reverse"
                title="안전상태 바이오데이터 수집"
                description={[
                    "심박수, 심전도, 호흡수, 산소포화도,",
                    "최대 산소 섭취량 5가지 항목의",
                    "안정상태의 바이오데이터를 수집하며,",
                    "이를 기준으로 이상징후를 탐지합니다.",
                ]}
            />
            <Image
                src={homeRingWatch}
                alt="안정상태 바이오데이터 수집"
                className="absolute"
                style={{ left: "-100px", top: "50px" }}
                width={250}
            />

            <Marker
                left={-230}
                top={250}
                direction="reverse"
                title="인지행동치료 효과 및 내역 확인"
                description={[
                    "평가를 바탕으로 인지행동치료의 효과",
                    "및 내역 확인이 가능합니다.",
                ]}
            />

            <Marker
                right={-240}
                top={-10}
                direction="default"
                title="웨어러블 기기에서 경고알림"
                description={[
                    "심박수, 심전도, 호흡수, 산소포화도, 최대 산소 섭취량 5가지 항목 중",
                    "어느 바이오데이터에서 이상징후가 발생했는지 경고알림을 제공합니다.",
                ]}
            />

            <Marker
                right={-280}
                top={120}
                direction="default"
                title="대화를 통한 인지행동치료 진행"
                description={[
                    "AI챗봇과 대화를 통해 인지행동치료를 진행합니다.",
                    "사용자가 이상징후에 대한 원인을 파악하고,",
                    "이상징후가 안정화된다면 대화를 종료할 수 있습니다.",
                ]}
            />
            <Image
                src={homeRingChat}
                alt="대화를 통한 인지행동치료 진행"
                className="absolute"
                style={{ right: "-300px", bottom: "-50px" }}
                width={500}
            />

            <Marker
                bottom={-80}
                left={240}
                direction="default"
                title="인지행동치료에 대한 평가"
                description={[
                    "사용자의 바이오데이터가 안정화된 후,",
                    "최근 인지행동치료에 대한 평가를 진행합니다.",
                ]}
            />
            <Image
                src={homeRingEvaluation}
                alt="인지행동치료에 대한 평가"
                className="absolute"
                style={{ left: "-200px", bottom: "-150px" }}
                width={800}
            />
        </div>
    );
};

export const FitUsProgramMobile = () => {
    return (
        <div className="mx-auto w-full max-w-[1200px] p-10 py-0 md:p-16 md:py-0 lg:hidden lg:p-24">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                <Program
                    title="안정상태 바이오데이터 수집"
                    description={[
                        "심박수, 심전도, 호흡수, 산소포화도, 최대 산소 섭취량 5가지 항목의",
                        "안정상태의 바이오데이터를 수집하며, 이를 기준으로 이상징후를 탐지합니다.",
                    ]}
                />
                <Program
                    title="이상징후 탐지"
                    description={[
                        "심박수, 심전도, 호흡수, 산소포화도, 최대 산소 섭취량",
                        "5가지 항목에 대한 이상징후를 탐지합니다.",
                    ]}
                />
                <Program
                    title="웨어러블 기기에서 경고알림"
                    description={[
                        "심박수, 심전도, 호흡수, 산소포화도, 최대 산소 섭취량 5가지 항목 중",
                        "어느 바이오데이터에서 이상징후가 발생했는지 경고알림을 제공합니다.",
                    ]}
                />
                <Program
                    title="대화를 통한 인지행동치료 진행"
                    description={[
                        "AI챗봇과 대화를 통해 인지행동치료를 진행합니다.",
                        "사용자가 이상징후에 대한 원인을 파악하고,",
                        "이상징후가 안정화된다면 대화를 종료할 수 있습니다.",
                    ]}
                />
                <Program
                    title="인지행동치료에 대한 평가"
                    description={[
                        "사용자의 바이오데이터가 안정화된 후,",
                        "최근 인지행동치료에 대한 평가를 진행합니다.",
                    ]}
                />
                <Program
                    title="인지행동치료 효과 및 내역 확인"
                    description={[
                        "평가를 바탕으로 인지행동치료의 효과",
                        "및 내역 확인이 가능합니다.",
                    ]}
                />
            </div>
        </div>
    );
};
