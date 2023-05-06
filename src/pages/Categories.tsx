import { CategoryController, CategoriesNotFound, CommonHeader } from "../components";
import { useEffect, useState } from "react";
import { Categories as ICategories } from "../typings"
import { BASE_SERVER_URL } from "../constants";

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
      <CommonHeader title="Categories" />

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