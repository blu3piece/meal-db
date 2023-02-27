import { useGlobalContext } from "../context";
import Storage from "../js/storage";
import FavoriteItem from "./FavoriteItem";

const FavoritesContainer = ({ children }) => {
    return (
        <section className="favorite-section">
            <div className="favorite-container">
                <h3 className="favorite-title">Favorites</h3>
                <div className="favorite-item-list">{children}</div>
            </div>
        </section>
    );
};

const Favorites = () => {
    const { favList: items, selectMeal, removeFavorite } = useGlobalContext();
    const handleImageClick = (id) => {
        selectMeal(id, true);
    };
    const handleRemove = (id) => {
        removeFavorite("idMeal", id);
    };
    return (
        items && (
            <FavoritesContainer>
                {items.map((item) => {
                    return (
                        <FavoriteItem
                            handleImageClick={handleImageClick}
                            handleRemove={handleRemove}
                            image={item.strMealThumb}
                            key={item.idMeal}
                            id={item.idMeal}
                        />
                    );
                })}
            </FavoritesContainer>
        )
    );
};

export default Favorites;
