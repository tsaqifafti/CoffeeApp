import React, { useState, useEffect } from "react";
import DetailCatalog from "../components/DetailCatalog";
import { getProduct } from "../utils/local_data";
import { useParams } from "react-router-dom";
import "../styles/style.css";

function DetailPage() {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const increment = () => setCount((prevCount) => prevCount + 1);

    const decrement = () => setCount((prevCount) => prevCount - 1);

    const handleChange = (event) => {
        const newValue = parseInt(
            event.target.value
                .slice(0, event.target.maxLength)
                .replace(/\D/g, "")
        );
        setCount(newValue);
    };

    useEffect(() => {
        const fetchProduct = () => {
            const data = getProduct(id);
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    return (
        <div className="detail-page">
            <DetailCatalog
                count={count}
                increment={increment}
                decrement={decrement}
                handleChange={handleChange}
                {...product}
            />
        </div>
    );
}

export default DetailPage;
