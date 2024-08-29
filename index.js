document.body.style.border = '5px solid red';

function findAnswers(query) {
    return query.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log(findAnswers(document.getElementsByClassName('xBQ2HyCNJoo33_Z_K6va')))
})