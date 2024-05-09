// const express = require('express')
const router = require('express').Router()
const places = require('../models/places.js')

// GET /places/new
router.get('/new', (req, res) => {
    console.log(req.body)
    res.render('places/new')
})

// POST /places
router.post('/', (req, res) => {
    // console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'public/images/kitten.jpg'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    console.log(places)
    res.redirect('/places')
})




// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-restaurant.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee.jpg'
    }]

    res.render('places/index', { places })

})



module.exports = router;
