const bycrypt = require("bcryptjs");
const fs = require('fs-extra');
const path = require('path');
const users = require('../models/user');
const tbProduct = require('../models/product');
const tbTrans = require('../models/transaction');
const tbTransDetail = require('../models/transaction_detail')
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
      const trans = await tbTrans.findOne({ _id: id })
      .populate("product_Id")
      .populate("discountId");
      console.log("transdetail " , trans);
      res.render("admin/transaction/show_detail_transaction", {
        title: "Staycation | Detail Transaction",
        user: req.session.user,
        trans,
        alert
      });
    } catch (error) {
      console.log("error  " , error);
      res.redirect(`/admin/transaction`);
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
      .populate("product_Id")
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

  addTrans: async (req, res) => {
    // const _id = uuidv4();
    // const _id = id.slice(0, 8)
    var transid = mongoose.Types.ObjectId();
    var transdetail_id = mongoose.Types.ObjectId();
    const trans = await tbTrans.find()
    const numberinvoice =  trans.length + 1;
    const invoice = "N"+ moment().format('DDMMYY') + numberinvoice ;
    const status = "PAYMENT";
    const { select2, productId, start_date, end_date, jaminan ,time , days , subtotal,diskonID, total_discount, total,  desc_diskon, userID, date_transaction }  = req.body;
    const product = await tbProduct.find({ _id : productId});
  
    console.log("transid  " + transid);
    console.log("productId  " + productId);
    console.log("jaminan  " + jaminan);
    console.log("time  " + time);
    console.log("start_date  " + start_date);
    console.log("end_date  " + end_date);
    console.log("days  " + days);
    console.log("memberID  " + select2);
    console.log("diskonID  " + diskonID); 
    console.log("subtotal  " + subtotal); 
    console.log("total_discount  " + total_discount); 
    console.log("total  " + total); 
    console.log("desc_diskon  " + desc_diskon); 
    console.log("userID " + userID);
    console.log("date_transaction " + date_transaction);
    console.log("invoice " + invoice);
    try {
      if(!productId || product.status === "NOT AVALAIBLE" ){
        req.flash("alertMessage", "Product Empty or Not Avalaible");
        req.flash("alertStatus", "danger");
        res.redirect(`/admin/dashboard`);
      } else {
        const newTransaction = {
          _id: transid,
          member_Id: select2, 
          subtotal, 
          total,
          total_discount, 
          start_date, 
          end_date, 
          days,
          invoice,
          status, 
          jaminan,
          date_transaction,
          userID,
          product_Id: productId,
          discountId: diskonID,
          desc_diskon,
          transdetail_id,
        }
        await tbTrans.create(newTransaction);
        await tbTransDetail.create({ _id:transdetail_id , transaction_Id: transid })
        // const productAll = tbProduct.find();
     
        for (var i = 0; i < product.length; i++){
        product[i].status = "NOT AVALAIBLE";
        await product[i].save();
        }
        req.flash("alertMessage", "Succes Add Transaction");
        req.flash("alertStatus", "success");
        res.redirect(`/admin/dashboard`);
      }
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", 'danger');
      res.redirect(`/admin/dashboard`);
    }
  },

}