import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function ProductDetail() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);

  const [userRating, setUserRating] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container mx-auto text-center  flex flex-col items-center justify-center pt-9">
      {error && <h3>{error}</h3>}
      {loading ? (
        <Loader />
      ) : (
        <div className="container text-center items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
          <a href="#">
            <img
              src={recipe?.img}
              alt={recipe?.title}
              className="w-[382px] h-[254px] rounded-t-lg"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h2 className="font-bold mb-2 text-2xl">
                Time: {recipe?.cookingTime}
              </h2>
            </a>
            <a href="#">
              <h3 className="font-mono mb-3">
                <b>Title:</b> {recipe?.title}
              </h3>
            </a>

            <i>
              <p className="mb-3 font-semibold">
                <b> Ingredinets:</b> {recipe?.ingredients}
              </p>
              <h4 className="mb-3 text-xl font-normal">
                <b> Method:</b> {recipe?.method}
              </h4>
            </i>

            <Link className="gap-3" to={recipe?.video}>
              <b>Yotuber:</b>
              {recipe?.video}
            </Link>

            <div className="flex items-center space-x-1 justify-center mb-3 mt-3">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                >
                  <svg
                    onClick={() => setUserRating(index + 1)}
                    className={`h-6 w-6 cursor-pointer ${
                      index < userRating ? "text-[#FACA15]" : "text-gray-300"
                    } transition-colors duration-300 ease-in-out`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1.75a.75.75 0 0 1 .662.392l1.912 4.905 5.403.416a.75.75 0 0 1 .417 1.277l-4.12 3.193 1.225 5.384a.75.75 0 0 1-1.14.803L10 14.85l-5.14 3.12a.75.75 0 0 1-1.14-.803l1.226-5.384-4.12-3.193a.75.75 0 0 1 .417-1.277l5.402-.416L9.338 2.142A.75.75 0 0 1 10 1.75z"
                    />
                  </svg>
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center${
                      index + 1 === 1
                        ? "text-red-500"
                        : index + 1 === 3
                        ? "text-yellow-500"
                        : "text-green-500"
                    } opacity-0 pointer-events-none ${
                      index === userRating - 1 ? "opacity-100" : ""
                    } transition-opacity duration-300 ease-in-out`}
                  >
                    {index + 1 === 1
                      ? "Too Bad"
                      : index + 1 === 3
                      ? "Normal"
                      : "Good"}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <a
            href="/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mb-3"
          >
            Back
          </a>
        </div>
      )}
      {/* {recipe && (
        <>

        </>
      )} */}
    </div>
  );
}

export default ProductDetail;
