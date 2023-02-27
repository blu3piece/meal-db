import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
    const { meals, loading, selectMeal, addFavorite } = useGlobalContext();

    const handleImgClick = (singleMeal) => {
        selectMeal(singleMeal);
    };

    const handleThumbsUpClick = (id) => {
        addFavorite(id);
    }

    if (loading) {
        return (
            <section className="section">
                <h4>Loading...</h4>
            </section>
        );
    }

    if (meals.length < 1) {
        return (
            <section className="section">
                <h4>No Meals matched your search term. Please try again.</h4>
            </section>
        );
    }
    return (
        <section className="section-center">
            {meals.map((singleMeal) => {
                const {
                    idMeal,
                    strMeal: title,
                    strMealThumb: image,
                } = singleMeal;
                return (
                    <article key={idMeal} className="single-meal">
                        <img
                            src={image}
                            className="img"
                            alt={title}
                            onClick={() => handleImgClick(singleMeal.idMeal)}
                        />
                        <footer>
                            <h5>{title}</h5>
                            <button className="like-btn" onClick={() => handleThumbsUpClick(singleMeal.idMeal)}>
                                <BsHandThumbsUp />
                            </button>
                        </footer>
                    </article>
                );
            })}
        </section>
    );
};

export default Meals;
