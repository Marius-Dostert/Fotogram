let contentThumbnail = ['<div class="thumbnail"><img src="/content/Mercury.jpg" onclick="open_content_box([0])" class="content_box_design" tabindex="0" alt="Merkur" onkeyup="open_with_enter(event.key, 0)"</div>']

let contentDialog = [`<dialog id="content_box_one" onclick="close_content_box(0)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Merkur</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Mercury.jpg" alt="Merkur_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,-1,0,1)" onclick="bubbelingProtection(event)">
                            <div class="button_placeholder"></div>
                            <button onclick="close_content_box(0)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(0,1)" alt="weiter">
                        </footer>
                    </dialog>`
]

function render () {
    let contentref = document.getElementById("content")
    for (let index = 0; index < contentThumbnail.length; index++) {
        contentref.innerHTML += getNotesHtml(index);
    }
}

function getNotesHtml(index){
    return `     <div class="single_element">
                                        <div>
                                            ${contentThumbnail[index]}
                                        </div>
                                        <div>
                                            ${contentDialog[index]}
                                        </div>
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