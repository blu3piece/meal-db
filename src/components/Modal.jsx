import { useGlobalContext } from "../context";

const Modal = () => {
    const { selectedMeal, setShowModal } = useGlobalContext();

    

    const handleCloseButton = () => {
        setShowModal(false);
    };

    return (
        selectedMeal && (
            <aside className="modal-overlay">
                <div className="modal-container">
                    <img
                        src={selectedMeal.strMealThumb}
                        className="modal-img"
                    />
                    <div className="modal-article">
                        <h4 className="modal-mealname">
                            {selectedMeal.strMeal}
                        </h4>
                        <p className="modal-instruction">
                            {selectedMeal.strInstructions}
                        </p>
                        <button
                            className="btn close-btn"
                            onClick={handleCloseButton}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </aside>
        )
    );
};

export default Modal;
