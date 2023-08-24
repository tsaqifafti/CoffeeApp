import {React , useState, useEffect} from "react";

import ListPemesananUser from "../components/ListPemesananUser";
import "../styles/style.css";
import { GetAllTransactionUser } from "../utils/api";

function PemesananUserPage() {
    const [transactionUser, settransactionUser] = useState([]);
    
    async function dataTransactionUser() {
        const { error, data } = await GetAllTransactionUser();
        if (!error) {
            settransactionUser(data.data);
        }
    }

    useEffect( () => {
        dataTransactionUser()
    }, []);
    
    return (
        <>
            <ListPemesananUser data={transactionUser} />
        </>
    );
}

export default PemesananUserPage;
