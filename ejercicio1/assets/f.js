(function() {

    // Wrapping footer
    var footer = document.getElementsByTagName("footer")[0];
    footer_html = footer.innerHTML;
    footer.innerHTML = "<div class='wrapper'>" + footer_html + "</div>";

    // Wrapping header
    var header = document.getElementsByTagName("header")[0];
    header_html = header.innerHTML;
    header.innerHTML = "<div class='wrapper'>" + header_html + "</div>";

    // Wrapping main & aside
    var main = document.getElementsByTagName("main")[0];
    var aside = document.getElementsByTagName("aside")[0];
    main.parentElement.removeChild(main);
    aside.parentElement.removeChild(aside);
    var new_main = document.createElement("div");
    new_main.classList.add("wrapper");
    new_main.innerHTML = "<main>" + main.innerHTML + "</main><aside>" +aside.innerHTML + "</aside>";
    header.parentNode.insertBefore(new_main, header.nextSibling);
 
 })();