const bycrypt = require("bcryptjs");
const fs = require('fs-extra');
const path = require('path');
const users = require('../models/user');
const tbProduct = require('../models/product');
const tbTrans = require('../models/transaction');
const tbMember = require('../models/member');
const tbType = require('../models/type');
const tbMerk = require('../models/merk');
const tbdiscount = require('../models/discount');
const { v4: uuidv4 } = require('uuid');
var mongoose = require('mongoose');
// var _id = mongoose.Types.ObjectId();


module.exports = {
  // viewProduct: async (req, res) => {
  //   try {
  //     const product = await tbProduct.find()
  //     .populate({ path: 'typeId', select: 'id name' })
  //     .populate({ path: 'merkId', select: 'id name' })
  //     const merk = await tbMerk.find();
  //     const type = await tbType.find();
  //     const alertMessage = req.flash("alertMessage");
  //     const alertStatus = req.flash("alertStatus");
  //     const alert = { message: alertMessage, status: alertStatus , user: req.session.user };
  //     res.render('admin/product/view_product', {
  //       title: "Nusa | Product",
  //       user: req.session.user, 
  //       merk,
  //       type,
  //       product,
  //       alert,
  //     });
  //   } catch (error) {
  //     req.flash("alertMessage", `${error.message}`);
  //     req.flash("alertStatus", 'danger');
  //     res.redirect("/admin/product");
  //   }
  // },

  addItem: async (req, res) => {
    try {
      const { categoryId, title, price, city, about } = req.body;
      if (req.files.length > 0) {
        const category = await Category.findOne({ _id: categoryId });
        const newItem = {
          categoryId,
          title,
          description: about,
          price,
          city
        }
        const item = await Item.create(newItem);
        category.itemId.push({ _id: item._id });
        await category.save();
        for (let i = 0; i < req.files.length; i++) {
          const imageSave = await Image.create({ imageUrl: `images/${req.files[i].filename}` });
          item.imageId.push({ _id: imageSave._id });
          await item.save();
        }
        req.flash("alertMessage", "Succes Add Item");
        req.flash("alertStatus", "success");
        res.redirect("/admin/item");
      }
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash("alertStatus", 'danger');
      res.redirect("/admin/item");
    }
  },

  addProduct: async (req, res) => {
    try {
      const { product_name, typeId, merkId, status, price , description , barcode  } = req.body;
      if(req.files.length > 0 ){
        let images = [];
        for (let i = 0; i < req.files.length; i++) {
          const image = `images/${req.files[i].filename}`
          images.push(image);
        }
     
        const dataType = await tbType.findOne({_id: typeId});
        const dataMerk = await tbMerk.findOne({_id : merkId});
        console.log("Image : ", images);
        const  newItem = {
          typeId,
          merkId,
          product_name, 
          status, 
          description, 
          images,
          price ,
          barcode  
        }
        const dataItem = await tbProduct.create(newItem);
        dataType.product_id.push({_id : dataItem._id})
        await dataType.save();
        dataMerk.product_id.push({_id : dataItem._id})
        await dataMerk.save();
        req.flash("alertMessage", "Succes Add Product");
        req.flash("alertStatus", "success");
        res.redirect("/admin/product");
      }

    } catch (error) {
      console.log("Error  : ", error);
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", 'danger');
      res.redirect("/admin/product");
    }
  },

  editProduct: async (req, res) => {
    const { id, name, merkId, typeId , status, price , description , barcode  } = req.body;
    try {
      const product = await tbProduct.findOne({ _id : id})
      .populate({ path: 'merkId', select: 'id name'})
      .populate({ path: 'typeId', select: 'id name'})
      if(req.file == undefined){
        console.log("masuk ke validation undefined " , product);
        product.typeId = typeId;
        product.merkId = merkId;
        product.product_name = name;
        product.status = status;
        product.description = description;
        product.price = price;
        product.barcode = barcode;
        await product.save();
        req.flash("alertMessage", "Succes Update Product");
        req.flash("alertStatus", "success");
        res.redirect("/admin/product");
      } else {
        await fs.unlink(path.join(`public/${product.image}`));
        product.typeId = typeId;
        product.merkId = merkId;
        product.product_name = name;
        product.status = status;
        product.image = `images/${req.file.filename}`
        product.price = price;
        product.description = description;
        product.barcode = barcode;
        await product.save();
        req.flash("alertMessage", "Succes Update Product");
        req.flash("alertStatus", "success");
        res.redirect("/admin/product");
      }
    } catch (error) {
     req.flash("alertMessage", `${error.message}`);
     req.flash("alertStatus", 'danger');
     res.redirect("/admin/product");
    }
   },

   deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await tbProduct.findOne({ _id: id });
      await fs.unlink(path.join(`public/${product.image}`));
      await product.remove();
      req.flash('alertMessage', 'Success Delete Product');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/product');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/product');
    }
  },

}