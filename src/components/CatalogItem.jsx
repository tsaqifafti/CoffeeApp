import React from "react";
import { Link } from "react-router-dom";

function CatalogItem({ id, title, harga, img }) {
    return (
        <Link
            to={`/detail/${id}`}
            className="card my-2 shadow_card bgc_card"
            style={{ color: "inherit", textDecoration: "inherit" }}
        >
            <img src={img} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Rp {harga}</p>
                <button className="btn bgc_">Beli Sekarang</button>
            </div>
        </Link>
    );
}

export default CatalogItem;
