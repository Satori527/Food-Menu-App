import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { useMealStore } from "../store/useMealStore";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function ProductGrid() {

    const limit = 8;
    const [page, setPage] = useState(1);
    const [paginatedMeals, setPaginatedMeals] = useState([]);

    const { meals, fetchAllMeals,mealModal, loading } = useMealStore();
    

    useEffect(() => {
        
        fetchAllMeals();
    }, [fetchAllMeals]);

    useEffect(() => {
        setPaginatedMeals(meals.slice((page - 1) * limit, page * limit));
    }, [meals, page]);


    return (
        <div className="z-[998] flex flex-col justify-between w-full h-fit bg-white">
        {loading ? <div className="-mt-32 flex flex-row items-center justify-center w-full h-screen"><MoonLoader color="orange" /></div> :<div className="max-w-[1440px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto p-8">
            {/* Map over the paginated meals */}
            { paginatedMeals.map((meal) => <ProductCard key={meal.idMeal} meal={meal}  />)}

            {/* Modal Renders here */}
            { mealModal && <ProductModal />}
        </div>}

            {/* Pagination buttons */}
            <div className="flex flex-row items-center justify-center w-full gap-2 mx-auto pt-4 pb-20">
                {page > 1 && <button className="px-4 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600" onClick={() => setPage(page - 1)}>Prev</button>}
                <p className="font-bold text-lg text-green-700 bg-zinc-200 rounded-full px-4 py-2">{page}</p>
                { paginatedMeals.length === limit && <button className="px-4 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600" onClick={() => setPage(page + 1)}>Next</button>}
            </div>
        </div>
    );
}

export default ProductGrid