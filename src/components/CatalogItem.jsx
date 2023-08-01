import React from "react";
import logo from "../img/background hero.jpg";

function CatalogItem() {
    return (
        <div class="container border border-dark border-1 p-0">
            <div class="row my-3">
                <div class="col-4 col-sm-2">
                    <div
                        class="card my-2 shadow_card bgc_card"
                        style={{ width: "11rem" }}
                    >
                        <img src={logo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Rp 199.000</p>
                            <a href="#" class="btn">
                                Beli Sekarang
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-sm-2">
                    <div
                        class="card my-2 shadow_card bgc_card"
                        style={{ width: "11rem" }}
                    >
                        <img src={logo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Rp 199.000</p>
                            <a href="#" class="btn">
                                Beli Sekarang
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-sm-2">
                    <div
                        class="card my-2 shadow_card bgc_card"
                        style={{ width: "11rem" }}
                    >
                        <img src={logo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Rp 199.000</p>
                            <a href="#" class="btn">
                                Beli Sekarang
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-sm-2">
                    <div
                        class="card my-2 shadow_card bgc_card"
                        style={{ width: "11rem" }}
                    >
                        <img src={logo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Rp 199.000</p>
                            <a href="#" class="btn">
                                Beli Sekarang
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-sm-2">
                    <div
                        class="card my-2 shadow_card bgc_card"
                        style={{ width: "11rem" }}
                    >
                        <img src={logo} class="card-img-top" alt="hero" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Rp 199.000</p>
                            <a href="#" class="btn">
                                Beli Sekarang
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-sm-2">
                    <div
                        class="card my-2 shadow_card bgc_card"
                        style={{ width: "11rem" }}
                    >
                        <img src={logo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Rp 199.000</p>
                            <a href="#" class="btn">
                                Beli Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatalogItem;
