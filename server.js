const next = require('next');
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();


const authenticate = async (email, password) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data.find(user => {
        if (user.email === email && user.website === password) {
            return user;
        }
    });
}

app.prepare().then(() => {
    const server = express();

    server.use(express.json());
    server.use(cookieParser("123123"));

    server.post('/api/login', async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await authenticate(email, password);
            if (!user) {
                return res.status(403).send("Invalid credentials");
            }
            const data = {
                name: user.name,
                email: user.email,
                phone: user.phone,
                test: 'test'
            }
            res.cookie('token', data, {
                httpOnly: true,
                signed: true,
            });
            res.json({ user: data });
        } catch (e) {
            res.status(500).send(e.message);
        }
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
        if (err) throw err;
    });
});