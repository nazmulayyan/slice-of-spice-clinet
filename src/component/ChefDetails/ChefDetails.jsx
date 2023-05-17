import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefDetails = () => {
    const { id } = useParams(); // Access the chef ID from the URL
    const [chefData, setChefData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        fetch(`https://slice-of-spice-server-nazmulayyan.vercel.app/chefs/${id}`) // Use the chef ID to fetch data
            .then(res => res.json())
            .then(data => {
                setChefData(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }, [id]);

    const handleFavoriteClick = (recipeName) => {
        if (!favoriteRecipes.includes(recipeName)) {
            setFavoriteRecipes((prevFavorites) => [...prevFavorites, recipeName]);
            toast.success(`${recipeName} is now your favorite recipe!`);
        }
    };


    if (isLoading) {
        return <div className='text-center py-10 text-2xl font-bold'>Loading....</div>; // Show loading state while fetching data
    }

    if (!chefData) {
        return <div>Error occurred while fetching data.</div>; // Show error message if data fetch fails
    }

    // Render the chef details using the fetched data
    return (
        <div className='pb-14'>
            <div className='flex justify-center items-center h-96 mb-5 bg-gray-100'>
                <h4 className='md:text-5xl text-4xl font-bold capitalize'>chef details</h4>
            </div>
            <div className='bg-rose-500 p-8 rounded-lg'>
                <div className='md:grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div className='col-span-1 md:mb-0 mb-6'>
                        <img className='rounded-lg w-full ' src={chefData.picture} alt="" />
                    </div>
                    <div className='col-span-1 bg-white p-5 rounded-lg'>
                        <h3 className='text-2xl font-bold  mt-3'>Name: {chefData.name}</h3>
                        <p className='text-2xl font-semibold  mt-1'>Experience: {chefData.years_of_experience} Years</p>
                        <p className='text-2xl font-semibold  mt-1'>Recipes: {chefData.number_of_recipes}</p>
                        <p className='text-2xl font-semibold pb-5  mt-1'>Likes: {chefData.likes}</p>
                        <p className=' text-lg'><small className='font-semibold text-xl'>Description:</small> {chefData.description}</p>
                    </div>
                </div>

                <div className='md:grid md:grid-cols-3 grid-cols-1 gap-4 mt-10'>
                    {chefData.recipes.map(recipe => (
                        <div className='bg-gray-50 p-5 rounded-lg md:mb-0 mb-6' key={recipe.recipe_name}>
                            <img className='h-96 w-full rounded-lg' src={recipe.recipe_picture} alt="" />
                            <h4 className='text-2xl font-bold mt-5'>{recipe.recipe_name}</h4>
                            <p className='text-lg pt-3'> <small className='text-xl font-semibold'>Ingredients:</small> {recipe.ingredients.join(', ')}</p>
                            <p className='text-lg pt-2'><small className='text-xl font-semibold'>Cooking Method: </small>{recipe.cooking_method}</p>
                            <p className='text-xl font-semibold pt-2'>Rating: {recipe.rating}</p>
                            <button
                                onClick={() => handleFavoriteClick(recipe.recipe_name)}
                                disabled={favoriteRecipes.includes(recipe.recipe_name)}
                                className={`${favoriteRecipes.includes(recipe.recipe_name)
                                    ? 'bg-black text-white opacity-50 cursor-not-allowed'
                                    : 'bg-rose-500 text-white'
                                    } px-6 py-4 text-xl font-bold rounded-lg mt-5`}
                            >
                                {favoriteRecipes.includes(recipe.recipe_name) ? 'Favorited' : 'Favorite'}
                            </button>

                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ChefDetails;
