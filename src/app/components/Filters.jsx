// components/Filters.jsx
export default function Filters({ filters, updateFilters }) {
    const handlePriceChange = (event) => {
        const { name, value } = event.target;
        const newPrice = [...filters.price];
        if (name === 'min') {
            newPrice[0] = Number(value);
        } else if (name === 'max') {
            newPrice[1] = Number(value);
        }
        updateFilters({ price: newPrice });
    };

    const handleFuelChange = (event) => {
        updateFilters({ fuel: event.target.value });
    };

    const handleSearchChange = (event) => {
        updateFilters({ search: event.target.value });
    };

    return (
        <div className="text-white p-4 bg-slate-600 md:h-screen">
            <div className="mb-4">
                <label className="block mb-2">Search</label>
                <input
                    type="text"
                    value={filters.search}
                    onChange={handleSearchChange}
                    placeholder="Search by name"
                    className="w-full p-1 bg-slate-500"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Price Range</label>
                <div className="flex items-center space-x-2">
                    <input
                        type="number"
                        name="min"
                        min="0"
                        max="1000"
                        value={filters.price[0]}
                        onChange={handlePriceChange}
                        className="w-20 p-1 bg-slate-500"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        name="max"
                        min="0"
                        max="1000"
                        value={filters.price[1]}
                        onChange={handlePriceChange}
                        className="w-20 p-1 bg-slate-500"
                    />
                </div>
            </div>
            <div>
                <label className="block mb-2">Fuel Type</label>
                <select
                    value={filters.fuel}
                    onChange={handleFuelChange}
                    className="w-full p-1 bg-slate-500"
                >
                    <option value="">All</option>
                    <option value="gasoline">Gasoline</option>
                    <option value="diesel">Diesel</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="electric">Electric</option>
                </select>
            </div>
        </div>
    );
}
