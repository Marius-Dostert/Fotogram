let dataArray = [   {
                        name: "Merkur", 
                        image: "content/Mercury.jpg",
                    },

                    {
                        name: "Venus",
                        image: "content/Venus.png",
                    },
                    
                    {
                        name: "Erde",
                        image: "content/Earth.jpg",
                    },

                    {
                        name: "Mars",
                        image: "content/Mars.jpg",
                    },

                    {
                        name: "Jupiter",
                        image: "content/Jupiter.png",
                    },

                    {
                        name: "Die Galileische Monde",
                        image: "content/Jupiter_moons.jpg",
                    },

                    {
                        name: "Saturn",
                        image: "content/Saturn.jpg",
                    },

                    {
                        name: "Saturn Ringe",
                        image: "content/Saturn_ring.jpg",
                    },

                    {
                        name: "Uranus",
                        image: "content/Uranus.png",
                    },

                    {
                        name: "Uranus Sonnenaufgang",
                        image: "content/Uranus_sunrise.jpg",
                    },

                    {
                        name: "Neptun",
                        image: "content/neptun.jpg",
                    },

                    {
                        name: "Stürme auf Neptun",
                        image: "content/Neptune_storms.jpg",
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
                                <button class="thumbnail_button" onclick="open_content_box(${index})">
                                    <img class="content_box_design" src="${dataArray[index].image}">
                                </button>
                            </div>
                            <dialog id="${index}" onclick="close_content_box(${index})" onkeydown="arrowNavigation(event,${index}-1, ${index}, ${index}+1)">
                                <header onclick="bubbelingProtection(event)">    
                                    <h2>${dataArray[index].name}</h2>
                                </header>
                                <section onclick="bubbelingProtection(event)">
                                    <img src="${dataArray[index].image}" alt="${dataArray[index].name}" tabindex="0">
                                </section>
                                <footer onclick="bubbelingProtection(event)">
                                    <button id="previousButton${index}" onclick="previous_content(${index},${index}-1)" class="dialog_navi_button" alt="zurück"><img src="img/icon/arrow-left.png"></button>
                                    <button onclick="close_content_box(${index})" class="dialog_close_button" alt="schließen">Schließen</button>
                                    <button id="nextButton${index}" onclick="next_content(${index},${index}+1)" class="dialog_navi_button" alt="weiter"><img src="img/icon/arrow-right.png"></button>
                                </footer>
                            </dialog>
                            `
}

function open_content_box(index){
    let dialogRef = document.getElementById(index);
    dialogRef.showModal();
    if (index == 0) {
        let pButton = document.getElementById(`previousButton0`);
        pButton.classList.add("hide")
    }
    else if (index + 2 > dataArray.length) {
        let nButton = document.getElementById(`nextButton${index}`);
        nButton.classList.add("hide")
    }
}

function close_content_box(index){
    let dialogRef = document.getElementById(index);
    dialogRef.close();
}

function previous_content(toClose, openPrevious) {
    close_content_box(toClose)
    open_content_box(openPrevious)
    if (openPrevious == 0) {
        let pButton = document.getElementById(`previousButton0`);
        pButton.classList.add("hide")
    } 
}

function next_content(toClose, openNext) {
    close_content_box(toClose)      
    open_content_box(openNext)
    if (openNext + 2 > dataArray.length) {
        let nButton = document.getElementById(`nextButton${openNext}`);
        nButton.classList.add("hide")
    }
}

function arrowNavigation(event, openPrevious, toClose, openNext) {
    if (event.key === 'ArrowLeft') {
        open_content_box(openPrevious), close_content_box(toClose)
    } 

    else if (event.key === 'ArrowRight') {
        open_content_box(openNext), close_content_box(toClose)
    }
}

function bubbelingProtection (event) {
    event.stopPropagation()
}

