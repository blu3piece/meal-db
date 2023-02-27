import React, { useContext, useEffect, useState } from "react";
import { fetchMealData, searchMealUrl, randomMealUrl } from "./js/fetch_meals";
import Storage from "./js/storage";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");

    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const [showModal, setShowModal] = useState(false);
    
    const [favList, setFavList] = useState(Storage.getStorage());

    const fetchData = async (link, searchParam = null) => {
        setLoading(true);
        setMeals(await fetchMealData(link, searchParam));
        setLoading(false);
    };

    const selectMeal = (idMeal, isFavorite = false) => {
        let meal;

        if(!isFavorite) meal = meals.find((value) => value.idMeal == idMeal);
        else meal = favList.find((value) => value.idMeal == idMeal);
        setSelectedMeal(meal);
        setShowModal(true);
    };

    const addFavorite = (idMeal) => {
        let item = meals.find((value) => value.idMeal == idMeal);
        let isDuplicate = false;
        favList && favList.forEach((value) => {
            if(value.idMeal == idMeal) isDuplicate = true;
        });
        if(!isDuplicate) setFavList(Storage.addElement(item));
    }

    const removeFavorite = (key = "idMeal", id) => {
        setFavList(Storage.removeElement(key, id));
    }

    const fetchRandomMeal = () => fetchData(randomMealUrl);


    useEffect(() => {
        fetchData(searchMealUrl, searchTerm);
    }, []);

    useEffect(() => {
        if (searchTerm) fetchData(searchMealUrl, searchTerm);
    }, [searchTerm]);

    const contextProps = {
        loading,
        meals,
        setSearchTerm,
        fetchRandomMeal,
        selectedMeal,
        showModal,
        selectMeal,
        setShowModal,
        favList,
        addFavorite,
        removeFavorite,
    };

    return <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
