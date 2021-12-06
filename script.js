$(document).ready(() => start())

$('button').html('Text');

function generateRandomColor() {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256)
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function stylizeText1() {
  const text = $('.text1').html();
  let newText = "";

  for (let i = 0; i < text.length; i++) {
    let random = Math.floor(1 + Math.random() * 5);
    if (text[i] == " ") newText += " ";
    else newText += `<span style="color: ${generateRandomColor()}" class="effect${random}">${text[i]}</span>`;
  }

  $('.text1').html(newText);
}

function stylizeText2() {
  const text = $('.text2').html();
  let newText = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") newText += " ";
    else newText += `<span style="--i: ${(i * 100 + 'ms')}" class="effect6">${text[i]}</span>`;
  }

  $('.text2').html(newText);
}

function stylizeText3() {
  const text = $('.text3').html();
  let newText = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") newText += " ";
    else newText += `<span style="--i: ${(i * 100 + 'ms')}" class="effect7">${text[i]}</span>`;
  }

  $('.text3').html(newText);
}

function start() {
  stylizeText1();
  stylizeText2();
  stylizeText3();
}

