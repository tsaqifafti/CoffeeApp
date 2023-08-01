import React from "react";
import DetailCatalogAction from "./DetailCatalogAction";
import logo from "../img/background hero.jpg";

function DetailCatalog({ count, increment, decrement, handleChange }) {
    return (
        <div
            class="card bgc_detail"
            style={{
                maxWidth: "1200px",
                marginTop: "40px",
                marginBottom: "250px",
            }}
        >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={logo} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">Card title</h5>
                        <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <p class="card-text fs-1" style={{ color: "#4c5c68" }}>
                            Rp 199.000
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
