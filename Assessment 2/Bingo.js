function RandomNumber() {
    var rnd = Math.floor(Math.random() * 100); //* 100 means that a random number will generate between 0 and 100.
    document.getElementById('textbox').value = rnd; //make the textbox value = the generated value.
}