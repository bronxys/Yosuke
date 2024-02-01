const fs = require('fs')
const path = require('path');

const dbPath = path.resolve(__dirname, './database/dinheiro.json');

let data = {};

const carregarDados = () => {
  try {
    const jsonData = fs.readFileSync(dbPath, 'utf8');
    data = JSON.parse(jsonData);
  } catch (error) {
    data = {};
  }
};
const toMs = require('ms')
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const dindin = JSON.parse(fs.readFileSync('./database/dinheiro.json'));
//const like = JSON.parse(fs.readFileSync('./datab/usuarios/like.json'));

        
const limitAdd = (sender) => {
let position = false
Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
position = i
}
})
if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./datab/grupos/limit.json', JSON.stringify(_limit))
}
}
     
const addATM = (sender) => {
carregarDados();
const obj = {
 id: sender,
 dindin: 0
};
dindin.push(obj)
fs.writeFileSync('./database/dinheiro.json', JSON.stringify(dindin))
}
        
const addKoinUser = (sender, amount) => {
carregarDados();
let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
dindin[position].dindin += amount
fs.writeFileSync('./database/dinheiro.json', JSON.stringify(dindin))
}
}


const checkATMuser = (sender) => {
carregarDados();
let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
return dindin[position].dindin
}
}

const confirmATM = (sender, amount) => {
carregarDados();
let position = false
Object.keys(dindin).forEach((i) => {
if (dindin[i].id === sender) {
position = i
}
})
if (position !== false) {
dindin[position].dindin -= amount
fs.writeFileSync('./database/dinheiro.json', JSON.stringify(dindin))
}
}
//FINAL SISTEMA BANCO//


const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

supre = `558198923680@s.whatsapp.net`

//AFK
const addafk = (from) => {
const obj = { id: from, expired: Date.now() + toMs('0m') }
afk.push(obj)
fs.writeFileSync('./datab/grupos/afk.json', JSON.stringify(afk))
}
                         
const getpc = async function(totalchat){
pc = []
a = []
b = []
for (c of totalchat){
a.push(c.id)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}

module.exports = { 
limitAdd, 
addATM, 
addKoinUser, 
checkATMuser, 
confirmATM
}