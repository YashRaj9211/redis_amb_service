import client from "../connectRedis.service.js";
//Make call for ambulance service
async function getAmbulance(longitude, latitude) {
    try {
        const ambulances = await client.georadius('ambulance', 72.9645358205460,  19.225325940395177, 5, 'km', 'WITHDIST', 'WITHCOORD');
        // const ambulances = await client.georadius('ambulance',latitude, longitude,  5, 'km', 'WITHDIST', 'WITHCOORD');
        console.log("get ambulance called")
        if(ambulances.length == 0) return {'Message': 'Cannot find any service at the moment!'}
        return ambulances;
    } catch (err) {
        // console.log(`Error getting ambulance: ${err}`);
        throw err;
    }
}

export default getAmbulance;