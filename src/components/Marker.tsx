import { cn } from "@/styles/utils";

export interface MarkerProps {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;

    direction: "default" | "reverse";

    title: string;
    description: Array<string>;
}

export const Marker = ({
    title,
    description,

    left,
    right,
    top,
    bottom,

    direction,
}: MarkerProps) => {
    return (
        <div
            className={cn(
                `absolute flex items-start gap-2`,
                direction === "default" ? "" : "flex-row-reverse",
            )}
            style={{
                top: `${top}px`,
                bottom: `${bottom}px`,
                left: `${left}px`,
                right: `${right}px`,
            }}
        >
            <div className="my-1">
                <div className="outline-opacity-40 h-4 w-4 rounded-full border-[3px] bg-[#9D4EDD] outline-[#9D4EDD]"></div>
            </div>
            <div className="flex-shrink-0">
                <h3
                    className={cn(
                        "text-sm font-bold",
                        direction === "default" ? "text-left" : "text-right",
                    )}
                >
                    {title}
                </h3>
                <div>
                    {description.map((desc, idx) => {
                        return (
                            <p
                                key={idx}
                                className={cn(
                                    "text-xs",
                                    direction === "default"
                                        ? "text-left"
                                        : "text-right",
                                )}
                            >
                                {desc}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
