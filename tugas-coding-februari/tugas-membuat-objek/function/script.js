function siswa (nama, tinggi, bb, nilai, seragam) {
    let ssw = {};
    ssw.nama = nama;
    ssw.tinggi = tinggi;
    ssw.bb = bb;
    ssw.nilai = nilai;
    ssw.seragam = seragam;
    ssw.rataRata = () => {
        const jumlah = ssw.nilai.reduce((a, b) => {
            return a + b;
        })
        return jumlah/ssw.nilai.length;
    }
    ssw.energi = 0;
    ssw.makan = () => {
        return ssw.energi += 1000;
    };
    ssw.berangkat = () => {
        return ssw.energi -= 300;
    };
    ssw.main = () => {
        return ssw.energi -= 100;
    }; 
    ssw.mengTugas = () => {
        return ssw.energi -= 300;
    };
    return ssw;
}

const siswa1 = siswa("Tsaqif", 165, 46, [84, 89, 92, 86], "Pramuka")