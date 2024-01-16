import Link from "next/link";

export default function Navbar(){
    return(
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto py-5 px-4">
        <Link href="/" className="font-bold text-3xl">
            Aleksandra<span className="text-green-500">Blog</span>
        </Link>
    </nav>
    );
}