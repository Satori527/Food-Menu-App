// import { FaYoutube } from "react-icons/fa6";
// import { MdOutlineEventNote, MdStars } from "react-icons/md";

function ModalPlaceholder() {
    return (
        <div className="fixed top-0 right-0 flex flex-row items-center justify-center w-screen h-screen z-[999] bg-[rgba(0,0,0,0.4)] p-2">

        <div className="flex flex-col items-center justify-center gap-2 min-h-96 min-w-96 py-8 pr-6 pl-2 md:px-6 bg-white  rounded-3xl text-left max-w-[1000px] relative animate-ping-custom animate-ping-custom-sm">

            <div className="flex flex-row items-center justify-end w-full">

                {/*Modal Close Button */}
                <button className="absolute top-4 right-4 flex flex-row items-center justify-center text-zinc-700 bg-white px-2 rounded-full font-black hover:text-orange-500">X</button>
            </div>

                <div className="flex flex-col md:flex-row items-stretch justify-start w-full py-2 pl-4 gap-4 animate-pulse ">
                        
                        {/* Modal Image with placeholder */}
                        
                            <div className="w-full bg-zinc-300 animate-pulse rounded-xl shadow-md md:w-96 text-center items-center h-72"></div>
                        
                            

                            <div className="flex flex-col gap-2 w-full py-2 px-8 border-t-2 md:border-l-2 md:border-t-0 border-orange-300">

                            <h1 className="font-extrabold w-full text-3xl text-bold  text-left animate-pulse bg-zinc-300 rounded-md h-20"></h1>

                            <div className="flex flex-row items-center justify-start gap-1 w-full animate-pulse bg-zinc-300 rounded-md h-full">
                                
                                <p className="font-bold text-base text-black"></p>
                                <p className="font-bold text-base text-zinc-400"></p>
                                <p className="font-bold text-base text-black"></p>
                            </div>

                            <p className="font-semibold text-left text-base text-zinc-500 w-full animate-pulse bg-zinc-300 rounded-md h-10"><span className="font-bold text-left text-base text-black"></span></p>
                            <p className="font-semibold text-left text-base text-zinc-500 w-full animate-pulse bg-zinc-300 rounded-md h-10"><span className="font-bold text-left text-base text-black"></span></p>
                            <p className="font-semibold text-left text-base text-zinc-500 bg-zinc-300 rounded-md h-10"><span className="font-bold text-left text-base text-black w-full animate-pulse"></span></p>
                            
                            {/* Responsive Instructions which is hidden on smaller screens */}
                            <p className="font-semibold text-left text-base text-zinc-500 w-full md:inline-block hidden animate-pulse bg-zinc-300 rounded-md"><span className="font-bold text-left text-base text-black w-full h-full"></span></p>

                            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col  justify-start gap-1 w-full py-4 animate-pulse bg-zinc-300 rounded-md h-full">
                                
                            </div>
                            
                        </div>

                </div>

        </div>

        </div>

    );
}

export default ModalPlaceholder