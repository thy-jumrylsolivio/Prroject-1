const topDesserts = [
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
        price: "$3.00",
    },
    {
        id: "3",
        title: "Chocolate Mousse",
        description: "Unexplained Flavour",
        image: "https://picsum.photos/200/300?grayscale",
        price: "$4.00",
    },
];

function AppMapV2() {

    const listItems = topDesserts.map(dessert => {
        const itemText =`${dessert.title} - ${dessert.price}`
        return <li>{itemText}</li>
    })
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );

}

export default AppMapV2