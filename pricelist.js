var pricelist = [
    {from: "2020-01-01", to: "2020-02-01", price: 34.5},
    {from: "2020-02-02", to: "2020-03-01", price: 37.0},
    {from: "2020-03-02", to: "2020-05-15", price: 39.0},
    {from: "2020-05-16", to: "2020-06-15", price: 37.0},
   ];

function logPricelist(pricelist) {
    var temp = {};
    pricelist.forEach(function(price) {
        temp[price.price] ? temp[price.price].push(` ${price.from} do ${price.to}`) : temp[price.price] = [`${price.from} do ${price.to}`];
    })
    Object.keys(temp).sort()
      .forEach((sorted) =>{
          console.log(`${sorted}:`, temp[sorted].toString());
       });
}

logPricelist(pricelist)