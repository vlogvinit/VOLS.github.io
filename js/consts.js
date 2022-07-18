const COUNTERS = {
    collected: '2100',
    need: '5000',
    transferred: '500',
}

const setValues = setInterval(() => {
    const collected = document.getElementById('collectedValue');
    const need = document.getElementById('need');
    const transferred = document.getElementById('transferred');
    if (collected && need && transferred) {
        collected.dataset.value = COUNTERS.collected;
        collected.innerText = COUNTERS.collected;
        need.dataset.value = COUNTERS.need;
        need.innerText = COUNTERS.need;
        transferred.dataset.value = COUNTERS.transferred;
        transferred.innerText = COUNTERS.transferred;
        clearInterval(setValues);
    }
}, 1)
