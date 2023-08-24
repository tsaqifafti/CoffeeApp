import axios from "axios";
import FormData from "form-data";

const BASE_URL = "http://localhost:3000";

function getAdminToken() {
    return localStorage.getItem("adminToken");
}

function getUserToken() {
    return localStorage.getItem("userToken");
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

async function getProductDetail(id) {
    try {
        const hitApiLogin = await axios.get(
            `${BASE_URL}/api/v1/product/list/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${getUserToken()}`,
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

async function modifyProduct(product, id) {
    try {
        const hitApiLogin = await axios.patch(
            `${BASE_URL}/api/v1/product/list/${id}`,
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
                    Authorization: `Bearer ${localStorage.getItem(
                        "userToken"
                    )}`,
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

async function KonfrimasiPembayaran(data, id) {
    try {
        console.log("data : ", data, "id : ", id);
        const hitApiLogin = await axios.patch(
            `${BASE_URL}/api/v1/user/transaction/confirm/${id}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "userToken"
                    )}`,
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

async function beliProduk(data) {
    try {
        const hitApiLogin = await axios.post(
            `${BASE_URL}/api/v1/transaction/buy`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "userToken"
                    )}`,
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

async function UpdatePembayaran(id) {
    try {
        const data = {};
        const hitApiLogin = await axios.patch(
            `${BASE_URL}/api/v1/transaction/list/${id}`,
            data,
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
        return { error: true, data: null };
    }
}

async function DeletePembayaran(id) {
    try {
        const hitApiLogin = await axios.delete(
            `${BASE_URL}/api/v1/transaction/list/${id}`,
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
    KonfrimasiPembayaran,
    GetAllTransactionUser,
    modifyProduct,
    getProductDetail,
    UpdatePembayaran,
    DeletePembayaran,
    beliProduk,
};
