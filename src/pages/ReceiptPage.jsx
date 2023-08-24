import React from "react";
import Receipt from "../components/Receipt";
import "../styles/style.css";

function ReceiptPage() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
            }}
        >
            <Receipt />
        </div>
    );
}

export default ReceiptPage;
