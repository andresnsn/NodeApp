const router = require('express').Router();
const Portfolio = require('../models/Portfolio')
//Get All
router.get('/', async (req, res) => {

    try{
        const portfolio = await Portfolio.find()
        
        res.json({
            success: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})
//Get One
router.get('/:slug', async (req, res) => {

    try{
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})
//Create
router.post('/', async (req, res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    })

    try{
        const savedPortfolio = await portfolio.save()
        res.json({
            success: true,
            data: savedPortfolio
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }

    // portfolio
    //         .save()
    //         .then((data) => {
    //             res.json({
    //                 success: true,
    //                 data
    //             })
    //         })
    //         .catch((err) => {
    //             res.json({
    //                 success: false,
    //                 message: err
    //             })
    //         })
})

//Update

//Delete

module.exports = router