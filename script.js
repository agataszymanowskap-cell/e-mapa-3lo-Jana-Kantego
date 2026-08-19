// ======================================
// KONFIGURACJA PIĘTER I NAZW PUNKTÓW SVG
// ======================================


let currentFloor = "parter";

let pendingRoute = null;
const STAIRS = {

    parter: {
        schody1: "schody1",
        schody2: "schody2"
    },

    pietro1: {
        schody1: "schody1",
        schody2: "schody2"
    },

    pietro2: {
        schody1: "schody1",
        schody2: "schody2"
    }

};
let floorChange = null;
// Nazwy punktów w zależności od piętra

const FLOOR_CONFIG = {


    // =========================
    // PARTER
    // =========================

    parter: {

        pointNames: [
            "Oval "
        ]

    },



    // =========================
    // PIĘTRO 1
    // =========================

    pietro1: {

        pointNames: [
            "piętro punkt "
        ]

    },



    // =========================
    // PIĘTRO 2
    // =========================

    pietro2: {


        // standardowe sale

        mainPoints: [
            "drugie główne "
        ],


        // strefa:
        // sala 207
        // sala 208
        // sala 209
        // sala 210
        // schody 2 piętro 2

        corridorPoints: [
            "drugie punkt "
        ]

    }


};


// ======================================
// SZUKANIE PUNKTU W SVG
// ======================================

function findPoint(number, type = "main") {


    let searchName = "";


    if (currentFloor === "parter") {

        searchName = "Oval " + number;

    }


    if (currentFloor === "pietro1") {

        searchName = "piętro punkt " + number;

    }


    if (currentFloor === "pietro2") {


        if (type === "corridor") {

            searchName = "drugie punkt " + number;

        } else {

            searchName = "drugie główne " + number;

        }

    }



    let svg = document.querySelector(
        "#mapContainer svg"
    );


    if (!svg) {

        console.error(
            "Brak SVG"
        );

        return null;

    }



    let elements = svg.querySelectorAll(
        "path"
    );



    for (let element of elements) {


        if (
            element.outerHTML.includes(
                searchName
            )
        ) {

            return element;

        }

    }



    console.warn(
        "Nie znaleziono punktu:",
        searchName
    );


    return null;

}
// ======================================
// POBIERANIE TRASY Z ROUTES
// ======================================



// ======================================
// POBIERANIE TRASY Z ROUTES
// ======================================

function getRoute(start, end) {

    let key = start + "|" + end;

    let route = ROUTES[key];

    if (!route) {

        console.error(
            "Nie znaleziono trasy:",
            key
        );

        return null;
    }

    return route;
}



// ======================================
// ZAMIANA NUMERÓW TRASY NA PUNKTY SVG
// ======================================

function convertRouteToPoints(route, type) {

    console.log("TYP TRASY:", type);

    let points = [];

    for (let number of route) {

        let point = findPoint(
            number,
            type
        );

        if (point) {

            points.push(point);

        }

    }

    return points;

}
// ======================================
// MIGAJĄCE PUNKTY TRASY
// ======================================

let activeRoutePoints = [];


// ======================================
// UKRYWANIE WSZYSTKICH PUNKTÓW
// ======================================

function hideAllRoutePoints() {


    let svg = document.querySelector(
        "#mapContainer svg"
    );


    if (!svg) {
        return;
    }



    let points = svg.querySelectorAll(
        "path"
    );


    }
function showRoutePoints(points) {


    clearRoutePoints();

    hideAllRoutePoints();


    if (!points || points.length === 0) {
        return;
    }



 points.forEach((point, index) => {


    console.log("Zaznaczam punkt:", point.id);


    point.classList.add("route-active");


    point.style.opacity = "1";


    point.style.animationDelay =
        (index * 0.25) + "s";


    activeRoutePoints.push(point);


});

}

function highlightDestination(place){

    console.log("START PODSWIETLENIA:", place);
    let svg = document.querySelector(
        "#mapContainer svg"
    );

    if(!svg){
        console.log("BRAK SVG");
        return;
    }


    // usuń stare zaznaczenie

    svg.querySelectorAll(
        ".destination-active"
    ).forEach(element => {

        element.classList.remove(
            "destination-active"
        );

    });



    let paths = svg.querySelectorAll(
        "path"
    );


    for(let path of paths){


        if(
            path.getAttribute("data-layer-name") === place.id
            )
        {

            console.log(
                "CEL ZNALEZIONY:",
                place.name
            );


            path.classList.add(
                "destination-active"
            );


            return;

        }

    }


    console.log(
        "NIE ZNALEZIONO CELU:",
        place.name
    );


}
// ======================================
// CZYSZCZENIE TRASY
// ======================================

