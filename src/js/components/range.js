const ranges = document.querySelectorAll('[data-range]');
const rangesValue = document.querySelectorAll('[data-value]');


ranges.forEach(range => {
  if (range.dataset.valueIn) {
    const outputValue = () => {
      rangesValue.forEach(rangeValue => {
        range.dataset.valueIn === rangeValue.dataset.value ?
        rangeValue.innerHTML = range.value : 0;
      })
    };

    range.addEventListener('mousemove', outputValue);
    range.addEventListener('change', outputValue);
  }
})
