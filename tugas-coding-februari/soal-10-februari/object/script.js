const pilih = document.querySelector("#pilih");
const submitBang = document.querySelector("#submitBang");
const inpSegitiga = document.querySelector(".segitiga");
const inpSegiempat = document.querySelector(".segiempat");
const inpLingkaran = document.querySelector(".lingkaran");
const submitVal = document.querySelector("#submitVal");
const p = document.querySelector("#p");

const a = document.querySelector("#a");
const t = document.querySelector("#t");
const par = document.querySelector("#par");
const l = document.querySelector("#l");
const r = document.querySelector("#r");

window.addEventListener("keyup", (e) => {
  if ((e.key = "Enter")) {
    submitBang.click();
  }
});

submitBang.addEventListener("click", () => {
  const pilihan = pilih.value;
  switch (pilihan) {
    case "segitiga":
      inpSegitiga.style.display = "block";
      inpSegiempat.style.display = "none";
      inpLingkaran.style.display = "none";
      a.disabled = false;
      t.disabled = false;
      p.disabled = true;
      l.disabled = true;
      r.disabled = true;
      a.addEventListener("keyup", (e) => {
        e.stopPropagation();
        if ((e.key = "Enter")) {
          t.focus();
        }
      });
      t.addEventListener("keyup", (e) => {
        if ((e.key = "Enter")) {
          const luasSegiTig = new luasSegitiga(a.value, t.value);
          par.innerHTML = `Luas Segitiga = ${luasSegiTig.luas()}`;
        }
      });
      break;
    case "segiempat":
      inpSegitiga.style.display = "none";
      inpSegiempat.style.display = "block";
      inpLingkaran.style.display = "none";
      a.disabled = true;
      t.disabled = true;
      p.disabled = false;
      l.disabled = false;
      r.disabled = true;
      p.addEventListener("keyup", (e) => {
        e.stopPropagation();
        if ((e.key = "Enter")) {
          l.focus();
        }
      });
      l.addEventListener("keyup", (e) => {
        if ((e.key = "Enter")) {
          const luasSegiEmp = new luasSegiempat(p.value, l.value);
          par.innerHTML = `Luas Segiempat = ${luasSegiEmp.luas()}`;
        }
      });
      break;
    case "lingkaran":
      inpSegitiga.style.display = "none";
      inpSegiempat.style.display = "none";
      inpLingkaran.style.display = "block";
      a.disabled = true;
      t.disabled = true;
      p.disabled = true;
      l.disabled = true;
      r.disabled = false;
      r.addEventListener("keyup", (e) => {
        e.stopPropagation();
        if ((e.key = "Enter")) {
          const luasLing = new luasLingkaran(r.value);
          par.innerHTML = `Luas Lingkaran = ${luasLing.luas()}`;
        }
      });
      break;
  }
});

function luasSegitiga(a, t) {
  this.a = a;
  this.t = t;
  this.luas = () => {
    return 0.5 * this.a * this.t;
  };
}

function luasSegiempat(p, l) {
  this.p = p;
  this.l = l;
  this.luas = () => {
    return this.p * this.l;
  };
}

function luasLingkaran(r) {
  this.phi = 3.14;
  this.r = r * r;
  this.luas = () => {
    return this.phi * this.r;
  };
}
