const express =  require('express');
const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/test-app'));

app.get('/*', (req, res)=>{
    res.sendFile(__dirname + '/dist/test-app/index.html');
});

app.listen(PORT, ()=>{
    console.log('servidor iniciado na porta' + PORT);
})