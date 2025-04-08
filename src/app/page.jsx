import Filters from "./components/Filters.jsx";

export default function Home() {
    return (
        <div className="flex w-full h-full">
            <section className="h-screen">
                <Filters />
            </section>
            <h1>home</h1>
        </div>
    );
}
