var simulationData2 = [
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

var simulationData =
    [
        {
            "timestamp": "2023-08-25T10:05:00Z",
            "gps": {
                "distance_from_beach": "40m",
                "latitude": "34.020700",
                "longitude": "-118.502400",
                "speed": "0.2"
            },
            "accelerometer": {
                "x": "0.1",
                "y": "9.8",
                "z": "0.2"
            },
            "gyroscope": {
                "pitch": "1",
                "roll": "0.1",
                "yaw": "0"
            },
            "force": {
                "front": "25.0",
                "middle": "45.0",
                "rear": "30.0"
            },
            "pressure": "1015.7 hPa",
            "temperature": "19.5°C"
        },
        {
            "timestamp": "2023-08-25T10:05:05Z",
            "gps": {
                "distance_from_beach": "38m",
                "latitude": "34.020705",
                "longitude": "-118.502405",
                "speed": "0.4"
            },
            "accelerometer": {
                "x": "0.2",
                "y": "9.7",
                "z": "0.3"
            },
            "gyroscope": {
                "pitch": "1.5",
                "roll": "0.2",
                "yaw": "0.1"
            },
            "force": {
                "front": "27.0",
                "middle": "44.0",
                "rear": "29.0"
            },
            "pressure": "1015.8 hPa",
            "temperature": "19.5°C"
        },
        {
            "timestamp": "2023-08-25T10:07:55Z",
            "gps": {
                "distance_from_beach": "6m",
                "latitude": "34.020790",
                "longitude": "-118.502480",
                "speed": "0.6"
            },
            "accelerometer": {
                "x": "0.4",
                "y": "9.6",
                "z": "0.6"
            },
            "gyroscope": {
                "pitch": "3.5",
                "roll": "1",
                "yaw": "0.4"
            },
            "force": {
                "front": "31.0",
                "middle": "43.0",
                "rear": "26.0"
            },
            "pressure": "1016.1 hPa",
            "temperature": "19.4°C"
        },
        {
            "timestamp": "2023-08-25T10:08:00Z",
            "gps": {
                "distance_from_beach": "5m",
                "latitude": "34.020795",
                "longitude": "-118.502485",
                "speed": "0.3"
            },
            "accelerometer": {
                "x": "0.3",
                "y": "9.7",
                "z": "0.5"
            },
            "gyroscope": {
                "pitch": "3",
                "roll": "0.7",
                "yaw": "0.3"
            },
            "force": {
                "front": "30.0",
                "middle": "40.0",
                "rear": "30.0"
            },
            "pressure": "1016.2 hPa",
            "temperature": "19.4°C"
        }
    ]
var simulationData3 = [
    {
        "timestamp": "2023-08-25T10:05:00Z",
        "gps": {
            "distance_from_beach": "40m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.2"
        },
        "accelerometer": {
            "x": "0.1",
            "y": "9.8",
            "z": "0.2"
        },
        "gyroscope": {
            "pitch": "1",
            "roll": "0.1",
            "yaw": "0"
        },
        "force": {
            "front": "25.0",
            "middle": "45.0",
            "rear": "30.0"
        },
        "pressure": "1015.7 hPa",
        "temperature": "19.5°C"
    },
    {
        "timestamp": "2023-08-25T10:05:05Z",
        "gps": {
            "distance_from_beach": "39m",
            "latitude": "34.020703",
            "longitude": "-118.502403",
            "speed": "0.3"
        },
        "accelerometer": {
            "x": "0.15",
            "y": "9.8",
            "z": "0.25"
        },
        "gyroscope": {
            "pitch": "1.1",
            "roll": "0.12",
            "yaw": "0.05"
        },
        "force": {
            "front": "26.0",
            "middle": "44.5",
            "rear": "29.5"
        },
        "pressure": "1015.72 hPa",
        "temperature": "19.52°C"
    },

    // Surfer catches the wave and starts moving more rapidly, still lying down
    {
        "timestamp": "2023-08-25T10:05:15Z",
        "gps": {
            "distance_from_beach": "37m",
            "latitude": "34.020708",
            "longitude": "-118.502408",
            "speed": "0.35"
        },
        "accelerometer": {
            "x": "0.17",
            "y": "9.75",
            "z": "0.27"
        },
        "gyroscope": {
            "pitch": "1.3",
            "roll": "0.15",
            "yaw": "0.08"
        },
        "force": {
            "front": "27.5",
            "middle": "44.2",
            "rear": "28.3"
        },
        "pressure": "1015.74 hPa",
        "temperature": "19.53°C"
    },
    {
        "timestamp": "2023-08-25T10:05:20Z",
        "gps": {
            "distance_from_beach": "36m",
            "latitude": "34.020713",
            "longitude": "-118.502413",
            "speed": "0.37"
        },
        "accelerometer": {
            "x": "0.19",
            "y": "9.73",
            "z": "0.28"
        },
        "gyroscope": {
            "pitch": "1.4",
            "roll": "0.17",
            "yaw": "0.09"
        },
        "force": {
            "front": "28.0",
            "middle": "44.0",
            "rear": "28.0"
        },
        "pressure": "1015.75 hPa",
        "temperature": "19.54°C"
    },

    // Surfer stands up, force distribution changes
    {
        "timestamp": "2023-08-25T10:05:25Z",
        "gps": {
            "distance_from_beach": "35m",
            "latitude": "34.020718",
            "longitude": "-118.502418",
            "speed": "0.38"
        },
        "accelerometer": {
            "x": "0.21",
            "y": "9.7",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "2",
            "roll": "0.3",
            "yaw": "0.2"
        },
        "force": {
            "front": "30.0",
            "middle": "47.0",
            "rear": "23.0"
        },
        "pressure": "1015.77 hPa",
        "temperature": "19.55°C"
    },

    // ... More data points while surfer is riding the wave ...

    // Surfer is nearing the beach and preparing to get off the board
    {
        "timestamp": "2023-08-25T10:07:15Z",
        "gps": {
            "distance_from_beach": "10m",
            "latitude": "34.020770",
            "longitude": "-118.502460",
            "speed": "0.45"
        },
        "accelerometer": {
            "x": "0.45",
            "y": "9.65",
            "z": "0.5"
        },
        "gyroscope": {
            "pitch": "3.1",
            "roll": "0.7",
            "yaw": "0.35"
        },
        "force": {
            "front": "32.0",
            "middle": "45.0",
            "rear": "23.0"
        },
        "pressure": "1016.1 hPa",
        "temperature": "19.47°C"
    },


    {
        "timestamp": "2023-08-25T10:07:25Z",
        "gps": {
            "distance_from_beach": "6m",
            "latitude": "34.020780",
            "longitude": "-118.502470",
            "speed": "0.65"
        },
        "accelerometer": {
            "x": "0.5",
            "y": "9.7",
            "z": "0.55"
        },
        "gyroscope": {
            "pitch": "3.5",
            "roll": "0.9",
            "yaw": "0.4"
        },
        "force": {
            "front": "30.0",
            "middle": "42.0",
            "rear": "28.0"
        },
        "pressure": "1016.1 hPa",
        "temperature": "19.45°C"
    },
    {
        "timestamp": "2023-08-25T10:07:30Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020785",
            "longitude": "-118.502475",
            "speed": "0.3"
        },
        "accelerometer": {
            "x": "0.3",
            "y": "9.8",
            "z": "0.5"
        },
        "gyroscope": {
            "pitch": "3",
            "roll": "0.8",
            "yaw": "0.3"
        },
        "force": {
            "front": "29.5",
            "middle": "42.5",
            "rear": "28.0"
        },
        "pressure": "1016.15 hPa",
        "temperature": "19.48°C"
    }
]

