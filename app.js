function clicked() {

    let cookieValue = escape(document.myform.name.value);
    const cookies = unescape(document.cookie);
    document.cookie = "name = " + cookieValue;

}

function getCookie() {
    const result = document.getElementById("reload");
    const cookies = document.cookie;
    const arr = cookies.split("=");
    let name = arr[1];
    if (!name) {

    } else {
        result.innerHTML = "welcome back " + name;
    }

}