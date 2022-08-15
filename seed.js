var seeder = require('mongoose-seed');
var mongoose = require('mongoose');
require('dotenv').config();
let localDB =  process.env.LOCAL_DB;
let deployDB =  process.env.DEPLOY_DB;
seeder.connect(localDB, {
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
    './models/dp_payment',
    './models/booking'
  ]);

  // Clear specified collections
  seeder.clearModels(['user' , 'member', 'merk','product' , 'transaction', 'transaction_detail', 'discount', 'type', 'cash_payment', 'split_payment', 'transfer_payment','kasbon_payment', 'dp_payment', 'booking'  ], function () {
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
        status: 'SPV',
      },
      {
        _id: mongoose.Types.ObjectId('1e96cbe292b97300fc903341'),
        username: 'admin2',
        password: 'rahasia',
        status: 'STAFF',
      },
    ]
  },
  {
    'model': 'member',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903315'),
        name: 'fadhil',
        email: 'fadhil.alfatayah@gmail.com',
        password: 'rahasia',
        address :'Jl. Raya Ciputat Timur',
        no_hp: 0893733342323,
        username_ig: '@alfatayah',
        nik: 21312312313123,
        status: "Verified",
      },
    ]
  },
  {
    'model': 'merk',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('1e96cbe292b97300fc904315'),
        name: 'Canon',
        product_id: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
        ]
      },
      {
        _id: mongoose.Types.ObjectId('3e96cbe292b97300fc904315'),
        name: 'Nikon',
        product_id: [
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
        name: 'Lighting',
        product_id: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
        ]
      },
      {
        _id: mongoose.Types.ObjectId('2e96dbe292b97300fc904315'),
        name: 'Camera',
        product_id: [
          { _id: mongoose.Types.ObjectId('1e96cbe292b97310fc90bb01') },
        ]
      },

      {
        _id: mongoose.Types.ObjectId('2e96dbe292b97300fc904325'),
        name: 'Lensa',
        product_id: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90b103') },
        ]
      },
      {
        _id: mongoose.Types.ObjectId('2e96dbe292b97300f1904325'),
        name: 'Accessories',
        product_id: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b973001c90b193') },
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
        product_name: 'DSLR Canon EOS 5D Mark III',
        status:"Available",
        description: 'Canon is proud to present the highly anticipated EOS 5D Mark III. With supercharged EOS performance and stunning full frame, high-resolution image capture, the EOS 5D Mark III is designed to perform. Special optical technologies like the 61-Point High Density Reticular AF and an extended ISO range of 100–25600 expandable to 50 (L), 51200 (H1) and 102400 (H2) make the EOS 5D Mark III ideal for shooting weddings.',
        image: [
          "https://www.pondoklensa.com/files/photo/web/product/md/58ed9232b95971f79e6329830d9baed63.jpg",
          "https://www.pondoklensa.com/files/photo/web/product/md/cd3978db7406e64f556fe426eb1593341.JPG",
          "https://www.pondoklensa.com/files/photo/web/product/md/ea45513332d8d7cb05883bc9846e5ce13.jpg",
        ],
        price: 325000,
        barcode: 'BR12345',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02'),
        typeId: mongoose.Types.ObjectId('2e96dbe292b97300fc904315'),
        merkId: mongoose.Types.ObjectId('1e96cbe292b97300fc904315'),
        product_name: 'DSLR Canon EOS 700D',
        status:"Available",
        description: 'The EOS 700D offers a full and solid basic performance that is clearly one of the best in any entry level DSLR with its high image quality, various functions of Live View AF and movie shooting. The Vari-angle Clear View LCD II with capacitive touch screen capabilities as well as the new 360 degrees rotatable Mode Dial design and Creative Filters will definitely also expand inspiration and creative expression.',
        image: [
          "https://www.pondoklensa.com/files/photo/web/product/md/c89cfed0e8c74f8cb4e8545aa7db7a7924.jpg",
          "https://www.pondoklensa.com/files/photo/web/product/md/7e96f7f24a095d597db5d10ec9685da428.jpg",
          "https://www.pondoklensa.com/files/photo/web/product/md/0c9814431d79439c99936e77e3b080f728.jpg",
        ],
        price: 175000,
        barcode: 'BR12345',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90b103'),
        typeId: mongoose.Types.ObjectId('2e96dbe292b97300fc904325'),
        merkId: mongoose.Types.ObjectId('1e96cbe292b97300fc904315'),
        product_name: 'Canon EF 14mm f/2.8L II USM',
        status:"Available",
        description: 'Ultra-wide angle lenses have always been in demand by architectural, corporate, and other top pro photographers. This new lens features completely redesigned optics including 2 high-precision Aspherical elements and two totally new UD-glass elements. The result is superior image quality: better contrast and sharpness at the outer edges, and a reduction in chromatic aberrations that can sometimes be seen with high-resolution digital SLR.',
        image: [
          "https://www.pondoklensa.com/files/photo/web/product/md/41ccbe51b7bdac1a8c8c367a23733def9.jpg",
          "https://www.pondoklensa.com/files/photo/web/product/md/c9626a6a938189f0d23ef218ef3a1d817.jpg",
          "https://www.pondoklensa.com/files/photo/web/product/md/41ccbe51b7bdac1a8c8c367a23733def10.jpg",
        ],
        price: 175000,
        barcode: 'BR12345',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90b143'),
        typeId: mongoose.Types.ObjectId('5e96cbe392b97300fc904315'),
        merkId: mongoose.Types.ObjectId('1e96cbe292b97300fc904315'),
        product_name: 'Lighting Studio Best Luck 600W',
        status:"Available",
        description: 'The 600W Studio bestluck lamp is a flash that provides a cost-effective lighting solution for photographers. This lamp has almost all the best of QT flashing with good recycling time and flash duration. Various models meet different power output requirements. Suitable for various photography subjects such as marriage, portrait, fashion, and advertising.',
        image: [
          "https://www.pondoklensa.com/files/photo/web/product/md/ad0dd1f39349bd186d79a60868c3d8dc22.jpg",
          "https://www.pondoklensa.com/files/photo/web/product/md/ea45513332d8d7cb05883bc9846e5ce124.jpg",
          "https://www.pondoklensa.com/files/photo/web/product/md/ad0dd1f39349bd186d79a60868c3d8dc23.jpg",
        ],
        price: 125000,
        barcode: 'BR12355',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b973001c90b193'),
        typeId: mongoose.Types.ObjectId('2e96dbe292b97300f1904325'),
        merkId: mongoose.Types.ObjectId('1e96cbe292b97300fc904315'),
        product_name: 'Flash Canon Speedlite 430EX III',
        status:"Available",
        description: 'The 430 EXIII from Canon is an exceptional enthusiast level Speedlite for your Canon EOS DSLR. Faster and quieter than its predecessor, the 430 EXIII is a discrete lighting option offering plenty of features for such a compact unit.',
        image: [
          "https://www.pondoklensa.com/files/photo/web/product/md/37b44ea982e045b9668a1885b8becfd013.jpg",
          "https://www.pondoklensa.com/files/photo/web/product/md/37b44ea982e045b9668a1885b8becfd014.jpg",
          "https://www.pondoklensa.com/files/photo/web/product/md/ef949e84be098f948a39046219b1b40319.jpg",
        ],
        price: 125000,
        barcode: 'BR12355',
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
      // {
      //   _id: mongoose.Types.ObjectId('5e96cbe292b97300fc101445'),
      //   member_Id:{ _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903315') },
      //   subtotal : 30000,
      //   total : 40000,
      //   total_discount : 10000,
      //   start_date: '11-1-2021',
      //   end_date: '12-1-2021',
      //   days: 1,
      //   invoice: "INV0001",
      //   status: "NOT_DONE",
      //   jaminan: "KTP", 
      //   date_transaction : '11-1-2021',
      //   user_id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
      //   desc_trans: "transakasi pertama bos",
      //   transdetail_id: { _id: mongoose.Types.ObjectId('5e961be292b97300fc101245') },
      // },
    ]
  },
  {
    'model': 'transaction_detail',
    'documents': [  
      // {
      //   _id: mongoose.Types.ObjectId('5e961be292b97300fc101245'),
      //   transaction_Id: { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc101445') },
      // },
    ]
  },
  {
    'model': 'cash_payment',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('1e96cbe292b973001c101445'),
        paid: 50000,
        changes : 40000,
        transdetail_id: mongoose.Types.ObjectId('5e961be292b97300fc101245'),
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
        transdetail_id: mongoose.Types.ObjectId('5e92cbe292b97300fc101245'),
      },
    ]
  },
  {
    'model': 'transfer_payment',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('2496cbe292b973001c101445'),
        no_transfer: 'T00232323',
        transdetail_id: mongoose.Types.ObjectId('1396cbe292b97300fc101245'),
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
        transdetail_id: mongoose.Types.ObjectId('3496cbe292b97300fc101245'),
      },
    ]
  },
  {
    'model': 'dp_payment',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('3496bbe292b97300fc101245'),
        paid: 51000,
        due_date : '11-1-2021',
        transdetail_id: mongoose.Types.ObjectId('1396cbe292b97300fc101245'),
      },
    ]
  },
  {
    'model': 'booking',
    'documents': [  
      {
        _id: mongoose.Types.ObjectId('3496bbe292b97300fc101245'),
   
        dateIn : '11-1-2021',
        dateOut : '12-1-2021',
        totalDays: 1,
        product_id: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b973001c90b193') },
        ],
        totalBooking: 51000
      },
    ]
  }
]


