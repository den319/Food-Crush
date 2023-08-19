import React, {useEffect, useState} from 'react';

const AppContext= React.createContext();

const search_meal_url= 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const random_meal_url= 'https://www.themealdb.com/api/json/v1/1/random.php';

function get_favourites_from_local() {
    let favourites= localStorage.getItem('favourites');

    if(favourites) {
        favourites= JSON.parse(localStorage.getItem('favourites'));
    } else {
        favourites= [];
    }
    return favourites;
}


function AppProvider({children}) {

    const [meals, setMeals]= useState([]);
    const [loading, setLoading]= useState(false);   
    const [searchedVal, setSearchedVal]= useState('');
    const [showModal, setShowModal]= useState(false);
    const [selectedMeal, setSelectedMeal]= useState(null);
    const [favourite, setFavourite]= useState(get_favourites_from_local());
    const [clicked, setClicked]= useState(false);

    async function fetch_data(url) {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data= await response.json();

            if(data.meals) {
                setMeals(data.meals);
            } else {
                setMeals([]);
            }
            
        } catch(error) {
            alert('Error: Not Found');
        }
        setLoading(false);
    }

    function fetch_rendom_meal() {
        fetch_data(random_meal_url);
    }

    function select_meal(meal_id, favourite_meal) {
        let meal;

        if(favourite_meal) {
            meal= favourite.find(meal => meal.idMeal === meal_id);
        } else {
            meal= meals.find(meal => meal.idMeal === meal_id);
        }
        
        setSelectedMeal(meal);
        setShowModal(true);
    }

    function close_modal() {
        setShowModal(false);
    }

    function add_to_favourites(meal_id) {

        const meal= meals.find(meal => meal.idMeal === meal_id);
        const updatedFavourites= [...favourite, meal];
        setFavourite(updatedFavourites);

        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    }

    function is_present_in_favourites(meal_id) {
        const isPresent= favourite.find(meal => meal.idMeal === meal_id);

        if(isPresent) {
            return true;
        } else {
            return false;
        }
    }

    function remove_from_favourites(meal_id) {
        const updatedFavourites= favourite.filter(meal => meal.idMeal !== meal_id);
        setFavourite(updatedFavourites);

        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    }

    function add_and_remove_from_favourites(meal_id) {
        if(is_present_in_favourites(meal_id)) {
            return remove_from_favourites(meal_id);
        } else {
            return add_to_favourites(meal_id);
        }
    }

    useEffect(() => {
        fetch_data(search_meal_url);
    }, [])

    useEffect(() => {
        if(!searchedVal) {
            return;
        }
        fetch_data(`${search_meal_url}${searchedVal}`);
    }, [searchedVal]);


    function render_meal(idMeal, title, image) {
        return (
            <article key={idMeal} className="bg-gray-100 rounded-lg drop-shadow-lg hover:ring-offset-4 
                        hover:ring hover:ring-gray-500">
                <div className="bg-black overflow-hidden rounded-t-lg">
                    <img src={image} alt={title} 
                    className="w-full h-full cursor-pointer object-cover hover:opacity-60 hover:scale-125 
                        transition-transform duration-500" 
                    onClick={() => select_meal(idMeal)}/>
                </div>
                <footer className="flex flex-wrap justify-between items-center h-[5rem] px-2 py-5">
                    <h5 className="truncate text-lg font-semibold min-[425px]:text-2xl">{title}</h5>
                    <button className="text-blue-500 hover:text-blue-900 text-2xl p-1" 
                        onClick={() => add_and_remove_from_favourites(idMeal)}>
                            {
                                (is_present_in_favourites(idMeal) && <i className="fa-solid fa-heart text-red-500"></i>) ||
                                (<i className="fa-regular fa-heart"></i>)
                            }
                    </button>
                </footer>
            </article>
        )
    }

    function render_meals_list(meals) {
        console.log('clicked');
        
        return (
            <section className="grid grid-cols-1 gap-5 pt-10 pb-[3.5rem] my-4 px-4 border-b-2 border-black sm:grid-cols-2 md:grid-cols-3 
            lg:grid-cols-4 xl:grid-cols-5 max-[426px]:m-0">
            {meals.map((meal) => {
                const {idMeal, strMeal: title, strMealThumb: image}= meal;
                return (
                    render_meal(idMeal,title,image)
                )    
            })}
        </section>
        )
    }

    return (
        <AppContext.Provider value={{loading, meals, render_meals_list, setSearchedVal, fetch_rendom_meal, showModal, 
                    selectedMeal, select_meal, close_modal, favourite, add_to_favourites, remove_from_favourites, clicked, setClicked}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}; 

