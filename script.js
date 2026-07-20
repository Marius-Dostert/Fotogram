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

function switch_content(toClose, switchTo) {
    close_content_box(toClose)
    open_content_box(switchTo)

    if (switchTo < toClose) {
        document.getElementById(`previousButton${switchTo}`).focus();
    }

    if (switchTo > toClose) {
        document.getElementById(`nextButton${switchTo}`).focus();
    }
}

function arrowNavigation(event, openPrevious, toClose, openNext) {
    arrowNavigationLeft (event, openPrevious, toClose)
    arrowNavigationRight(event, openNext, toClose)
}

function arrowNavigationLeft (event, openPrevious, toClose) {
    if (event.key === 'ArrowLeft' && openPrevious >= 0) {
        open_content_box(openPrevious), close_content_box(toClose)
    }
}

function arrowNavigationRight (event, openNext, toClose) {
    if (event.key === 'ArrowRight' && openNext < dataArray.length) {
        open_content_box(openNext), close_content_box(toClose)
    }
}

function bubbelingProtection (event) {
    event.stopPropagation()
}