var sim3 = [
    {
        "timestamp": "2023-08-25T10:00:00.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.8"
        },
        "accelerometer": {
            "x": "0.3",
            "y": "9.9",
            "z": "0.2"
        },
        "gyroscope": {
            "pitch": "9.5",
            "roll": "0.7",
            "yaw": "4.4"
        },
        "force": {
            "front": "26.4",
            "middle": "59.6",
            "rear": "13.0"
        },
        "pressure": "1016.2 hPa",
        "temperature": "18.1°C"
    },
    {
        "timestamp": "2023-08-25T10:00:05.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.8"
        },
        "accelerometer": {
            "x": "0.3",
            "y": "10.1",
            "z": "0.4"
        },
        "gyroscope": {
            "pitch": "9.9",
            "roll": "0.0",
            "yaw": "1.9"
        },
        "force": {
            "front": "31.6",
            "middle": "66.8",
            "rear": "15.7"
        },
        "pressure": "1014.1 hPa",
        "temperature": "21.2°C"
    },
    {
        "timestamp": "2023-08-25T10:00:10.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.5"
        },
        "accelerometer": {
            "x": "0.5",
            "y": "9.9",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "0.2",
            "roll": "0.5",
            "yaw": "1.1"
        },
        "force": {
            "front": "36.7",
            "middle": "66.0",
            "rear": "19.5"
        },
        "pressure": "1013.6 hPa",
        "temperature": "21.3°C"
    },
    {
        "timestamp": "2023-08-25T10:00:15.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.8"
        },
        "accelerometer": {
            "x": "0.1",
            "y": "9.9",
            "z": "0.2"
        },
        "gyroscope": {
            "pitch": "4.2",
            "roll": "0.0",
            "yaw": "1.5"
        },
        "force": {
            "front": "24.2",
            "middle": "63.4",
            "rear": "18.6"
        },
        "pressure": "1019.4 hPa",
        "temperature": "18.3°C"
    },
    {
        "timestamp": "2023-08-25T10:00:20.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.0"
        },
        "accelerometer": {
            "x": "0.0",
            "y": "9.9",
            "z": "0.5"
        },
        "gyroscope": {
            "pitch": "1.6",
            "roll": "0.6",
            "yaw": "4.4"
        },
        "force": {
            "front": "46.2",
            "middle": "33.1",
            "rear": "24.0"
        },
        "pressure": "1017.8 hPa",
        "temperature": "19.9°C"
    },
    {
        "timestamp": "2023-08-25T10:00:25.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.3"
        },
        "accelerometer": {
            "x": "0.0",
            "y": "10.0",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "9.8",
            "roll": "0.3",
            "yaw": "3.3"
        },
        "force": {
            "front": "46.5",
            "middle": "60.0",
            "rear": "14.9"
        },
        "pressure": "1019.4 hPa",
        "temperature": "19.2°C"
    },
    {
        "timestamp": "2023-08-25T10:00:30.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.1"
        },
        "accelerometer": {
            "x": "0.3",
            "y": "9.9",
            "z": "0.1"
        },
        "gyroscope": {
            "pitch": "8.2",
            "roll": "0.5",
            "yaw": "2.7"
        },
        "force": {
            "front": "21.5",
            "middle": "48.7",
            "rear": "15.1"
        },
        "pressure": "1012.3 hPa",
        "temperature": "21.4°C"
    },
    {
        "timestamp": "2023-08-25T10:00:35.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.3"
        },
        "accelerometer": {
            "x": "0.2",
            "y": "10.0",
            "z": "0.0"
        },
        "gyroscope": {
            "pitch": "3.0",
            "roll": "0.2",
            "yaw": "3.3"
        },
        "force": {
            "front": "44.6",
            "middle": "33.8",
            "rear": "18.9"
        },
        "pressure": "1016.8 hPa",
        "temperature": "20.4°C"
    },
    {
        "timestamp": "2023-08-25T10:00:40.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.8"
        },
        "accelerometer": {
            "x": "0.3",
            "y": "10.0",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "3.2",
            "roll": "0.6",
            "yaw": "1.1"
        },
        "force": {
            "front": "44.4",
            "middle": "67.5",
            "rear": "13.7"
        },
        "pressure": "1015.3 hPa",
        "temperature": "18.3°C"
    },
    {
        "timestamp": "2023-08-25T10:00:45.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.8"
        },
        "accelerometer": {
            "x": "0.3",
            "y": "10.0",
            "z": "0.5"
        },
        "gyroscope": {
            "pitch": "7.7",
            "roll": "0.5",
            "yaw": "2.4"
        },
        "force": {
            "front": "27.4",
            "middle": "57.6",
            "rear": "27.4"
        },
        "pressure": "1016.1 hPa",
        "temperature": "20.9°C"
    },
    {
        "timestamp": "2023-08-25T10:00:50.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.1"
        },
        "accelerometer": {
            "x": "0.2",
            "y": "9.9",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "2.0",
            "roll": "0.5",
            "yaw": "2.5"
        },
        "force": {
            "front": "44.9",
            "middle": "57.8",
            "rear": "20.7"
        },
        "pressure": "1011.9 hPa",
        "temperature": "18.5°C"
    },
    {
        "timestamp": "2023-08-25T10:00:55.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.1"
        },
        "accelerometer": {
            "x": "0.5",
            "y": "10.1",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "9.6",
            "roll": "0.6",
            "yaw": "4.7"
        },
        "force": {
            "front": "26.6",
            "middle": "55.7",
            "rear": "22.7"
        },
        "pressure": "1018.5 hPa",
        "temperature": "18.4°C"
    },
    {
        "timestamp": "2023-08-25T10:01:00.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.6"
        },
        "accelerometer": {
            "x": "0.2",
            "y": "9.8",
            "z": "0.4"
        },
        "gyroscope": {
            "pitch": "9.5",
            "roll": "0.5",
            "yaw": "2.6"
        },
        "force": {
            "front": "37.7",
            "middle": "41.3",
            "rear": "29.7"
        },
        "pressure": "1011.3 hPa",
        "temperature": "20.8°C"
    },
    {
        "timestamp": "2023-08-25T10:01:05.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.3"
        },
        "accelerometer": {
            "x": "0.2",
            "y": "10.0",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "1.0",
            "roll": "0.0",
            "yaw": "0.8"
        },
        "force": {
            "front": "27.6",
            "middle": "30.6",
            "rear": "29.7"
        },
        "pressure": "1017.0 hPa",
        "temperature": "19.1°C"
    },
    {
        "timestamp": "2023-08-25T10:01:10.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.1"
        },
        "accelerometer": {
            "x": "0.1",
            "y": "9.9",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "2.3",
            "roll": "0.5",
            "yaw": "4.8"
        },
        "force": {
            "front": "22.4",
            "middle": "35.7",
            "rear": "16.6"
        },
        "pressure": "1016.6 hPa",
        "temperature": "18.9°C"
    },
    {
        "timestamp": "2023-08-25T10:01:15.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.6"
        },
        "accelerometer": {
            "x": "0.2",
            "y": "10.2",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "4.5",
            "roll": "0.6",
            "yaw": "0.8"
        },
        "force": {
            "front": "34.2",
            "middle": "34.8",
            "rear": "20.2"
        },
        "pressure": "1015.1 hPa",
        "temperature": "21.2°C"
    },
    {
        "timestamp": "2023-08-25T10:01:20.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.6"
        },
        "accelerometer": {
            "x": "0.5",
            "y": "10.1",
            "z": "0.4"
        },
        "gyroscope": {
            "pitch": "9.6",
            "roll": "0.4",
            "yaw": "0.5"
        },
        "force": {
            "front": "47.4",
            "middle": "58.8",
            "rear": "11.6"
        },
        "pressure": "1019.3 hPa",
        "temperature": "18.4°C"
    },
    {
        "timestamp": "2023-08-25T10:01:25.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.0"
        },
        "accelerometer": {
            "x": "0.4",
            "y": "10.2",
            "z": "0.2"
        },
        "gyroscope": {
            "pitch": "3.1",
            "roll": "0.3",
            "yaw": "4.5"
        },
        "force": {
            "front": "39.6",
            "middle": "57.6",
            "rear": "25.9"
        },
        "pressure": "1018.8 hPa",
        "temperature": "18.2°C"
    },
    {
        "timestamp": "2023-08-25T10:01:30.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.3"
        },
        "accelerometer": {
            "x": "0.1",
            "y": "10.2",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "5.4",
            "roll": "0.5",
            "yaw": "1.6"
        },
        "force": {
            "front": "23.5",
            "middle": "37.2",
            "rear": "28.6"
        },
        "pressure": "1015.7 hPa",
        "temperature": "21.7°C"
    },
    {
        "timestamp": "2023-08-25T10:01:35.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.4"
        },
        "accelerometer": {
            "x": "0.2",
            "y": "9.9",
            "z": "0.1"
        },
        "gyroscope": {
            "pitch": "6.2",
            "roll": "1.0",
            "yaw": "0.6"
        },
        "force": {
            "front": "37.8",
            "middle": "33.7",
            "rear": "27.9"
        },
        "pressure": "1018.0 hPa",
        "temperature": "19.4°C"
    },
    {
        "timestamp": "2023-08-25T10:01:40.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.1"
        },
        "accelerometer": {
            "x": "0.4",
            "y": "10.2",
            "z": "0.1"
        },
        "gyroscope": {
            "pitch": "3.7",
            "roll": "0.5",
            "yaw": "3.4"
        },
        "force": {
            "front": "40.5",
            "middle": "59.3",
            "rear": "10.9"
        },
        "pressure": "1013.5 hPa",
        "temperature": "20.1°C"
    },
    {
        "timestamp": "2023-08-25T10:01:45.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.3"
        },
        "accelerometer": {
            "x": "0.5",
            "y": "10.1",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "8.5",
            "roll": "0.2",
            "yaw": "1.1"
        },
        "force": {
            "front": "34.9",
            "middle": "63.5",
            "rear": "14.1"
        },
        "pressure": "1019.4 hPa",
        "temperature": "21.7°C"
    },
    {
        "timestamp": "2023-08-25T10:01:50.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.1"
        },
        "accelerometer": {
            "x": "0.4",
            "y": "10.2",
            "z": "0.2"
        },
        "gyroscope": {
            "pitch": "6.5",
            "roll": "0.8",
            "yaw": "3.0"
        },
        "force": {
            "front": "28.4",
            "middle": "67.2",
            "rear": "21.3"
        },
        "pressure": "1010.8 hPa",
        "temperature": "18.4°C"
    },
    {
        "timestamp": "2023-08-25T10:01:55.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.7"
        },
        "accelerometer": {
            "x": "0.2",
            "y": "10.0",
            "z": "0.1"
        },
        "gyroscope": {
            "pitch": "0.9",
            "roll": "0.4",
            "yaw": "4.6"
        },
        "force": {
            "front": "41.9",
            "middle": "60.0",
            "rear": "14.5"
        },
        "pressure": "1017.7 hPa",
        "temperature": "20.4°C"
    },
    {
        "timestamp": "2023-08-25T10:02:00.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.5"
        },
        "accelerometer": {
            "x": "0.4",
            "y": "9.8",
            "z": "0.1"
        },
        "gyroscope": {
            "pitch": "6.3",
            "roll": "0.5",
            "yaw": "2.7"
        },
        "force": {
            "front": "29.7",
            "middle": "42.3",
            "rear": "19.6"
        },
        "pressure": "1015.4 hPa",
        "temperature": "18.6°C"
    },
    {
        "timestamp": "2023-08-25T10:02:05.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.6"
        },
        "accelerometer": {
            "x": "0.1",
            "y": "10.3",
            "z": "0.2"
        },
        "gyroscope": {
            "pitch": "7.1",
            "roll": "0.4",
            "yaw": "2.3"
        },
        "force": {
            "front": "24.9",
            "middle": "32.2",
            "rear": "15.3"
        },
        "pressure": "1013.6 hPa",
        "temperature": "21.7°C"
    },
    {
        "timestamp": "2023-08-25T10:02:10.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.5"
        },
        "accelerometer": {
            "x": "0.3",
            "y": "10.3",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "1.1",
            "roll": "0.5",
            "yaw": "2.1"
        },
        "force": {
            "front": "24.5",
            "middle": "32.1",
            "rear": "28.0"
        },
        "pressure": "1015.4 hPa",
        "temperature": "20.3°C"
    },
    {
        "timestamp": "2023-08-25T10:02:15.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.2"
        },
        "accelerometer": {
            "x": "0.4",
            "y": "10.1",
            "z": "0.0"
        },
        "gyroscope": {
            "pitch": "5.4",
            "roll": "0.8",
            "yaw": "1.4"
        },
        "force": {
            "front": "45.5",
            "middle": "32.3",
            "rear": "28.1"
        },
        "pressure": "1016.4 hPa",
        "temperature": "19.8°C"
    },
    {
        "timestamp": "2023-08-25T10:02:20.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.4"
        },
        "accelerometer": {
            "x": "0.2",
            "y": "10.2",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "9.2",
            "roll": "0.3",
            "yaw": "4.1"
        },
        "force": {
            "front": "20.3",
            "middle": "57.1",
            "rear": "21.8"
        },
        "pressure": "1019.0 hPa",
        "temperature": "19.8°C"
    },
    {
        "timestamp": "2023-08-25T10:02:25.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.6"
        },
        "accelerometer": {
            "x": "0.4",
            "y": "9.9",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "1.2",
            "roll": "0.9",
            "yaw": "2.6"
        },
        "force": {
            "front": "25.6",
            "middle": "59.1",
            "rear": "29.5"
        },
        "pressure": "1014.4 hPa",
        "temperature": "18.4°C"
    },
    {
        "timestamp": "2023-08-25T10:02:30.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.3"
        },
        "accelerometer": {
            "x": "0.1",
            "y": "10.0",
            "z": "0.0"
        },
        "gyroscope": {
            "pitch": "7.7",
            "roll": "0.3",
            "yaw": "4.3"
        },
        "force": {
            "front": "30.4",
            "middle": "36.3",
            "rear": "17.4"
        },
        "pressure": "1011.1 hPa",
        "temperature": "19.4°C"
    },
    {
        "timestamp": "2023-08-25T10:02:35.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.9"
        },
        "accelerometer": {
            "x": "0.2",
            "y": "10.1",
            "z": "0.2"
        },
        "gyroscope": {
            "pitch": "6.7",
            "roll": "0.8",
            "yaw": "4.7"
        },
        "force": {
            "front": "33.5",
            "middle": "30.8",
            "rear": "19.8"
        },
        "pressure": "1019.7 hPa",
        "temperature": "20.1°C"
    },
    {
        "timestamp": "2023-08-25T10:02:40.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "1.6"
        },
        "accelerometer": {
            "x": "0.1",
            "y": "9.8",
            "z": "0.5"
        },
        "gyroscope": {
            "pitch": "4.6",
            "roll": "0.4",
            "yaw": "1.0"
        },
        "force": {
            "front": "29.3",
            "middle": "42.4",
            "rear": "10.5"
        },
        "pressure": "1011.3 hPa",
        "temperature": "20.2°C"
    },
    {
        "timestamp": "2023-08-25T10:02:45.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.5"
        },
        "accelerometer": {
            "x": "0.4",
            "y": "10.2",
            "z": "0.1"
        },
        "gyroscope": {
            "pitch": "0.0",
            "roll": "0.7",
            "yaw": "3.6"
        },
        "force": {
            "front": "42.0",
            "middle": "38.3",
            "rear": "22.1"
        },
        "pressure": "1016.1 hPa",
        "temperature": "18.3°C"
    },
    {
        "timestamp": "2023-08-25T10:02:50.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.3"
        },
        "accelerometer": {
            "x": "0.2",
            "y": "10.0",
            "z": "0.2"
        },
        "gyroscope": {
            "pitch": "2.0",
            "roll": "0.4",
            "yaw": "2.7"
        },
        "force": {
            "front": "37.6",
            "middle": "58.1",
            "rear": "18.3"
        },
        "pressure": "1015.9 hPa",
        "temperature": "20.4°C"
    },
    {
        "timestamp": "2023-08-25T10:02:55.000Z",
        "gps": {
            "distance_from_beach": "5m",
            "latitude": "34.020700",
            "longitude": "-118.502400",
            "speed": "0.6"
        },
        "accelerometer": {
            "x": "0.1",
            "y": "10.1",
            "z": "0.3"
        },
        "gyroscope": {
            "pitch": "0.1",
            "roll": "0.8",
            "yaw": "3.6"
        },
        "force": {
            "front": "39.0",
            "middle": "66.7",
            "rear": "11.6"
        },
        "pressure": "1017.5 hPa",
        "temperature": "19.5°C"
    }
]

