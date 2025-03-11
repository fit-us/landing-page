import Image from "next/image";
import homeBackgroundHero from "@/assets/home-bg-hero.png";

export default function Home() {
    return (
        <div>
            <Image src={homeBackgroundHero} alt="울고있는 사람" className="absolute inset-0 w-screen h-screen object-cover" />
        </div>
    );
}
