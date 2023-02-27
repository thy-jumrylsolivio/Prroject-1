import Counter from "./Meals/Counter";
import MealsList from "./Meals/MealsList";
import MealsProvider from "./Meals/MealsProvider";

function App() {
   
    return (
        <div>
            <MealsProvider>
                <MealsList/>
                <Counter/>
            </MealsProvider>
        </div>
    )
}

export default App;