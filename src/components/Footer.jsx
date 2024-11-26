import { SiSwiggy } from "react-icons/si";

function Footer() {
    return (
    <div className=" flex flex-col justify-start  w-full h-48 bg-black text-white shadow-zinc-200 shadow-lg px-32 py-12 z-50 gap-2">

        <div className="flex flex-row items-center gap-2">
            <SiSwiggy color="white" className="w-10 h-10" />

            <h1 className="font-extrabold text-2xl text-white ">SWIGGY</h1>
            
        </div>

        <p className="font-thin text-white ">© 2022 Swiggy. All rights reserved.</p>

    </div>
    );
}

export default Footer;