import { LineChartItem } from "./LineChart";

export const AboutPanicDisorderChart = () => {
    return (
        <div className="w-full">
            <div className="mx-auto w-full max-w-[1200px] border-b-[1px] border-[#C4C3C2] py-8">
                <div className="flex flex-col gap-6">
                    <LineChartItem
                        className="h-[20px] w-[100%]"
                        label={
                            <div className="flex items-center gap-4">
                                <h3 className="font-semibold text-primary">
                                    200,540명
                                </h3>
                                <p className="text-xs text-[#767676]">2021</p>
                            </div>
                        }
                    />
                    <LineChartItem
                        className="h-[20px] w-[80%]"
                        label={
                            <div className="flex items-center gap-4">
                                <h3 className="font-semibold text-[#767676]">
                                    177,610명
                                </h3>
                            </div>
                        }
                    />
                    <LineChartItem
                        className="h-[20px] w-[80%]"
                        label={
                            <div className="flex items-center gap-4">
                                <h3 className="font-semibold text-[#767676]">
                                    169,821명
                                </h3>
                            </div>
                        }
                    />
                    <LineChartItem
                        className="h-[20px] w-[70%]"
                        label={
                            <div className="flex items-center gap-4">
                                <h3 className="font-semibold text-[#767676]">
                                    159,635명
                                </h3>
                            </div>
                        }
                    />
                    <LineChartItem
                        className="h-[20px] w-[60%]"
                        label={
                            <div className="flex items-center gap-4">
                                <h3 className="font-semibold text-[#767676]">
                                    138,736명
                                </h3>
                                <p className="text-xs text-[#767676]">2017</p>
                            </div>
                        }
                    />
                </div>

                <div></div>
            </div>
        </div>
    );
};
