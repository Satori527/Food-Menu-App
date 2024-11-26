import { FaYoutube } from "react-icons/fa6";
import { MdOutlineEventNote, MdStars } from "react-icons/md";
import { useMealStore } from '../store/useMealStore';
import ModalPlaceholder from "./ModalPlaceholder";

function ProductModal() {

    const { toggleModal, singleMeal, modalLoading } = useMealStore();


    return (
        <>
    {/* Modal with Lodaing Placeholder*/}
    { modalLoading ? <ModalPlaceholder /> :

    <div className="fixed top-0 right-0 flex flex-row items-center justify-center w-screen h-screen z-[999] bg-[rgba(0,0,0,0.4)] p-4">

        <div className="flex flex-col items-center justify-center gap-2 min-h-96 min-w-96 py-8 pr-6 pl-2 md:px-6 bg-white  rounded-3xl text-left max-w-[1000px] relative ">

            <div className="flex flex-row items-center justify-end w-full">

                {/*Modal Close Button */}
                <button className="absolute top-4 right-4 flex flex-row items-center justify-center text-zinc-700 bg-white px-2 rounded-full font-black hover:text-orange-500" onClick={() => {toggleModal(false)}}>X</button>
            </div>
            
            {/* Modal Content */}
            <div className="flex flex-col md:flex-row items-stretch justify-start w-full py-2 pl-4 gap-8 ">
                
                    <img src={singleMeal?.strMealThumb} alt={singleMeal?.strMeal} className="md:max-w-96 object-fill rounded-xl shadow-md max-w-[400px]" />
                
                    <div className="flex flex-col gap-2 w-full pt-4 py-2 px-4 md:px-8 border-t-2 md:border-l-2 md:border-t-0 border-orange-200">

                    <h1 className="font-extrabold w-50 md:w-full text-xl md:text-3xl text-bold  text-left">{singleMeal?.strMeal}</h1>

                    <div className="flex flex-row items-center justify-start gap-1 w-full">
                        <MdStars className="w-5 h-5 text-green-700" />
                        <p className="font-bold text-base text-black">{Math.random().toFixed(1)*5}</p>
                        <p className="font-bold text-base text-zinc-400">{" - "}</p>
                        <p className="font-bold text-base text-black">17&nbsp;mins</p>
                    </div>

                    <p className="font-semibold text-left text-base text-zinc-500"><span className="font-bold text-left text-base text-black">{"Category - "}</span>{singleMeal?.strCategory}</p>
                    <p className="font-semibold text-left text-base text-zinc-500"><span className="font-bold text-left text-base text-black">{"Area - "}</span>{singleMeal?.strArea}</p>
                    <p className="font-semibold text-left text-base text-zinc-500"><span className="font-bold text-left text-base text-black">{"Tags - "}</span>{singleMeal?.strTags}</p>
                    
                    {/* Responsive Instructions which is hidden on smaller screens */}
                    <p className="font-semibold text-left text-base text-zinc-500 w-full md:inline-block hidden"><span className="font-bold text-left text-base text-black">{"Instructions - "}</span>{singleMeal?.strInstructions.substring(0, 400) +"..."  }</p>

                    <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col  justify-start gap-1 w-full py-4">
                        <a href={singleMeal?.strSource} target="_blank" className="flex flex-row items-center gap-2 font-semibold text-left text-base text-zinc-500 w-1/2"><MdOutlineEventNote className="min-w-5 min-h-5 text-black" />{" Source "}</a>
                        <a href={singleMeal?.strYoutube} target="_blank" className="flex flex-row items-center gap-2 font-semibold text-left text-base text-zinc-500 w-1/2"><FaYoutube className="min-w-5 min-h-5 text-red-500" />{" Youtube "}</a>
                    </div>
                    
                </div>

            </div>
            
        </div>
        
    </div>}
    </>
    );
}

export default ProductModal