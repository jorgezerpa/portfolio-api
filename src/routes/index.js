const { Router } = require('express')
const { DBConnection } = require('../database')

const router = Router()

router.get('/projects', async(req, res)=>{
    const result = await DBConnection.list('projects')
    res.send(result)
})

router.get('/testimonies', async(req, res)=>{
    const result = await DBConnection.list('testimonies')
    res.send(result)
})

router.get('/profile', async(req, res)=>{
    const result = await DBConnection.list('profile')
    res.send(result)
})

module.exports = { router };