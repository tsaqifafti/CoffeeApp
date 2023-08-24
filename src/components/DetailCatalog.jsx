import React from "react";
// import DetailCatalogAction from "./DetailCatalogAction";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

function DetailCatalog({
    count,
    increment,
    decrement,
    handleChange,
    image,
    name,
    harga,
    description,
    id,
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
                        src={`http://localhost:3000/${image}`}
                        className="img-fluid rounded-start"
                        alt="..."
                        style={{ width: "90%" }}
                    />
                </div>
                <div className="col-md-8">
                    <form>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p
                                className="card-text fs-1"
                                style={{ color: "#4c5c68" }}
                            >
                                Rp {harga}
                            </p>
                            <div className="detail-page__action">
                                <div>
                                    <button
                                        disabled={count <= 1}
                                        className="btn btn_action__count"
                                        onClick={decrement}
                                    >
                                        <FiMinusCircle />
                                    </button>
                                    <input
                                        className="text-center input__border"
                                        type="number"
                                        maxLength={2}
                                        onChange={handleChange}
                                        value={count}
                                    />
                                    <button
                                        disabled={count >= 20}
                                        className="btn btn_action__count"
                                        onClick={increment}
                                    >
                                        <FiPlusCircle />
                                    </button>
                                </div>
                                <div>
                                    <button className="btn bgc_btn">
                                        Pesan Sekarang
                                    </button>
                                </div>
                            </div>
                            {/* <DetailCatalogAction
                            count={count}
                            decrement={decrement}
                            increment={increment}
                            handleChange={handleChange}
                        /> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DetailCatalog;
