const bycrypt = require("bcryptjs");
const fs = require('fs-extra');
const path = require('path');
const tbProduct = require('../models/product');
const tbTrans = require('../models/transaction');
const tbMember = require('../models/member');
const tbDiscount = require('../models/discount');
const tbType = require('../models/type');
const tbMerk = require('../models/merk');

module.exports = {

    loginMember: async (req, res) => {
      try {
        const { email, password } = req.body;
        const mail = await tbMember.findOne({email: email});
        const isPasswordMatch = await bycrypt.compare(password, mail.password);
        if(mail && isPasswordMatch == true){
          res.status(200).json({
            message: "Success Login",
            "response": 200,
            "result": { }
        })
        } else{
          res.status(400).json({
            message: "Nomor HP atau password salah",
            "response": 400,
            "result": null
        })
        }
      } catch (error) {
          res.status(500).json({ message: "Internal server error", "result" : error })
      }
  },

  registerMember: async (req, res) => {
    try {
      const { name, nik, email, no_hp, password, address } = req.body;
      const dataCreate = {
        name, nik, email, no_hp, password, address
      }
      const mail = await tbMember.findOne({email: email});
      if(mail){
        res.status(200).json({
          message: "Akun sudah terdaftar",
          "response": 200,
          "result": null
        })
      }else{
        await tbMember.create(dataCreate);
        res.status(200).json({
          message: "Success Create Member",
          "response": 200,
          "result": dataCreate
        })
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error", "result": error })
    }
  },


    getProduct: async (req, res) => {
        try {
            const product = await tbProduct.find()
                .populate({ path: 'typeId', select: 'id name' })
                .populate({ path: 'merkId', select: 'id name' })
            const merk = await tbMerk.find();
            const type = await tbType.find();
            res.status(200).json({
                message: "Success GET Product",
                "response": 200,
                "result": {
                    product,
                    merk,
                    type,
                }
            })
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    },

    filterbyDate : async (req, res) => {
      console.log("this is filter");
        try {
          const { startDate , endDate } = req.query;
            const trans = await tbTrans.find( {date_transaction : {$gte: startDate , $lte : endDate} , status : {$nin: ['KASBON' , 'DP']} }  )
            .populate({ path: 'member_Id ', select: 'nik name' })
            const member = await tbMember.find()
            res.status(200).json({
              message: "Success GET Data",
              "response": 200,
              "result": {
                trans,
                member,
              }
          })
        } catch (error) {
          req.flash("alertMessage", `${error.message}`);
          req.flash("alertStatus", 'danger');
          res.redirect("/admin/transaction");
          
        }
      } ,

    
    
}




