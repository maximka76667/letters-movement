$(document).ready(() => start())

$('button').html('Text');

function generateRandomColor() {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256)
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function stylizeText(textSelector, stylizeFunction) {
  const text = $(textSelector).html();

  let newText = stylizeFunction(text);

  $(textSelector).html(newText);
}

function start() {
  stylizeText('.text1', (text) => {
    let newText = "";

    for (let i = 0; i < text.length; i++) {
      let random = Math.floor(1 + Math.random() * 5);
      if (text[i] == " ") newText += " ";
      else newText += `<span style="color: ${generateRandomColor()}" class="effect${random}">${text[i]}</span>`;
    }

    return newText;
  });

  stylizeText('.text2', (text) => {
    let newText = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] == " ") newText += " ";
      else newText += `<span style="--i: ${(i * 100 + 'ms')}" class="effect6">${text[i]}</span>`;
    }

    return newText;
  });

  stylizeText('.text3', (text) => {
    let newText = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] == " ") newText += " ";
      if (i % 5 == 0) newText += `<span style="--i: ${(i * 100 + 'ms')}" class="effect7">${text[i]}</span>`
      else newText += text[i];
    }

    return newText;
  })

}

