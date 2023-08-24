import React, { useState, useEffect } from "react";
import DetailCatalog from "../components/DetailCatalog";
// import { getProduct } from "../utils/local_data";
import { getProductDetail } from "../utils/api";
import { useParams } from "react-router-dom";
import "../styles/style.css";

function DetailPage() {
    // const [count, setCount] = useState(1);
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    // const increment = () => setCount((prevCount) => prevCount + 1);

    // const decrement = () => setCount((prevCount) => prevCount - 1);

    // const handleChange = (event) => {
    //     const newValue = parseInt(
    //         event.target.value
    //             .slice(0, event.target.maxLength)
    //             .replace(/\D/g, "")
    //     );
    //     setCount(newValue);
    // };

    async function fetchProduct() {
        try {
            const response = await getProductDetail(id);

            if (response.data === null) {
                // Tidak ada data yang ditemukan setelah menghapus pengguna
                // Lakukan penanganan sesuai kebutuhan, seperti menampilkan pemberitahuan
                console.log(
                    "Tidak ada data pengguna yang ditemukan setelah menghapus pengguna."
                );
            } else {
                setProduct(response.data.data);
            }
        } catch (error) {
            // Tangani kesalahan yang mungkin terjadi dalam fungsi onDeleteHandler
            console.error("Terjadi kesalahan:", error);
        }
    }

    useEffect(() => {
        // const fetchProduct = () => {
        //     const data = getProduct(id);
        //     setProduct(data);
        // };

        fetchProduct();
    }, []);

    return (
        <div className="detail-page">
            <DetailCatalog
                // count={count}
                // increment={increment}
                // decrement={decrement}
                // handleChange={handleChange}
                {...product}
            />
        </div>
    );
}

export default DetailPage;
