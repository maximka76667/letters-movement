$(document).ready(() => start())

$('button').html('Text');

function start() {
    let text = $('.text').html();
    let newText = "";

    for (let i = 0; i < text.length; i++) {

        let random = Math.floor(1 + Math.random() * 5);

        newText += '<span class="effect' + random + '">' + text[i] + '</span>';
    }

    $('.text').html(newText);
}

