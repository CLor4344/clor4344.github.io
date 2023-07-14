var round;
var timer = 1000;
var urlthing = 'https://raw.githubusercontent.com/CLor4344/follower/followermain/newFollowCount.txt';
var oldVal = '';
console.log(Date.now());
document.getElementById('comma-1').style.display = 'none';
document.getElementById('comma-2').style.display = 'none';
document.getElementById('comma-3').style.display = 'none';
document.getElementById('comma-4').style.display = 'none';
document.getElementById('comma-5').style.display = 'none';
document.getElementById('comma-6').style.display = 'none';
document.getElementById('comma-7').style.display = 'none';
function playItHere(e, link) {
    var audio = document.createElement("audio");
    var src = document.createElement("source");
    src.src = link.href;
    audio.appendChild(src);
    audio.play();
    e.preventDefault();
}
function cloudUpdate() {
    console.log("CLOUD");
    fetch("https://754cc620-e51b-4c58-8faa-2f4897098a38-bluemix.cloudant.com/testing/_design/ddd/_view/ddd", {
        method: "GET",
        credentials: 'include',
        headers: {
            Authorization: 'Basic ' + btoa('apikey-v2-22yshm6czdhyo8a3ma5071g23ry6kqh5wy5dn8shngca:91fc214302068a55295da29da7e412c7')
        }
    })
        .then(res => {
            if (res.ok) {
                //console.log(res)
                return res.json()
            }
            else
                console.log("dun goofed")
        }).then(data => {
            console.log(data)

            console.log("this be follower:" + data.rows[0].value.follower)
            console.log(typeof (data.rows[0].value.follower));
            var newNumberString = data.rows[0].value.follower.toString();
            var newPic = data.rows[0].value.img.toString();
            console.log(newNumberString + '' + newPic);
            document.getElementById('profile-image').src = newPic;
            var testName = data.rows[0].value.user;
            document.getElementById('intent-button').href = "https://twitter.com/intent/user?screen_name=" + testName;
            console.log(testName);
            if (round == undefined) {
                console.log(newNumberString);
                getNum(newNumberString);
                round = newNumberString
            }
            else {
                updateNum(round, newNumberString);
                round = newNumberString
            }
        })
        .catch(error => console.error(error))
    setTimeout(cloudUpdate, 5000);
}

cloudUpdate();
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
element3.addEventListener("click", function () {
    cloudUpdate();
});

