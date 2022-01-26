const renderScores = (scores) => {
  const UI = document.querySelector('.scores ul');
  UI.innerHTML = '';

  if (!scores.length) {
    UI.innerHTML = '<li>No Scores Yet!</li>';
    return -1;
  }

  scores
    .sort((a, b) => b.score - a.score)
    .forEach((score, bg) => {
      if (bg % 2 === 0) {
        bg = 1;
      } else {
        bg = 2;
      }
      UI.innerHTML += `<li class="score-${bg}" id="${score.index}"><span>${score.user} :</span><span>${score.score}</span></li>`;
    });

  return scores;
};

export default renderScores;
