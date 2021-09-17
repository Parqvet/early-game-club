const express = require('express');
// const cloudinary = require('../loaders/cloudinary');

const renderHome = async (req, res, next) => {
    try {
        res.render('index');
    } catch (error) {
        next(error);
    }
};

const renderGames = async (req, res, next) => {
    try {
        res.render('games');
    } catch (error) {
        next(error);
    }
};

const renderActions = async (req, res, next) => {
    try {
        res.render('actions');
    } catch (error) {
        next(error);
    }
};

const renderEvents = async (req, res, next) => {
    try {
        res.render('events');
    } catch (error) {
        next(error);
    }
};

module.exports = {
    renderHome,
    renderGames,
    renderActions,
    renderEvents
}