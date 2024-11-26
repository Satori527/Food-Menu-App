import { useEffect, useState } from "react";
import { SiSwiggy } from "react-icons/si";


function Header() {

    //SearchBar States
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    //SearchBar API Call
    const fetchMealsByName = async () => {
        console.log(debouncedQuery);
    }

    //Debounce function
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(query), 500);
        return () => clearTimeout(timer);
    }, [query])

    useEffect(() => {
        
        fetchMealsByName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedQuery])

    return( 
    <div className="flex flex-row items-center justify-between fixed w-full h-20 bg-white shadow-zinc-100 shadow-xl px-12 py-2 z-50">
        <div className="flex flex-row items-center gap-2">
            <SiSwiggy color="#FF7E00" className="w-10 h-10" />
            <h1 className="font-extrabold text-2xl text-orange-500 sm:inline-block hidden">SWIGGY</h1>
        </div>
        
        {/* SearchBar */}
        <input type="text" placeholder="Search for Restaurants and Food" className="max-w-96 flex-grow h-full px-4 text-black font-medium text-lg bg-gray-100 border border-white rounded-xl  hover:bg-zinc-200 btn " onChange={(e) => setQuery(e.target.value)}></input>
    </div>
    );
}

export default Header;