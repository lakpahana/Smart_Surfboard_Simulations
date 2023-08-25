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
            "front": "50.5",
            "middle": "20.0",
            "rear": "26.0"
        },
        "pressure": "1015.9 hPa"
    }
]

function plotData() {
    var panel = document.querySelector(".surfboard");
    function updatePanelTransform(rotateX, rotateY, rotateZ) {
        panel.setAttribute("style", "transform: rotateX( " + rotateX + "deg ) rotateY( " + rotateY + "deg ) rotateZ( " + rotateZ + "deg )");
    }


    // loop simulationData with 1 second delay
    var i = 0;
    var interval = setInterval(function () {
        if (i < simulationData.length) {
            var data = simulationData[i];
            var gps = data.gps;
            var accelerometer = data.accelerometer;
            var gyroscope = data.gyroscope;
            console.log(gyroscope);
            var force = data.force;

            // update panel
            updatePanelTransform(gyroscope.pitch * 15, gyroscope.roll * 15, gyroscope.yaw * 15);

            // // update gps
            var gpsElement = document.querySelector(".gps");
            gpsElement.querySelector(".latitude").innerHTML = "Lat :" +  gps.latitude;
            gpsElement.querySelector(".longitude").innerHTML = "Long :" +  gps.longitude;
            gpsElement.querySelector(".speed").innerHTML = "Speed :" +  gps.speed;

            // // update accelerometer
            var accelerometerElement = document.querySelector(".accelerometer");
            accelerometerElement.querySelector(".x").innerHTML = "X :" + accelerometer.x;
            accelerometerElement.querySelector(".y").innerHTML = "Y :" + accelerometer.y;
            accelerometerElement.querySelector(".z").innerHTML = "Z :" + accelerometer.z;

            // // update force
            var forceElement = document.querySelector(".surfboard");
            forceElement.querySelector(".front").innerHTML = force.front;
            forceElement.querySelector(".middle").innerHTML = force.middle;
            forceElement.querySelector(".back").innerHTML = force.rear;

            //change color according to force distribution
            var front = force.front;
            var middle = force.middle;
            var back = force.rear;

            //find which part has the most force
            var max = Math.max(front, middle, back);
            // that part will be red
            if (max == front) {
                forceElement.querySelector(".front").style.backgroundColor = "red";
            } else if (max == middle) {
                forceElement.querySelector(".middle").style.backgroundColor = "red";
            } else {
                forceElement.querySelector(".back").style.backgroundColor = "red";
            }

            //find which part has the least force
            var min = Math.min(front, middle, back);
            // that part will be green
            if (min == front) {
                forceElement.querySelector(".front").style.backgroundColor = "green";
            } else if (min == middle) {
                forceElement.querySelector(".middle").style.backgroundColor = "green";
            } else {
                forceElement.querySelector(".back").style.backgroundColor = "green";
            }

            //find which part has the middle force
            var middle = Math.min(Math.max(front, middle), Math.max(Math.min(front, middle), back));
            // that part will be yellow
            if (middle == front) {
                forceElement.querySelector(".front").style.backgroundColor = "yellow";
            } else if (middle == middle) {
                forceElement.querySelector(".middle").style.backgroundColor = "yellow";
            } else {
                forceElement.querySelector(".back").style.backgroundColor = "yellow";
            }






            // // update temperature
            var temperatureElement = document.querySelector(".temperature");
            temperatureElement.querySelector(".value").innerHTML = data.temperature;

            // // update pressure
            var pressureElement = document.querySelector(".pressure");
            pressureElement.querySelector(".value").innerHTML = data.pressure;

            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000);

}

plotData();

function startSimulation() {

    console.log("Simulation started");
}


