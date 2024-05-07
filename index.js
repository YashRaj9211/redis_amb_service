import express from "express";
import cors from "cors";
import { Server } from "socket.io"; // Changed the import statement
import addAmbulance from "./services/ambulance-services/Add_ambulance.service.js";

import ambulanceRouter from './routes/ambulance.route.js';

const PORT = 3000; // Define your port number

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ 'message': 'hello from redis server!' });
});

app.use('/api/ambulance', ambulanceRouter);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const io = new Server(server, { // Changed socket initialization
    cors: {
        origin: "http://localhost:4200",
        methods: ["*"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    // Listen for coordinate data from the frontend user
    socket.on('coordinates', (coordinates) => {
        console.log('Received coordinates from user:', coordinates);
        addAmbulance(coordinates.lon, coordinates.lat, coordinates.driverId);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('Socket disconnected:', socket.id);
    });
});
