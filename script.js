let dataArray = [  {
                    name: "Merkur", 
                    image: "content/Mercury.jpg",
                    number: 0
                    },

                    {
                    name: "Venus",
                    image: "content/Venus.png",
                    number: 1
                    },
                    
                    {
                    name: "Erde",
                    image: "content/Earth.jpg",
                    number: 2
                    },

                    {
                    name: "Mars",
                    image: "content/Mars.jpg",
                    number: 3
                    },

                    {
                    name: "Jupiter",
                    image: "content/Jupiter.png",
                    number: 4
                    },

                    {
                    name: "Die Galileische Monde",
                    image: "content/Jupiter_moons.jpg",
                    number: 5
                    },

                    {
                    name: "Saturn",
                    image: "content/Saturn.jpg",
                    number: 6
                    },

                    {
                    name: "Saturn Ringe",
                    image: "content/Saturn_ring.jpg",
                    number: 7
                    },

                    {
                    name: "Uranus",
                    image: "content/Uranus.png",
                    number: 8
                    },

                    {
                    name: "Uranus Sonnenaufgang",
                    image: "content/Uranus_sunrise.jpg",
                    number: 9
                    },

                    {
                    name: "Neptun",
                    image: "content/neptun.jpg",
                    number: 10
                    },

                    {
                    name: "Stürme auf Neptun",
                    image: "content/Neptune_storms.jpg",
                    number: 11
                    },
                ]


function render () {
    let contentref = document.getElementById("content")
    for (let index = 0; index < dataArray.length; index++) {
        contentref.innerHTML += getNotesHtml(index);
    }
}

function getNotesHtml(index){
    return `                <div class="thumbnail-section">
                                <button class="thumbnail_button" onclick="open_content_box(${dataArray[index].number})">
                                    <img class="content_box_design" src="${dataArray[index].image}">
                                </button>
                            </div>
                            <dialog id="${dataArray[index].number}" onclick="close_content_box(${dataArray[index].number})" onkeydown="ArrowNavigation(event,0,1,2)">
                                <header onclick="bubbelingProtection(event)">    
                                    <h2>${dataArray[index].name}</h2>
                                </header>
                                <section onclick="bubbelingProtection(event)">
                                    <img src="${dataArray[index].image}" alt="${dataArray[index].name}" tabindex="0">
                                </section>
                                <footer onclick="bubbelingProtection(event)">
                                    <button onclick="previous_content(${dataArray[index].number},${dataArray[index].number}-1)" class="dialog_navi_button" alt="zurück"><img src="img/icon/arrow-left.png"></button>
                                    <button onclick="close_content_box(${dataArray[index].number})" class="dialog_close_button" alt="schließen">Schließen</button>
                                    <button onclick="next_content(${dataArray[index].number},${dataArray[index].number}+1)" class="dialog_navi_button" alt="weiter"><img src="img/icon/arrow-right.png"></button>
                                </footer>
                            </dialog>
                            `
}

function open_content_box(index){
    let dialogRef = document.getElementById(dataArray[index].number);
    dialogRef.showModal();
}

function close_content_box(index){
    let dialogRef = document.getElementById(dataArray[index].number);
    dialogRef.close();
}

function previous_content(toClose, openPrevious) {
    close_content_box(toClose)
    open_content_box(openPrevious)
}

function next_content(toClose, openNext) {
    close_content_box(toClose)      
    open_content_box(openNext)
}

function ArrowNavigation(event, openPrevious, toClose, openNext) {
    if
    (event.key === 'ArrowLeft') {open_content_box(openPrevious), close_content_box(toClose)} 
    else if
    (event.key === 'ArrowRight') {open_content_box(openNext), close_content_box(toClose)}
}

function bubbelingProtection (event) {
    event.stopPropagation()
}