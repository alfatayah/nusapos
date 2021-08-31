const bycrypt = require("bcryptjs");
const fs = require('fs-extra');
const path = require('path');
const users = require('../models/user');
const tbTrans = require('../models/transaction');
const tbTransDetail = require('../models/transaction_detail');
const tbProduct = require('../models/product');
const tbDiscount = require('../models/discount');
const tbMember = require('../models/member');
const tbType = require('../models/type');
const tbMerk = require('../models/merk');
const { v4: uuidv4 } = require('uuid');
var mongoose = require('mongoose');
var moment = require('moment');  


module.exports = {
  viewTransaction: async (req, res) => {
    try {
      const trans = await tbTrans.find()
        .populate({ path: 'member_Id ', select: 'no_member name' })
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus, user: req.session.user };
      res.render('admin/transaction/view_transaction', {
        title: "Nusa | Transaction",
        user: req.session.user,
        trans,
        alert,
        action: 'view',
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", 'danger');
      res.redirect("/admin/transaction");
    }
  },

  showDetailTransaction: async (req, res) => {
    const { id } = req.params;
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      const trans_detail = await tbTransDetail.findOne({ _id: id })
        .populate({ path: "transaction_Id", populate: { path: "discountId" } })
      let transID = trans_detail.transaction_Id._id;
      const trans = await tbTrans.findOne({ _id: transID })
        .populate("product_id")
 
      res.render("admin/transaction/show_detail_transaction", {
        title: "Staycation | Detail Transaction",
        user: req.session.user,
        trans_detail,
        trans,
        alert
      });
    } catch (error) {
      console.log("error  " , error);
      res.redirect(`/admin/transaction/detail`);
    }
  },
  

   
      // push data di table transaksi detail (DP, kasbon)
      //
  paymentCash: async (req, res) => {
    // const { id } = req.params;
    const {transaction_id} = req.body;
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      // update status transaksi
      // const trans = await tbTrans.findOne({_id : id})
      console.log("ID trans " , transaction_id);
      // trans.status = "PAYMENT";
      // await trans.save();
      //  // update status di product
      // const product = await tbProduct.find({ _id : trans.productId});
      // for (var i = 0; i < product.length; i++){
      //   product[i].status = "AVALAIBLE";
      //   await product[i].save();
      // }
       


      res.render("/admin/transaction/show_detail_transaction" , {
        title: "Nusa | Payment Cash",
        user: req.session.user,
        alert
      })

    } catch (error) {
      console.log("error  " , error);
      res.redirect(`/admin/transaction/show_detail_transactionh`);

    }
  },

  showPrintTransaction: async (req, res) => {
    const { id } = req.params;
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      const TransDetail = await tbTransDetail.findOne({ _id: id })
      .populate("transaction_Id")
      .populate("product_id")
      .populate("discountId");
      res.render("admin/transaction/print", {
        title: "Staycation | Print Transaction",
        user: req.session.user,
        TransDetail,
        alert
      });
    } catch (error) {
      console.log("error  " , error);
      res.redirect(`/admin/transaction/print`);
    }
  },

 

}