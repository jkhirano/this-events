//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

// Steps: 1st - grab classes, 2 - add events

var navBox = document.getElementsByClassName('navi');

for (var i = 0; i<navBox.length; i++){
    navBox[i].addEventListener('click', showContents);
}

function showContents(){
    var contents = this.querySelector('.inner');
    if(contents.style.display === 'block'){contents.style.display = 'none';
    }else{
        contents.style.display = 'block';
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var menuBox = document.getElementsByClassName('name');

for (var i = 0; i<menuBox.length; i++){
    menuBox[i].addEventListener('click', showMenu);
}

function showMenu(){
    var menuContents = this.querySelector('.menu');
    if(menuContents.style.display === 'block'){
        menuContents.style.display = 'none';
}else{
    menuContents.style.display = 'block';
}  
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var thumbs = document.getElementsByClassName('thumb'
);

for (var i = 0; i<thumbs.length; i++){
thumbs[i].addEventListener('click', countUp);
var countBox = document.createElement('div');
countBox.className = 'thumbsDown';
thumbs[i].appendChild(countBox);
}

function countUp(){
    var counter = this.querySelector('.thumbsDown');
    counter.innerHTML++;
}



