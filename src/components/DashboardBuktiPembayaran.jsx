import React, { useRef } from "react";
import "../styles/sb-admin-2.min.css";
import { FiTrash2, FiCheck, FiImage } from "react-icons/fi";
import backgroundImg from "../img/100.jpeg";
import backgroundImg1 from "../img/800.jpeg";
import { useReactToPrint } from "react-to-print";

function DashboardBuktiPembayaran() {
    const conponentPDF = useRef();

    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "List bukti Pembayaran",
        onAfterPrint: () => alert("Data saved in PDF"),
    });
    return (
        <>
            <div id="wrapper">
                <ul
                    className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                    id="accordionSidebar"
                >
                    <a
                        className="sidebar-brand d-flex align-items-center justify-content-center"
                        href="/admin/dashboard"
                    >
                        <div className="sidebar-brand-icon rotate-n-15"></div>
                        <div className="sidebar-brand-text mx-3">
                            Admin Toko ABC
                        </div>
                    </a>
                    <hr className="sidebar-divider"></hr>
                    <div className="sidebar-heading">Control Panel</div>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/dashboard">
                            <i className="fas fa-fw fa-table"></i>
                            <span>User Information</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/produk">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Produk</span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/admin/pembayaran">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Bukti Pembayaran</span>
                        </a>
                    </li>
                    <hr className="sidebar-divider d-none d-md-block"></hr>
                </ul>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <form className="form-inline">
                                <button
                                    id="sidebarToggleTop"
                                    className="btn btn-link d-md-none rounded-circle mr-3"
                                >
                                    <i className="fa fa-bars"></i>
                                </button>
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/admin"
                                        id="userDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>
                                        <button className="btn bgc_card">
                                            logout
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="container-fluid">
                            <h1 className="h3 mb-2 text-gray-800">
                                Bukti Pembayaran
                            </h1>
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">
                                        List Bukti Pembayaran
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-resposive">
                                        <table
                                            className="table table-bordered"
                                            id="dataTable"
                                            width="100%"
                                            cellSpacing="0"
                                        >
                                            <thead className="text-center">
                                                <tr>
                                                    <th>id</th>
                                                    <th>Name</th>
                                                    <th>Struk</th>
                                                    <th>Alamat</th>
                                                    <th>Bukti Pembayaran</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tfoot className="text-center">
                                                <tr>
                                                    <th>id</th>
                                                    <th>Name</th>
                                                    <th>Struk</th>
                                                    <th>Alamat</th>
                                                    <th>Bukti Pembayaran</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Maulana</td>
                                                    <td>
                                                        Kopi Robusta Bali 200g,
                                                        Qty : 10, Total :
                                                        800.000
                                                    </td>
                                                    <td>
                                                        Jl. H. Baping Gg. Setia
                                                        Rt16/07 no 214 Jakarta
                                                        Timur, POS : 16779
                                                    </td>
                                                    <td className="text-center">
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <FiImage />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button className="btn btn-circle p-0 text-light bg-success me-1">
                                                                <FiCheck />
                                                            </button>
                                                            <button className="btn btn-circle p-0 text-light bg-danger">
                                                                <FiTrash2 />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>dapi</td>
                                                    <td>
                                                        Kopi Robusta Aceh Gayo
                                                        200g, Qty : 2, Total :
                                                        100.000
                                                    </td>
                                                    <td>
                                                        Jl. Dukuh Gg. ASGO
                                                        Rt01/07 no 44 Jakarta
                                                        Timur, POS : 16119
                                                    </td>
                                                    <td className="text-center">
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            <FiImage />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button className="btn btn-circle p-0 text-light bg-success me-1">
                                                                <FiCheck />
                                                            </button>
                                                            <button className="btn btn-circle p-0 text-light bg-danger">
                                                                <FiTrash2 />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button
                                            type="button"
                                            class="btn btn-danger"
                                            onClick={generatePDF}
                                        >
                                            PDF
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Bukti Pembayaran
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <img
                                        src={backgroundImg}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade table-resposive" tabIndex="-1">
                        <div ref={conponentPDF} style={{ width: "100%" }}>
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"
                            >
                                <thead className="text-center">
                                    <tr>
                                        <th>id</th>
                                        <th>Name</th>
                                        <th>Struk</th>
                                        <th>Alamat</th>
                                        <th>Bukti Pembayaran</th>
                                    </tr>
                                </thead>
                                <tfoot className="text-center">
                                    <tr>
                                        <th>id</th>
                                        <th>Name</th>
                                        <th>Struk</th>
                                        <th>Alamat</th>
                                        <th>Bukti Pembayaran</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Maulana</td>
                                        <td>
                                            Kopi Robusta Bali 200g, Qty : 10,
                                            Total : 800.000
                                        </td>
                                        <td>
                                            Jl. H. Baping Gg. Setia Rt16/07 no
                                            214 Jakarta Timur, POS : 16779
                                        </td>
                                        <td className="text-center">
                                            <img
                                                src={backgroundImg1}
                                                className="card-img-top"
                                                alt="..."
                                                style={{
                                                    width: "20vh",
                                                    height: "20vh",
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>dapi</td>
                                        <td>
                                            Kopi Robusta Aceh Gayo 200g, Qty :
                                            2, Total : 100.000
                                        </td>
                                        <td>
                                            Jl. Dukuh Gg. ASGO Rt01/07 no 44
                                            Jakarta Timur, POS : 16119
                                        </td>
                                        <td className="text-center">
                                            <img
                                                src={backgroundImg}
                                                className="card-img-bottom"
                                                alt="..."
                                                style={{ height: "20vh" }}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <footer className="sticky-footer bg-gradient-light">
                        <div className="container my-auto">
                            <div
                                className="copyright text-center my-auto"
                                style={{ color: "black" }}
                            >
                                <span>Copyright &copy; Toko ABC 2023</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default DashboardBuktiPembayaran;
