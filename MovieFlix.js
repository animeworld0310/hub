let tabs = document.querySelector(".tabs");

let tabHeader = tabs.querySelector(".tab-header");

let tabHeaderElements = tabs.querySelectorAll(".tab-header > div");

let tabBody = tabs.querySelector(".tab-body");

let tabBodyElements = tabs.querySelectorAll(".tab-body > div");

for(let i=0;i<tabHeaderElements.length;i++){

  tabHeaderElements[i].addEventListener("click",function(){

    tabHeader.querySelector(".active").classList.remove("active");

    tabHeaderElements[i].classList.add("active");

    tabBody.querySelector(".active").classList.remove("active");

    tabBodyElements[i].classList.add("active");

  });

}

        function disableselect(e) {

            return false

        }

        function reEnable() {

            return true

        }

        //if IE4+  

        document.onselectstart = new Function("return false")

        document.oncontextmenu = new Function("return false")

            //if NS6  

        if (window.sidebar) {

            document.onmousedown = disableselect

            document.onclick = reEnable

        }
