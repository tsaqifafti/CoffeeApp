import React, { useState } from "react";
import DetailCatalog from "../components/DetailCatalog";

function DetailPage() {
    const [count, setCount] = useState(1);

    const increment = () => setCount((prevCount) => prevCount + 1);

    const decrement = () => setCount((prevCount) => prevCount - 1);

    const handleChange = (event) => {
        // Mengambil nilai inputan dari event dan memastikan tidak melebihi maxLength
        const newValue = parseInt(
            event.target.value
                .slice(0, event.target.maxLength)
                .replace(/\D/g, "")
        );
        setCount(newValue);
    };

    return (
        <div className="detail-page">
            <DetailCatalog
                count={count}
                increment={increment}
                decrement={decrement}
                handleChange={handleChange}
            />
        </div>
    );
}

export default DetailPage;
