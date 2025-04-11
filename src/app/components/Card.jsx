export default function Card({ img, name, price, id, brand, fuel, cart = false, onAddToWishlist }) {
    img = img || "https://i.ytimg.com/vi/q5PPNZiu52w/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA8A99aXBdJwgmpbqwEk6Z-PaGH7A"; // Temporary image

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 my-10">
            <img className="w-full" src={img} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    <span className="pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            $ {price}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {brand}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {fuel}
                        </span>
                    </span>
                </p>
                {cart && (
                    <button
                        onClick={onAddToWishlist}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    >
                        Add to wishlist
                    </button>
                )}
            </div>
        </div>
    );
}
