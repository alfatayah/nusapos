const bycrypt = require("bcryptjs");
const fs = require('fs-extra');
const path = require('path');
const tbProduct = require('../models/product');
const tbTrans = require('../models/transaction');
const tbMember = require('../models/member');
const tbDiscount = require('../models/discount');
const tbBooking = require('../models/booking');
const tbType = require('../models/type');
const tbMerk = require('../models/merk');

module.exports = {

    loginMember: async (req, res) => {
      try {
        const { email, password } = req.body;
        const dataUser = await tbMember.findOne({email: email});
        const isPasswordMatch = await bycrypt.compare(password, dataUser.password);
        if(dataUser && isPasswordMatch == true){
          res.status(200).json({
            message: "Success Login",
            "response": 200,
            "result": {
              message: "Sukses Login",
              name: dataUser.name,
              userToken: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
             }
        })
        } else if (dataUser || isPasswordMatch == true) {
          res.status(404).json({
            message: "Nomor HP atau password salah",
            "response": 404,
            "result" : null,
        })
        } else if (dataUser && isPasswordMatch == false) {
          res.status(404).json({
            message: "Akun belum terdaftar",
            "response": 404,
            "result" : null,
        }) }

      } catch (error) {
          res.status(500).json({ message: "Internal server error", "result" : {
            message: "Internal server error"
          } })
      }
  },

  registerMember: async (req, res) => {
    try {
      const { name, nik, email, no_hp, password, address } = req.body;
      const status = "Not Verified";
      const dataCreate = {
        name, nik, email, no_hp, password, address, status
      }
      const mail = await tbMember.findOne({email: email});
      if(mail){
        res.status(404).json({
          message: "Akun sudah terdaftar",
          "response": 404,
          "result": {
            message: "Akun sudah terdaftar",
          }
        })
      }else {
        await tbMember.create(dataCreate);
        res.status(200).json({
          message: "Sukses membuat akun",
          "response": 200,
          "result": {
            message: "Sukses membuat akun",
          }
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
            res.status(200).json({
                message: "Success GET Product",
                "response": 200,
                "result": {
                    message: "Success GET Product",
                    product: product
                }
            })
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    },

    addBooking : async (req, res) => {
      try{
        const {dateIn, dateOut, totalDays, product_id, totalBooking  } = req.body;
        const newItem = {
          dateIn, dateOut, totalDays, product_id, totalBooking
        }

        await tbBooking.create(newItem);

        for (let i = 0; i < product_id.length; i++) {
          const product = await tbProduct.findOne({ _id:  product_id[i] })
          product.status = "Not Available";
          await product.save();
        }
        res.status(200).json({
          message: "Success Add Booking",
          "response": 200,
          "result": {
              message: "Success Add Booking",
          }
      })
      }catch(error){
        res.status(500).json({ message: "Internal server error", "result" : {
          message: "Internal server error"
        } })

        console.log("eror " , error)
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




