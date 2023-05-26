'use client';
// this is the initial code
// I WILL FIND A BETTER WAY TO FILTER RESTAURANTS USING SERVER SIDE RENDERING 

import { useState, useEffect, useCallback} from "react";
import { SafeRestaurantProps } from "../types";
import Grid from "../components/containers/Grid";
import RestaurantCard from "../components/resturants/RestaurantCard";

interface IRestaurantFilter {
    restaurants: SafeRestaurantProps[];
}

const RestaurantFilter = ({restaurants}: IRestaurantFilter) => {
    const [search, setSearch] = useState('');
    const [filterRestaurants, setFilterRestaurants] = useState<SafeRestaurantProps[]>([]);
    const [maxPrice, setMaxPrice] = useState("$$$$");
    const [minPrice, setMinPrice] = useState("$");
    const [minRating, setMinRating] = useState(0);

    

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredRestaurants = useCallback((minPrice: string, maxPrice: string, minRating: number) => {
        const filtered = restaurants.filter((restaurant) => {
            const {priceRange, rating, name} = restaurant;
                if(!name.toLowerCase().includes(search.toLowerCase())) return false; // skip the restaurants that don't match the search name

                if(priceRange < minPrice || priceRange > maxPrice) return false; // skip the restaurants that don't match the price range

                if(rating < minRating) return false; // skip the restaurants that don't match the rating
               
                return true;
            });
            setFilterRestaurants(filtered);
    }, [ restaurants, search]);

    useEffect(() => {
        const debounce = setTimeout(() => {
            filteredRestaurants(minPrice, maxPrice, minRating);
        }, 500);

        return () => clearTimeout(debounce);
    }, [filteredRestaurants, minPrice, maxPrice, minRating]);



  return (
    <>
    <section
    className="p-6 bg-secondary/50 rounded-md"
    >
        <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
            e.preventDefault();
            filteredRestaurants(minPrice, maxPrice, minRating);
        }}
        >
            <fieldset
            className="flex items-center justify-between"
            >
            <div
            className="flex flex-col space-y-2"
            >
                <label htmlFor="minPrice">
                    Min Price:
                </label>
                <select
                className="border border-gray-900 rounded-md px-2 py-1 text-gray-900" 
                value={minPrice}
                name="minPrice" 
                id="minPrice" 
                onChange={(e)=> setMinPrice(e.target.value)}
                >
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                </select>
            </div>
            <div
            className="flex flex-col space-y-2"
            >
                <label htmlFor="maxPrice">
                    Max Price:
                </label>
                <select 
                value={maxPrice} 
                name="maxPrice" 
                id="maxPrice" 
                onChange={(e)=> setMaxPrice(e.target.value)}
                className="border border-gray-900 rounded-md px-2 py-1 text-gray-900"
                >
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                </select>
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="minRating">
                    Min Rating:
                </label>
                <select 
                value={minRating} 
                name="minRating" 
                id="minRating" 
                onChange={(e)=> setMinRating(parseInt(e.target.value))}
                className="border border-gray-900 rounded-md px-2 py-1 text-gray-900"
                >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            </fieldset>
            <label htmlFor="search">
                Search:
            </label>
            <input 
            type="text" 
            name="search" 
            id="search" 
            value={search} 
            onChange={handleSearch} 
            placeholder="Search for a restaurant by name..."
            className="border border-gray-900 rounded-md p-2 text-gray-900"
            />
        </form>
    </section>
    <section
    className="my-4"
    >
        <Grid
         className="py-10"
        >
            {filterRestaurants.map((restaurant) => (
                <RestaurantCard 
                key={restaurant.id} 
                restaurant={restaurant}
                />
            ))}
        </Grid>
    </section>
    </>
  )
}

export default RestaurantFilter;