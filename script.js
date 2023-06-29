var round;
var timer = 1000;
var urlthing = 'https://raw.githubusercontent.com/CLor4344/follower/followermain/newFollowCount.txt';
var oldVal = '';
console.log(Date.now());
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                /*var allText = rawFile.responseText.trim();
                //alert(allText);
                console.log('test' + allText + 'ending');
                console.log(allText.length);
                //newFun(allText);
                round = allText;
                getNum(allText);
                document.getElementById('output').innerHTML = allText;
                console.log(typeof(allText))
                oldVal = allText;*/
            }
        }
    }
    rawFile.send(null);
}
//readTextFile('https://raw.githubusercontent.com/CLor4344/follower/followermain/newFollowCount.txt');
readTextFile('https://raw.githubusercontent.com/CLor4344/follower/followermain/newFollowCount.txt');
function getFollowCount() {
    fetch('https://api.github.com/repos/CLor4344/follower/contents/newFollowCount.txt'+"?dummy="+Date.now(), {
        method: "GET",
        headers: {
            Authorization: 'token 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'
        }

    })
        .then(response => response.json())
        .then(data => {
            //var filesha = data[1].sha
            var decodable = atob(data.content);
            console.log(data._links.git + '\n' + decodable); // Prints result from `response.json()` in getRequest
            document.getElementById('inputss').innerHTML = decodable;
            console.log(typeof (decodable));
            console.log(round);
            if (round == undefined) {
                console.log("BEGGINGING " + decodable)
                getNum(decodable);
                round = decodable;
            }
            else {
                console.log("UPDATING " + round + " "+ decodable);
                updateNum(round, decodable);
                round = decodable;
            }
        })
        .catch(error => console.error(error))
        setTimeout(getFollowCount, 5000);
}
getFollowCount();

const element = document.getElementById("change");
element.addEventListener("click", function () {
    document.querySelector('#textarea').classList.add('changed');
});
const element2 = document.getElementById("newDig");
element2.addEventListener("click", function () {
    var newVal = parseInt(oldVal) + 1;
    updateNum(oldVal, newVal);
    oldVal = (parseInt(oldVal) + 1).toString();
});
const element3 = document.getElementById("testMove");
/*function pageUp() {
    fetch("http://127.0.0.1:8000/newfollowcount.txt")
        .then(r => r.text())
        .then(t => {
            document.getElementById('inputss').innerHTML = t;
            console.log('testing' + t);
        });
    setTimeout(pageUp, 5000);

}
pageUp();*/

function paged() {
    fetch("https://raw.githubusercontent.com/CLor4344/follower/followermain/newFollowCount.txt", {
        cache: 'no-store'
    })
        .then(r => r.text())
        .then(t => {
            document.getElementById('inputsss').innerHTML = t;
            //console.log('testing' + t);
        });
    setTimeout(paged, 5000);

}
paged();
function newFun(string) {
    /*
    var numArray = string.split("");
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
            
            const testi = document.getElementsByClassName('current-slide');
            console.log(testi);
            if (testi.length == 0) {
                document.getElementById('num-' + numArray[0]).classList.add('current-slide');
                //getNum(numArray[0]);
                
            } else {
                console.log(document.querySelector('.current-slide'));
                //updateNum(numArray[4]);
                console.log('when?')
            }
            console.log(numArray[3]);

            const slides = document.querySelectorAll('.slide');
            const sliderNum = document.querySelectorAll('.num-slide').length;
            console.log(sliderNum);
            document.getElementById('digit-one').innerHTML = numArray[0];
            document.getElementById('digit-two').innerHTML = numArray[1];
            document.getElementById('digit-three').innerHTML = numArray[2];
            document.getElementById('digit-four').innerHTML = numArray[3];
            document.getElementById('digit-five').innerHTML = numArray[4];
            break;
        case 6:
            alert('6');
            document.getElementById('digit-one').innerHTML = numArray[0];
            document.getElementById('digit-two').innerHTML = numArray[1];
            document.getElementById('digit-three').innerHTML = numArray[2];
            document.getElementById('digit-four').innerHTML = numArray[3];
            document.getElementById('digit-five').innerHTML = numArray[4];
            document.getElementById('digit-six').innerHTML = numArray[5];
            break;
        default:
        // code block
    }*/
}
//document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + round;
function getNum(num) {
    var firstArray = num.split('');
    console.log('first array length ' + firstArray.length);
    if (firstArray.length < 6) {
        document.getElementById('sixth-digit').style.opacity = 0;
        console.log('working?');
    }

    for (var i = 0; i < firstArray.length; i++) {
        const slides = document.querySelectorAll('.slides');
        var slideHeight = document.querySelector('.num-slide').getBoundingClientRect().height;
        var num = parseInt(firstArray[i]);
        console.log(num);
        var moveAmount = num * slideHeight + 'px';
        //console.log(moveAmount);
        slides[i].style.transform = 'translateY(-' + moveAmount + ')';

    }


    /*const slides = document.querySelectorAll('.slides');
    console.log(slides);

    //const currentSlide = slides.querySelector('.current-slide');

    //console.log(num + currentSlide.innerHTML);


    const moveAmount = num * 100 + 'px';
    const numDiv = 'num-' + num;

    slides[2].style.transform = 'translateY(-' + moveAmount + ')';
    const testing = document.getElementById(numDiv);
    //currentSlide.classList.remove('current-slide');
    testing.classList.add('current-slide');*/
}
var testJump = 0;
function updateNum(oldNum, newNum) {
    console.log(oldNum + '     ' + newNum);
    var oldArray = oldNum.split("");
    var newArray = newNum.toString().split("");
    console.log(oldArray + ' ' + newArray);
    if (newArray.length >= 6) {
        document.getElementById('sixth-digit').style.opacity = 1;
    }
    if (oldArray.length == newArray.length) {
        //console.log('equal length');
        //console.log('jump ' + testJump);

        //console.log(num);

        //const numDiv = 'num-' + num;


        for (var i = 0; i < oldArray.length; i++) {
            var num = (parseInt(oldArray[i]) - parseInt(newArray[i])) * -1;
            num += parseInt(oldArray[i]);

            var slides = document.querySelectorAll('.slides');
            var slideHeight = document.querySelector('.num-slide').getBoundingClientRect().height;

            var moveAmount = num * slideHeight + 'px';
            //console.log('old plus new ' + num);
            if (num <= 9) {
                console.log(moveAmount);
                slides[i].style.transform = 'translateY(-' + moveAmount + ')';
            }
            else
                console.log('out of range');

        }
    }
    else {

        getNum(newNum.toString());
    }

}