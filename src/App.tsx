import SideNavigation from "./components/sidebar/SideNavigation";
import Navigation from "./components/navbar/Navigation";
import Layout from "./components/Layout"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CategoriesPage, Home, Orders, Products, Users, History } from "./pages";

const App = () => {

  return (
    <>
      <Layout>
        <Router>
          <Navigation />
          <div className="flex">
            <SideNavigation />

            <div className="relative ml-4 mt-2 pt-2 px-2  w-full bg-gray-800 ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/users" element={<Users />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Layout >
    </>
  )
}

export default App;