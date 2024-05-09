// const express = require('express')
const router = require('express').Router()
const places = require('../models/places.js')

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })

})


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

// Show/ route
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
})

// delete route
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})





module.exports = router;
