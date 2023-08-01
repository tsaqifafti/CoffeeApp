import React from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

function DetailCatalogAction({ count, increment, decrement, handleChange }) {
    return (
        <div className="detail-page__action">
            <div>
                <button
                    disabled={count <= 1}
                    class="btn btn_action__count"
                    onClick={decrement}
                >
                    <FiMinusCircle />
                </button>
                <input
                    class="text-center input__border"
                    type="number"
                    maxLength={2}
                    onChange={handleChange}
                    value={count}
                />
                <button
                    disabled={count >= 20}
                    class="btn btn_action__count"
                    onClick={increment}
                >
                    <FiPlusCircle />
                </button>
            </div>
            <div>
                <button class="btn bgc_btn">Pesan Sekarang</button>
            </div>
        </div>
    );
}

export default DetailCatalogAction;
