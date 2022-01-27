import './css/style.scss';

import { getScores, postScores } from './js/api.js';
import renderScores from './js/render.js';

const refreshButton = document.querySelector('.refresh');
const form = document.querySelector('form');

refreshButton.addEventListener('click', async () => {
  const scores = await getScores();
  renderScores(scores);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const score = {
    user: form.elements.name.value.trim(),
    score: form.elements.score.value.trim(),
  };

  form.reset();

  await postScores(score);
});
