// 取得modal id
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');

// 取得打開modal1的按鈕id
var btn1 = document.getElementById("myBtn1");
// 取得打開modal2的按鈕id
var btn2 = document.getElementById("myBtn2");
// 取得打開modal3的按鈕id
var btn3 = document.getElementById("myBtn3");
// 取得打開modal4的按鈕id
var btn4 = document.getElementById("myBtn4");
// 取得打開modal5的按鈕id
var btn5 = document.getElementById("myBtn5");
// 取得打開modal6的按鈕id
var btn6 = document.getElementById("myBtn6");

//取得關閉modal1的span id
var span1 = document.getElementById("mySpan1");
//取得關閉modal2的span id
var span2 = document.getElementById("mySpan2");
//取得關閉modal3的span id
var span3 = document.getElementById("mySpan3");
//取得關閉modal4的span id
var span4 = document.getElementById("mySpan4");
//取得關閉modal5的span id
var span5 = document.getElementById("mySpan5");
//取得關閉modal6的span id
var span6 = document.getElementById("mySpan6");

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}
btn6.onclick = function() {
    modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}
span6.onclick = function() {
    modal6.style.display = "none";
}

// 當使用者按modal以外的地方則關閉modal
window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 || event.target == modal5 || event.target == modal6) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";
    }

}