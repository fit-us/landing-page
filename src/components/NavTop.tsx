import Image from "next/image";

export const NavTop = () => {
    return (
        <nav className="w-full max-w-[1200px] h-[60px] sticky top-0 z-50 flex items-center mx-auto">
            <div className="w-full h-full border-primary flex items-center px-4 md:px-6 lg:px-8">
                <Image src="/logo-fitus.svg" alt="FIT-US" width={52} height={19} />
                <div className="w-full border-t-[1px] border-primary relative ml-4">
                    <div className="border-l-[1px] border-primary h-[8px] absolute top-[-4px] right-[4px]" />
                </div>
            </div>
        </nav>
    );
};
