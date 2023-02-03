function Siswa (nama, tinggi, bb, nilai, seragam) {
    this.nama = nama;
    this.tinggi = tinggi;
    this.bb = bb;
    this.nilai = nilai;
    this.seragam = seragam;
    this.rataRata = () => {
        const jumlah = this.nilai.reduce((a, b) => {
            return a + b;
        })
        return jumlah/this.nilai.length;
    }
    this.energi = 0;
    this.makan = () => {
        return this.energi += 1000;
    };
    this.berangkat = () => {
        return this.energi -= 300;
    };
    this.main = () => {
        return this.energi -= 100;
    }; 
    this.mengTugas = () => {
        return this.energi -= 300;
    };
}

const siswa1 = new Siswa("Tsaqif", 165, 46, [84, 89, 92, 86], "Pramuka")