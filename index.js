var simulationData = [
    {
        "timestamp": "2023-08-25T10:05:00Z",
        "gps": {
            "latitude": "34.020789",
            "longitude": "-118.502448",
            "speed": "3.2"
        },
        "accelerometer": {
            "x": "-0.2",
            "y": "9.7",
            "z": "0.1"
        },
        "gyroscope": {
            "pitch": "3",
            "roll": "0.5",
            "yaw": "-0.3"
        },
        "temperature": "19.5°C",
        "force": {
            "front": "35.5",
            "middle": "40.0",
            "rear": "25.0"
        },
        "pressure": "1015.7 hPa"
    },
    {
        "timestamp": "2023-08-25T10:05:05Z",
        "gps": {
            "latitude": "34.020800",
            "longitude": "-118.502460",
            "speed": "5.7"
        },
        "accelerometer": {
            "x": "0.4",
            "y": "9.5",
            "z": "0.5"
        },
        "gyroscope": {
            "pitch": "3.2",
            "roll": "0.7",
            "yaw": "-0.2"
        },
        "temperature": "19.5°C",
        "force": {
            "front": "32.0",
            "middle": "42.5",
            "rear": "27.5"
        },
        "pressure": "1015.8 hPa"
    },
    {
        "timestamp": "2023-08-25T10:05:10Z",
        "gps": {
            "latitude": "34.020812",
            "longitude": "-118.502475",
            "speed": "4.3"
        },
        "accelerometer": {
            "x": "0.1",
            "y": "9.8",
            "z": "0.2"
        },
        "gyroscope": {
            "pitch": "3.1",
            "roll": "0.6",
            "yaw": "-0.1"
        },
        "temperature": "19.4°C",
        "force": {
            "front": "33.5",
            "middle": "41.0",
            "rear": "26.0"
        },
        "pressure": "1015.9 hPa"
    }
]

//feed this data gradually to the plot function
function feedData() {
    //get the first element of the array
    var data = simulationData[0];
    //remove the first element
    simulationData.shift();
    //plot the data
    plotData(data);
    //if there is no more data, stop the simulation
    if (simulationData.length == 0) {
        stopSimulation();
    }

}






async function main() {
    //dmmy json response as data
    const data = {
        "name": "John Doe",
        "age": 30,
        "cars": [
            { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
            { "name": "BMW", "models": ["320", "X3", "X5"] },
            { "name": "Fiat", "models": ["500", "Panda"] }
        ]
    }
    console.log(data);
}

function startSimulation() {

    console.log("Simulation started");
}


main();