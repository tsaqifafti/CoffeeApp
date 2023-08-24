import React, { useEffect, useState } from "react";
import DashboardProduk from "../components/DashboardProduk";
import {
    getAllProduct,
    deleteProduk,
    getAllCategory,
    addProduct,
    modifyProduct,
} from "../utils/api";

function DashboardProdukPage() {
    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    function onAddProdukHandler(product) {
        addProduct(product);
        window.location.reload();
    }

    function onModifyProdukHandler(modifyProduk, id) {
        modifyProduct(modifyProduk, id);
        // window.location.reload();
    }

    async function onDeleteHandler(id) {
        try {
            await deleteProduk(id);
            window.location.reload();
            const response = await getAllProduct(id);

            if (response.data === null) {
                // Tidak ada data yang ditemukan setelah menghapus produk
                // Lakukan penanganan sesuai kebutuhan, seperti menampilkan pemberitahuan
                console.log(
                    "Tidak ada data produk yang ditemukan setelah menghapus produk."
                );
            } else {
                setProductList(response.data.data);
            }
        } catch (error) {
            // Tangani kesalahan yang mungkin terjadi dalam fungsi onDeleteHandler
            console.error("Terjadi kesalahan:", error);
        }
    }

    async function fetchCategoryData() {
        try {
            const { error, data } = await getAllCategory();

            if (!error) {
                setCategoryList(data.data);
            }
        } catch (error) {
            console.log(`tidak ada produk`);
        }
    }

    async function fetchProductData() {
        try {
            const { error, data } = await getAllProduct();

            if (!error) {
                setProductList(data.data);
            }
        } catch (error) {
            console.log(`tidak ada produk`);
        }
    }

    useEffect(() => {
        fetchProductData();
        fetchCategoryData();
    }, []);

    return (
        <DashboardProduk
            productList={productList}
            onDelete={onDeleteHandler}
            categoryList={categoryList}
            addProduk={onAddProdukHandler}
            modifyProduk={onModifyProdukHandler}
        />
    );
}

export default DashboardProdukPage;
