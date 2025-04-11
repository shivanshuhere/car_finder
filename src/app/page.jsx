"use client";
import { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import Filters from "./components/Filters.jsx";
import ReactPaginate from "react-paginate";

export default function Home() {
    const [carData, setCarData] = useState([]);
    const [filters, setFilters] = useState({
        price: [0, 1000],
        fuel: '',
    });
    const [filteredCarData, setFilteredCarData] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    // Fetch data from API
    const getData = async () => {
        try {
            const res = await fetch("https://67f52866913986b16fa37df7.mockapi.io/api/cars");
            const data = await res.json();
            setCarData(data);
            localStorage.setItem("cars", JSON.stringify(data));
        } catch (error) {
            alert("Failed to get data, API error!");
            console.error("API error:", error);
        }
    };

    // Update filters
    const updateFilters = (newFilters) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }));
        setItemOffset(0); // Reset to first page on filter change
    };

    // Filter data based on filters
    useEffect(() => {
        const filtered = carData.filter((car) => {
            const withinPriceRange =
                car.price >= filters.price[0] && car.price <= filters.price[1];
            const matchesFuelType = filters.fuel ? car.fuel.toLowerCase() === filters.fuel.toLowerCase() : true;
            return withinPriceRange && matchesFuelType;
        });
        setFilteredCarData(filtered);
    }, [filters, carData]);

    // Handle pagination
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredCarData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredCarData.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filteredCarData.length;
        setItemOffset(newOffset);
    };

    // Add to wishlist
    const handleAddToWishlist = (car) => {
        const wishlist = JSON.parse(localStorage.getItem("mywishlist")) || [];

        // Check if the car is already in the wishlist
        const isAlreadyInWishlist = wishlist.some((item) => item.id === car.id);
        if (isAlreadyInWishlist) {
            alert("Already added to wishlist");
            return;
        }

        // Add to wishlist
        wishlist.push(car);
        localStorage.setItem("mywishlist", JSON.stringify(wishlist));
        alert("Added to wishlist");

        // Remove from carData
        setCarData((prevData) => prevData.filter((item) => item.id !== car.id));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="flex w-full h-full flex-col md:flex-row">
            <section className="w-full md:w-min text-black md:sticky md:h-screen top-0">
                <Filters filters={filters} updateFilters={updateFilters} />
            </section>
            <main className="md:p-10">
                <div className="flex flex-wrap justify-evenly">
                    {currentItems.map((data) => (
                        <Card
                            price={data.price}
                            brand={data.brand}
                            fuel={data.fuel}
                            id={data.id}
                            key={data.id}
                            cart={true}
                            name={data.name}
                            onAddToWishlist={() => handleAddToWishlist(data)}
                        />
                    ))}
                </div>
                <div>
                    <ReactPaginate
                        className="flex justify-center gap-4"
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </main>
        </div>
    );
}
