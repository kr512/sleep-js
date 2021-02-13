# sleep-js
### The advanced javascript library that calculates when to sleep.


## Install
```
npm i @ilsubyeega/sleep-js
```


## Usage
```js
const sleepjs = require('@ilsubyeega/sleep-js');
var sleep = new sleepjs();

// Calculate recommended Sleep hour.
console.log(sleep.getRecommendedSleepHour(18)); 
// Age 18 -> [ 7, 9 ]

// hour/min to a demical hour
console.log(sleep.getHourNum(20, 21));
// 20:21 -> 20.25

// Calculate the time to wake up
console.log(sleep.getSleepTime(0, 6)); 
// 12 AM (0:00) with 6 sleep cycle -> 9.25 (9:15)
```