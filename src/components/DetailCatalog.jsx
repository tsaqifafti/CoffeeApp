import React from "react";
import DetailCatalogAction from "./DetailCatalogAction";

function DetailCatalog({
    count,
    increment,
    decrement,
    handleChange,
    img,
    title,
    harga,
}) {
    return (
        <div
            className="card bgc_detail"
            style={{
                maxWidth: "1200px",
                marginTop: "40px",
                marginBottom: "250px",
            }}
        >
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={img}
                        className="img-fluid rounded-start"
                        alt="..."
                        style={{ width: "90%" }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{title}</h5>
                        <p className="card-text">
                            Varietas tanaman kopi robusta dengan mudah tumbuh di
                            wilayah tanam di Arul Kumer, diproses Natural
                            kemudian disangrai medium roast.
                        </p>
                        <p
                            className="card-text fs-1"
                            style={{ color: "#4c5c68" }}
                        >
                            Rp {harga}
                        </p>
                        <DetailCatalogAction
                            count={count}
                            decrement={decrement}
                            increment={increment}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DetailCatalog;
