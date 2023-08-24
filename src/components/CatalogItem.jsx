import React from "react";
import { Link } from "react-router-dom";

function CatalogItem({ id, name, harga, image }) {
    return (
        <Link
            to={`/detail/${id}`}
            className="card my-2 shadow_card bgc_card"
            style={{ color: "inherit", textDecoration: "inherit" }}
        >
            <img
                src={`http://localhost:3000/${image}`}
                className="card-img-top "
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Rp {harga}</p>
                <button className="btn" style={{ fontSize: "1vw" }}>
                    Beli Sekarang
                </button>
            </div>
        </Link>
    );
}

export default CatalogItem;
