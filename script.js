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
  document.getElementById('cursorcostnum').innerHTML
  = 15 * buyamount;
  document.getElementById('ovenscostnum').innerHTML
  = 100 * buyamount;
  document.getElementById('25').innerHTML
  = 1000 * buyamount;
  document.getElementById('26').innerHTML
  = 5000 * buyamount;
  document.getElementById('27').innerHTML
  = 1000000 * buyamount;
  document.getElementById('28').innerHTML
  = 10000000 * buyamount;
  document.getElementById('29').innerHTML
  = 500000 * buyamount;
  document.getElementById('30').innerHTML
  = 1000000 * buyamount;
  document.getElementById('31').innerHTML
  = 250000 * buyamount;
  document.getElementById('32').innerHTML
  = 1000000000 * buyamount;
  document.getElementById('33').innerHTML
  = 1000000000000 * buyamount;
}

function onbeansbuttonclicked() {
  clicks += ((1 + cursornum + (ovens * 5) + (migits * 20) + (farms * 100) + (shades * 2500) + (yez * 10000) + (pizza * 100000) + (hotchocolate * 500000)) * mult)
  migits += ((migitgod * 1000) * minionmult)
  document.getElementById('clicker25').innerHTML
    = clicks;
  document.getElementById('cursors').innerHTML
    = cursornum;
  document.getElementById('ovensnum').innerHTML
    = ovens;
  document.getElementById('migitnum').innerHTML
    = migits;
  document.getElementById('migitgodnum').innerHTML
    = migitgod;
  document.getElementById('farmnum').innerHTML
    = farms;
  document.getElementById('snum').innerHTML
    = shades;
  document.getElementById('ynum').innerHTML
    = yez;
  document.getElementById('pnum').innerHTML
    = pizza;
  document.getElementById('hnum').innerHTML
    = hotchocolate;
  document.title = clicks + " beans - Been Clicker"
}
function cursors() {
  if (clicks > (15 * buyamount) - 1) {
    cursornum += 1 * buyamount
    clicks -= 15 * buyamount
    document.getElementById('clicker25').innerHTML
      = clicks;
    document.getElementById('cursors').innerHTML
      = cursornum;
    document.getElementById('ovensnum').innerHTML
      = ovens;
    document.getElementById('migitnum').innerHTML
      = migits;
    document.getElementById('migitgodnum').innerHTML
      = migitgod;
    document.getElementById('farmnum').innerHTML
      = farms;
    document.getElementById('snum').innerHTML
      = shades;
    document.getElementById('ynum').innerHTML
      = yez;
    document.getElementById('pnum').innerHTML
      = pizza;
    document.getElementById('hnum').innerHTML
      = hotchocolate;
  }
  else {
    alert("not enough beans")
  }
}


