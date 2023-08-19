import { useContext } from "react";
import { AppContext } from "../context";




function Favourite() {
    const {favourite, select_meal,remove_from_favourites}= useContext(AppContext);
    return (
        <section className="border-b-2 border-black pb-10">
            <div className="bg-black w-full h-full p-5 rounded-md">
                <h5 className="text-lg text-white mb-2">Favourites</h5>
                <div className="flex flex-nowrap overflow-hidden overflow-x-scroll">
                    {favourite.map((item) => {
                        const {idMeal, strMealThumb: image, strMeal: title}= item;

                        return (
                            <div key={idMeal} className="m-3">
                                <img src={image} alt={title} className="w-12 h-12 min-[850px]:w-16 min-[850px]:h-16 rounded-full cursor-pointer
                                    hover:ring-offset-4 hover:ring hover:ring-white-500 hover:opacity-60" 
                                    onClick={() => select_meal(idMeal, true)}/>
                                <button className="text-white text-sm my-2 hover:text-red-500 min-[850px]:mx-1.5"
                                onClick={() => remove_from_favourites(idMeal)}>
                                    Remove
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Favourite;