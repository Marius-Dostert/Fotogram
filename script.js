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
    return `                    <div class="single_element">
                                    <div class="thumbnail-section">
                                        <button class="thumbnail_button">
                                            <img class="content_box_design" src="${dataArray[index].image}">
                                        </button>
                                    </div>
                                </div>`
}



function open_content_box(content_box_number){
    let dialogRef = document.getElementById(functionIDs [content_box_number]);
    dialogRef.showModal();
}

function close_content_box(content_box_number){
    let dialogRef = document.getElementById(functionIDs [content_box_number]);
    dialogRef.close();
}

function switch_content(content_box_number) {
    let dialogRef = document.getElementById(functionIDs [content_box_number]);
    dialogRef.showModal();
}

function previous_content(toClose, openPrevious) {
    close_content_box(toClose)
    switch_content(openPrevious)
}

function next_content(toClose, openNext) {
    close_content_box(toClose)      
    switch_content(openNext)
}

function ArrowNavigation(event, openPrevious, toClose, openNext) {
    if
    (event.key === 'ArrowLeft') {switch_content(openPrevious), close_content_box(toClose)} 
    else if
    (event.key === 'ArrowRight') {switch_content(openNext), close_content_box(toClose)}
}

function bubbelingProtection (event) {
    event.stopPropagation()
}