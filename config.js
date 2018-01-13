exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    (process.env.NODE_ENV === 'production' ?
        'mongodb://admin:admin@ds155577.mlab.com:55577/my-recipe-finder-node-capstone' :
        'mongodb://admin:admin@ds155577.mlab.com:55577/my-recipe-finder-node-capstone');
exports.PORT = process.env.PORT || 5001;
