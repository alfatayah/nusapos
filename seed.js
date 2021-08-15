var seeder = require('mongoose-seed');
var mongoose = require('mongoose');
require('dotenv').config();
let localDB =  process.env.LOCAL_DB;
let deployDB =  process.env.DEPLOY_DB;
seeder.connect(deployDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: false,
}, function () {

  // Load Mongoose models
  seeder.loadModels([
    './models/user',
    './models/member',
    './models/merk',
    './models/product',
    './models/transaction',
    './models/transaction_detail',
    './models/discount',
    './models/type',
    './models/cash_payment',
    './models/split_payment',
    './models/transfer_payment',
    './models/kasbon_payment',
    './models/dp_payment'
  ]);

  // Clear specified collections
  seeder.clearModels(['user' , 'member', 'merk','product' , 'transaction', 'transaction_detail', 'discount', 'type', 'cash_payment', 'split_payment', 'transfer_payment','kasbon_payment', 'dp_payment'  ], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });

  });
});

var data = [
  {
    'model': 'user',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        username: 'admin',
        password: 'rahasia',
        status: 'active',
      },
    ]
  },
  {
    'model': 'member',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903315'),
        no_member: "NK000326",
        name: 'fadhil',
        no_hp: 0893733342323,
        username_ig: '@alfatayah',
        identity: 21312312313123,
        status: 1,
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b17300fc903315'),
        no_member: "NK000327",
        name: 'Arya',
        no_hp: 0893733342323,
        username_ig: '@arya',
        identity: 21312312313123,
        status: 1,
      },
      {
        _id: mongoose.Types.ObjectId('5196cbe292b17300fc903315'),
        no_member: "NK000328",
        name: 'Putra',
        no_hp: 0893733342323,
        username_ig: '@Putra',
        identity: 21312312313123,
        status: 1,
      },
    ]
  },
  {
    'model': 'merk',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('1e96cbe292b97300fc904315'),
        name: 'Canon',
        product_Id: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
        ]
      },
      {
        _id: mongoose.Types.ObjectId('3e96cbe292b97300fc904315'),
        name: 'Nikon',
        product_Id: [
          { _id: mongoose.Types.ObjectId('1e96cbe292b97310fc90bb01') },
        ]
      }
    ]
  },
  {
    'model': 'type',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe392b97300fc904315'),
        name: 'Mirrorless',
        product_Id: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
        ]
      },
      {
        _id: mongoose.Types.ObjectId('2e96dbe292b97300fc904315'),
        name: 'Dslr',
        product_Id: [
          { _id: mongoose.Types.ObjectId('1e96cbe292b97310fc90bb01') },
        ]
      },
      
    ]
  },
  {
    'model': 'product',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01'),
        typeId: mongoose.Types.ObjectId('2e96dbe292b97300fc904315'),
        merkId: mongoose.Types.ObjectId('1e96cbe292b97300fc904315'),
        product_name: 'Canon D100',
        status:"AVALAIBLE",
        description: 'barang ada',
        image:'images/1.webp',
        price: 12000,
        barcode: 'BR12345',
      },
      {
        _id: mongoose.Types.ObjectId('1e96cbe292b97310fc90bb01'),
        typeId: mongoose.Types.ObjectId('5e96cbe392b97300fc904315'),
        merkId: mongoose.Types.ObjectId('3e96cbe292b97300fc904315'),
        product_name: 'Canon 101',
        status:"AVALAIBLE",
        description: 'barang ada',
        image:'images/2.webp',
        price: 13000,
        barcode: 'BR12346',
      },
      {
        _id: mongoose.Types.ObjectId('2e96cbe292b97310fc90bb01'),
        typeId: mongoose.Types.ObjectId('5e96cbe392b97300fc904315'),
        merkId: mongoose.Types.ObjectId('3e96cbe292b97300fc904315'),
        product_name: 'Canon 103',
        status:"AVALAIBLE",
        description: 'barang ada',
        image:'images/3.webp',
        price: 13000,
        barcode: 'BR12347',
      },
      {
        _id: mongoose.Types.ObjectId('3e96cbe292b97310fc90bb01'),
        typeId: mongoose.Types.ObjectId('5e96cbe392b97300fc904315'),
        merkId: mongoose.Types.ObjectId('3e96cbe292b97300fc904315'),
        product_name: 'Canon 104',
        status:"AVALAIBLE",
        description: 'barang ada',
        image:'images/4.webp',
        price: 13000,
        barcode: 'BR12348',
      },
    ]
  },
  {
    'model': 'discount',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc91144d'),
        typeDiscount:"Ramadhan sales off 50%",
        amount: 1000,
        description:"diskon hit ramadhan",
        status: "Active",
      },
      {
        _id: mongoose.Types.ObjectId('1e96cbe292b97300fc321242'),
        typeDiscount:"Black friday off 90%",
        amount: 2000,
        description:"diskon hit puasa lah",
        status: "Active",
      },
    ]
  },
  {
    'model': 'transaction',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc101445'),
        member_Id:{ _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903315') },
        subtotal : 30000,
        total : 40000,
        total_discount : 10000,
        start_date: '11-1-2021',
        end_date: '12-1-2021',
        days: 1,
        invoice: "INV0001",
        status: "NOT_DONE",
        jaminan: "KTP", 
        date_transaction : '11-1-2021',
        user_id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        desc_trans: "transakasi pertama bos",
        transdetail_id: { _id: mongoose.Types.ObjectId('5e961be292b97300fc101245') },
      },
      {
        _id: mongoose.Types.ObjectId('1e96cbe292b97300fc101445'),
        member_Id:{ _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903315') },
        subtotal : 30000,
        total : 40000,
        total_discount : 10000,
        start_date: '11-1-2021',
        end_date: '12-1-2021',
        days: 1,
        invoice: "INV0002",
        status: "NOT_DONE",
        jaminan: "KTP", 
        date_transaction : '11-1-2021',
        user_id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        desc_trans: "transakasi kedua bos",
        transdetail_id: { _id: mongoose.Types.ObjectId('5e92cbe292b97300fc101245') },
      },
      {
        _id: mongoose.Types.ObjectId('2e96cbe292b97300fc101445'),
        member_Id:{ _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903315') },
        subtotal : 10000,
        total : 20000,
        total_discount : 10000,
        start_date: '11-1-2021',
        end_date: '12-1-2021',
        days: 1,
        invoice: "INV0003",
        status: "NOT_DONE",
        jaminan: "KTP", 
        date_transaction : '11-1-2021',
        user_id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        desc_trans: "transakasi ketiga bos",
        transdetail_id: { _id: mongoose.Types.ObjectId('1396cbe292b97300fc101245') },
      },
      {
        _id: mongoose.Types.ObjectId('2e16cbe292b97300fc101445'),
        member_Id:{ _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903315') },
        subtotal : 10000,
        total : 20000,
        total_discount : 10000,
        start_date: '11-1-2021',
        end_date: '12-1-2021',
        days: 1,
        invoice: "INV0004",
        status: "NOT_DONE",
        jaminan: "KTP", 
        date_transaction : '11-1-2021',
        user_id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        desc_trans: "transakasi ketiga bos",
        transdetail_id: { _id: mongoose.Types.ObjectId('3496cbe292b97300fc101245') },
      },
      {
        _id: mongoose.Types.ObjectId('2116cbe292b97300fc101445'),
        member_Id:{ _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903315') },
        subtotal : 10000,
        total : 20000,
        total_discount : 10000,
        start_date: '11-1-2021',
        end_date: '12-1-2021',
        days: 1,
        invoice: "INV0005",
        status: "NOT_DONE",
        jaminan: "KTP", 
        date_transaction : '11-1-2021',
        user_id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        desc_trans: "transakasi ketiga bos",
        transdetail_id: { _id: mongoose.Types.ObjectId('3496bbe292b97300fc101245') },
      },
    ]
  },
  {
    'model': 'transaction_detail',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('5e961be292b97300fc101245'),
        transaction_Id: { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc101445') },
      },
      {
        _id: mongoose.Types.ObjectId('5e92cbe292b97300fc101245'),
        transaction_Id: { _id: mongoose.Types.ObjectId('1e96cbe292b97300fc101445') },
      },
      {
        _id: mongoose.Types.ObjectId('1396cbe292b97300fc101245'),
        transaction_Id: { _id: mongoose.Types.ObjectId('2e96cbe292b97300fc101445') },
      },
      {
        _id: mongoose.Types.ObjectId('3496cbe292b97300fc101245'),
        transaction_Id: { _id: mongoose.Types.ObjectId('2e16cbe292b97300fc101445') },
      },
      {
        _id: mongoose.Types.ObjectId('3496bbe292b97300fc101245'),
        transaction_Id: { _id: mongoose.Types.ObjectId('2116cbe292b97300fc101445') },
      },
    ]
  },
  {
    'model': 'cash_payment',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('1e96cbe292b973001c101445'),
        paid: 50000,
        changes : 40000,
        transaction_Id: { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc101445') },
      },
    ]
  },
  {
    'model': 'split_payment',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('2296cbe292b973001c101445'),
        first_paid: 20000,
        first_changes : 10000,
        second_paid: 20000,
        second_changes : 10000,
        transaction_Id: { _id: mongoose.Types.ObjectId('2e96cbe292b97300fc101445') },
      },
    ]
  },
  {
    'model': 'transfer_payment',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('2496cbe292b973001c101445'),
        no_transfer: 'T00232323',
        transaction_Id: { _id: mongoose.Types.ObjectId('1e96cbe292b97300fc101445') },
      },
    ]
  },
  {
    'model': 'kasbon_payment',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('2196cbe292b973001c101445'),
        paid: 50000,
        due_date : '11-1-2021',
        transaction_Id: { _id: mongoose.Types.ObjectId('2e16cbe292b97300fc101445') },
      },
    ]
  },
  {
    'model': 'dp_payment',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('2193cbe292b973001c101445'),
        paid: 51000,
        due_date : '11-1-2021',
        transaction_Id: { _id: mongoose.Types.ObjectId('2116cbe292b97300fc101445') },
      },
    ]
  }
]


