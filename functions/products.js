exports.handler = async (event, context) => {

    const firstProducts = [ {
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81J5r9dANGL._SL1500_.jpg",
        "name": "Chair",
        "count": "23",
        "size": {
            "width": "33",
            "height": "2333"
        },
        "weight": "233g",
        "id": 1
    }, {
            "imageUrl": "https://www.ikea.com/om/en/images/products/ingatorp-extendable-table-black__0737088_pe740878_s5.jpg",
            "name": "Table",
            "count": "22",
            "size": {
                "width": "33",
                "height": "23"
            },
            "weight": "3g",
            "id": 2
        }]
    return {
        statusCode: 200,
        body: JSON.stringify(firstProducts),
    }

};