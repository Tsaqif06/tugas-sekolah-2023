const siswa1 = {
    nama : "Tsaqif",
    tinggi : 165,
    bb : 46,
    nilai : [84, 89, 92, 86],
    seragam : "Pramuka",
    energi : 0,
    makan : function () {
        return this.energi += 1000;
    },
    berangkat : function () {
        return this.energi -= 300;
    },
    main : function () {
        return this.energi -= 100;
    }, 
    mengTugas : function () {
        return this.energi -= 300;
    }
}