function clearRoutePoints() {


    activeRoutePoints.forEach(point => {

        point.classList.remove("route-active");

    });


    activeRoutePoints = [];

}
// ======================================
// LISTA MIEJSC
// ======================================


const PLACES = {


    // =========================
    // PARTER
    // =========================

    parter: [

    {
        name:"1",
        id:"1",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"kantynka",
        id:"kantynka",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"7",
        id:"7",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"8",
        id:"8",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"biblioteka",
        id:"biblioteka",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"10",
        id:"10",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"12",
        id:"12",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"13",
        id:"13",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"pokój nauczycielski",
        id:"pokój nauczycielski",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },
{
        name:"15",
        id:"15",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },
    {
        name:"16",
        id:"16",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"wf",
        id:"wf",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"szatnia męska",
        id:"szatnia męska",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"szatnia damska",
        id:"szatnia damska",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"toaleta męska dół",
        id:"toaleta męska",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    },

    {
        name:"toaleta damska dół",
        id:"toaleta damska",
        floor:"parter",
        type:"main",
        stairs:[
            "schody1",
            "schody2"
        ]
    }

],



    // =========================
    // PIĘTRO 1
    // =========================

    pietro1: [



    {
        id:"sekretariat",
        name:"sekretariat",
        floor:"pietro1",
        type:"corridor",
        stair:"schody1"
    },


    {
        id:"104",
        name:"104",
        floor:"pietro1",
        type:"corridor",
        stair:"schody1"
    },


    {
        id:"105",
        name:"105",
        floor:"pietro1",
        type:"corridor",
        stair:"schody1"
    },


    {
        id:"106",
        name:"106",
        floor:"pietro1",
        type:"corridor",
        stair:"schody1"
    },


    {
        id:"108",
        name:"108",
        floor:"pietro1",
        type:"corridor",
        stair:"schody2"
    },


    {
        id:"109",
        name:"109",
        floor:"pietro1",
        type:"corridor",
        stair:"schody2"
    },


    {
        id:"110",
        name:"110",
        floor:"pietro1",
        type:"corridor",
        stair:"schody2"
    },


    {
        id:"aula",
        name:"aula",
        floor:"pietro1",
        type:"corridor",
        stairs:[
            "schody1",
            "schody2"
        ]
    },


    {
        id:"toaleta męska",
        name:"toaleta męska góra",
        floor:"pietro1",
        type:"corridor",
        stair:"schody2"
    },


    {
        id:"toaleta damska",
        name:"toaleta damska góra",
        floor:"pietro1",
        type:"corridor",
        stair:"schody2"
    }

],



    // =========================
    // PIĘTRO 2
    // =========================

   pietro2: [
 {
        name:"201a",
        id:"201a",
        floor:"pietro2",
        type:"main",
        stair:"schody1"
    },

    {
        name:"201b",
        id:"201b",
        floor:"pietro2",
        type:"main",
        stair:"schody1"
    },
    {
        name:"201c",
        id:"201c",
        floor:"pietro2",
        type:"main",
        stair:"schody1"
    },
{
        name:"202",
        id:"202",
        floor:"pietro2",
        type:"main",
        stair:"schody1"
    },
    {
        name:"203",
        id:"203",
        floor:"pietro2",
        type:"main",
        stair:"schody1"
    },

    {
        name:"204",
        id:"204",
        floor:"pietro2",
        type:"main",
        stair:"schody1"
    },

    {
        name:"204a",
        id:"204a",
        floor:"pietro2",
        type:"main",
        stair:"schody1"
    },
    {
        name:"207",
        id:"207",
        floor:"pietro2",
        type:"corridor",
        stair:"schody2"
    },

    {
        name:"208",
        id:"208",
        floor:"pietro2",
        type:"corridor",
        stair:"schody2"
    },

    {
        name:"209",
        id:"209",
        floor:"pietro2",
        type:"corridor",
        stair:"schody2"
    },

    {
        name:"210",
        id:"210",
        floor:"pietro2",
        type:"corridor",
        stair:"schody2"
    },

    {
        name:"212",
        id:"212",
        floor:"pietro2",
        type:"corridor",
        stair:"schody2"
    },


    {
        name:"Gabinet psychologa",
        id:"gabinet psychologa",
        floor:"pietro2",
        type:"main",
        stair:"schody1"
    },

   

]

};



