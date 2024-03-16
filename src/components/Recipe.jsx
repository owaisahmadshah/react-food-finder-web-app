import React from "react";
import { useEffect, useState } from "react";
import ShowItemDetails from "./ShowItem";
import ShowItems from "./ShowItems";

const Recipe = ({ _method, _value }) => {
  const [meal, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getResults = async (method, value) => {
    setIsLoading(true);
    let search_type = method === "s" ? "search" : "filter";
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/${search_type}.php?${method}=${value}`
    );
    const data = await response.json();
    if (data != null) {
      setMeal(data.meals);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getResults(_method, _value);
  }, [_method, _value]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  
  console.log("Meal is -> ", meal);
  if (meal === null || meal === undefined) {
    return <div>Not found</div>;
  }

  return (
    <div className="">
      {meal.length > 1 && <ShowItems _meal={meal} />}
      {meal.length === 1 && (
        <ShowItemDetails _meal={meal} _item={Object.values(meal[0])} />
      )}
    </div>
  );
};
export default Recipe;