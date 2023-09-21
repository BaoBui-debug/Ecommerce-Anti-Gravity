module.exports = {
    MongooseToObject: function (mongoose) {
        return mongoose.map(products => products.toObject())
    },
    QueryToObject: function (query) {
        return {
            name: query.name,
            img: query.img,
            alt: query.alt,
            price: query.price,
            quantity: query.quantity,
            et: query.et
        }
    },
    GetTotal: function (array) {
        var price = array.map(arr => arr.price * arr.quantity);

        var total = price.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return total;
    },
    CartCount: function (array) {
        return array.length;
    }

}