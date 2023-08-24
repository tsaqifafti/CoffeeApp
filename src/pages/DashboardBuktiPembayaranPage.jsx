import React, { useEffect, useState } from "react";
import DashboardBuktiPembayaran from "../components/DashboardBuktiPembayaran";
import { getAllTransaction } from "../utils/api";

function DashboardAdminPage() {
    const [transactionList, setTransactionList] = useState([]);

    useEffect(() => {
        async function fetchProductData() {
            try {
                const { error, data } = await getAllTransaction();

                if (!error) {
                    setTransactionList(data.data);
                }
            } catch (error) {
                console.error(`ga login`);
            }
        }
        fetchProductData();
    }, []);

    console.log(transactionList);

    return (
        <>
            <DashboardBuktiPembayaran transactionList={transactionList} />
        </>
    );
}

export default DashboardAdminPage;
