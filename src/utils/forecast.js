const request = require("request");

const forecast = (latitude, longitude,callback) =>{
    const url = "http://api.weatherstack.com/current?access_key=86abaa7308c518cb166484dc486df986&query="+latitude+","+longitude;

    request({url,json:true},(err,{body})=>{
        if(err){
            callback("Unable to connect to weather service",undefined);
        }

        else if(body.error){
            callback("Unable to find the location",undefined);
        }

        else{
            callback(undefined,{
                //latitude: res.body.location.lat,
                //longitude: res.body.location.lon,
                location: body.location.name
            });
        }
    });
};

module.exports = forecast;