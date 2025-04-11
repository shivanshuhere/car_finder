"use client";
import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";

export default function Wishlist() {
    const [mywishlist, setMywishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = localStorage.getItem("mywishlist");
        if (storedWishlist) {
            setMywishlist(JSON.parse(storedWishlist));
        }
    }, []);

    return (
        <div className="flex flex-col items-center p-10 gap-4">
            <h1 className="text-3xl font-semibold">My Wishlist</h1>
            <div className="flex flex-wrap justify-evenly">
                {mywishlist.length === 0 ? (
                    <p className="text-xl font-light">Wishlist is empty!</p>
                ) : (
                    mywishlist.map((data) => (
                        <Card
                            price={data.price}
                            brand={data.brand}
                            fuel={data.fuel}
                            id={data.id}
                            key={data.id}
                            name={data.name}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
