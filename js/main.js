let mybutton = document.getElementById("mybtn");


window.onscroll = function() {
    scrollFunction()
    progressFunction()
};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function progressFunction() {
    let visited = document.documentElement.scrollTop;
    let notVisited = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let height = (visited / notVisited) * 100;
    let myElement = document.getElementById('my-bar');
    myElement.style.height = height + '%';
}
