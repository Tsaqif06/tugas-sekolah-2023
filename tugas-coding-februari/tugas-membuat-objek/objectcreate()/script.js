const siswaMethods = {
  rataRata: function () {
    const jumlah = this.nilai.reduce((a, b) => {
      return a + b;
    });
    return jumlah / this.nilai.length;
  },
  makan: function () {
    return (this.energi += 300);
  },
  tidur: function () {
    return (this.energi += 500);
  },
  berangkat: function () {
    return (this.energi -= 100);
  },
  main: function () {
    return (this.energi -= 100);
  },
  mengTugas: function () {
    return (this.energi -= 300);
  },
};

const siswa = (nama, tb, bb, nilai, seragam) => {
  let ssw = Object.create(siswaMethods);
  ssw.nama = nama;
  ssw.tb = tb;
  ssw.bb = bb;
  ssw.nilai = nilai;
  ssw.seragam = seragam;
  ssw.energi = 0;
  return ssw;
};

const siswa1 = siswa("Tsaqif", 165, 46, [84, 89, 92, 86], "Pramuka");
