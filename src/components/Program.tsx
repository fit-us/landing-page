export interface ProgramProps {
    title: string;
    description: Array<string>;
}

export const Program = ({ title, description }: ProgramProps) => {
    return (
        <div className="flex gap-2">
            <div>
                <div className="outline-opacity-40 my-1 h-4 w-4 rounded-full border-[3px] bg-[#9D4EDD] outline-[#9D4EDD]"></div>
            </div>
            <div>
                <h2 className="font-bold">{title}</h2>
                {description.map((desc, idx) => {
                    return (
                        <p key={idx} className="text-xs">
                            {desc}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};
