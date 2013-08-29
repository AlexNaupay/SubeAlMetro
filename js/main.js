document.addEventListener('DOMComponentsLoaded', function(){
    // demonstrate dynamic tab-target handling in slidebox demo
    var slideBox = document.querySelector('x-slidebox');
    var slideBoxTabbar = document.getElementById("slide-box-tabbar");

    // assign each tab to its respective slide in the slidebox
    var tabs = slideBoxTabbar.tabs;
    var slides = xtag.query(slideBox, 'x-slide');
    for(var i=0; i < slides.length && i < tabs.length; i++){
        var tab = tabs[i];
        var slide = slides[i];
        
        // assign each slide to its respective tabbar tab
        tab.targetElems = [slide];
    }
});