//remove celcius mark and convert to number

function plotGraph(chartID, chartTitle, chartColor, alltimestamp, allTemperatures, destroy) {
    //use chart.js to plot temperature

    //destroy previous chart if exists




    var ctx = document.getElementById(chartID).getContext('2d');

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: alltimestamp,
            datasets: [{
                label: chartTitle,
                backgroundColor: chartColor,
                borderColor: chartColor,
                data: allTemperatures
            }]
        },
        options: {}
    });
    if (destroy) {


        setTimeout(function () {
            chart.destroy();
        }, 900);

    }
    // chart.destroy();



}


function plot3LineGraphs(chartID, chartTitle, chartColor, alltimestamp, allX, allY, allZ, destroy, chartName) {
    var ctx = document.getElementById(chartID).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: alltimestamp,
            datasets: [{
                label: chartTitle[0],
                backgroundColor: chartColor[0],
                borderColor: chartColor[0],
                data: allX
            },
            {
                label: chartTitle[1],
                backgroundColor: chartColor[1],
                borderColor: chartColor[1],
                data: allY
            },
            {
                label: chartTitle[2],
                backgroundColor: chartColor[2],
                borderColor: chartColor[2],
                data: allZ
            }

            ]
        },

        options: {
            plugins: {
                title: {
                    display: true,
                    text: chartName
                }
            },
        }
    });

    if (destroy) {


        setTimeout(function () {
            chart.destroy();
        }, 900);

    }

}




