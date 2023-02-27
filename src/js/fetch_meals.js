import axios from "axios";

const randomMealUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
const searchMealUrl = `https://www.themealdb.com/api/json/v1/1/search.php`;

async function fetchMealData (link, searchParam = null) {
    try {
        if (typeof searchParam == "string") {
            link = link + "?s=" + searchParam;
        }
        const {
            data: { meals },
        } = await axios(link);

        if (meals) return meals;
        else return [];

    } catch (error) {
        console.error(error);
        return null;
    }
}

export {fetchMealData, randomMealUrl, searchMealUrl};