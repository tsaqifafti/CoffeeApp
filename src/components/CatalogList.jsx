import React from "react";
import CatalogItem from "./CatalogItem";
import CatalogCategory from "./CatalogCategory";

function CatalogList({ filteredCatalog, setPilihCategory }) {
    return (
        <>
            <CatalogCategory setPilihCategory={setPilihCategory} />
            <div className="container" style={{ marginBottom: "5rem" }}>
                <div className="row align-items-start">
                    {filteredCatalog.map((item) => (
                        <div
                            key={item.id}
                            className="col-lg-2 col-md-6 col-sm-12"
                        >
                            <CatalogItem id={item.id} {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CatalogList;
