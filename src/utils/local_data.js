let json = {
    data: [
        {
            img: "https://s-ecom.ottenstatic.com/original/6214a26282e97034593177.jpg",
            title: "Kopi Robusta Bali 200g",
            price: "price 1",
            category: "robusta",
            harga: "68.000",
            id: "1",
        },
        {
            img: "https://s-ecom.ottenstatic.com/original/6214aa4accfd9320200676.jpg",
            title: "Kopi Robusta Aceh Gayo 200g",
            price: "price 2",
            category: "robusta",
            harga: "74.000",
            id: "2",
        },
        {
            img: "https://s-ecom.ottenstatic.com/original/63b3dadf9657f270681591.jpg",
            title: "Kopi Robusta Sidikalang 200g",
            price: "price 3",
            category: "robusta",
            harga: '84.000',
            id: "3",
        },
        {
            img: "https://s-ecom.ottenstatic.com/original/6214ae554c32d845336730.jpg",
            title: "Kopi Robusta Lampung 200g",
            price: "price 4",
            category: "robusta",
            harga: "68.0000",
            id: "4",
        },
        {
            img: "https://s-ecom.ottenstatic.com/original/6214a3562ab6b473775036.jpg",
            title: "Kopi Robusta Dampit 200g",
            price: "price 5",
            category: "robusta",
            harga: "74.000",
            id: "5",
        },
        {
            img: "https://s-ecom.ottenstatic.com/original/621736200a81f635067855.jpg",
            title: "Kopi Robusta Flores Manggarai 200g",
            price: "price 6",
            category: "robusta",
            harga: "74.000",
            id: "6",
        },
        {
            img: "https://s-ecom.ottenstatic.com/original/6214be8ea0661911947116.jpg",
            title: "Sidikalang 200g Kopi Arabica",
            price: "price 7",
            category: "arabica",
            harga: "94.000",
            id: "7",
        },
        {
            img: "https://s-ecom.ottenstatic.com/original/62146089e8f0c028418946.jpg",
            title: "Premium Arabica - 500gr",
            price: "price 8",
            category: "arabica",
            harga: "119.000",
            id: "8",
        },
        {
            img: "https://s-ecom.ottenstatic.com/original/63aeb894b25ec951669994.jpg",
            title: "Aceh Gayo 200g - Arabica",
            price: "price 9",
            category: "arabica",
            harga: '98.000',
            id: "9",
        },
    ],
};

function getData() {
    return json;
}

function getProduct(id) {
    const foundedProduct = json.data.find((product) => product.id === id);
    return foundedProduct;
}

export { json, getData, getProduct };
