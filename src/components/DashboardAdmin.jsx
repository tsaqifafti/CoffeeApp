import React, { useRef } from "react";
import "../styles/sb-admin-2.min.css";
import { FiTrash2 } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

function DashboardAdmin({ userList, onDelete }) {
    const conponentPDF = useRef();

    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "List User",
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
                    <li className="nav-item active">
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
                    <li className="nav-item">
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
                                User Information
                            </h1>
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">
                                        List User
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
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
                                                    <th>Email</th>
                                                    <th>Password</th>
                                                    <th>Alamat</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tfoot className="text-center">
                                                <tr>
                                                    <th>id</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Password</th>
                                                    <th>Alamat</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {userList.map((user) => (
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.password}</td>
                                                        <td>{user.address}</td>
                                                        <td className="text-center">
                                                            <button
                                                                className="btn btn-circle p-0 text-light bg-danger"
                                                                onClick={() =>
                                                                    onDelete(
                                                                        user.id
                                                                    )
                                                                }
                                                            >
                                                                <FiTrash2 />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={generatePDF}
                                        >
                                            PDF
                                        </button>
                                    </div>
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
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Alamat</th>
                                    </tr>
                                </thead>
                                <tfoot className="text-center">
                                    <tr>
                                        <th>id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Alamat</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Maulana</td>
                                        <td>maulana@gmail.com</td>
                                        <td>oadw123456</td>
                                        <td>
                                            Jl. H. Baping Gg. Setia Rt16/07 no
                                            214 Jakarta Timur, POS : 16779
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>dapi</td>
                                        <td>baydapi@gmail.com</td>
                                        <td>simaa16sd</td>
                                        <td>
                                            Jl. Dukuh Gg. ASGO Rt01/07 no 44
                                            Jakarta Timur, POS : 16119
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

export default DashboardAdmin;
