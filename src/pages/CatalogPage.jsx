import React, { useState, useEffect } from "react";
import CatalogList from "../components/CatalogList";
import axios from "axios";
import { getData } from "../utils/local_data";

const baseURL = "https://cofeeapp.free.beeceptor.com/list";

function CatalogPage() {
    const [catalog, setCatalog] = useState([]);
    const [pilihCategory, setPilihCategory] = useState("Semua");

    useEffect(() => {
        // axios.get(baseURL).then((response) => {
        //     setCatalog(response.data);
        // });

        const data = getData();

        setCatalog(data.data);
    }, []);

    const filteredCatalog =
        pilihCategory === "Semua"
            ? catalog
            : catalog.filter((item) => item.category === pilihCategory);
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
