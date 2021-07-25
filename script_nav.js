function openPage(evt, Page) {
    var k, tablinks;
    
    tablinks = document.getElementsByClassName("tablinks");
    for (k = 0; k < tablinks.length; k++) {
        tablinks[k].className = tablinks[k].className.replace(" activePage", "");
    }
    document.getElementById(Page).style.display = "block";
    evt.currentTarget.className += " activePage";
}