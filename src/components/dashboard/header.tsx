import iconStuck2Code from "public/images/icon_stuck2code.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="py-4 px-20 shadow-md text-color-donker">
            <div className="flex items-center justify-between">
                <Image src={iconStuck2Code} alt="Stuck2Code Icon" width="120" />
                <div className="flex">
                    <Link href={"/"}>
                        Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}