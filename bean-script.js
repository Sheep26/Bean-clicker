var clicks = 0
var cursornum = 0
var ovens = 0
var migits = 0
var migitsland = 0
var migitgod = 0
var farms = 0
var shades = 0
var yez = 0
var pizza = 0
var migitfail = 0
var mult = 1
var hotchocolate = 0
var minionmult = 1
var buyamount = 1
var cursorcostnum = 15;
const ALPHABET = ['K', ' Million', ' Billion', ' Trillion',  " Quadrillion", " Quintillion", " Sextillion ", " Septillion", " Octillion", " Nonillion", " Decillion", " Undecillion", " Duodecillion", " Tredecillion", " Quattuordecillion", " Quindecillion", " Sexdecillion", " Septemdecillion", " Octodecillion", " Novemdecillion", " Vigintillion", " Unvigintillion", " Duovigintillion", " Trevigintillion", " Quattuorvigintillion", " Quinvigintillion", " Sexvigintillion", " Septvigintillion", " Octovigintillion", " Nonvigintillion", " Trigintillion", " Untrigintillion", " Duotrigintillion", " Tretrigintillion"]
const TRESHOLD = 1e3

function humanNumber(n, fn){
  let idx = 0
  while (n >= TRESHOLD && ++idx <= ALPHABET.length) n /= TRESHOLD
  if (fn) n = fn(n)
  return String(idx === 0 ? n : n.toFixed(1) + ALPHABET[idx - 1])
}

function startup(){
  var2 = getRandomInt(3);
  if(var2 == 0){
    console.log("Hello");
  }else{
    if(var2 == 1){
    console.log("Hello hows your day");
    }else{
      if(var2 == 2){
        console.log("mcdonalds");
      }
    }
  }
  var intervalId = window.setInterval(function(){cps()}, 100);
}
function setbuyamount(amount){
  buyamount = amount
  document.getElementById('cursorbuynum').innerHTML
  = buyamount;
  document.getElementById('ovenbuynum').innerHTML
  = buyamount;
  document.getElementById('migitbuynum').innerHTML
  = buyamount;
  document.getElementById('farmbuynum').innerHTML
  = buyamount;
  document.getElementById('pizzabuynum').innerHTML
  = buyamount;
  document.getElementById('hotbuynum').innerHTML
  = buyamount;
  document.getElementById('shadbuynum').innerHTML
  = buyamount;
  document.getElementById('yesbuynum').innerHTML
  = buyamount;
  document.getElementById('minbuynum').innerHTML
  = buyamount;
  document.getElementById('multbuynum').innerHTML
  = buyamount;
  document.getElementById('minmultbuynum').innerHTML
  = buyamount;
  update_price();
}

function update_price(){
  document.getElementById('cursorcostnum').innerHTML
  = humanNumber(Math.round(cursorcostnum * buyamount));
  document.getElementById('ovenscostnum').innerHTML
  = humanNumber(Math.round(100 * buyamount));
  document.getElementById('25').innerHTML
  = humanNumber(Math.round(1000 * buyamount));
  document.getElementById('26').innerHTML
  = humanNumber(Math.round(5000 * buyamount));
  document.getElementById('27').innerHTML
  = humanNumber(Math.round(1000000 * buyamount));
  document.getElementById('28').innerHTML
  = humanNumber(Math.round(10000000 * buyamount));
  document.getElementById('29').innerHTML
  = humanNumber(Math.round(500000 * buyamount));
  document.getElementById('30').innerHTML
  = humanNumber(Math.round(1000000 * buyamount));
  document.getElementById('31').innerHTML
  = humanNumber(Math.round(250000 * buyamount));
  document.getElementById('32').innerHTML
  = humanNumber(Math.round(1000000000 * buyamount));
}

