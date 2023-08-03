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
                        className={getCategoryCardClassName("cofee")}
                        onClick={() => categoryHandler("cofee")}
                    >
                        <div className="card-body">Coffee</div>
                    </div>
                </div>
                <div className="col my-4">
                    <div
                        className={getCategoryCardClassName("tea")}
                        onClick={() => categoryHandler("tea")}
                    >
                        <div className="card-body">Tea</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatalogCategory;
