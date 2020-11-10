// const request = require('request');
// const geocode = (address, callback)=>{
//     const bruh='https://api.mapbox.com/geocoding/v5/mapbox.places/banglore.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoia2lyYW5tYXlpIiwiYSI6ImNraDlkOXhsNTByM3gycm03ZjJzeW94c3QifQ.bmILzHN72CxJsShPthna-g'
//     request({url:bruh,json:true}, (error,response)=>{
//         // console.log(response.body)
//         if(error){
//             callback("unable to connect and fetch data from an api",undefined);
//         }
//         else if(response.body.features.length===0){
//             callback("bruh no such location only what are you finding macha",undefined)
//         }
//         else{
//             callback(undefined,{
//                 latitude:response.body.features[0].center[0],
//                 longitude:response.body.features[0].center[1],
//                 place_name:response.body.features[0].place_name
//             })
//         }
//     })
// }
// module.exports=geocode;
module.exports=geocode;