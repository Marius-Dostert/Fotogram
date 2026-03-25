let contentThumbnail = [`<button class="thumbnail_button" onclick="open_content_box(0)" onkeydown="open_with_enter(event.key, 0)"><img src="content/Mercury.jpg" class="content_box_design" alt="Merkur"></button>
                         <button class="thumbnail_button" onclick="open_content_box(1)" onkeydown="open_with_enter(event.key, 1)"><img src="content/Venus.png" class="content_box_design" alt="Venus"></button>
                         <button class="thumbnail_button" onclick="open_content_box(2)" onkeydown="open_with_enter(event.key, 2)"><img src="content/Earth.jpg" class="content_box_design" alt="Erde"></button>
                         <button class="thumbnail_button" onclick="open_content_box(3)" onkeydown="open_with_enter(event.key, 3)"><img src="content/Mars.jpg" class="content_box_design" alt="Mars"></button>
                         <button class="thumbnail_button" onclick="open_content_box(4)" onkeydown="open_with_enter(event.key, 4)"><img src="content/Jupiter.png" class="content_box_design" alt="Jupiter"></button>
                         <button class="thumbnail_button" onclick="open_content_box(5)" onkeydown="open_with_enter(event.key, 5)"><img src="content/Jupiter_moons.jpg" class="content_box_design" alt="Jupiter und die Galileischen Monde"></button>
                         <button class="thumbnail_button" onclick="open_content_box(6)" onkeydown="open_with_enter(event.key, 6)"><img src="content/Saturn.jpg" class="content_box_design" alt="Saturn"></button>
                         <button class="thumbnail_button" onclick="open_content_box(7)" onkeydown="open_with_enter(event.key, 7)"><img src="content/Saturn_ring.jpg" class="content_box_design" alt="Ringe des Saturn"></button>
                         <button class="thumbnail_button" onclick="open_content_box(8)" onkeydown="open_with_enter(event.key, 8)"><img src="content/Uranus.png" class="content_box_design" alt="Uranus"></button>
                         <button class="thumbnail_button" onclick="open_content_box(9)" onkeydown="open_with_enter(event.key, 9)"><img src="content/Uranus_sunrise.jpg" class="content_box_design" alt="Dämmerung auf Uranus"></button>
                         <button class="thumbnail_button" onclick="open_content_box(10)" onkeydown="open_with_enter(event.key, 10)"><img src="content/neptun.jpg" class="content_box_design" alt="Neptun"></button>
                         <button class="thumbnail_button" onclick="open_content_box(11)" onkeydown="open_with_enter(event.key, 11)"><img src="content/Neptune_storms.jpg" class="content_box_design" alt="Stürme auf Neptun"></button>
                        `]

let contentHTML = [ `<dialog id = dialog_0 onclick="close_content_box(0)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Merkur</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Mercury.jpg" alt="Merkur_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,-1,0,1)" onclick="bubbelingProtection(event)">
                            <div class="button_placeholder"></div>
                            <button onclick="close_content_box(0)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(0,1)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_1 onclick="close_content_box(1)">
                        <header onclick="bubbelingProtection(event)">    
                            <h2>Venus</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Venus.png" alt="Venus_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,0,1,2)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(1,0)" alt="zurück" tabindex="0">
                            <button onclick="close_content_box(1)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(1,2)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_2 onclick="close_content_box(2)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Erde</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Earth.jpg" alt="Erde_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,1,2,3)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png"onclick="previous_content(2,1)" alt="zurück" tabindex="0">
                            <button onclick="close_content_box(2)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(2,3)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_3 onclick="close_content_box(3)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Mars</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Mars.jpg" alt="Mars_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,2,3,4)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(3,2)" alt="zurück" tabindex="0">
                            <button onclick="close_content_box(3)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(3,4)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_4 onclick="close_content_box(4)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Jupiter</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Jupiter.png" alt="Jupiter_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,3,4,5)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(4,3)" alt="zurück" tabindex="0">
                            <button onclick="close_content_box(4)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(4,5)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_5 onclick="close_content_box(5)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Die Galileische Monde</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Jupiter_moons.jpg" alt="Jupiter und die Galileischen Monde_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,4,5,6)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(5,4)" alt="zurück" tabindex="0">      
                            <button onclick="close_content_box(5)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(5,6)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_6 onclick="close_content_box(6)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Saturn</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Saturn.jpg"  alt="Saturn_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,5,6,7)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(6,5)" alt="zurück" tabindex="0">
                            <button onclick="close_content_box(6)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(6,7)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_7 onclick="close_content_box(7)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Saturn Ringe</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Saturn_ring.jpg"  alt="Ringe des Saturn_Fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,6,7,8)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(7,6)" alt="zurück" tabindex="0">
                            <button onclick="close_content_box(7)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(7,8)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_8 onclick="close_content_box(8)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Uranus</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Uranus.png" alt="Uranus_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,7,8,9)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(8,7)" alt="zurück" tabindex="0">
                            <button onclick="close_content_box(8)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(8,9)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_9 onclick="close_content_box(9)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Uranus Sonnenaufgang</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Uranus_sunrise.jpg" alt="Dämmerung auf Uranus_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,8,9,10)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(9,8)" alt="zurück" tabindex="0">
                            <button onclick="close_content_box(9)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(9,10)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_10 onclick="close_content_box(10)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Neptun</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/neptun.jpg" alt="Neptun_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,9,10,11)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(10,9)" alt="zurück" tabindex="0">
                            <button onclick="close_content_box(10)" tabindex="0">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(10,11)" alt="weiter" tabindex="0">
                        </footer>
                    </dialog>

                    <dialog id = dialog_11 onclick="close_content_box(11)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Stürme auf Neptun</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Neptune_storms.jpg" alt="Stürme auf Neptun_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,10,11)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(11,10)" alt="zurück" tabindex="0">
                            <button onclick="close_content_box(11)" tabindex="0">Schließen</button>
                            <div class="button_placeholder"></div>
                        </footer>
                    </dialog>
                `]

let functionIDs =   ["dialog_0", 
                     "dialog_1", 
                     "dialog_2", 
                     "dialog_3", 
                     "dialog_4", 
                     "dialog_5", 
                     "dialog_6", 
                     "dialog_7", 
                     "dialog_8", 
                     "dialog_9", 
                     "dialog_10", 
                     "dialog_11"]


function render () {
    let contentref = document.getElementById("content")
    for (let index = 0; index < contentThumbnail.length; index++) {
        contentref.innerHTML += getNotesHtml(index);
    }
}

function getNotesHtml(index){
    return `     <div class="single_element">
                                        <div class="thumbnail-section">
                                            ${contentThumbnail[index]}
                                        </div>
                                        <div>
                                            ${contentHTML[index]}
                                        </div>
                                    </div>`
}


function open_with_enter(usedKey, content_box_number) {
    let key = usedKey
    if 
    (key === 'Enter') {open_content_box(content_box_number)}
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