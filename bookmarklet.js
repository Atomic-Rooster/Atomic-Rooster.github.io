function executeCopy(text) {
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
}

current_page = window.location;
current_html = document.documentElement.innerHTML;

regex = /https\:\/\/i\.pinimg\.com\/564x.*?\.jpg/;
picture = regex.exec(current_html)[0];


widget = "<div style='text-align: center;'>\n\t<a href='" + current_page + "' style='position: relative; display: inline-block; height: 100%;'>\n\t\t<img class='aligncenter' src='" + picture + "'/>\n\t\t<img style='position: absolute; width: 40px; right: 5px; bottom: 5px;' src='https://misscntamination.files.wordpress.com/2017/10/p-logo.png'/>\n\t</a>\n</div>";
executeCopy(widget)

