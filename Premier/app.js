const request = require('request');

function createAndGetAvengers() {
    request({
        method: 'GET',
        url: 'https://in.bookmyshow.com/bengaluru/events'
    }, (err, res, body) => {
        if (err) 
            console.log("We scred");
        if (body.includes("avenger")) 
            console.log("Premier is Out on book my show");
        else {
            createAndGetAvengersInsider();
        }
    });
}
function createAndGetAvengersInsider() {
    request({
        method: 'GET',
        url: 'https://insider.in/all-events-in-bangalore'
    }, (err, res, body) => {
        if (err) 
            console.log("We scred");
        console.log("body" , body);
        if (body.includes("avenger")) 
            console.log("Premier is Out on insider");
        else {
            console.log("Not yet");
        }
    });
}

setInterval(createAndGetAvengers, 10000);