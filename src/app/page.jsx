"use client"
import { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import Filters from "./components/Filters.jsx";
import ReactPaginate from "react-paginate";

export default function Home() {
    const [carData, setCarData] = useState([]);
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
    const itemsPerPage = 10;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = carData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(carData.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % carData.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="flex w-full h-full">
            <section className="h-screen text-black sticky top-0 left-0 sm:hidden md:block">
                <Filters />
            </section>
            <main className="p-10">
                <div className="flex flex-wrap  justify-evenly">
                    {currentItems.map((data) =>
                        <Card price={data.price}
                            brand={data.brand}
                            fuel={data.fuel}
                            id={data.id}
                            key={data.id}
                            name={data.name}
                            img={"https://i.ytimg.com/vi/q5PPNZiu52w/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA8A99aXBdJwgmpbqwEk6Z-PaGH7A"}
                        />
                    )}
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
