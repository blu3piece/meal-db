import React, { useContext , useEffect } from 'react';

import axios from 'axios';

const AppContext = React.createContext();

const randomMealUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;

const fetchByUrl = async (link) => {
  try {

    const {data:{meals}} = await axios(link);
    console.log(meals);

    return meals;

  } catch (error) {
    console.log(error);
    return null;

  }
}

const AppProvider = ({children}) => {

  const searchMealByUrl = async (searchParam) => {
    const result = await fetchAndReturnByURL(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`);
    console.log(result);
  }

  useEffect( () => {
    fetchByUrl(randomMealUrl);
  }, []);


  return <AppContext.Provider value="test">{children}</AppContext.Provider>;

}

export const useGlobalContext = () => {
  return useContext(AppContext);  
}

export { AppContext, AppProvider }