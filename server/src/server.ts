const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const dotenv = require('dotenv').config();
const io = require('socket.io')(server);
const cors = require('cors');
const mqtt = require('mqtt');
const fetch = require('node-fetch');
const connectDB = require('./db');

const port = process.env.PORT || 5001;

//BD
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(express.static(__dirname + '/../public'));


// Calculations
let positions: any[] = [];

function calculateDistance(lastPos: { lat: any, lng: any }, currentPos: { lat: any, lng: any }) {
  const R = 6371e3; // earth radius in meters
  const lat1 = lastPos.lat * Math.PI / 180;
  const lat2 = currentPos.lat * Math.PI / 180;
  const deltaLat = (currentPos.lat - lastPos.lat) * Math.PI / 180;
  const deltaLng = (currentPos.lng - lastPos.lng) * Math.PI / 180;

  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // distance in meters
  const distanceKm = distance / 1000; // distance in kilometers
  //const roundedDistance = Math.round(distanceKm * 100) / 100; // rounded to 2 decimal places
  return distanceKm;
}

function calculateSpeed(distanceKm: number, timestampMs: number): number {
  // Calculate the time in hours
  const timeHr: number = timestampMs / (1000 * 60 * 60);

  // Calculate the speed in kilometers per hour
  const speedKph: number = distanceKm / timeHr;
  return speedKph;
}

//WebSockets
const clients: Array<any> = [];
io.on('connection', (client: { id: any; on: (arg0: string, arg1: () => void) => void; }) => {
  console.log(`Client connected ${client.id}`);
  clients.push(client);

  client.on('disconnect', () => {
    clients.splice(clients.indexOf(client), 1);
    console.log(`Client disconnected ${client.id}`);
  });

});

//MQTT
const mqtt_host = 'broker.emqx.io';
const mqtt_port = '1883';
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `mqtt://${mqtt_host}:${mqtt_port}`;
const mqtt_client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'emqx',
  password: 'public',
  reconnectPeriod: 1000,
});

const topic = 'gpstracker/1/coordinates';
mqtt_client.on('connect', () => {
  console.log('MQTT Connected');

  mqtt_client.subscribe([topic], () => {
    console.log(`Subscribed to topic '${topic}'`);
  });
});

mqtt_client.on('message', (topic: any, payload: string) => {
  console.log('Received Message:', topic, payload.toString());

  try {
    //Get location
    const location = JSON.parse(payload);
    const lat: number = location.lat;
    const lng: number = location.lng;

    //Calculate
    let dist: number = 0;
    let timestampNow: number = new Date().getTime();
    let timestampThen: number = 0;
    let timestampDiff: number = 0;
    let speed: number = 0;

    if(positions.length > 0) {
                
      dist = calculateDistance(positions[positions.length-1],{lat:lat,lng:lng});

      timestampThen = positions[positions.length-1].timestamp;

      timestampDiff = timestampNow - timestampThen;

      speed = calculateSpeed(dist, timestampDiff);

    }

    console.log('lat:' + lat + ' lng:' + lng);

    io.emit('position_data', {lat: lat, lng: lng, distance: dist, speed: speed, timestamp: timestampDiff});

    positions.push({lat: lat, lng: lng, timestamp: timestampNow });
    
  } catch (err) {
    console.error(`Error parsing JSON: ${err}`);
  }
});


//API
app.use('/api/users', require('./API/user/userRoutes'));

// Server
server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});