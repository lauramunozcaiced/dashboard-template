var w = screen.width;
    if(w <= 768){
       close();    
    }
    else{
        open();
    }
function menuHidden(){
    var w = window.outerWidth;
    if(w <= 768){
       close();    
    }
    else{
        open();
    }
  
}

function toggleNavmenu(){
    var navmenu = document.getElementById('navmenu');
    var main= document.getElementById('main');
    
    if(getStyle(navmenu, 'margin-left') == "-275px"){
       open();
    }
    else if(getStyle(navmenu, 'margin-left') == "0px"){
        close();
    }
}

function open(){
    var navmenu = document.getElementById('navmenu');
    var main= document.getElementById('main');
    navmenu.style.marginLeft= "0px" ;
    main.style.width= "calc(100vw - "+(navmenu.offsetWidth + 5)+")" ;
}
function close(){
    var navmenu = document.getElementById('navmenu');
    var main= document.getElementById('main');
    navmenu.style.marginLeft= "-275px" ;
    main.style.width= "100%" ;
}
var getStyle = function (e, styleName) {
    var styleValue = "";
    if(document.defaultView && document.defaultView.getComputedStyle) {
        styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
    }
    else if(e.currentStyle) {
        styleName = styleName.replace(/\-(\w)/g, function (strMatch, p1) {
            return p1.toUpperCase();
        });
        styleValue = e.currentStyle[styleName];
    }
    return styleValue;
}