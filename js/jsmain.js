var nav = document.getElementById('nav');
    var butsent = document.getElementById('but-sent');
    var butext = document.getElementById('but-ext');
function shownav(){
    nav.style.display = "block";
    butsent.style.display = "none";
    butext.style.display = "block"
}
function closenav(){
    nav.style.display = "none";
    butsent.style.display = "block";
    butext.style.display = "none"
}