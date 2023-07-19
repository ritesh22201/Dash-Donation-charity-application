const express = require('express');
const auth = require('../middlewares/authMiddleware');
const DonationModel = require('../models/donationModel');
const donationRouter = express.Router();

donationRouter.get('/', async(req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    try {
        const pageNum = +page || 1;
        const pageLimit = +limit || 5;
        const skip = (pageNum - 1) * pageLimit;

        const donations = await DonationModel.find().skip(skip).limit(pageLimit);
        res.status(200).send(donations);
    } catch (error) {
        res.status(400).send({ 'msg': error.message });
    }
})

donationRouter.get('/filter', auth, async (req, res) => {
    const { q } = req.query;
    const page = req.query.page;
    const limit = req.query.limit;
    const userId = req.body.userId;
    try {
        const pageNum = +page || 1;
        const pageLimit = +limit || 5;
        const skip = (pageNum - 1) * pageLimit;

        if (q) {
            const donations = await DonationModel.find({ name: { $regex: q, $options: 'i' } }).skip(skip).limit(pageLimit);
            return res.status(200).send(donations);
        }

        if (userId) {
            const donation = await DonationModel.find({ userId }).skip(skip).limit(pageLimit);
            return res.status(200).send(donation);
        }
        
    } catch (error) {
        res.status(400).send({ 'msg': error.message });
    }
})

donationRouter.post('/addDonation', auth, async (req, res) => {
    try {
       const donation = await DonationModel.create(req.body);
       res.status(200).send({'msg' : 'Thank you for your contribution🫶', donation});  
    } catch (error) {
       res.status(400).send({'msg' : error.message});
    }
})

donationRouter.put('/update/:id', auth, async(req, res) => {
    const id = req.params.id;
    const userId = req.body.userId;
    const user = await DonationModel.findOne({_id : id});
    try {
        if(userId === user.userId.toString()){
            const donator = await DonationModel.findByIdAndUpdate({_id : id});
            res.status(200).send({'msg' : 'Data updated', donator});
        }
        else{
            res.status(400).send({'msg' : 'You are not authorized to update'});
        }
       
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

donationRouter.delete('/delete/:id', auth, async(req, res) => {
    const id = req.params.id;
    const userId = req.body.userId;

    const user = await DonationModel.findOne({_id : id});
    try {
        if(userId === user.userId.toString()){
            const deletedUser = await DonationModel.findByIdAndDelete({_id : id});
            res.status(200).send({'msg' : 'Entry deleted'});
        }
        else{
            res.status(400).send({'msg' : 'You are not authorized to delete'});
        }
    } catch (error) {
       res.status(400).send({'msg' : error.message});
    }
})

module.exports = donationRouter;