function plotData(simulationData) {

    var allTemperatures = simulationData.map(function (data) { return parseFloat(data.temperature.replace("°C", "")); });
    var allPressures = simulationData.map(function (data) { return parseFloat(data.pressure.replace("hPa", "")) });
    var allSpeeds = simulationData.map(function (data) { return data.gps.speed; });
    var allAccelerometerX = simulationData.map(function (data) { return data.accelerometer.x; });
    var allAccelerometerY = simulationData.map(function (data) { return data.accelerometer.y; });
    var allAccelerometerZ = simulationData.map(function (data) { return data.accelerometer.z; });
    var allGyroscopePitch = simulationData.map(function (data) { return data.gyroscope.pitch; });
    var allGyroscopeRoll = simulationData.map(function (data) { return data.gyroscope.roll; });
    var allGyroscopeYaw = simulationData.map(function (data) { return data.gyroscope.yaw; });
    var allForceFront = simulationData.map(function (data) { return data.force.front; });
    var allForceMiddle = simulationData.map(function (data) { return data.force.middle; });
    var allForceRear = simulationData.map(function (data) { return data.force.rear; });
    var allGpsLatitude = simulationData.map(function (data) { return data.gps.latitude; });
    var allGpsLongitude = simulationData.map(function (data) { return data.gps.longitude; });
    var allGpsSpeed = simulationData.map(function (data) { return data.gps.speed; });
    var allGpsDistanceFromBeach = simulationData.map(function (data) { return data.gps.distance_from_beach; });
    var alltimestamp = simulationData.map(function (data) {
        // return only time 
        return data.timestamp.split("T")[1].split("Z")[0];
    });




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
            gpsElement.querySelector(".latitude").innerHTML = "Lat :" + gps.latitude;
            gpsElement.querySelector(".longitude").innerHTML = "Long :" + gps.longitude;
            gpsElement.querySelector(".speed").innerHTML = "Speed :" + gps.speed;

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


            //get elements upto i index
            //check chart is already created
            //if created, update data
            //if not created, create chart

            //if last element, dont destroy chart
            if (i == simulationData.length - 1) {
                plotGraph('myChar3t', 'Temperature', 'black', alltimestamp.slice(0, i + 1), allTemperatures.slice(0, i + 1));

                plotGraph('myChart2', 'Pressure (hpA)', 'red', alltimestamp.slice(0, i + 1), allPressures.slice(0, i + 1));

                //speed
                plotGraph('myChart3', 'Speed (m/s)', 'blue', alltimestamp.slice(0, i + 1), allSpeeds.slice(0, i + 1));

                plot3LineGraphs('myChart4', ['X', 'Y', 'Z'], ['red', 'green', 'blue'], alltimestamp.slice(0, i + 1), allAccelerometerX.slice(0, i + 1), allAccelerometerY.slice(0, i + 1), allAccelerometerZ.slice(0, i + 1), false, 'Accelerometer');

                //gyroscope
                plot3LineGraphs('myChart5', ['Pitch', 'Roll', 'Yaw'], ['red', 'green', 'blue'], alltimestamp.slice(0, i + 1), allGyroscopePitch.slice(0, i + 1), allGyroscopeRoll.slice(0, i + 1), allGyroscopeYaw.slice(0, i + 1), false, 'Gyroscope');

                //force
                plot3LineGraphs('myChart6', ['Front', 'Middle', 'Rear'], ['red', 'green', 'blue'], alltimestamp.slice(0, i + 1), allForceFront.slice(0, i + 1), allForceMiddle.slice(0, i + 1), allForceRear.slice(0, i + 1), false, 'Force');

            } else {

                plotGraph('myChar3t', 'Temperature', 'black', alltimestamp.slice(0, i + 1), allTemperatures.slice(0, i + 1), true);
                plotGraph('myChart2', 'Pressure (hpA)', 'red', alltimestamp.slice(0, i + 1), allPressures.slice(0, i + 1), true);

                //speed
                plotGraph('myChart3', 'Speed (m/s)', 'blue', alltimestamp.slice(0, i + 1), allSpeeds.slice(0, i + 1), true);

                plot3LineGraphs('myChart4', ['X', 'Y', 'Z'], ['red', 'green', 'blue'], alltimestamp.slice(0, i + 1), allAccelerometerX.slice(0, i + 1), allAccelerometerY.slice(0, i + 1), allAccelerometerZ.slice(0, i + 1), true, 'Accelerometer');

                //gyroscope
                plot3LineGraphs('myChart5', ['Pitch', 'Roll', 'Yaw'], ['red', 'green', 'blue'], alltimestamp.slice(0, i + 1), allGyroscopePitch.slice(0, i + 1), allGyroscopeRoll.slice(0, i + 1), allGyroscopeYaw.slice(0, i + 1), true, 'Gyroscope');

                //force
                plot3LineGraphs('myChart6', ['Front', 'Middle', 'Rear'], ['red', 'green', 'blue'], alltimestamp.slice(0, i + 1), allForceFront.slice(0, i + 1), allForceMiddle.slice(0, i + 1), allForceRear.slice(0, i + 1), true, 'Force');
            }

            // plotGraph(alltimestamp.slice(0, i + 1), allTemperatures.slice(0, i + 1));

            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000);

}

plotData(
    sim3
);
// plotGraph();
function startSimulation() {

    console.log("Simulation started");
}


