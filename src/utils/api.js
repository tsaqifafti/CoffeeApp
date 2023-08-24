import axios from "axios";
import FormData from "form-data";

const BASE_URL = "http://localhost:3000";

function getAdminToken() {
    return localStorage.getItem("adminToken");
}

async function login({ email, password }) {
    const formData = {
        email,
        password,
    };

    try {
        const hitApiLogin = await axios.post(
            `${BASE_URL}/api/v1/auth/login`,
            formData
        );

        if (hitApiLogin.status === 200) {
            localStorage.setItem("userToken", hitApiLogin.data.data.token);
            return { error: false, data: hitApiLogin.data };
        } else {
            return { error: true, data: null };
        }
    } catch (error) {
        // console.error("Error logging in:", error);
        return { error: true, data: null };
    }
}

async function loginAdmin({ email, password }) {
    const formData = {
        email,
        password,
    };

    try {
        const hitApiLogin = await axios.post(
            `${BASE_URL}/api/v1/auth/login/admin`,
            formData
        );

        if (hitApiLogin.status === 200) {
            localStorage.setItem("adminToken", hitApiLogin.data.data.token);
            return { error: false, data: hitApiLogin.data };
        } else {
            return { error: true, data: null };
        }
    } catch (error) {
        // console.error("Error logging in:", error);
        return { error: true, data: null };
    }
}

async function getAllProduct() {
    try {
        const hitApiLogin = await axios.get(`${BASE_URL}/api/v1/product/list`);

        if (hitApiLogin.status === 200) {
            return { error: false, data: hitApiLogin.data };
        } else {
            return { error: true, data: null };
        }
    } catch (error) {
        // console.error("Error logging in:", error);
        return { error: true, data: null };
    }
}

async function getAllTransaction() {
    try {
        const hitApiLogin = await axios.get(
            `${BASE_URL}/api/v1/transaction/list`,
            {
                headers: {
                    Authorization: `Bearer ${getAdminToken()}`,
                },
            }
        );

        if (hitApiLogin.status === 200) {
            return { error: false, data: hitApiLogin.data };
        } else {
            return { error: true, data: null };
        }
    } catch (error) {
        // console.error("Error logging in:", error);
        return { error: true, data: null };
    }
}

async function register({ name, email, password, address }) {
    const formData = {
        name,
        email,
        password,
        address,
    };

    try {
        const hitApiLogin = await axios.post(
            `${BASE_URL}/api/v1/auth/register`,
            formData
        );

        if (hitApiLogin.status === 200) {
            return { error: false, data: hitApiLogin.data };
        } else {
            return { error: true, data: null };
        }
    } catch (error) {
        // console.error("Error logging in:", error);
        return { error: true, data: null };
    }
}

async function getAllUser() {
    try {
        const hitApiLogin = await axios.get(`${BASE_URL}/api/v1/user/list`, {
            headers: {
                Authorization: `Bearer ${getAdminToken()}`,
            },
        });

        if (hitApiLogin.status === 200) {
            return { error: false, data: hitApiLogin.data };
        } else {
            return { error: true, data: null };
        }
    } catch (error) {
        // console.error("Error logging in:", error);
        return { error: true, data: null };
    }
}

async function getAllCategory() {
    try {
        const hitApiLogin = await axios.get(
            `${BASE_URL}/api/v1/product/category/list`,
            {
                headers: {
                    Authorization: `Bearer ${getAdminToken()}`,
                },
            }
        );

        if (hitApiLogin.status === 200) {
            return { error: false, data: hitApiLogin.data };
        } else {
            return { error: true, data: null };
        }
    } catch (error) {
        // console.error("Error logging in:", error);
        return { error: true, data: null };
    }
}

async function deleteUser(id) {
    const response = await axios.delete(
        `${BASE_URL}/api/v1/user/deleted/${id}`,
        {
            headers: {
                Authorization: `Bearer ${getAdminToken()}`,
            },
        }
    );

    if (response.status !== "success") {
        return { error: true, data: null };
    }

    return { error: false, data: response.data };
}

async function deleteProduk(id) {
    const response = await axios.delete(
        `${BASE_URL}/api/v1/product/list/remove/${id}`,
        {
            headers: {
                Authorization: `Bearer ${getAdminToken()}`,
            },
        }
    );

    if (response.status !== "success") {
        return { error: true, data: null };
    }

    return { error: false, data: response.data };
}

async function addProduct(product) {
    // let data = new FormData();
    // data.append(
    //     "file",
    //     fs.createReadStream("/Users/extramarks/Downloads/bad.jpeg")
    // );
    // data.append("name", "produk5");
    // data.append("stock", "100");
    // data.append("harga", "100");
    // data.append("product_category_id", "5");
    // data.append("description", "ini adalah description");

    // let config = {
    //     method: "post",
    //     maxBodyLength: Infinity,
    //     url: "http://localhost:3000/api/v1/product/addProduct",
    //     headers: {
    //         Authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGVfaWQiOjEsImlhdCI6MTY5Mjc3Nzg1MywiZXhwIjoxNjkyODY0MjUzfQ.2UKLS1fFdeXIah9mvK6Y4BRrQcS8_tgeJWCqwsA44K8",
    //         ...data.getHeaders(),
    //     },
    //     data: data,
    // };

    // axios
    //     .request(config)
    //     .then((response) => {
    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    
    // let formData = new FormData();
    // formData.append("file", file);
    // formData.append("name", name);
    // formData.append("stock", stock);
    // formData.append("harga", harga);
    // formData.append("product_category_id", product_category_id);
    // formData.append("description", description);

    try {
        const hitApiLogin = await axios.post(
            `${BASE_URL}/api/v1/product/addProduct`,
            product,
            {
                headers: {
                    Authorization: `Bearer ${getAdminToken()}`,
                },
            }
        );

        if (hitApiLogin.status === 200) {
            return { error: false, data: hitApiLogin.data };
        } else {
            return { error: true, data: null };
        }
    } catch (error) {
        // console.error("Error logging in:", error);
        return { error: true, data: null };
    }
}

async function GetAllTransactionUser() {
    try {
        const hitApiLogin = await axios.get(
            `${BASE_URL}/api/v1/transaction/listuser`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                },
            }
        );

        if (hitApiLogin.status === 200) {
            return { error: false, data: hitApiLogin.data };
        } else {
            return { error: true, data: null };
        }


    } catch (error) {
        return { error: true, data: null };
    }
}

async function KonfrimasiPembayaran(data,id) {
    try {
        console.log("data : ", data, "id : ",id);
        const hitApiLogin = await axios.patch(
            `${BASE_URL}/api/v1/user/transaction/confirm/${id}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                },
            }
        );

        if (hitApiLogin.status === 200) {
            return { error: false, data: hitApiLogin.data };
        } else {
            return { error: true, data: null };
        }


    } catch (error) {
        return { error: true, data: null };
    }
}

export {
    login,
    loginAdmin,
    getAllProduct,
    getAllTransaction,
    register,
    getAllUser,
    deleteUser,
    deleteProduk,
    getAllCategory,
    addProduct,
    GetAllTransactionUser,
    KonfrimasiPembayaran,
};
