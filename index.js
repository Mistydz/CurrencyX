const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const cheerio = require("cheerio")
const axios = require("axios")
const passport = require("passport");
const path = require("path")

const dbModel = require("./models/db")
const API = require('./routes/apikey');


const app = express();
app.use(express.json());
app.use(cors());


app.use(passport.initialize());
app.use(passport.session());
require("./routes/passportConfig")(passport);






const uri = "mongodb+srv://dbuser:zxNi3bDVbjAVxy8y@wavedb.uej6u.mongodb.net/Database?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          
        }); 
      }
    })(req, res, next);
  });
 

  //----------------------------------------- END OF ROUTES---------------------------------------------------






app.get('/api',  (req,res) => {
    res.json({
        // Health Check Route
        message: 'Welcome to JetZ privet API'
    })
})


app.get('/api/bmprice',API.validateKey, async (req,res) => {
        // Fetch DZD Black Market Prices From MongoDB
    dbModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        }
        res.send(result);
    })
})


app.put('/api/bmupdate',API.validateKey, async (req,res) => {
        // Update DZD Black Market Prices
    const newBuyPrice = req.body.newBuyPrice;
    const newSellPrice = req.body.newSellPrice;
    const id = req.body._id;

    try {
        await dbModel.findById(id, (err, updateSelected) => {
         updateSelected.buyPrice = newBuyPrice;
         updateSelected.sellPrice = newSellPrice;
         updateSelected.save();
         console.log('value updated')
        })
     }catch(err){
         console.error(err)
     }   
})


async function getPrice() {
        // Fetch Crypto Market Prices with Cheerio and handle data 
    try {
        const furl = 'https://coinmarketcap.com/'
        const { data } = await axios({
            method : "GET",
            url : furl,
        })

        const $ = cheerio.load(data)
        const elemSelector ='.h7vnx2-2 > tbody:nth-child(3) > tr'

        const keys = [
            'rank',
            'name',
            'price',
            'day',
            'week',
            'marketCap',
            'volume',
            'circulatingSupply'
        ]

        const coinArr = []


        $(elemSelector).each((parentIdx,parentElm) =>{
            let keyIdx = 0 
            const coinObj = {}

            if (parentIdx <10) {
            $(parentElm).children().each((childIdx, childElm) => {
                let tdValue = $(childElm).text()

                if (keyIdx ===1 || keyIdx ===6) {
                    tdValue = $('p:first-child', $(childElm).html()).text()
                }
                if (keyIdx ===5) {
                    tdValue = $('span:last-child', $(childElm).html()).text()
                }
                
                if(tdValue) {
                    coinObj[keys[keyIdx]] = tdValue

                    keyIdx++
                }
            })
            coinArr.push(coinObj)
        }
        })
        return coinArr
    }catch(err){
        console.error(err)
    }
}


app.get('/api/crypto',API.validateKey, async (req, res) => {
           // Fetch Crypto Market Prices 
    try {
        const crypto = await getPrice()
        return res.status(200).json({
            result: crypto,       
        })

    }catch(err){
        return res.status(500).json({
            err : err.toString(),
        })
    }
})


async function getDirection() {
         // Fetch Crypto Market % ups and downs with Cheerio and handle data 
    try {
        const furl = 'https://coinmarketcap.com/'
        const { data } = await axios({
            method : "GET",
            url : furl,
        })

        const $ = cheerio.load(data)
        selemSelector = '.sc-15yy2pl-0'
        const sClassArr = []


        $(selemSelector).each((parentIdx,parentElm) =>{
            let keyIdx = 0 
            const sClassObj = {}
            if (parentIdx <20) {
            $(parentElm).children().each((childIdx, childElm) => {
                let tsValue = $(childElm).attr('class')

                if(tsValue) {
                    sClassObj['class'] = tsValue

                }
            })
            sClassArr.push(sClassObj)
        }
        })
        return sClassArr

        
    }catch(err){
        console.error(err)
    }
}


app.get('/api/cryptoups',API.validateKey, async (req, res) => {
            // Fetch Crypto Market % ups and downs
    try {
        const direc = await getDirection()
        return res.status(200).json({
            data: direc,            
        })

    }catch(err){
        return res.status(500).json({
            err : err.toString(),
        })
    }
})




async function getRate() {
        // Fetch USD Market Prices with cheerio 
    try {
        const xurl = 'https://www.x-rates.com/table/?from=USD&amount=1'
        const { data } = await axios({
            method : "GET",
            url : xurl,
        })
        const $ = cheerio.load(data)
        const elemSelector ='table.ratesTable:nth-child(4) > tbody:nth-child(2) > tr'

        const keys = [
            'name',
            'sell',
            'buy'
        ]
        const priceArr = []

        

        $(elemSelector).each((parentIdx,parentElm) =>{
            let keyIdx = 0 
            const priceObj = {}
            $(parentElm).children().each((childIdx, childElm) => {
                let tdValue = $(childElm).text()

                if(tdValue) {
                    priceObj[keys[keyIdx]] = tdValue
                    keyIdx++
                }
            })
            priceArr.push(priceObj)
        })
        

        return priceArr

    }catch(err){
        console.error(err)
    }
}



app.get('/api/rates',API.validateKey, async (req, res) => {
        // Fetch USD Market Prices
    try {
        const rates = await getRate()
        return res.status(200).json({
            result: rates,
        })
    }catch(err){
        return res.status(500).json({
            err : err.toString(),
        })
    }
})



async function getsRate() {
        // Fetch DZD Market Prices with cheerio
    try {
        const xurl = 'https://fx-rate.net/DZD/'
        const { data } = await axios({
            method : "GET",
            url : xurl,
        })
        const $ = cheerio.load(data)
        const selemSelector = 'table.currencyratetable2:nth-child(1) > tbody:nth-child(2) > tr'

        const keys = [
            'name',
            'sell',
            'buy'
        ]
        const spriceArr = []
        

        
        $(selemSelector).each((parentIdx,parentElm) =>{
            let keyIdx = 0 
            const spriceObj = {}
            $(parentElm).children().each((childIdx, childElm) => {
                let tsValue = $(childElm).text()

                if(tsValue) {
                    spriceObj[keys[keyIdx]] = tsValue
                    keyIdx++
                }
            })
            spriceArr.push(spriceObj)
        })
        return spriceArr

    }catch(err){
        console.error(err)
    }
}

app.get('/api/srates',API.validateKey, async (req, res) => {
        // Fetch DZD Market Prices
    try {
        const rates = await getsRate()
        return res.status(200).json({
            result: rates,
        })
    }catch(err){
        return res.status(500).json({
            err : err.toString(),
        })
    }
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    })
}





const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});

