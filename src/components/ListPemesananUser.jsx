import {React , useState, useEffect} from "react";
import ItemPemesananUser from "./ItemPemesananUser";

function ListPemesananUser({data}) {
    

    return (
        <div
            class="list-group mx-5"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
            }}
        >
            <h2>List Pemesanan</h2>
            <ItemPemesananUser data={data}/>
        </div>
    );
}

export default ListPemesananUser;
