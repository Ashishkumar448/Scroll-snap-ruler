const ruler = document.querySelector('scrolly-ruler');
const rulerInput = document.querySelector('input[type="number"]');
const rulerGrid = ruler.querySelector(':scope ruler-grid');
const rulerMark = ruler.querySelector(':scope ruler-indicator');

rulerGrid.onscrollsnapchange = e => {
  rulerMark.classList.add('has-target');
  e.snapTargetInline.classList.add('has-target');
};

rulerGrid.onscrollsnapchanging = e => {
  rulerInput.value = e.snapTargetInline.dataset.rulerValue;
  rulerMark.classList.remove('has-target');
  rulerGrid.querySelector(':scope span.has-target').classList.remove('has-target');
};

rulerInput.oninput = e => {
  const destination = rulerGrid.querySelector(`:scope > [data-ruler-value="${e.target.value}"]`);
  const scrollX = destination.offsetLeft - rulerGrid.offsetWidth / 2;

  rulerGrid.scrollTo(scrollX, 0, {
    behavior: 'smooth' });

};