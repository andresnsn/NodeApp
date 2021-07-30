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
        description: req.body.description,
        image: req.body.image
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


})

//Update
router.patch('/:slug', async(req, res) => {
    try{
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
        {
            title: req.body.title,
            description: req.body.description,
            image: req.body.image
        })
        res.json({
            success: true,
            updated: updatedPortfolio.nModified
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})
//Delete

router.delete('/:slug', async (req, res) => {
    try{
        const deletedPortfolio = await Portfolio.deleteOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            deleted: deletedPortfolio.deletedCount
        })

    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }



})

module.exports = router

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