import { ChevronRight } from "lucide-react";

export const HeroFooter = () => {
    return (
        <div className="absolute bottom-0 w-full bg-black">
            <div className="mx-auto flex w-full max-w-[1200px] items-center p-10 text-white md:p-16 lg:p-24">
                <div className="flex-shrink-0">
                    <h1 className="mb-4 text-2xl font-bold">
                        가장 빠르게 FIT-US를 경험해보세요!
                    </h1>
                    <p className="text-sm font-light">
                        FIT-US는 다양한 사용자의 고민을 공감하고자 체험단을
                        모집하고 있습니다.
                    </p>
                    <p className="text-sm font-light">
                        FIT-US의 개인화된 케어 서비스를 통해 CBT를 경험
                        해봅시다.
                    </p>
                </div>
                <div className="mx-6 w-full border-t-[1px] border-white" />

                <button className="flex flex-shrink-0 p-2 px-4 text-white rounded-full bg-primary">
                    체험단 지원하기 <ChevronRight />
                </button>
            </div>
        </div>
    );
};
