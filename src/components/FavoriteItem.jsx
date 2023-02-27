import { useGlobalContext } from "../context";

const FavoriteItem = ({image, handleRemove, handleImageClick, id}) => {

    return (
        <div className="favorite-item">
            <img className="favorite-thumbnail" src={image} onClick={() => handleImageClick(id)}/>
            <div className="favorite-remove" onClick={() => handleRemove(id)}>
                remove
            </div>
        </div>
    );
};

export default FavoriteItem;