import { useGlobalContext } from '../context'


const Meals = () => {
  const appContext = useGlobalContext();
  return <h1>Meals / {appContext}</h1>
}

export default Meals;