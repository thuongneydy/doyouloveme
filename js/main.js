/**
 * Created by DucThuong95 on 12/05/2017.
 */
function sayYes() {
    alert("Yes. You are right!");
}
function sayNo(obj) {
    var width = Math.round(Math.random() * window.innerWidth);
    var height = Math.round(Math.random() * window.innerHeight);
    obj.style.position = 'absolute';
    obj.style.top = height.toString()+'px';
    obj.style.left = width.toString()+'px';
}