import React, { useEffect, useState } from 'react';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data.chefs))
    }, [])

    return (
        <div className='mb-20'>
            <h2 className='text-center text-4xl font-bold uppercase mt-20 mb-14'>meet our chefs</h2>

            <div className='grid md:grid-cols-3 grid-cols-1  gap-4'>
                {chefs.map(chef => (
                    <div className='p-4 rounded-lg bg-rose-500'  key={chef.id}>
                        <img className='w-full h-96 rounded-lg' src={chef.picture} alt="" />
                        <h3 className='text-lg font-bold text-white mt-3'>Name: {chef.name}</h3>
                        <p className='text-sm font-semibold text-white mt-1'>Experience: {chef.years_of_experience} Years</p>
                        <p className='text-sm font-semibold text-white mt-1'>Recipes: {chef.number_of_recipes}</p>
                        <p className='text-sm font-semibold text-white mt-1'>likes: {chef.likes}</p>
                        <button className="btn btn-outline w-full mt-3">View Recipes</button>
                    </div>

                ))}
            </div>

        </div>
    );
};

export default Chefs;