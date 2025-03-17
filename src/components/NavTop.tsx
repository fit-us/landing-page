import Image from "next/image";

export const NavTop = () => {
    return (
        <nav className="mx-auto h-[60px] w-full max-w-[1200px] px-4 md:px-8 lg:px-12">
            <div className="flex items-center w-full h-full text-white">
                <Image
                    src="/logo-fitus.svg"
                    alt="FITUS"
                    width={52}
                    height={19}
                />
                <div className="relative ml-4 w-full border-t-[1px] border-primary">
                    <div className="absolute right-[6px] top-[-4px] h-[8px] border-l-[1px] border-primary"></div>
                </div>
            </div>
        </nav>
    );
};
