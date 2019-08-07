'use strict';

let dogCount;

function getImages() {
    fetch('https://dog.ceo/api/breeds/image/random/' + dogCount)
        .then(response => response.json())
        .then(responseJson => showResults(responseJson))
        .catch(error => alert('Oops, Something is fishy. Try again later.'));
}

function showResults(responseJson) {
    console.log(responseJson.message);
    for(let i = 0; i < responseJson.message.length; i++) {
        if (i <= 50) {
            $('.dog-image-container').append($(`<img src="${responseJson.message[i]}" class="results-img">`));
        } else {
            console.log('it works');
        }
        
    }
    $('.dog-image-container').removeClass('hidden');
}

function formListener() {
    $('form').submit(event => {
        event.preventDefault();
        dogCount = $('#new-dogs-entry').val();
        getImages();
    });
}

$(function() {
    console.log('App loaded! Waiting for submit');
    formListener();
});