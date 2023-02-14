import { useGlobalContext } from '../context';

const Meals = () => {
  const {meals} = useGlobalContext();

  return <section className='section-center'>
    {meals.map((singleMeal) => {
      const {idMeal, strMeal: title, strMealThumb: image } = singleMeal;

      return <article key={idMeal} className="single-meal">
        <img src={image} className="img" alt={title} />
        <footer>
          <h5>{title}</h5>
          <button className='like-btn'>click me!</button>
        </footer>
      </article>

    })}
  </section>
}

export default Meals;