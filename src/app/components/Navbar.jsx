
import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="w-full h-min flex flex-wrap justify-between p-3 items-center bg-slate-400 text-black">
            <div>Logo</div>
            <div className="flex gap-1">
                <input
                    type="search"
                    placeholder="what are you looking for ?"
                ></input>
                <Link href="/" >Store</Link>
                <Link href="/wishlist" >Wishlist</Link>
            </div>

        </nav>
    )
}
