var round;

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                //alert(allText);
                console.log(allText);
                newFun(allText);
                round = allText;
                document.getElementById('output').innerHTML = allText;
            }
        }
    }
    rawFile.send(null);
}
readTextFile('newFollowCount.txt');
const element = document.getElementById("change");
element.addEventListener("click", function () {
    document.querySelector('#textarea').classList.add('changed');
});
/*
const url = "https://github.com/CLor4344/follower/blob/followermain/newFollowCount.txt";
const xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    
    //document.getElementById('output').innerHTML = this.responseText;
    newFun(this.responseText);
    return false;
}
xhttp.open("GET", "newFollowCount.txt");
xhttp.send();

function loadDoc(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('output').innerHTML = this.responseText;
        alert(this.responseText);
        newFun(this.responseText);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
loadDoc("https://github.com/CLor4344/follower/blob/followermain/newFollowCount.txt");


/*
fetch(url)
    .then( r => r.text())
    .then( t=>{
        document.getElementById('output').innerHTML = t;
    })


//var newstuff = OpenFile("newFollowCount.txt");
//var newstuff = readTextFile("newFollowCount.txt");
//console.log(newstuff);*/
function newFun(string) {
    var numArray = string.split("");
    console.log(string);
    console.log(numArray);
    switch (numArray.length) {
        case 0:
            alert("0 digits");

            break;
        case 1:
            alert("1 digits");

            document.getElementById('digit-six').innerHTML = numArray[0];
            break;
        case 2:
            alert("2 digits");
            document.getElementById('digit-one').innerHTML = numArray[0];
            document.getElementById('digit-two').innerHTML = numArray[1];
            break;
        case 3:
            alert("3 digits");
            document.getElementById('digit-one').innerHTML = numArray[0];
            document.getElementById('digit-two').innerHTML = numArray[1];
            document.getElementById('digit-three').innerHTML = numArray[2];

            break;
        case 4:
            alert("4 digits");
            document.getElementById('digit-one').innerHTML = numArray[0];
            document.getElementById('digit-two').innerHTML = numArray[1];
            document.getElementById('digit-three').innerHTML = numArray[2];
            document.getElementById('digit-four').innerHTML = numArray[3];

            break;
        case 5:
            alert("5 digits");
            const testi = document.getElementsByClassName('current-slide');
            if (testi.length == 0) {
                document.getElementById('num-' + numArray[3]).classList.add('current-slide');
                getNum(numArray[3]);
            } else {
                console.log(document.querySelector('.current-slide'));
                updateNum(numArray[4]);
                console.log('when?')
            }
            console.log(numArray[4]);

            const slides = document.querySelectorAll('.slide');
            const sliderNum = document.querySelectorAll('.num-slide').length;
            console.log(sliderNum);
            break;
        case 6:
            alert("6 digits");
            
            document.getElementById('digit-one').innerHTML = numArray[0];
            document.getElementById('digit-two').innerHTML = numArray[1];
            document.getElementById('digit-three').innerHTML = numArray[2];
            document.getElementById('digit-four').innerHTML = numArray[3];
            document.getElementById('digit-five').innerHTML = numArray[4];
            document.getElementById('digit-six').innerHTML = numArray[5];
            break;
        default:
        // code block
    }
}
//document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + round;
function getNum(num) {
    const slides = document.querySelector('.slides');

    const currentSlide = slides.querySelector('.current-slide');

    //console.log(num + currentSlide.innerHTML);


    const moveAmount = num * 100 + 'px';
    const numDiv = 'num-' + num;

    slides.style.transform = 'translateY(-' + moveAmount + ')';
    const testing = document.getElementById(numDiv);
    currentSlide.classList.remove('current-slide');
    testing.classList.add('current-slide');
}
/*var file_url = 'followers.json';
$.ajax({
    url: file_url,
    dataType: "json",
    success: function (json_response) {
        // Process the json_response
        console.log(json_response)
    },
    error: function () {
        // Handle the error.
    }
});
function readingStuff(file){
    const longtest = require('fs');
    var newString = longtest.readFileSync(file, 'utf8');
    return newString.toString();

}
var test = readingStuff("newFollowCount.txt");
console.log(test);
document.getElementById('inputss').innerHTML = 'dataS';


/*async function printJSON() {
    const response = await fetch("followers.json");
    const json = await response.json();
    console.log(json);
}
/*
/*
let file = "newFollowCount.txt";
fetch(file)
.then((x)=>x.text())
.then((y)=>{
    document.getElementById('result').innerHTML = y;
});


/*const longtest = require('fs');

var newString = longtest.readFileSync('newFollowCount.txt', 'utf8');
testingFun('what DO YOU MEAN')
console.log(newString);
function testingFun(dataS) {
    console.log(dataS);
    document.getElementById('inputss').innerHTML = dataS;
}

/*longtest.readFile('newFollowCount.txt', (err, inputD) => {
    if (err) throw err;
    //console.log(inputD.toString())
    var snew = inputD.toString();
    console.log(snew)
    return snew;
});*/
//var testEle = document.getElementById('output');
//testEle.innerHTML = newString;
