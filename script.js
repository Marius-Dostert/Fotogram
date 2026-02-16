
let contentTitles = ["Merkur", "Venus", "Erde", "Mars", "Jupiter", "Saturn", "Uranus", "Neptun"]

let contentImg = ["img src='content/Mercury.jpg'"]

function render () {
    let contentref = document.getElementById("content")
    for (let index = 0; index < contentTitles.length; index++) {
        contentref.innerHTML += getNotesHtml(index);
    }
}

function getNotesHtml(index){
    return `     <div class="single_element">
                                        <h1>
                                            ${contentTitles[index]}
                                        </h1>
                                        <p>
                                            ${contentImg[index]}
                                        </p>
                                    </div>`
}


let ContentArray = ["content_box_one", "content_box_two", "content_box_three", "content_box_four", "content_box_five", "content_box_six", "content_box_seven", "content_box_eight", "content_box_nine", "content_box_ten", "content_box_eleven", "content_box_twelve"];

function open_with_enter(usedKey, content_box_number) {
    let key = usedKey
    if 
    (key === 'Enter') {open_content_box(content_box_number)}
}

function open_content_box(content_box_number){
    let dialogRef = document.getElementById(ContentArray [content_box_number]);
    dialogRef.showModal();
}

function close_content_box(content_box_number){
    let dialogRef = document.getElementById(ContentArray [content_box_number]);
    dialogRef.close();
}

function switch_content(content_box_number) {
    let dialogRef = document.getElementById(ContentArray[content_box_number]);
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