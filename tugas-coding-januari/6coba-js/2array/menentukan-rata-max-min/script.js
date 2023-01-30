const loop = document.querySelector('#loop');
const submitLoop = document.querySelector('#submitLoop');
const reset = document.querySelector('#reset');
const inputCta = document.querySelector('#inputCta');
const rata = document.querySelector('#rata');
const max = document.querySelector('#max');
const min = document.querySelector('#min');
const input = document.createElement('input');
const submitData = document.createElement('button');

submitLoop.addEventListener('click', () => {
    submitData.type = 'submit';
    for (let i = 1; i <= parseInt(loop.value); i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Masukkan Data/Nilai';
        input.classList.add('data');
        inputCta.appendChild(input);
        input.style.margin = '4px';
        input.style.display = 'block';
    }
    submitData.innerHTML = "Submit Data";
    inputCta.appendChild(submitData);
});

reset.addEventListener('click', () => {
    window.location.reload();
})

submitData.addEventListener('click', () => {
    const datum = document.querySelectorAll('.data')
    let data = []; 
    datum.forEach((datas) => {
        data.push(parseFloat(datas.value));
    });

    const rerata = (data) => {
        let total = data.reduce((x, y) => {
            return x + y;
        });

        let jumlah = data.length;

        return total/jumlah;
    };

    const maxim = data.reduce((x, y) => {
        return Math.max(x,y);
    });

    const minim = data.reduce((x, y) => {
        return Math.min(x,y);
    });

    rata.innerHTML = `Rata - Rata : ${rerata(data)}`
    max.innerHTML = `Max : ${maxim}`
    min.innerHTML = `Min : ${minim}`
});