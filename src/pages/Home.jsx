import { useFetch } from "../hooks/useFetch";
import RecipeList from "../components/RecipeList";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const {
    data: recipies,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-5xl mx-auto  py-3 px-3 flex flex-col items-center justify-center">
          <div className="bg-white w-[150px] h-[2px] mt-16"></div>
          <span className="pt-2 pb-2 text-2xl text-white">OUR MENU</span>
          <div className="bg-white w-[150px] h-[2px] mb-4"></div>
          <p className="mb-9 w-[470px] text-center text-white">
            <i>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </i>
          </p>
          {recipies && <RecipeList recipies={recipies} />}
        </div>
      )}
    </>
  );
}

export default Home;
