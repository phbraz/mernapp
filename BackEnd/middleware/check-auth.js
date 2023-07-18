import jwt from "jsonwebtoken";

const validateToken = (req, res, next) => {
    try {
        const token  = req.headers.authorization.split(' ')[1]; //this handles token from the header
        if (!token) {
            throw new Error('Authentication failed')
        }

        const decodedToken = jwt.verify(token, 'secret-super-key');
        req.userData = { userId: decodedToken.userId }
        next();

    } catch (errorData) {
        const error = new Error('authentication failed')
        return next(error);
    }
}

export { validateToken }