import React, { useState, useEffect } from "react";
import CatalogList from "../components/CatalogList";
// import { getData } from "../utils/local_data";
import { getAllProduct } from "../utils/api";
import "../styles/style.css";

function CatalogPage() {
    const [catalog, setCatalog] = useState([]);
    const [pilihCategory, setPilihCategory] = useState("Semua");

    useEffect(() => {
        // axios.get(baseURL).then((response) => {
        //     setCatalog(response.data);
        // });

        // const data = getData();

        // setCatalog(data.data);
        async function fetchProductData() {
            try {
                const { error, data } = await getAllProduct();

                if (!error) {
                    setCatalog(data.data);
                }
            } catch (error) {
                console.log(`tidak ada produk`);
            }
        }

        fetchProductData();
    }, []);

    console.table(catalog);

    const filteredCatalog =
        pilihCategory === "Semua"
            ? catalog
            : catalog.filter(
                  (item) => item.product_category.name === pilihCategory
              );
    return (
        <>
            <CatalogList
                filteredCatalog={filteredCatalog}
                setPilihCategory={setPilihCategory}
            />
        </>
    );
}

export default CatalogPage;
