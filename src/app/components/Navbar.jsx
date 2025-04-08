

export default function Navbar() {
    return (
        <nav className="w-full h-10 flex justify-between p-3 items-center bg-slate-400 text-black">
            <div>Logo</div>
            <input
                type="search"
                placeholder="what are you looking for ?"
            ></input>

        </nav>
    )
}