// ======================================
// WYPEŁNIANIE LIST SKĄD / DOKĄD
// ======================================


function loadPlaces(){


    let from = document.getElementById(
        "fromSelect"
    );


    let to = document.getElementById(
        "toSelect"
    );



    from.innerHTML =
        '<option value="">Wybierz miejsce</option>';


    to.innerHTML =
        '<option value="">Wybierz miejsce</option>';



    Object.values(PLACES).flat().forEach(place => {



        let optionFrom =
            document.createElement("option");


        optionFrom.value = place.id;

        optionFrom.textContent = place.name;


        from.appendChild(optionFrom);




        let optionTo =
            document.createElement("option");


        optionTo.value = place.id;

        optionTo.textContent = place.name;


        to.appendChild(optionTo);



    });


}



loadPlaces();

// ======================================
// UKRYWANIE PUNKTÓW NA START
// ======================================

function hideAllRoutePoints() {


    let svg = document.querySelector(
        "#mapContainer svg"
    );


    if (!svg) {
        return;
    }



    let points = svg.querySelectorAll(
        "path"
    );



    points.forEach(point => {


        if (
            point.outerHTML.includes("Oval") ||
            point.outerHTML.includes("punkt")||
            point.outerHTML.includes("drugie główne")
        ) {

            point.style.opacity = "0";

        }


    });

}

// ======================================
// WCZYTYWANIE MAPY SVG
// ======================================

function loadSVG(floor) {

    let file = "";

    if (floor === "parter") {
        file = "mapy/parter.svg";
    }

    if (floor === "pietro1") {
        file = "mapy/pietro1.svg";
    }

    if (floor === "pietro2") {
        file = "mapy/pietro2.svg";
    }

    return fetch(file)
        .then(response => {

            if (!response.ok) {
                throw new Error(
                    "Nie znaleziono mapy: " + file
                );
            }

            return response.text();
        })

        .then(svg => {
document.getElementById("mapContainer").innerHTML =
    svg.replace(/vectornator:layerName=/g, "data-layer-name=");

            hideAllRoutePoints();
            enableMapControl();

            return true;
        })

        .catch(error => {

            console.error(
                "Błąd ładowania mapy:",
                error
            );

            return false;
        });
}


loadSVG(currentFloor);

console.log("Koniec script");
console.log(document.getElementById("fromSelect"));
console.log(document.getElementById("toSelect"));

// ======================================
// URUCHOMIENIE TRASY
// ======================================

