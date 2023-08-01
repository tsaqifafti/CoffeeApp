import React from "react";

function Navigation() {
    return (
        <>
            <nav class="navbar navbar-expand-lg padding_nav ">
                <div class="container-fluid">
                    <span class="navbar-brand fs-2 pointer_nav">
                        ABC
                    </span>

                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li class="nav-item me-4">
                                <button class="btn">Masuk</button>
                            </li>
                            <li class="nav-item">
                                <button class="btn">Daftar</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
