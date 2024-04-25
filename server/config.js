const {
    PORT = 8000,
    NODE_ENV = 'development',
    SESS_NAME = 'sid',
    SESS_SECRET = 'secret!session',
    SESS_LIFETIME = 1000 * 60 * 60 * 2,
    JWT_SECRET="DrEk4M87onU9R?Ri@hiT"
} = process.env;

module.exports = {
    PORT,
    NODE_ENV,
    SESS_NAME,
    SESS_SECRET,
    SESS_LIFETIME,
    JWT_SECRET
    
};
