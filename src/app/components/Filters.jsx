
export default function Filters() {
    return (
        <div className="text-sm flex-wrap bg-slate-400 lg:w-min w-full h-full p-5 border-t-2 flex md:flex-col gap-6">
            <h1 className="text-xl font-semibold">Filters</h1>
            <div>
                <label>Price range</label>
                <input type="range" min={0} />
                <input type="range" max={100} />
            </div>
            <div>
                <label>Fuel Type</label>
                <select>
                    <option value={"gasoline"} defaultChecked>
                        Gasoline
                    </option>
                    <option value={"diesel"}>Diesel</option>
                    <option value={"hybrid"}>Hybrid</option>
                    <option value={"electric"}>Electric</option>
                </select>
            </div>
        </div>
    )
}
