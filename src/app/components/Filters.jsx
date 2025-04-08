
export default function Filters() {
    return (
        <div className="bg-slate-400 w-30 h-full">
            <h1>Filters</h1>
            <div>
                <label>Price range</label>
                <input type="range" min={0} />
                <input type="range" max={100} />
            </div>
            <div>
                <label>Fuel Type</label>
                <select>
                    <option value={"petorl"} defaultChecked>
                        Petrol
                    </option>
                    <option value={"diesel"}>Diesel</option>
                    <option value={"cng"}>CNG</option>
                </select>
            </div>
        </div>
    )
}
