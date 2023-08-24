import React, { useState, useRef } from "react";
import "../styles/sb-admin-2.min.css";
import { FiTrash2, FiSettings, FiImage, FiPlus } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

function DashboardProduk({
    productList,
    onDelete,
    categoryList,
    addProduk,
    modifyProduk,
}) {
    const conponentPDF = useRef();
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [name, setName] = useState("");
    const [harga, setHarga] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(20);
    const [file, setFile] = useState(null);
    const [product_category_id, set_product_category_id] = useState(1); // State untuk nilai yang dipilih

    const handleJudulChange = (event) => {
        setName(event.target.value); // Memperbarui nilai yang dipilih saat opsi berubah
    };

    // const handleStockChange = (event) => {
    //     setStock(event.target.value); // Memperbarui nilai yang dipilih saat opsi berubah
    // };

    const handleHargaChange = (event) => {
        setHarga(event.target.value); // Memperbarui nilai yang dipilih saat opsi berubah
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value); // Memperbarui nilai yang dipilih saat opsi berubah
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]; // Menggunakan files[0] untuk mengakses file terpilih
        setFile(selectedFile);
    };

    const handleCategoryChange = (event) => {
        set_product_category_id(event.target.value); // Memperbarui nilai yang dipilih saat opsi berubah
    };

    const openImageModal = (productId) => {
        setSelectedProductId(productId);
    };

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("stock", stock);
        formData.append("harga", harga);
        formData.append("description", description);
        formData.append("product_category_id", product_category_id);
        formData.append("file", file); // Mengirim file dalam FormData

        addProduk(formData); // Mengirimkan FormData ke fungsi addProduk
    };

    const onSubmitModifyEventHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        // formData.append("name", name);
        // formData.append("stock", stock);
        // formData.append("harga", harga);
        // formData.append("description", description);
        // formData.append("product_category_id", product_category_id);
        // formData.append("file", file); // Mengirim file dalam FormData

        // modifyProduk(formData, selectedProductId); // Mengirimkan FormData ke fungsi addProduk
        // console.log(selectedProductId);
        if (name.length > 0) {
            formData.append("name", name);
        } else if (harga.length > 0) {
            formData.append("harga", harga);
        } else if (description.length > 0) {
            formData.append("description", description);
        } else if (product_category_id.length > 0) {
            formData.append("product_category_id", product_category_id);
        } else if (file.name != undefined) {
            formData.append("file", file);
        }

        modifyProduk(formData, selectedProductId);
    };

    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "List Produk",
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
                    <li className="nav-item active">
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
                                Produk Toko ABC
                            </h1>
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">
                                        List Produk
                                    </h6>
                                    <button
                                        type="button"
                                        className="btn btn-primary d-flex"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addModal"
                                    >
                                        <FiPlus
                                            className="me-2"
                                            style={{ fontSize: "1.5rem" }}
                                        />{" "}
                                        Tambah Produk
                                    </button>
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
                                                    <th>Image</th>
                                                    <th>Judul</th>
                                                    <th>Deskripsi</th>
                                                    <th>Harga</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tfoot className="text-center">
                                                <tr>
                                                    <th>id</th>
                                                    <th>Image</th>
                                                    <th>Judul</th>
                                                    <th>Deskripsi</th>
                                                    <th>Harga</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {productList.map((product) => (
                                                    <tr key={product.id}>
                                                        <td>{product.id}</td>
                                                        <td className="text-center">
                                                            <button
                                                                type="button"
                                                                className="btn btn-warning"
                                                                onClick={() =>
                                                                    openImageModal(
                                                                        product.id
                                                                    )
                                                                }
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                            >
                                                                <FiImage />
                                                            </button>
                                                        </td>
                                                        <td>{product.name}</td>
                                                        <td>
                                                            {
                                                                product.description
                                                            }
                                                        </td>
                                                        <td>
                                                            Rp {product.harga}
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <button
                                                                    className="btn btn-circle p-0 text-light bg-success me-1"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#modifyModal"
                                                                    onClick={() =>
                                                                        openImageModal(
                                                                            product.id
                                                                        )
                                                                    }
                                                                >
                                                                    <FiSettings />
                                                                </button>
                                                                <button
                                                                    className="btn btn-circle p-0 text-light bg-danger"
                                                                    onClick={() =>
                                                                        onDelete(
                                                                            product.id
                                                                        )
                                                                    }
                                                                >
                                                                    <FiTrash2 />
                                                                </button>
                                                            </div>
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
                                        Gambar Produk
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {selectedProductId && (
                                        <img
                                            src={`http://localhost:3000/${
                                                productList.find(
                                                    (product) =>
                                                        product.id ===
                                                        selectedProductId
                                                ).image
                                            }`}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                    )}
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
                    
                    <div
                        className="modal fade"
                        id="addModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <form
                                onSubmit={onSubmitEventHandler}
                                encType="multipart/form-data"
                            >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel"
                                        >
                                            Tambah Produk
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="judul-name"
                                                className="col-form-label"
                                            >
                                                Judul :
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={name}
                                                onChange={handleJudulChange}
                                                id="judul-name"
                                            />
                                        </div>
                                        {/* <div className="mb-3">
                                            <label
                                                htmlFor="harga-name"
                                                className="col-form-label"
                                            >
                                                Stock :
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={stock}
                                                onChange={handleStockChange}
                                                id="judul-name"
                                            />
                                        </div> */}
                                        <div className="mb-3">
                                            <label
                                                htmlFor="harga-name"
                                                className="col-form-label"
                                            >
                                                Harga :
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={harga}
                                                onChange={handleHargaChange}
                                                id="judul-name"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="deskripsi-text"
                                                className="col-form-label"
                                            >
                                                Deskripsi :
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="deskripsi-text"
                                                value={description}
                                                onChange={
                                                    handleDescriptionChange
                                                }
                                            ></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="inputGroupFile04"
                                                className="col-form-label"
                                            >
                                                Foto Produk :
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    // value={file}
                                                    onChange={handleFileChange}
                                                    id="inputGroupFile04"
                                                    aria-describedby="inputGroupFileAddon04"
                                                    aria-label="Upload"
                                                />
                                                {/* {file && <p>{file.name}</p>}{" "} */}
                                                {/* Menampilkan nama file yang terpilih */}
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            {/* <label
                                                class="input-group-text"
                                                for="inputGroupSelect01"
                                            >
                                                Category
                                            </label> */}

                                            <select
                                                className="form-select"
                                                id="inputGroupSelect01"
                                                value={product_category_id}
                                                onChange={handleCategoryChange}
                                            >
                                                {/* <option value="" disabled>
                                                    Category
                                                </option> */}
                                                {categoryList.map(
                                                    (category) => (
                                                        <option
                                                            key={category.id}
                                                            value={category.id}
                                                        >
                                                            {category.name}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Simpan
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div
                        className="modal fade"
                        id="modifyModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <form
                                onSubmit={onSubmitModifyEventHandler}
                                encType="multipart/form-data"
                            >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        {selectedProductId && (
                                            <h5
                                                className="modal-title"
                                                id="exampleModalLabel"
                                            >
                                                Edit Produk :{" "}
                                                {
                                                    productList.find(
                                                        (product) =>
                                                            product.id ===
                                                            selectedProductId
                                                    ).id
                                                }
                                            </h5>
                                            // <img
                                            //     src={`http://localhost:3000/$}`}
                                            //     className="card-img-top"
                                            //     alt="..."
                                            // />
                                        )}

                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="judul-name"
                                                className="col-form-label"
                                            >
                                                Judul :
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={name}
                                                onChange={handleJudulChange}
                                                id="judul-name"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="harga-name"
                                                className="col-form-label"
                                            >
                                                Harga :
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={harga}
                                                onChange={handleHargaChange}
                                                id="judul-name"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="deskripsi-text"
                                                className="col-form-label"
                                            >
                                                Deskripsi :
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="deskripsi-text"
                                                value={description}
                                                onChange={
                                                    handleDescriptionChange
                                                }
                                            ></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="inputGroupFile04"
                                                className="col-form-label"
                                            >
                                                Foto Produk :
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    // value={file}
                                                    onChange={handleFileChange}
                                                    id="inputGroupFile04"
                                                    aria-describedby="inputGroupFileAddon04"
                                                    aria-label="Upload"
                                                />
                                                {/* {file && <p>{file.name}</p>}{" "} */}
                                                {/* Menampilkan nama file yang terpilih */}
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            {/* <label
                                                class="input-group-text"
                                                for="inputGroupSelect01"
                                            >
                                                Category
                                            </label> */}

                                            <select
                                                className="form-select"
                                                id="inputGroupSelect01"
                                                value={product_category_id}
                                                onChange={handleCategoryChange}
                                            >
                                                {/* <option value="" disabled>
                                                    Category
                                                </option> */}
                                                {categoryList.map(
                                                    (category) => (
                                                        <option
                                                            key={category.id}
                                                            value={category.id}
                                                        >
                                                            {category.name}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Simpan
                                        </button>
                                    </div>
                                </div>
                            </form>
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
                                        <th>Image</th>
                                        <th>Judul</th>
                                        <th>Deskripsi</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tfoot className="text-center">
                                    <tr>
                                        <th>id</th>
                                        <th>Image</th>
                                        <th>Judul</th>
                                        <th>Deskripsi</th>
                                        <th>Harga</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {productList.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td className="text-center">
                                                <img
                                                    src={`http://localhost:3000/${product.image}`}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{product.description}</td>
                                            <td>Rp {product.harga}</td>
                                        </tr>
                                    ))}
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

export default DashboardProduk;
