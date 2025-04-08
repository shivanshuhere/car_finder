"use client"

import { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import Filters from "./components/Filters.jsx";
import ReactPaginate from "react-paginate";
export default function Home() {
    const [carData, setCarData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageClick = (data) => setPageNumber(data.selected);
    const pageCount = Math.ceil(carData.length / 10);
    const getData = async () => {
        try {
            fetch("https://67f52866913986b16fa37df7.mockapi.io/api/cars")
                .then((res) => res.json())
                .then((data) => setCarData(data));
        } catch (error) {
            alert("failed to get data , api error!")
            console.log("api error :", error);
        }
    }
    useEffect(() => {
        getData();

    }, [])
    return (
        <div className="flex w-full h-full">
            <section className="h-screen text-black sticky top-0 left-0 sm:hidden md:block">
                <Filters />
            </section>
            <main >
                <div className="flex flex-wrap p-10 justify-evenly">
                    {carData.map((data) =>
                        <Card price={data.price}
                            brand={data.brand}
                            fuel={data.fuel}
                            id={data.id}
                            name={data.name}
                            img={"https://i.ytimg.com/vi/q5PPNZiu52w/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA8A99aXBdJwgmpbqwEk6Z-PaGH7A"}
                        />

                    )}

                </div>
                <div>

                    <ReactPaginate
                        className="flex items-center justify-center gap-2  border-t border-gray-200 bg-white px-4 py-3 sm:px-6 text-black
                        hover:curor-pointer text-sm font-medium"
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
