import { useForm } from "react-hook-form";
import Recipe from "./components/Recipe";
import { useState } from "react";

export default function App() {
  const [searhIt, setSearhIt] = useState(false);
  const [method, setMethod] = useState(null);
  const [userInput, setUserInput] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSearhIt(true);
    setMethod(data.searchMethod);
    setUserInput(data.userInput.replaceAll(" ", "_"));
  };

  return (
    <>
      <div className="flex justify-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-center gap-4 max-sm:gap-10 ">
            <label htmlFor="searchFor">Select Name/Ingredients:</label>
            <select {...register("searchMethod")}>
              <option value="s">Name</option>
              <option value="i">Ingredients</option>
              <option value="a">Area</option>
            </select>
          </div>
          <div className="flex justify-center gap-4 max-sm:flex-col max-sm:gap-1 max-sm:my-2">
            <label htmlFor="userInput">Enter Name/Ingredient:</label>
            <input
              className="border border-black rounded max-sm:my-2"
              {...register("userInput", { required: true })}
              placeholder="Search here..."
            />
            {errors.userInput && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <input
            type="submit"
            value="Show Results"
            className="bg-slate-500 max-sm:my-0 text-white cursor-pointer rounded py-1 px-2"
          />
        </form>
      </div>
      {searhIt && <Recipe _method={method} _value={userInput} />}
    </>
  );
}
