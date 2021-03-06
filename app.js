const http = require('http');
const axios = require('axios');


const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  axios.all([
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=371f668ca7a2429f03ec4e1032b75741'),
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=371f668ca7a2429f03ec4e1032b75741'),
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=371f668ca7a2429f03ec4e1032b75741'),



  ])
  .then(responseArr => {
    console.log('Tunis: ', responseArr[0].data.weather);
    console.log('Moscow: ', responseArr[1].data.weather);
    console.log('Madrid: ', responseArr[2].data.weather);
   
  });
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});