let imgNo = 1;
imgShow(imgNo);

function addImg(n) {
    imgShow(imgNo += n);
}

function thisImg(n) {
    imgShow(imgNo = n);
}

function imgShow(n) {
    let i;
    let gl = document.getElementsByClassName("gallery2");
    let pz = document.getElementsByClassName("position");
    let n1 = gl.length;
    let n2 = pz.length;

    if(n > n1){
      imgNo = 1;
    }
    if(n < 1){
      imgNo = n1;
    }
    for (i = 0; i < n1; i++) {
        gl[i].style.display = "none";
    }
    for (i = 0; i < n2; i++) {
        pz[i].className = pz[i].className.replace(" selected", "");
    }
    gl[imgNo - 1].style.display = "block";
    pz[imgNo - 1].className += " selected";
}
