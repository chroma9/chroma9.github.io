function renderCascade() {
    let randomValue = async function() {
        return new Promise((re) => {
            re(Math.floor(Math.random() * 5999) + 1000)
        })
    }
    for(let r = 0; r < 7; r++) {
        for(let dc = 0; dc < 15; dc++) {
            randomValue().then((v) => {
                let s = (`<div class="dc${dc}">`);
                let e = (`</div>`);
                $(`.row-${r}`).append(`${s}${v}${e}`);
            })
        }
    }
}
renderCascade();