import { cn } from "@/styles/utils";

export interface LineChartItemProps {
    className?: string;
    label?: React.ReactNode;
}

export const LineChartItem = ({ className, label }: LineChartItemProps) => {
    return (
        <div className="flex items-center">
            <div
                className={cn("rounded-r-full", className)}
                style={{
                    background:
                        "linear-gradient(90deg, #B7B7B7 0%, #9D4EDD 100%)",
                }}
            />
            <div className="flex-shrink-0 mx-4">{label}</div>
        </div>
    );
};
