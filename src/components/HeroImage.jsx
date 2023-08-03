import React from "react";
import { Link } from "react-router-dom";

function HeroImage() {
    return (
        <>
            <div className="hero">
                <p>kopi abc</p>
                <Link to={"/catalog/categories/Semua"}>
                    <button>Pesan biji kopi</button>
                </Link>
            </div>
            <p className="moto">"Biji kopi terbaik dari yang baik"</p>
        </>
    );
}

export default HeroImage;
