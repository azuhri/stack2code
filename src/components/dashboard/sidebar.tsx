import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="flex justify-center">
            <ul className="w-full px-4 mt-4 text-color-donker">
                <li className="my-8">
                    <Link href="/dashboard" className="text-sm flex items-center">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <span className="mx-4">Home</span>
                    </Link>
                </li>
                <li className="my-8">
                    <Link href="/dashboard" className="text-sm flex items-center">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        <span className="mx-4">Question</span>
                    </Link>
                </li>
                <li className="my-8">
                    <Link href="/dashboard" className="text-sm flex items-center">
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <span className="mx-4">My Account</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}