function getNum(num) {
    var firstArray = num.split('');
    console.log('first array length ' + firstArray.length);
    if (firstArray.length < 6) {
        document.getElementById('sixth-digit').parentElement.style.display = "none";
        document.getElementById('seventh-digit').parentElement.style.display = "none";
        document.getElementById('eighth-digit').parentElement.style.display = "none";
        document.getElementById('ninth-digit').parentElement.style.display = "none";
        document.getElementById('comma-1').style.display = 'none';
        document.getElementById('comma-2').style.display = 'block';
        document.getElementById('comma-3').style.display = 'none';
        document.getElementById('comma-4').style.display = 'none';
        document.getElementById('comma-5').style.display = 'none';
        document.getElementById('comma-6').style.display = 'none';
        document.getElementById('comma-7').style.display = 'none';
  
        /*var testingText = document.getElementsByClassName('num-slide');
        
        for(var i=0; i<testingText.length; i++){
            testingText[i].style.fontSize = '40px';
        }*/
            


        console.log('working?');
    }
    else if (firstArray.length == 6) {

        document.getElementById('sixth-digit').parentElement.style.display = "block";
        document.getElementById('sixth-digit').style.opacity = 1;
        document.getElementById('seventh-digit').parentElement.style.display = "none";
        document.getElementById('eighth-digit').parentElement.style.display = "none";
        document.getElementById('ninth-digit').parentElement.style.display = "none";
        document.getElementById('comma-1').style.display = 'none';
        document.getElementById('comma-2').style.display = 'none';
        document.getElementById('comma-3').style.display = 'block';
        document.getElementById('comma-4').style.display = 'none';
        document.getElementById('comma-5').style.display = 'none';
        document.getElementById('comma-6').style.display = 'none';
        document.getElementById('comma-7').style.display = 'none';
    }
    else if (firstArray.length == 7) {
        document.getElementById('sixth-digit').parentElement.style.display = "block";
        document.getElementById('sixth-digit').style.opacity = 1;
        document.getElementById('seventh-digit').parentElement.style.display = "block";
        document.getElementById('seventh-digit').style.opacity = 1;
        document.getElementById('eighth-digit').parentElement.style.display = "none";
        document.getElementById('ninth-digit').parentElement.style.display = "none";

        document.getElementById('comma-1').style.display = 'block';
        document.getElementById('comma-2').style.display = 'none';
        document.getElementById('comma-3').style.display = 'none';
        document.getElementById('comma-4').style.display = 'block';
        document.getElementById('comma-5').style.display = 'none';
        document.getElementById('comma-6').style.display = 'none';
        document.getElementById('comma-7').style.display = 'none';
        var testingText = document.getElementsByClassName('num-slide');
        
        /*for(var i=0; i<testingText.length; i++){
            testingText[i].style.fontSize = '60px';
        }*/
    }
    else if (firstArray.length == 8) {
        document.getElementById('sixth-digit').parentElement.style.display = "block";
        document.getElementById('sixth-digit').style.opacity = 1;
        document.getElementById('seventh-digit').parentElement.style.display = "block";
        document.getElementById('seventh-digit').style.opacity = 1;
        document.getElementById('eighth-digit').parentElement.style.display = "block";
        document.getElementById('eighth-digit').style.opacity = 1;
        document.getElementById('ninth-digit').parentElement.style.display = "none";
        document.getElementById('comma-1').style.display = 'none';
        document.getElementById('comma-2').style.display = 'block';
        document.getElementById('comma-3').style.display = 'none';
        document.getElementById('comma-4').style.display = 'none';
        document.getElementById('comma-5').style.display = 'block';
        document.getElementById('comma-6').style.display = 'none';
        document.getElementById('comma-7').style.display = 'none';
    }
    else if (firstArray.length == 9) {
        document.getElementById('sixth-digit').parentElement.style.display = "block";
        document.getElementById('sixth-digit').style.opacity = 1;
        document.getElementById('seventh-digit').parentElement.style.display = "block";
        document.getElementById('seventh-digit').style.opacity = 1;
        document.getElementById('eighth-digit').parentElement.style.display = "block";
        document.getElementById('eighth-digit').style.opacity = 1;
        document.getElementById('ninth-digit').parentElement.style.display = "block";
        document.getElementById('ninth-digit').style.opacity = 1;
        document.getElementById('comma-1').style.display = 'none';
        document.getElementById('comma-2').style.display = 'none';
        document.getElementById('comma-3').style.display = 'block';
        document.getElementById('comma-4').style.display = 'none';
        document.getElementById('comma-5').style.display = 'none';
        document.getElementById('comma-6').style.display = 'block';
        document.getElementById('comma-7').style.display = 'none';
    }

    for (var i = 0; i < firstArray.length; i++) {
        const slides = document.querySelectorAll('.slides');
        var slideHeight = document.querySelector('.num-slide').getBoundingClientRect().height;
        var num = parseInt(firstArray[i]);
        var moveAmount = num * slideHeight + 'px';
        //console.log(moveAmount);
        slides[i].style.transform = 'translateY(-' + moveAmount + ')';

    }


}
var testJump = 0;
function updateNum(oldNum, newNum) {
    console.log("old and new " + oldNum + '     ' + newNum);
    var oldArray = oldNum.split("");
    var newArray = newNum.toString().split("");
    console.log(oldArray + ' ' + newArray);
    if (newArray.length >= 6) {
        document.getElementById('sixth-digit').style.display = "block";
        document.getElementById('sixth-digit').style.opacity = 1;
    }
    if (oldArray.length == newArray.length) {
        for (var i = 0; i < oldArray.length; i++) {
            var num = (parseInt(oldArray[i]) - parseInt(newArray[i])) * -1;
            num += parseInt(oldArray[i]);

            var slides = document.querySelectorAll('.slides');
            var slideHeight = document.querySelector('.num-slide').getBoundingClientRect().height;

            var moveAmount = num * slideHeight + 'px';
            //console.log('old plus new ' + num);
            if (num <= 9) {
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


