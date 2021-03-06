const request = require("request");

const geocode = (adress,callback) =>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ adress+".json?access_token=pk.eyJ1IjoiZW1yZTk4IiwiYSI6ImNrd3E3aDF4djBqdTcycWwwMzlwb2hrNnIifQ.LClVPJQPMnjsWqGm6Bj3Yw&limit=1";

    request({url,json:true},(err,{body})=>{
        if(err){
            callback("Unable to connect to location services",undefined);
        }

        else if(body.features.length === 0){
            callback("Unable to find the location",undefined);
        }

        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};


module.exports = geocode;