function ovensshop() {
  if (clicks > (100 * buyamount) - 1) {
    ovens += 1 * buyamount
    clicks -= 100 * buyamount
    document.getElementById('clicker25').innerHTML
      = clicks;
    document.getElementById('cursors').innerHTML
      = cursornum;
    document.getElementById('ovensnum').innerHTML
      = ovens;
    document.getElementById('migitnum').innerHTML
      = migits;
    document.getElementById('migitgodnum').innerHTML
      = migitgod;
    document.getElementById('farmnum').innerHTML
      = farms;
    document.getElementById('snum').innerHTML
      = shades;
    document.getElementById('ynum').innerHTML
      = yez;
    document.getElementById('pnum').innerHTML
      = pizza;
    document.getElementById('hnum').innerHTML
      = hotchocolate;
  }
  else {
    alert("not enough beans")
  }
}
function buymigits() {
  if (clicks > (1000 * buyamount) - 1) {
    migits += 1 * buyamount
    clicks -= 1000 * buyamount
    document.getElementById('clicker25').innerHTML
      = clicks;
    document.getElementById('cursors').innerHTML
      = cursornum;
    document.getElementById('ovensnum').innerHTML
      = ovens;
    document.getElementById('migitnum').innerHTML
      = migits;
    document.getElementById('migitgodnum').innerHTML
      = migitgod;
    document.getElementById('farmnum').innerHTML
      = farms;
    document.getElementById('snum').innerHTML
      = shades;
    document.getElementById('ynum').innerHTML
      = yez;
    document.getElementById('pnum').innerHTML
      = pizza;
    document.getElementById('hnum').innerHTML
      = hotchocolate;
    if (migits > 249999) {
      if (migitsland < 1) {
        migitsland = 1
        migitgod += 1
        alert("unlocked minion god")
        document.getElementById('clicker25').innerHTML
          = clicks;
        document.getElementById('cursors').innerHTML
          = cursornum;
        document.getElementById('ovensnum').innerHTML
          = ovens;
        document.getElementById('migitnum').innerHTML
          = migits;
        document.getElementById('migitgodnum').innerHTML
          = migitgod;
        document.getElementById('farmnum').innerHTML
          = farms;
        document.getElementById('snum').innerHTML
          = shades;
        document.getElementById('ynum').innerHTML
          = yez;
        document.getElementById('pnum').innerHTML
          = pizza;
        document.getElementById('hnum').innerHTML
          = hotchocolate;
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
      document.getElementById('clicker25').innerHTML
        = clicks;
      document.getElementById('cursors').innerHTML
        = cursornum;
      document.getElementById('ovensnum').innerHTML
        = ovens;
      document.getElementById('migitnum').innerHTML
        = migits;
      document.getElementById('migitgodnum').innerHTML
        = migitgod;
      document.getElementById('farmnum').innerHTML
        = farms;
      document.getElementById('snum').innerHTML
        = shades;
      document.getElementById('ynum').innerHTML
        = yez;
      document.getElementById('pnum').innerHTML
        = pizza;
      document.getElementById('hnum').innerHTML
        = hotchocolate;
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
    document.getElementById('clicker25').innerHTML
      = clicks;
    document.getElementById('cursors').innerHTML
      = cursornum;
    document.getElementById('ovensnum').innerHTML
      = ovens;
    document.getElementById('migitnum').innerHTML
      = migits;
    document.getElementById('migitgodnum').innerHTML
      = migitgod;
    document.getElementById('farmnum').innerHTML
      = farms;
    document.getElementById('snum').innerHTML
      = shades;
    document.getElementById('ynum').innerHTML
      = yez;
    document.getElementById('pnum').innerHTML
      = pizza;
    document.getElementById('hnum').innerHTML
      = hotchocolate;
  }
  else {
    alert("not enough beans")
  }
}
function buyshades() {
  if (migits > (50000 * buyamount) - 1) {
    shades += 1 * buyamount
    migits -= 500000 * buyamount
    document.getElementById('clicker25').innerHTML
      = clicks;
    document.getElementById('cursors').innerHTML
      = cursornum;
    document.getElementById('ovensnum').innerHTML
      = ovens;
    document.getElementById('migitnum').innerHTML
      = migits;
    document.getElementById('migitgodnum').innerHTML
      = migitgod;
    document.getElementById('farmnum').innerHTML
      = farms;
    document.getElementById('snum').innerHTML
      = shades;
    document.getElementById('ynum').innerHTML
      = yez;
    document.getElementById('pnum').innerHTML
      = pizza;
    document.getElementById('hnum').innerHTML
      = hotchocolate;
  }
  else {
    alert("not enough minions")
  }
}
function buyyez() {
  if (migits > (1000000 * buyamount) - 1) {
    yez += 1 * buyamount
    migits -= 1000000 * buyamount
    document.getElementById('clicker25').innerHTML
      = clicks;
    document.getElementById('cursors').innerHTML
      = cursornum;
    document.getElementById('ovensnum').innerHTML
      = ovens;
    document.getElementById('migitnum').innerHTML
      = migits;
    document.getElementById('migitgodnum').innerHTML
      = migitgod;
    document.getElementById('farmnum').innerHTML
      = farms;
    document.getElementById('snum').innerHTML
      = shades;
    document.getElementById('ynum').innerHTML
      = yez;
    document.getElementById('pnum').innerHTML
      = pizza;
    document.getElementById('hnum').innerHTML
      = hotchocolate;
  }
  else {
    alert("not enough minions")
  }
}
function buypizza() {
  if (clicks > (1000000 * buyamount) - 1) {
    pizza += 1 * buyamount
    clicks -= 1000000 * buyamount
    document.getElementById('clicker25').innerHTML
      = clicks;
    document.getElementById('cursors').innerHTML
      = cursornum;
    document.getElementById('ovensnum').innerHTML
      = ovens;
    document.getElementById('migitnum').innerHTML
      = migits;
    document.getElementById('migitgodnum').innerHTML
      = migitgod;
    document.getElementById('farmnum').innerHTML
      = farms;
    document.getElementById('snum').innerHTML
      = shades;
    document.getElementById('ynum').innerHTML
      = yez;
    document.getElementById('pnum').innerHTML
      = pizza;
    document.getElementById('hnum').innerHTML
      = hotchocolate;
  }
  else {
    alert("not enough beans")
  }
}
function multit() {
  if (clicks > (1000000000 * buyamount) - 1) {
    mult += 1 * buyamount
    clicks -= 1000000000 * buyamount
    document.getElementById('clicker25').innerHTML
      = clicks;
    document.getElementById('cursors').innerHTML
      = cursornum;
    document.getElementById('ovensnum').innerHTML
      = ovens;
    document.getElementById('migitnum').innerHTML
      = migits;
    document.getElementById('migitgodnum').innerHTML
      = migitgod;
    document.getElementById('farmnum').innerHTML
      = farms;
    document.getElementById('snum').innerHTML
      = shades;
    document.getElementById('ynum').innerHTML
      = yez;
    document.getElementById('pnum').innerHTML
      = pizza;
    document.getElementById('mnum').innerHTML
      = mult;
    document.getElementById('hnum').innerHTML
      = hotchocolate;
  }
  else {
    alert("not enough beans")
  }
}
function hotchocolate10() {
  if (clicks > (10000000 * buyamount) - 1) {
    hotchocolate += 1 * buyamount
    clicks -= 10000000 * buyamount
    document.getElementById('clicker25').innerHTML
      = clicks;
    document.getElementById('cursors').innerHTML
      = cursornum;
    document.getElementById('ovensnum').innerHTML
      = ovens;
    document.getElementById('migitnum').innerHTML
      = migits;
    document.getElementById('migitgodnum').innerHTML
      = migitgod;
    document.getElementById('farmnum').innerHTML
      = farms;
    document.getElementById('snum').innerHTML
      = shades;
    document.getElementById('ynum').innerHTML
      = yez;
    document.getElementById('pnum').innerHTML
      = pizza;
    document.getElementById('mnum').innerHTML
      = mult;
    document.getElementById('hnum').innerHTML
      = hotchocolate;
  }
  else {
    alert("not enough beans")
  }
}
function minmult() {
  if (clicks > (1000000000000 * buyamount) - 1) {
    minionmult += 1
    clicks -= 1000000000000
    document.getElementById('clicker25').innerHTML
      = clicks;
    document.getElementById('cursors').innerHTML
      = cursornum;
    document.getElementById('ovensnum').innerHTML
      = ovens;
    document.getElementById('migitnum').innerHTML
      = migits;
    document.getElementById('migitgodnum').innerHTML
      = migitgod;
    document.getElementById('farmnum').innerHTML
      = farms;
    document.getElementById('snum').innerHTML
      = shades;
    document.getElementById('ynum').innerHTML
      = yez;
    document.getElementById('pnum').innerHTML
      = pizza;
    document.getElementById('mnum').innerHTML
      = mult;
    document.getElementById('hnum').innerHTML
      = hotchocolate;
    document.getElementById('minnum').innerHTML
      = minionmult;
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