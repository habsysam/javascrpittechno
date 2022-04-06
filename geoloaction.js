navigator.geolocation.getCurrentPosition(val=>{
    console.log(val);
    console.log('user acppeted shareing ');
    console.log('latitude',val.coords.latitude);
    console.log('longitude',val.coords.longitude);
    },deny=>{
        console.log(deny);
    
    })