function startRoute(start, end, type = "main") {


    let place = Object.values(PLACES)
        .flat()
        .find(p => p.id === end);
highlightDestination(place);
        let startPlace = Object.values(PLACES)
    .flat()
    .find(p => p.id === start);
console.log("START PLACE:", startPlace);
if(startPlace && startPlace.floor !== currentFloor){

    currentFloor = startPlace.floor;

    loadSVG(currentFloor);

    setTimeout(() => {

        startRoute(start, end, type);

    }, 500);


    return;
}

// sprawdzenie czy miejsca na tym samym piętrze mają różne schody

if(
    startPlace &&
    place &&
    startPlace.floor === place.floor &&
    startPlace.stair &&
    place.stair &&
    startPlace.stair !== place.stair
){

    console.log(
        "RÓŻNE SCHODY - PRZEJŚCIE PRZEZ PARTER"
    );

    floorChange = {
        stair: startPlace.stair,
        endStair: place.stair
    };

    pendingRoute = {
        start:start,
        end:end,
        type:type
    };


    let stairRoute = getRoute(
    start,
    startPlace.stair
);

console.log(
    "TRASA DO SCHODÓW:",
    start,
    startPlace.stair,
    stairRoute
);


    if(stairRoute){

        let points = convertRouteToPoints(
            stairRoute,
            startPlace.type
        );

        showRoutePoints(points);
    }


    document.getElementById(
        "stairsButton"
    ).hidden = false;


    return;
}
if(place && place.floor !== currentFloor){
    if(
    startPlace &&
    place &&
    startPlace.floor === place.floor &&
    startPlace.stair &&
    place.stair &&
    startPlace.stair !== place.stair
){

    console.log(
        "RÓŻNE KLATKI SCHODOWE - PRZEJŚCIE PRZEZ PARTER"
    );


    if(place.floor === "parter"){

    floorChange = {

        stair: startPlace.stair,

        endStair: null

    };

}
else{

    floorChange = {

        stair: startPlace.stair,

        endStair: place.stair

    };

}


    pendingRoute = {
        start:start,
        end:end,
        type:type
    };


    let stairRoute = getRoute(
        start,
        startPlace.stair
    );


    console.log(
        "TRASA DO PIERWSZYCH SCHODÓW:",
        stairRoute
    );


    let points = convertRouteToPoints(
        stairRoute,
        type
    );


    showRoutePoints(points);
highlightDestination(place);

    document.getElementById(
        "stairsButton"
    ).hidden = false;


    return;

}

let stairToUse;


if(startPlace && startPlace.stair){

    stairToUse = startPlace.stair;

}
else if(place && place.stair){

    stairToUse = place.stair;

}
else{

    stairToUse = "schody2";

}



if(
    [
        "201a",
        "201b",
        "201c",
        "202",
        "203",
        "204",
        "204a",
        "gabinet psychologa",
        "sekretariat",
        "104",
        "105",
        "106",
        "aula"
    ].includes(start)
){
    stairToUse = "schody1";
}

console.log(
    "WYBOR SCHODOW:",
    "START:",
    startPlace,
    "CEL:",
    place,
    "WYBRANE:",
    stairToUse
);
floorChange = {
    stair: stairToUse,
    startStair: stairToUse,
    endStair: place.stair
};
    pendingRoute = {
        start: start,
        end: end,
        type: type
    };


  let stairRoute = getRoute(
    start,
    floorChange.stair
);

console.log(
    "TRASA DO SCHODÓW:",
    start,
    "schody2",
    stairRoute
);


    if(stairRoute){
let stairType = "corridor";


if(
    [
        "201a",
        "201b",
        "201c",
        "202",
        "203",
        "204",
        "204a",
        "gabinet psychologa"
    ].includes(start)
){
    stairType = "main";
}
        let points = convertRouteToPoints(
            stairRoute,
            stairType
        );


        showRoutePoints(points);
        highlightDestination(place);

    }


    let button = document.getElementById(
        "stairsButton"
    );


    button.hidden = false;


    return;

}

    let route = getRoute(
        start,
        end
    );
console.log(
    "SZUKAM TRASY:",
    start,
    end,
    route
);

    if (!route) {

        console.error(
            "Brak trasy:",
            start,
            end
        );

        return;

    }


    let points = convertRouteToPoints(
        route,
        type
    );


    showRoutePoints(points);

}
// ======================================
// ZOOM I PRZESUWANIE MAPY SVG
// ======================================

let mapSVG = null;

let zoomLevel = 1;

let moveX = 0;
let moveY = 0;

let isDragging = false;

let startX = 0;
let startY = 0;



function enableMapControl() {


    mapSVG = document.querySelector(
        "#mapContainer svg"
    );


    if (!mapSVG) {

        console.error(
            "Nie znaleziono SVG"
        );

        return;

    }



    mapSVG.style.transformOrigin = "center center";

    updateMapTransform();



    // zoom myszką

    mapSVG.addEventListener(
        "wheel",
        function(e){

            e.preventDefault();


            if(e.deltaY < 0){

                zoomLevel += 0.1;

            } else {

                zoomLevel -= 0.1;

            }


            if(zoomLevel < 0.5){

                zoomLevel = 0.5;

            }


            if(zoomLevel > 2){

                zoomLevel = 2;

            }


            updateMapTransform();

        },
        {passive:false}
    );



    // przesuwanie myszką

    mapSVG.addEventListener(
        "mousedown",
        function(e){

            isDragging = true;

            startX = e.clientX - moveX;

            startY = e.clientY - moveY;

        }
    );
    mapSVG.addEventListener(
"touchstart",
function(e){

    let touch = e.touches[0];

    isDragging = true;

    startX = touch.clientX - moveX;

    startY = touch.clientY - moveY;

},
{passive:true}
);



    window.addEventListener(
        "mousemove",
        function(e){

            if(!isDragging){
                return;
            }


            moveX = e.clientX - startX;

            moveY = e.clientY - startY;

            updateMapTransform();

        }
    );

window.addEventListener(
"touchmove",
function(e){

if(e.touches.length === 2){
    return;
}


if(!isDragging){
    return;
}


let touch = e.touches[0];


moveX = touch.clientX - startX;

moveY = touch.clientY - startY;


updateMapTransform();

},
{passive:false}
);

    window.addEventListener(
        "mouseup",
        function(){

            isDragging = false;

        }
    );

window.addEventListener(
"touchend",
function(){

    isDragging = false;

}
);
let startDistance = 0;
let startScale = 1;


mapSVG.addEventListener(
"touchstart",
function(e){

    if(e.touches.length === 2){

        isDragging = false;


        let dx = e.touches[0].clientX - e.touches[1].clientX;
        let dy = e.touches[0].clientY - e.touches[1].clientY;


        startDistance = Math.sqrt(
            dx * dx + dy * dy
        );


        startScale = zoomLevel;

    }

},
{passive:false}
);



mapSVG.addEventListener(
"touchmove",
function(e){

    if(e.touches.length === 2){

        e.preventDefault();


        let dx = e.touches[0].clientX - e.touches[1].clientX;
        let dy = e.touches[0].clientY - e.touches[1].clientY;


        let distance = Math.sqrt(
            dx * dx + dy * dy
        );


        zoomLevel= startScale *
            (distance / startDistance);


        if(zoomLevel < 0.5){
            zoomLevel = 0.5;
        }


        if(zoomLevel > 5){
            zoomLevel = 5;
        }


        updateMapTransform();

    }

},
{passive:false}
);
}



