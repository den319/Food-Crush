import { useContext } from "react";
import { AppContext } from "../context";



const Meals= () => {

    const {loading, meals, render_meals_list}= useContext(AppContext);

    if(loading) {
        return (
            <section className="flex justify-center text-xl font-bold">
                <h2>Loading...</h2>
            </section>
        )
    }

    if(meals.length < 1) {
        return(
            <section className="flex justify-center text-xl font-bold">
                <h2>Unable to find dish that you want. Please try again.</h2>
            </section>
        )
    }
    return (
        render_meals_list(meals)
    )
}

export default Meals;