function update_amounts(){
  document.getElementById('clicker25').innerHTML
      = humanNumber(Math.round(clicks));
    document.getElementById('cursors').innerHTML
      = humanNumber(cursornum);
    document.getElementById('ovensnum').innerHTML
      = humanNumber(ovens);
    document.getElementById('migitnum').innerHTML
      = humanNumber(migits);
    document.getElementById('migitgodnum').innerHTML
      = humanNumber(migitgod);
    document.getElementById('farmnum').innerHTML
      = humanNumber(farms);
    document.getElementById('snum').innerHTML
      = humanNumber(shades);
    document.getElementById('ynum').innerHTML
      = humanNumber(yez);
    document.getElementById('pnum').innerHTML
      = humanNumber(pizza);
    document.getElementById('hnum').innerHTML
      = humanNumber(hotchocolate);
      document.getElementById('mnum').innerHTML
      = humanNumber(mult);
}

function cps(){
  clicks += ((cursornum + (ovens * 5) + (migits * 20) + (farms * 100) + (shades * 2500) + (yez * 10000) + (pizza * 100000) + (hotchocolate * 500000)) * mult) / 10
  document.getElementById('clicker25').innerHTML = humanNumber(Math.round(clicks));
  update_price();
}

function onbeansbuttonclicked() {
  clicks += ((1)* mult)
  migits += ((migitgod * 1000) * minionmult)
  update_amounts()
}
function cursors() {
  if (clicks > (cursorcostnum * buyamount) - 1) {
    cursornum += 1 * buyamount
    cursorcostnum *= 1.15;
    clicks -= 15 * buyamount
    update_amounts()
  }
  else {
    alert("not enough beans")
  }
}

//TODO Add prices for going up
function ovensshop() {
  if (clicks > (100 * buyamount) - 1) {
    ovens += 1 * buyamount
    clicks -= 100 * buyamount
    update_amounts()
  }
  else {
    alert("not enough beans")
  }
}
function buymigits() {
  if (clicks > (1000 * buyamount) - 1) {
    migits += 1 * buyamount
    clicks -= 1000 * buyamount
    update_amounts()
    if (migits > 249999) {
      if (migitsland < 1) {
        migitsland = 1
        migitgod += 1
        alert("unlocked minion god")
        update_amounts()
      }
    }
  }
  else {
    alert("not enough beans")
  }
}
function buymigitgod() {
  if (migitgod > 0) {
    if (migits > (25000 * buyamount) - 1) {
      migitgod += 1 * buyamount
      migits -= 250000 * buyamount
      update_amounts()
    }
    else {
      alert("not enough minions")
    }
  }
  else {
    alert("not unlocked")
  }
}
function buyfarm() {
  if (clicks > (5000 * buyamount) - 1) {
    farms += 1 * buyamount
    clicks -= 5000 * buyamount
    update_amounts()
  }
  else {
    alert("not enough beans")
  }
}
function buyshades() {
  if (migits > (50000 * buyamount) - 1) {
    shades += 1 * buyamount
    migits -= 500000 * buyamount
    update_amounts()
  }
  else {
    alert("not enough minions")
  }
}
function buyyez() {
  if (migits > (1000000 * buyamount) - 1) {
    yez += 1 * buyamount
    migits -= 1000000 * buyamount
    update_amounts()
  }
  else {
    alert("not enough minions")
  }
}
function buypizza() {
  if (clicks > (1000000 * buyamount) - 1) {
    pizza += 1 * buyamount
    clicks -= 1000000 * buyamount
    update_amounts()
  }
  else {
    alert("not enough beans")
  }
}
function multit() {
  if (clicks > (1000000000 * buyamount) - 1) {
    mult += 1 * buyamount
    clicks -= 1000000000 * buyamount
    update_amounts()
  }
  else {
    alert("not enough beans")
  }
}
function hotchocolate10() {
  if (clicks > (10000000 * buyamount) - 1) {
    hotchocolate += 1 * buyamount
    clicks -= 10000000 * buyamount
    update_amounts()
  }
  else {
    alert("not enough beans")
  }
}
  
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function gotogoogle(){
  location.replace("https://www.google.com")
}
startup();