function updateMapTransform(){


    if(!mapSVG){
        return;
    }


    mapSVG.style.transformOrigin = "50% 50%";

mapSVG.style.transform =
    "translate("
    + moveX + "px,"
    + moveY + "px) scale("
    + zoomLevel
    + ")";


}
// ======================================
// PRZYCISK POKAŻ TRASĘ
// ======================================

document
    .getElementById("showRouteButton")
    .addEventListener(
        "click",
        function(){


            let start =
                document.getElementById(
                    "fromSelect"
                ).value;



            let end =
                document.getElementById(
                    "toSelect"
                ).value;

                          let startPlace = Object.values(PLACES)
            .flat()
            .find(place => place.id === start);


            let endPlace = Object.values(PLACES)
            .flat()
            .find(place => place.id === end);


            if(!start || !end){

                console.warn(
                    "Nie wybrano startu lub celu"
                );

                return;

            }



            startRoute(
                start,
                end,
    endPlace ? endPlace.type : "main"
            );

        }
    );
  document
    .getElementById("stairsButton")
    .addEventListener(
        "click",
        function(){


            if(!pendingRoute){
                return;
            }


            let endPlace = Object.values(PLACES)
                .flat()
                .find(
                    p => p.id === pendingRoute.end
                );


            if(
    floorChange &&
    floorChange.endStair &&
    floorChange.stair !== floorChange.endStair &&
    endPlace.floor !== "parter"
){


    currentFloor = "parter";

}
else{

    currentFloor = endPlace.floor;

}


            loadSVG(currentFloor);

            setTimeout(() => {


   // jeżeli były różne schody - najpierw przejście przez parter

if(
    floorChange &&
    floorChange.stair !== floorChange.endStair &&
    endPlace.floor !== "parter"
){

    route = getRoute(
        "schody1",
        "schody2"
    );


    console.log(
        "PRZEJŚCIE MIĘDZY SCHODAMI:",
        route
    );


    let points = convertRouteToPoints(
        route,
        "main"
    );


    showRoutePoints(points);


    floorChange.stair = floorChange.endStair;


// pokaż ponownie przycisk do wejścia na drugie schody
document.getElementById(
    "stairsButton"
).hidden = false;


return;

}

// drugi etap po przejściu przez parter
let stairName;

if(
    currentFloor === "parter" &&
    floorChange &&
    floorChange.stair
){

    stairName = floorChange.stair === "schody1"
        ? "schody1"
        : "schody2";

}
else{

    stairName = "schody2";

}

route = getRoute(
    stairName,
    pendingRoute.end
);

    if(!route){
        console.error(
            "Brak trasy:",
            stairName,
            pendingRoute.end
        );
        return;
    }


    console.log(
        "Drugi etap:",
        route
    );


    let points = convertRouteToPoints(
        route,
        endPlace.type
    );


    console.log(
        "Punkty do pokazania:",
        points
    );


    showRoutePoints(points);
highlightDestination(endPlace);

},1200);



            this.hidden = true;


        }
    );