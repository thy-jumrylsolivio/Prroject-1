const data = [
    {
        id: "1",
        title: "Tiramisu",
        image: "https://picsum.photos/200/300?grayscale",
        price: "$5.00",
    },
    {
        id: "2",
        title: "Lemon ice Cream",
        description:"Mind Blowing Taste",
        image: "https://picsum.photos/200/300?grayscale",
        price: "$5.00",
    },
    {
        id: "3",
        title: "Chocolate Mousse",
        description: "Unexplained Flavour",
        image: "https://picsum.photos/200/300?grayscale",
        price: "$5.00",
    },
];

const topDesserts = data.map(dessert => {
    return {
        content: `${dessert.title} - ${dessert.description}`,
        price: dessert.price,
    }
})

export default function AppMap() {
    console.log(topDesserts);
    return <h1>Happy Eating</h1>;

}