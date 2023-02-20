import React, { useContext , useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const randomMealUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
const searchMealUrl = `https://www.themealdb.com/api/json/v1/1/search.php`;

const AppProvider = ({children}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchByUrl = async (link, searchParam = null) => {
    setLoading(true);
    try {
      if(typeof(searchParam) == "string") link = link + "?s=" + searchParam;
      
      const { data : { meals } } = await axios(link);
      if(meals) {
        setMeals(meals);
      }
      else {
        setMeals([]);
      }
  
    } catch (error) {
      console.error(error);
      return null;
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchByUrl(searchMealUrl, searchTerm);
  }, [searchTerm]);

  const fetchRandomMeal = () => fetchByUrl(randomMealUrl);

  return <AppContext.Provider value={{loading, meals, setSearchTerm, fetchRandomMeal}}>
    {children}
  </AppContext.Provider>;

}

export const useGlobalContext = () => {
  return useContext(AppContext);  
}

export { AppContext, AppProvider }