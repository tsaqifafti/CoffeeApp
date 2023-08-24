import React, { useEffect, useState } from "react";
import DashboardAdmin from "../components/DashboardAdmin";
import { getAllUser, deleteUser } from "../utils/api";

function DashboardAdminPage() {
    const [user, setUser] = useState([]);

    async function onDeleteHandler(id) {
        try {
            await deleteUser(id);
            window.location.reload();
            const response = await getAllUser(id);

            if (response.data === null) {
                // Tidak ada data yang ditemukan setelah menghapus pengguna
                // Lakukan penanganan sesuai kebutuhan, seperti menampilkan pemberitahuan
                console.log(
                    "Tidak ada data pengguna yang ditemukan setelah menghapus pengguna."
                );
            } else {
                setUser(response.data.data);
            }
        } catch (error) {
            // Tangani kesalahan yang mungkin terjadi dalam fungsi onDeleteHandler
            console.error("Terjadi kesalahan:", error);
        }
    }

    useEffect(() => {
        async function fetchUserData() {
            try {
                const { error, data } = await getAllUser();

                if (!error) {
                    // setProductList(data.data);
                    setUser(data.data);
                }
            } catch (error) {
                // setProductList([]);
                setUser([]);
            }
        }

        fetchUserData();
    }, []);

    return (
        <>
            <DashboardAdmin userList={user} onDelete={onDeleteHandler} />
        </>
    );
}

export default DashboardAdminPage;
