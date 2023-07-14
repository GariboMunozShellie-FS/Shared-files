const express = require("express");
const app = express()
const jwtRoutes = require('../routes/jwtRoutes')

app.get("/", (req, res, next) => {
    res.status(201).json({
        message: `Service is Up`,
        method: req.method
    })
});

app.use('/example', jwtRoutes);

app.use((req, res, next)=> {
    const error = new Error("Not Found!");
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status
    }})
});


module.exports = app