var round;
var timer = 1000;
var urlthing = 'https://raw.githubusercontent.com/CLor4344/follower/followermain/newFollowCount.txt';
var oldVal = '';
console.log(Date.now());
fetch("newFollowCount.txt")
  .then(res => res.text())
  .then(text => {
    document.getElementById('output').innerHTML = "huh" + text;
   })
  .catch((e) => console.error(e));
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
            Authorization: 'token '
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
