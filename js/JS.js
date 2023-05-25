
let w = "10vw";
let h = "10vw";
let qp = 10;

function foo() {
  var wid = window.innerWidth;
  /*if (wid >= 2050) {
    w = "250px";
    h = "150px";
  } else if (wid < 2050){
    w = "130px";
    h = "80px";
  } else if (wid < 1500){
    w = "80px";
    h = "50px";
  } else if (wid < 1199){
    w = "25px";
    h = "35px";
  } else if (wid < 991){
    w = "25px";
    h = "25px";
  } else if (wid < 767){
    w = "25px";
    h = "20px";
  } else if (wid < 575){
    w = "25px";
    h = "20px";
  }*/
}

foo();

$('#gallery').lbtLightBox({
    qtd_pagination: qp,
    pagination_width: w,
    pagination_height: h,
    custom_children: ".box img"
    //captions: true,
    //captions_selector: ".caption p",
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1VDDWMRSTH');

try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
});
} catch (error) {
	console.log(error);
}
