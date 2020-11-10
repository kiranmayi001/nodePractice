
// week 3 day 4
// request imported to make a request with an api we have
const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/geocode')
const url = 'http://api.weatherstack.com/current?access_key=9ff5c0189402c7c627530df443ce5124&query=hyderabad&units=f';
// request({url:url,json:true} , (error,response)=>{
// const temp=response.body
// console.log("it is "+temp.current.temperature+"but it feels like"+temp.current.feelslike)
// })

const geo_url='https://api.mapbox.com/geocoding/v5/mapbox.places/Banglore.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoia2lyYW5tYXlpIiwiYSI6ImNraDlkOXhsNTByM3gycm03ZjJzeW94c3QifQ.bmILzHN72CxJsShPthna-g'
// request({url:geo_url,json:true} , (error,response)=>{
// if(error){
//     console.log("there is an error")
// }
// else{

// }
// })




// callback functions
                           
const geocode = (address,callback) =>{

        const data = {latitude:0,logitude:0}
  
    return callback(data);
}

const send_args = geocode('Banglore', function(data){
    console.log(data);
})

// add(1,4,(sum)=>{
//     console.log(sum) //should print 5
// })

// callback funtion explaination to add two umbers
                                // const add = (a,b,callback) => {
                                //     setTimeout(()=>{
                                //         callback(a+b)
                                //     },2000)
                                // }


                                // add(1,4,sum=(addedNum)=>{
                                //     console.log(addedNum)
                                // })


// callback function for fetch data of an api ..LOCATION 


// geocode('Banglore',(error,data)=>{
//     if(error)
//     console.log("Error",error);
//     else  
//     console.log("data ",data)

// })



// // setup a forecast callback 
// forecast(44.1545,-75.7088,(error,data)=>{
//     console.log("Data",data)
//     console.log("ERROR",error)
// })