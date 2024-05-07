import client from '../connectRedis.service.js'
// Add ambulance service
async function addAmbulance(longitude, latitude, ambId) {
    try {
        return await client.geoadd('ambulance', longitude, latitude, ambId); 
        // await client.expire('ambulance', 10);
    } catch (error) {
        console.error(`Error adding ambulance ${ambId}: ${error}`);
        throw error;
    }
}

export default addAmbulance;

