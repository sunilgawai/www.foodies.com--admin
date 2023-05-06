import { CategoryController, CategoriesNotFound } from "../components";
import { useEffect, useState } from "react";
import { Categories as ICategories } from "../typings"
import { BASE_SERVER_URL } from "../constants";
import { AiFillPlusSquare } from "react-icons/all";

const CategoriesPage = () => {
  const [categories, setCategories] = useState<ICategories>([]);
  const controller = new AbortController();


  useEffect(() => {
    const getCategories = () => {
      fetch(BASE_SERVER_URL + '/api/admin/category/')
        .then((res) => res.json())
        .then(data => setCategories(data.categories))
        .catch((err) => console.error(err))
    }
    getCategories();

    return () => controller.abort();
  }, [])

  return (
    <div className='text-white h-full'>
      <div className="flex justify-between items-center">
        <h2 className='text-xl font-semibold italic mb-2 '>Categories</h2>

        <button className="shadow-lg bg-gray-800 
      text-green-500 hover:bg-green-500 hover:text-white
        rounded-md hover:rounded-xl transition-all duration-300
        ease-in cursor-pointer w-20 flex justify-center items-center
        border border-green-700 px-3 py-2 mb-2"
        >
          <AiFillPlusSquare />
          <span className="font-semibold italic ml-3">Add</span>
        </button>

        {/* <div className="add-category-btn relative right-0 float-right">
          <AiFillPlusSquare />
          <span className='text-base font-semibold italic mb-2 '>Add</span>
        </div> */}
      </div>
      <hr />

      <div className="container border border-white mt-4">
        {
          categories.length
            ?
            categories.map((category, i) => {
              return (
                <CategoryController categories={categories} setCategories={setCategories}
                  {...category} key={i} />
              )
            })
            :
            // Error Message whent there is no categorie.
            <CategoriesNotFound />
        }
      </div>
    </div>
  )
}

export default CategoriesPage;