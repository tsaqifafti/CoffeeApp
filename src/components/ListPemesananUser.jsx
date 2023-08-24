import React from "react";
import ItemPemesananUser from "./ItemPemesananUser";

function ListPemesananUser() {
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
            <ItemPemesananUser />
        </div>
    );
}

export default ListPemesananUser;
