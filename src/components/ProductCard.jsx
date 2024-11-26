/* eslint-disable react/prop-types */
import { MdStars } from "react-icons/md";
import { useMealStore } from "../store/useMealStore";

function ProductCard({meal}) {

    const { mealModal,toggleModal, fetchSingleMeal } = useMealStore();

    //Modal Toggler and fetcher
    const handleModal = () => {
        fetchSingleMeal(meal.idMeal);
        toggleModal(true);
        console.log(mealModal);
    }

    return (
    <div className="flex flex-col items-center gap-2 p-2 bg-white  rounded-xl text-left h-fit hover:scale-95 transition-all cursor-pointer" onClick={() => {handleModal()}}>

        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-60 object-fill rounded-xl shadow-md " />

        <div className="flex flex-col items-center justify-start w-full py-2 px-4">

            <h1 className="font-extrabold w-full text-xl text-bold  text-left">{meal.strMeal}</h1>

            <div className="flex flex-row items-center justify-start gap-1 w-full">
                <MdStars className="w-5 h-5 text-green-700" />

                <p className="font-bold text-base text-black">{Math.random().toFixed(1)*5}</p>
                <p className="font-bold text-base text-zinc-400">{" - "}</p>
                <p className="font-bold text-base text-black">17&nbsp;mins</p>

            </div>

            <p className="font-semibold text-base text-zinc-500">{"Indian, Punjabi, Combo, Thali, Tandoor"}</p>

        </div>
        
    </div>)
    ;
}

export default ProductCard