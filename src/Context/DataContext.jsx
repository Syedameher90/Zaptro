import axios from "axios";
import { createContext, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState();


    // feacting all data from API:

    const fetchAllProducts = async () => {
       try {
           const res = await axios.get('https://fakestoreapi.com/products?limit=20')

           console.log(res);
           const productsData = res.data.products
           setData(productsData)
       }
    catch(error) {
        console.log(error)
    }
}
    return  <DataContext.Provider value={{data, setData, fetchAllProducts}}>
        {children}
    </DataContext.Provider>
}