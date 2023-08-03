let json = {
    data: [
        {
            img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1097.jpg",
            title: "title 1",
            price: "price 1",
            category: "cofee",
            harga: 45,
            id: "1",
        },
        {
            img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1009.jpg",
            title: "title 2",
            price: "price 2",
            category: "cofee",
            harga: 47,
            id: "2",
        },
        {
            img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/23.jpg",
            title: "title 3",
            price: "price 3",
            category: "cofee",
            harga: 85,
            id: "3",
        },
        {
            img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg",
            title: "title 4",
            price: "price 4",
            category: "cofee",
            harga: 58,
            id: "4",
        },
        {
            img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/555.jpg",
            title: "title 5",
            price: "price 5",
            category: "cofee",
            harga: 74,
            id: "5",
        },
        {
            img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/586.jpg",
            title: "title 6",
            price: "price 6",
            category: "cofee",
            harga: 15,
            id: "6",
        },
        {
            img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg",
            title: "title 7",
            price: "price 7",
            category: "tea",
            harga: 9,
            id: "7",
        },
        {
            img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/445.jpg",
            title: "title 8",
            price: "price 8",
            category: "tea",
            harga: 67,
            id: "8",
        },
        {
            img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1243.jpg",
            title: "title 9",
            price: "price 9",
            category: "tea",
            harga: 28,
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
