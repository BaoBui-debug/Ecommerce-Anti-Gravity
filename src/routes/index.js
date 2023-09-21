const siteRouter = require('./site.route');

function route(app) {
    app.use('/', siteRouter);
}

module.exports = route;