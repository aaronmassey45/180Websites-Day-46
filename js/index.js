$(document).ready(function() {
  const wishes = [
    'was more swole',
    'was a better programmer',
    'owned ALL the dogs :)',
    'had churros right now'
  ];

  let x = 0;
  setInterval(() => {
    x = x > 3 ? 0 : x;
    let wish = wishes[x];
    x++;
    $('.wish').text(wish);
  }, 425);

});
