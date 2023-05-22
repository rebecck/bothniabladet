import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ImageCatalog from "../../features/imagebank/ImageCatalog";
import ImageDetails from "../../features/imagebank/ImageDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import LoginPage from "../../features/login/LoginPage";
import AddImagePage from "../../features/add-image/AddImagePage";
import ImageSubCatalog from "../../features/imagebank/ImageSubCatalog";
import CategoryPage from "../../features/categories/CategoryPage";
import CategoryList from "../../features/categories/CategoryList";
import SearchPage from "../../features/search/SearchPage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'categories', element: <CategoryPage />},
            {path: 'image-catalog/:id', element: <ImageDetails />},
            {path: 'about', element: <AboutPage />},
            {path: 'contact', element: <ContactPage />},
            {path: 'login', element: <LoginPage />},
            {path: 'upload-image', element: <AddImagePage />},
            {path: 'image-sub-catalog', element: <ImageSubCatalog />},
            {path: 'category-list', element: <CategoryList />},
            {path: 'search', element: <SearchPage />},
        ]
    }
])
