import React, { useContext , useEffect } from 'react';

const AppContext = React.createContext();

const fetchAndReturnByURL = async (link) => {
  try {
    const response = await fetch(link);
    if(response.type == "error") return null;
    const data = await response.json();
    return data;
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

  const fetchRandomMeal = async () => {
    const result = await fetchAndReturnByURL(`https://www.themealdb.com/api/json/v1/1/random.php`);
    console.log(result);
  }
  
  useEffect( () => {
    fetchRandomMeal();
  }, []);


  return <AppContext.Provider value="test">{children}</AppContext.Provider>;

}

export const useGlobalContext = () => {
  return useContext(AppContext);  
}

export { AppContext, AppProvider }