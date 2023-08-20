import { useContext, useState } from "react";
import { AppContext } from "../context";




function Search() {

    const [text, setText]= useState('');

    const {searchedVal, setSearchedVal, fetch_rendom_meal, setMeals, render_meals_list, meals}= useContext(AppContext);

    const handle_change= (event) => {
        setText(event.target.value);
    }

    const handle_submit= (event) => {
        event.preventDefault();
        if(text) {
            setSearchedVal(text);
        }
    }

    function handle_random_meal() {
        setSearchedVal('');
        setText('');
        fetch_rendom_meal();
    }

    function go_to_home() {
        console.log(searchedVal);
        setSearchedVal('a');
    }

    return (
        <div className="flex justify-center my-10 flex border-b-2">
            <form onSubmit={handle_submit} className="flex flex-col justify-center">
                <div className="flex flex-wrap justify-center mx-4">
                    <input type="text" placeholder="Enter a name of dish..." value={text}
                        className="w-full h-[2rem] px-3 rounded-md placeholder:pb-0.5"
                        onChange={handle_change}/>

                    <button type="submit" className="w-[5rem] h-[2rem] mt-2 rounded-lg hover:text-white active:bg-black">Search</button>
                </div>
                
                <div className="flex flex-wrap justify-evenly p-2 pb-8">
                    <button type="btn" className="bg-black text-white w-[6.5rem] h-[2rem] mt-[1rem] rounded-lg hover:bg-white hover:text-black"
                        onClick={handle_random_meal} >Random Dish
                    </button>
                    
                    <button className="bg-black text-white w-[6.5rem] h-[2rem] mt-[1rem] rounded-lg hover:bg-white hover:text-black"
                        onClick={go_to_home}>Home
                    </button>
                </div>
                
            </form>
        </div>
        
    )
}

export default Search;