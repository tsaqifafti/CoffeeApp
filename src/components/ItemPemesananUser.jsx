import { React, useEffect, useState } from "react";
import { KonfrimasiPembayaran } from "../utils/api";

function ItemPemesananUser({ data }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [responseMessage, setResponseMessage] = useState("");

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async (id) => {
        if (selectedFile && id) {
            const formData = new FormData();
            formData.append("file", selectedFile);

            try {
                const { data, error } = await KonfrimasiPembayaran(
                    formData,
                    id
                );
                if (!error) {
                    alert(data.message);
                    setResponseMessage(data.message); // Assuming the API returns a message
                }
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            console.log("Please provide both a file and an ID.");
        }
    };

    return (
        <>
            {data.map((items) => (
                <div
                    key={items.id}
                    href="#"
                    className="list-group-item list-group-item-action my-2"
                    aria-current="true"
                >
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 fw-bold">{items.product.name}</h5>
                        <small>{items.status}</small>
                    </div>
                    <p className="mb-1">{items.final_amount}</p>
                    <div className="d-flex w-100 justify-content-between">
                        <small>
                            Bukti Transfer<br></br>
                            transfer : {items.payment_method.name_bank} -{" "}
                            {items.payment_method.no_rekening}
                        </small>
                        <form>
                            <div
                                className="input-group"
                                style={{ width: "30rem" }}
                            >
                                <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    aria-label="Upload"
                                    onChange={handleFileChange}
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    id="inputGroupFileAddon04"
                                    onClick={() => handleUpload(items.id)}
                                >
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ItemPemesananUser;
