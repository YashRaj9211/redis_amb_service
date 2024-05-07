// import addAmbulance from "../services/ambulance-services/Add_ambulance.service";
import getAmbulance from "../services/ambulance-services/Get_ambulance.service.js";
import addAmbulance from "../services/ambulance-services/Add_ambulance.service.js";
// import client from "../services/connectRedis.service.js";

const ambulanceServiceController = {
    // addAmbulance,

    callAmbulance(req, res) {
        try {
            const longitude = req.query.longitude;
            const latitude = req.query.latitude;

            getAmbulance(longitude, latitude).then(ambulances => {

                console.log({"Message": "Get ambulance function" ,"long": longitude, "lat": latitude})
                return res.status(200).json(ambulances);
            }).catch(error => {
                return res.status(500).json({ message: error.message || "Internal server error" });
            });

        } catch (error) {
            console.error(`Error in callAmbulance: ${error}`);
            return res.status(500).json({ message: error.message || "Internal server error" });
        }
    },

    addActiveAmbulance(req, res) {
        const { longitude, latitude, ambulanceId } = req.body;
    
        addAmbulance(longitude, latitude, ambulanceId)
            .then(ambulances => {
                return res.status(200).json({ message: `Ambulance with id ${ambulanceId} added successfully` });
            })
            .catch(error => {
                // console.log(error);
                return res.status(500).json({ message: error.message || "Internal server error" });
            });
    }
    

}

export default ambulanceServiceController;