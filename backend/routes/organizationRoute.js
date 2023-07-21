const express = require('express');
const validator = require('../middlewares/validator');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const Organization = require('../models/organizationModel');
const adminauthMiddleware = require('../middlewares/adminauthMiddleware');
const AdminModel = require('../models/adminModels/adminModel');
const organizationRouter = express.Router();

organizationRouter.get('/', async (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;

    const pageNum = +page || 1;
    const pageLimit = +limit || 5;
    const skip = (pageNum - 1) * pageLimit;
    try {
        const org = await Organization.find(req.query).skip(skip).limit(limit);
        res.status(200).send(org);
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

organizationRouter.post('/addOrg', adminauthMiddleware, async(req, res) => {
    const {adminUserId} = req.body;
    try {
        if(adminUserId){
            const org = await Organization.create(req.body);
            res.status(200).send({'msg' : 'Organization added', org});
        }
        else{
            res.status(400).send({'msg' : 'You are not authorized'})
        }
    } catch (error) {
        res.status(400).send({'msg' : error.message})
    }
})

organizationRouter.put('/updateOrg/:id', adminauthMiddleware, async(req, res) => {
    const {adminUserId} = req.body;
    const id = req.params.id;
    const admin = await AdminModel.findOne({_id : id});

    try {
        if(adminUserId === admin.adminUserId.toString()){
            const org = await Organization.findByIdAndUpdate({_id : id}, req.body, {new : true});
            res.status(200).send({'msg' : 'Organization updated', org});
        }
        else{
            res.status(400).send({'msg' : 'You are not authorized to update!'})
        }
    } catch (error) {
        res.status(400).send({'msg' : error.message})
    }
})

organizationRouter.delete('/deleteOrg/:id', adminauthMiddleware, async(req, res) => {
    const {adminUserId} = req.body;
    const id = req.params.id;
    const admin = await AdminModel.findOne({_id : id});

    try {
        if(adminUserId === admin.adminUserId.toString()){
            const org = await Organization.findByIdAndDelete({_id : id});
            res.status(200).send({'msg' : 'Organization deleted'});
        }
        else{
            res.status(400).send({'msg' : 'You are not authorized to delete!'})
        }
    } catch (error) {
        res.status(400).send({'msg' : error.message})
    }
})

module.exports = organizationRouter;