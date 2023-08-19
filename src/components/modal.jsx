import { useContext } from "react";
import { AppContext } from "../context";




function Modal() {
    const {selectedMeal, close_modal}= useContext(AppContext);

    const {strMealThumb: image, strMeal:title, strInstructions: text, strSource: source}= selectedMeal;

    return (
        <aside className="fixed bg-trasparent w-full h-full z-[100] top-0 left-0 grid place-items-center">
            <div className="relative w-[85vw] max-w-[800px] h-[80vh]">
                <div className="w-full h-full bg-black rounded-lg">
                    <img src={image} alt={title} className="w-full h-full object-cover opacity-50 rounded-lg"/>
                </div>
                <div className="absolute top-0 left-0  w-full h-full flex flex-col items-center text-center p-3
                    overflow-y-scroll scroll-smooth min-[426px]:p-10">
                    <h1 className="text-white text-xl font-semibold my-5 min-[426px]:text-4xl">{title}</h1>
                    <p className="text-slate-300 text-lg mb-5 min-[426px]:text-xl">Cooking Instructions</p>
                    <p className="text-white text-sm mb-5 min-[426px]:text-lg">{text}</p>

                    <a className="w-[7.5rem] text-center text-black bg-white m-5 pb-1 rounded-lg hover:text-white hover:bg-black
                    hover:underline" href={source} target="_blank">Original Source</a>
                    <button className="w-[4rem] text-center text-black bg-white m-1 pb-1 rounded-lg hover:text-white hover:bg-red-600
                    " onClick={close_modal}>Close</button>                   
                </div>
            </div>
        </aside>
    )
}

export default Modal;