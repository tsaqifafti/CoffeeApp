import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import DetailCatalogAction from "./DetailCatalogAction";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { beliProduk } from "../utils/api";

function DetailCatalog({
    // stock,
    // increment,
    // decrement,
    // handleChange,
    image,
    name,
    harga,
    description,
}) {
    const navigate = useNavigate();
    const [stock, setStock] = useState(1);
    const [final_amount, setFinalAmount] = useState("");

    const increment = () => setStock((prevCount) => prevCount + 1);

    const decrement = () => setStock((prevCount) => prevCount - 1);

    const handleChange = (event) => {
        const newValue = parseInt(
            event.target.value
                .slice(0, event.target.maxLength)
                .replace(/\D/g, "")
        );
        setStock(newValue);
    };

    const [payment_method, setPaymentMethod] = useState(1);

    const idKocak = window.location.pathname.split("/");
    const product_id = parseInt(idKocak[2]);

    // console.log(final_amount);

    useEffect(() => {
        const calculatedAmount = stock * harga;
        setFinalAmount(calculatedAmount);
    }, [stock, harga]);

    async function handleBeliProduk() {
        const dataToSend = {
            product_id,
            stock,
            payment_method,
            final_amount,
        };

        const { error, data } = await beliProduk(dataToSend);

        if (!error) {
            console.log("Produk berhasil dibeli!", data);
            navigate("/pemesanan");
            // Tambahkan logika atau tindakan lain yang sesuai setelah pembelian berhasil
        } else {
            console.log("Terjadi kesalahan saat membeli produk.");
            // Tambahkan logika atau tindakan lain yang sesuai jika terjadi kesalahan
        }
    }

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
                                    disabled={stock <= 1}
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
                                    value={stock}
                                />
                                <button
                                    disabled={stock >= 20}
                                    className="btn btn_action__count"
                                    onClick={increment}
                                >
                                    <FiPlusCircle />
                                </button>
                            </div>
                            <div>
                                <button
                                    className="btn bgc_btn"
                                    onClick={handleBeliProduk}
                                >
                                    Pesan Sekarang
                                </button>
                            </div>
                        </div>
                        {/* <DetailCatalogAction
                            stock={stock}
                            decrement={decrement}
                            increment={increment}
                            handleChange={handleChange}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailCatalog;
