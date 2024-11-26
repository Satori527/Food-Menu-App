import { useEffect, useRef, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useMealStore } from "../store/useMealStore";


function FilterSection() {

    //Filter and Sort Dropdown Values
    const Filters = ["Fast Delivery","New on Swiggy" ,"Rating 4.0+", "Pure Veg", "Offers", "Rs. 300-Rs. 600", "Less than Rs. 300"]
    const areas = ["Indian", "American", "Chinese","Greek","Italian" ]
    const sorting = ["Asc","Desc"]

    //States for Active Filters and Sort Values
    const [area, setArea] = useState("Indian");
    const [sortingParam, setSortingParam] = useState("Asc");

    //States for Filter and Sort Dropdown
    const [filterDropdown, setFilterDropdown] = useState(false);
    const [sortDropdown, setSortDropdown] = useState(false);

    //Zustand Store Functions and states
    const {fetchMealsByArea,sortMealsAsc,sortMealsDesc,filter,order} = useMealStore();

    let filterMenuRef = useRef();
    let sortMenuRef = useRef();

    const toggleFilterDropdown = () => {
        setFilterDropdown(!filterDropdown);
        setSortDropdown(false);
    }
    const toggleSortDropdown = () => {
        setSortDropdown(!sortDropdown);
        setFilterDropdown(false);
    }

    //Filter and Sort handlers Functions that call Zustand functions
    const handleFilter = () => {
        setFilterDropdown(false);
        fetchMealsByArea(area);
    }

    const handleSort = () => {
        setSortDropdown(false);
        if(sortingParam == "Asc"){
            sortMealsAsc()
        }else{
            sortMealsDesc()
        }
    }
    
    //Close Dropdown on click outside
    useEffect(()=>{
        const handler = (e) => {
        if(!filterMenuRef.current.contains(e.target)){
            setFilterDropdown(false);
            setSortDropdown(false);
            console.log(filterMenuRef.current);
        }
        }
        document.addEventListener('mousedown',handler)

        return()=>{
        document.removeEventListener("mousedown",handler)
        }
    })
    //Sort and Filter Dropdown Close
    useEffect(() => {
        

        //Resetting Filter and Sort Values if not Applied
        if(!filterDropdown){
            setArea(filter);
        }
        if(!sortDropdown){
            setSortingParam(order);
        }
        
    },[filterDropdown,sortDropdown,filter,order])

    return (
    <div className="flex flex-col justify-between w-full h-fit bg-white  px-16 pb-2 pt-8 gap-2">

        {/* Title */}
        <h1 className="font-extrabold text-2xl text-black  text-left">Restaurants with online food delivery in Pune</h1>

        {/* Filter and Sort Section */}
        <div ref={filterMenuRef} className="xl:flex xl:flex-row lg:grid lg:grid-rows-2 lg:grid-flow-col md:grid md:grid-rows-2 md:grid-flow-col items-center gap-2 sm:grid sm:grid-rows-3 sm:grid-flow-col flex flex-row relative overflow-x-scroll overflow-y-visible sm:overflow-visible pb-60 -mb-60 scrollContainer pointer-events-none">
            
            <div className="flex flex-col items-center gap-2 relative cursor-pointer pointer-events-auto">

                {/* Filter Dropdown Button */}
                <button className="flex flex-row items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-full text-left hover:bg-zinc-200 relative shadow-zinc-100 shadow-md" onClick={() => toggleFilterDropdown()}>
                    <CiFilter className="w-5 h-5 text-black"  />Filter
                </button>

                {/* Filter Dropdown */}
                {filterDropdown && <div  className="absolute z-40 top-12 left-0  flex flex-col items-center gap-2 px-8 py-4 bg-white border border-zinc-300 rounded-xl text-left h-fit w-fit">
                    {areas.map((filter, index) => <div key={index} className="flex flex-row w-full gap-2 justify-between bg-white  text-left">
                        <label htmlFor={index} >{filter}</label>
                        <input type="radio" name="filter" checked={filter === area} value={filter} id={index} onChange={(e) => setArea(e.target.value)} className="  accent-orange-600" />
                    </div>)}
                    <hr className="w-full" />
                    <button className="flex flex-row items-center justify-center  bg-white text-orange-600 font-bold text-center w-full cursor-pointer " onClick={handleFilter}>Apply</button>
                </div>}

            </div>

            <div className="flex flex-col items-center gap-2 relative cursor-pointer pointer-events-auto">

                {/* Sort By Dropdown Button */}
                <button className="flex flex-row items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-full text-left hover:bg-zinc-200 shadow-zinc-100 shadow-md whitespace-nowrap" onClick={() => toggleSortDropdown()}>
                    
                    Sort By
                    <IoIosArrowDown className="text-black" />
                </button>

                {/* Sort Dropdown */}
                {sortDropdown && <div ref={sortMenuRef} className="absolute z-40 top-12 flex flex-col items-center gap-2 px-8 py-4 bg-white border border-zinc-300 rounded-xl text-left h-fit w-fit">
                    
                    
                        {sorting.map((filter, index) => <div key={index} className="flex flex-row w-full gap-2 justify-between bg-white  text-left">
                        <label htmlFor={index} >{filter}</label>
                        <input type="radio" name="filter" checked={filter === sortingParam} value={filter} id={index} onChange={(e) => setSortingParam(e.target.value)} className="  accent-orange-600" />
                    </div>)}
                        
                    
                    <hr className="w-full" />
                    <button className="flex flex-row items-center justify-center  bg-white text-orange-600 font-bold text-center w-full cursor-pointer " onClick={handleSort}>Apply</button>
                </div>}

            </div>

            {/* Filters Visual Only */}
            {Filters.map((filter, index) => <button key={index} className="flex flex-row w-max items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-full text-left hover:bg-zinc-200 shadow-zinc-100 shadow-md whitespace-nowrap cursor-pointer pointer-events-auto">
                {filter}
            </button>)}
            

        </div>
    </div>
    );
}

export default FilterSection