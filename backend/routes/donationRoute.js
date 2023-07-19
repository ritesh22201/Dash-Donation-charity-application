const express = require('express');
const auth = require('../middlewares/authMiddleware');
const DonationModel = require('../models/donationModel');
const donationRouter = express.Router();

donationRouter.get('/', auth, async (req, res) => {
    const { q } = req.query;
    const page = req.query.page;
    const limit = req.query.limit;

    try {
        const pageNum = +page || 1;
        const pageLimit = +limit || 5;
        const skip = (pageNum - 1) * pageLimit;

        if (q) {
            const donations = await DonationModel.find({ name: { $regex: q, $options: 'i' } }).skip(skip).limit(pageLimit);
            res.status(200).send(donations);
        }

        if (userId) {
            const donation = await DonationModel.find({ userId }).skip(skip).limit(pageLimit);
            res.status(200).send(donation);
        }
        else {
            const donations = await DonationModel.find().skip(skip).limit(pageLimit);
            res.status(200).send(donations);
        }
    } catch (error) {
        res.status(400).send({ 'msg': error.message });
    }
})

donationRouter.post('/addDonation', auth, async (req, res) => {
    try {
        
    } catch (error) {
       res.status(400).send({'msg' : error.message});
    }
})

module.exports = donationRouter;