const shopRouter = require('./shop.route');
const siteRouter = require('./site.route');

function route(app) {

 app.use('/shop', shopRouter);

 app.use('/', siteRouter);

 
}

module.exports = route;