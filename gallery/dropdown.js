function clicked() {
    var u = document.getElementById('g');
    var v = document.getElementById('f');
    if (v.checked == true) {
        u.style.backgroundColor = '#abcdef';
    }
    else {
        u.style.backgroundColor = '#ffffff';
    }
}