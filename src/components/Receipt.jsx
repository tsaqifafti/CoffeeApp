import React from "react";

function Receipt() {
    return (
        <ul class="list-group shadow-lg" style={{ width: "20rem" }}>
            <li class="list-group-item text-center fw-bold">Title</li>
            <li class="list-group-item">Qty : 3</li>
            <li class="list-group-item">Harga : Rp 70.000</li>
            <li class="list-group-item">Total : Rp 210.000</li>
            <li class="list-group-item">
                Transfer BCA : 6454775243 a/n Maulana
            </li>
        </ul>
    );
}

export default Receipt;
