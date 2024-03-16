import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const ShowItems = (Meals) => {
  const [meals, setMeals] = useState(Meals._meal)
  const [searchItem, setSearchItem] = useState("")
  const [searchIt, setSearchIt] = useState(false)
  

  if (meals === null || meals === undefined) {
    return (
      <div>Not found</div>
    )
  }

  useEffect(() => {
    setMeals(Meals._meal)
  }, [Meals])

  const handleClick = (itemName) => {
    setSearchItem(itemName);
    setSearchIt(true)
  }

  if (searchIt) {
    return <Recipe _method="s" _value={searchItem} />
  }

  return (
    <div className="my-2.5 mx-auto flex items-center justify-center">
      <ul className="grid grid-cols-2 sm:grid-cols-4 sm:gap-3">
        {Object.keys(meals).length &&
        meals.map((item) => (
          <li key={item.idMeal} >
            <img
              onClick={() => handleClick(item.strMeal)}
              src={item.strMealThumb}
              alt={item.strMeal}
              className="w-11/12 cursor-pointer"
            />
            <div>
              {item.strMeal}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowItems;