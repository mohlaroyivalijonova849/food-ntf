import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipies }) {
  console.log(recipies);
  return (
    <>
      <ul className="flex flex-wrap items-center justify-center gap-8">
        {recipies.map((recipe) => {
          return (
            <li className="flex w-[376px] gap-8" key={recipe.id}>
              <img
                src={recipe.img}
                alt=""
                className="w-[120px] h-[120px] rounded-lg"
              />
              <div>
                <h3 className="font-extralight text-2xl pb-4 text-white">
                  {recipe.title}
                </h3>
                <p className="text-white mb-3 font-medium">
                  Lorem ipsum dolor sit amet.
                </p>
                <Link to={`/menu/${recipe.id}`}>
                  <button className="rounded-full ...  bg-amber-300 pt-2 pb-2 text-slate-50 px-2">
                    Read more
                  </button>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
}

export default RecipeList;
