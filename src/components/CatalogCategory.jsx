import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CatalogCategory({ setPilihCategory }) {
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const navigate = useNavigate();

    const categoryHandler = (category) => {
        setPilihCategory(category);
        setSelectedCategory(category);
        navigate(`/catalog/categories/${category}`);
    };

    const getCategoryCardClassName = (category) => {
        return `card category_card ${
            selectedCategory === category ? "selected" : ""
        }`;
    };

    return (
        <>
            <div className="row justify-content-center">
                <div className="col my-4">
                    <div
                        className={getCategoryCardClassName("Semua")}
                        onClick={() => categoryHandler("Semua")}
                    >
                        <div className="card-body">Semua</div>
                    </div>
                </div>
                <div className="col my-4">
                    <div
                        className={getCategoryCardClassName("robusta")}
                        onClick={() => categoryHandler("robusta")}
                    >
                        <div className="card-body">Robusta</div>
                    </div>
                </div>
                <div className="col my-4">
                    <div
                        className={getCategoryCardClassName("arabica")}
                        onClick={() => categoryHandler("arabica")}
                    >
                        <div className="card-body">Arabica</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatalogCategory;
