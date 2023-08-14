module.exports = {
    currencyFormat: function (value) {
        let VND = new Intl.NumberFormat('vi-VN');
        return VND.format(value)
    }
}