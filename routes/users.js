const express = require('express');
const usersBLL = require('../BLL/usersBLL');
const memberBLL =require('../../subscription-ws/BLL/memberBLL')
const movieBLL =require('../../subscription-ws/BLL/movieBLL')
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const users = await usersBLL.getAllUsers();
        res.send(users);
    } catch (error) {
        res.send(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await usersBLL.getUserById(id);
        res.send(user)
    } catch (error) {
        res.send(error);
    }
})

router.post('/', async (req, res) => {
    try {
        const user = req.body;
        const result = await usersBLL.addUser(user);
        res.send(result)
    } catch (error) {
        res.send(error);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = req.body;
        const result = await usersBLL.updateUser(id, user);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await usersBLL.deleteUser(id);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

router.get('/member', async (req, res) => {
    try {
        const users = await memberBLL.getAllMembers();
        res.send(users);
    } catch (error) {
        res.send(error);
    }
})
// router.get('/movie', async (req, res) => {
//     try {
//         const movies = await movieBLL.getAllMovies();
//         res.send(movies);
//     } catch (error) {
//         res.send(error);
//     }
// })
module.exports = router;