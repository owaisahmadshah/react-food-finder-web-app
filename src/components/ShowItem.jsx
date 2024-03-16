import React, { useState } from "react";
import DisplayItemDetails from "./DisplayItemDetails";

const ShowItemDetails = ({ _meal, _item }) => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [measureData, setMeasureData] = useState([]);
  const [showIng, setShowIng] = useState(false);
  const [showMeasure, setShowMeasure] = useState(false);

  const ShowIngredients = (ing) => {
    let ingredients = [];
    let measures = [];
    for (let i = 9; i < 29; i++) {
      if (ing[i] != null && ing[i] != "") ingredients.push(ing[i]);
      if (ing[i + 20] != null && ing[i + 20] != "") measures.push(ing[i + 20]);
    }
    setIngredientsData(ingredients);
    setMeasureData(measures);
  };

  useState(() => {
    ShowIngredients(Object.values(_item));
  }, [_item]);

  const handleIng = () => {
    setShowIng(!showIng);
  };
  const handleMeasure = () => {
    setShowMeasure(!showMeasure);
  };

  return (
    <div className="flex flex-col w-4/5 mx-auto my-7 items-baseline">
      <img
        src={_meal[0].strMealThumb}
        alt={_meal[0].strMeal}
        className="rounded max-sm:w-11/12 w-2/5"
      />
      <DisplayItemDetails header="Dish Name" explainer={_meal[0].strMeal} />

      {_meal[0].strCategory && (
        <DisplayItemDetails
          header="Category"
          explainer={_meal[0].strCategory}
        />
      )}

      {_meal[0].strTags && (
        <DisplayItemDetails header="Tags" explainer={_meal[0].strTags} />
      )}

      {_meal[0].strInstructions && (
        <DisplayItemDetails
          header="Instructions"
          explainer={_meal[0].strInstructions}
        />
      )}

      {/* {_meal[0].strArea && <div>Area {_meal[0].strArea}</div>} */}
      <div className="flex text-lg font-bold">
        Ingredients{" "}
        <p
          onClick={() => handleIng()}
          className="cursor-pointer text-2xl mx-2 "
        >
          {showIng ? "-" : "+"}
        </p>
      </div>
      {showIng && ingredientsData.map((ing) => <span>{ing} </span>)}
      <div className="flex text-lg font-bold">
        Meausures{" "}
        <p
          onClick={() => handleMeasure()}
          className="cursor-pointer text-2xl mx-2 "
        >
          {showMeasure ? "-" : "+"}
        </p>
      </div>
      {showMeasure && measureData.map((ms) => <p >{ms}</p>)}

      {_meal[0].strYoutube && (
        <div>
          <p className="text-lg font-bold">Youtube Link</p>{" "}
          <a tabIndex={"_black"} href={_meal[0].strYoutube}>{_meal[0].strMeal}</a>
        </div>
      )}
    </div>
  );
};

export default ShowItemDetails;
