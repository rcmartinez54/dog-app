'use strict';

function getImages() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJson => showResults(responseJson))
        .catch(error => alert('Oops, Something is fishy. Try again later.'));
}

function showResults(responseJson) {
    console.log(responseJson.message);
}

function formListener() {
    $('form').submit(event => {
        event.preventDefault();
        getImages();
    });
}

$(function() {
    console.log('App loaded! Waiting for submit');
    formListener();
});