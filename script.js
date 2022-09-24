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
function cheeseland() {
  if (confirm("Do you want to launch a nuke?")) {
    let nuke = prompt("nuke location", "");
    let text;
    if (nuke == null || nuke == "") {
      alert("nuke cancelled")
    } else {
      alert("nukeing " + nuke)
    }
  } else {
    alert("Ok no nuke")
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function clickerbutton() {
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
}
function cursors() {
  if (clicks > 14) {
    cursornum += 1
    clicks -= 15
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
    alert("not enough cookies")
  }
}

function cursors1500() {
  if (clicks > 1499) {
    cursornum += 100
    clicks -= 1500
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
    alert("not enough cookies")
  }
}
function ovensshop() {
  if (clicks > 99) {
    ovens += 1
    clicks -= 100
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
    alert("not enough cookies")
  }
}
function oven100() {
  if (clicks > 9999) {
    ovens += 100
    clicks -= 10000
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
    alert("not enough cookies")
  }
}
function buymigits() {
  if (clicks > 999) {
    migits += 1
    clicks -= 1000
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
        alert("unlocked migit god")
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
    alert("not enough cookies")
  }
}
function buymigits10() {
  if (clicks > 99999) {
    migits += 100
    clicks -= 100000
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
        alert("unlocked migit god")
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
    alert("not enough cookies")
  }
}

function buymigits100() {
  if (clicks > 999999) {
    migits += 1000
    clicks -= 1000000
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
        alert("unlocked migit god")
        document.getElementById('clicker25').innerHTML
          = clicks;
        document.getElementById('cursors').innerHTML
          = cursornum;
        document.getElementById('ovensnum').innerHTML
          = ovens;
        document.getElementById('migitnum').innerHTML
          = migits;
        document.getElementById('hnum').innerHTML
          = hotchocolate;
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
    alert("not enough cookies")
  }
}
function buymigitgod() {
  if (migitgod > 0) {
    if (migits > 249999) {
      migitgod += 1
      migits -= 250000
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

function buymigitgod10() {
  if (migitgod > 0) {
    if (migits > 24999999) {
      migitgod += 100
      migits -= 25000000
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
  if (clicks > 4999) {
    farms += 1
    clicks -= 5000
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
    alert("not enough cookies")
  }
}

function buyfarm100() {
  if (clicks > 499999) {
    farms += 100
    clicks -= 500000
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
    alert("not enough cookies")
  }
}

function buyshades() {
  if (migits > 499999) {
    shades += 1
    migits -= 500000
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

function buyshades10() {
  if (migits > 49999999) {
    shades += 100
    migits -= 50000000
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
  if (migits > 999999) {
    yez += 1
    migits -= 1000000
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

function buyyez10() {
  if (migits > 99999999) {
    yez += 100
    migits -= 100000000
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
  if (clicks > 999999) {
    pizza += 1
    clicks -= 1000000
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
    alert("not enough cookies")
  }
}
function buypizza10() {
  if (clicks > 99999999) {
    pizza += 100
    clicks -= 100000000
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
    alert("not enough cookies")
  }
}
function buymigits120() {
  if (clicks > 9999999) {
    migits += 10000
    clicks -= 10000000
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
        alert("unlocked migit god")
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
    }
  }
  else {
    alert("not enough cookies")
  }
}
function buymigits130() {
  if (clicks > 99999999) {
    migits += 100000
    clicks -= 100000000
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
    if (migits > 249999) {
      if (migitsland < 1) {
        migitsland = 1
        migitgod += 1
        alert("unlocked migit god")
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
    }
  }
  else {
    alert("not enough cookies")
  }
}

function multit() {
  if (clicks > 999999999) {
    mult += 1
    clicks -= 1000000000
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
    alert("not enough cookies")
  }
}

function hotchocolate10() {
  if (clicks > 9999999) {
    hotchocolate += 1
    clicks -= 10000000
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
    alert("not enough cookies")
  }
}
function hotchocolate100() {
  if (clicks > 999999999) {
    hotchocolate += 100
    clicks -= 1000000000
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
    alert("not enough cookies")
  }
}

function multit10() {
  if (clicks > 99999999999) {
    mult += 100
    clicks -= 100000000000
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
    alert("not enough cookies")
  }
}
function multit100() {
  if (clicks > 999999999999) {
    mult += 1000
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
  }
  else {
    alert("not enough cookies")
  }
}


function hotchocolate1000() {
  if (clicks > 9999999999) {
    hotchocolate += 1000
    clicks -= 10000000000
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
    alert("not enough cookies")
  }
}

function multit1000() {
  if (clicks > 9999999999999) {
    mult += 10000
    clicks -= 10000000000000
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
    alert("not enough cookies")
  }
}
function minmult() {
  if (clicks > 9999999999999) {
    minionmult += 1
    clicks -= 10000000000000
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
    alert("not enough cookies")
  }
}
function minmult10() {
  if (clicks > 99999999999999) {
    minionmult += 100
    clicks -= 100000000000000
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
    alert("not enough cookies")
  }
}
function minmult100() {
  if (clicks > 99999999999999) {
    minionmult += 1000
    clicks -= 100000000000000
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
    alert("not enough cookies")
  }
}
console.log("hello")
function gotogoogle(){
  location.replace("https://www.google.com")
}