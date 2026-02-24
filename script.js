let contentThumbnail = [`<div class="thumbnail"><img src="/content/Mercury.jpg" onclick="open_content_box([0])" class="content_box_design" tabindex="0" alt="Merkur" onkeyup="open_with_enter(event.key, 0)"></div>
                        <div class="thumbnail"><img src="content/Venus.png" onclick="open_content_box(1)" class="content_box_design" tabindex="0" alt="Venus" onkeyup="open_with_enter(event.key, 1)"></div>
                        <div class="thumbnail"><img src="content/Earth.jpg" onclick="open_content_box(2)" class="content_box_design" tabindex="0" alt="Erde" onkeyup="open_with_enter(event.key, 2)"></div>
                        <div class="thumbnail"><img src="content/Mars.jpg" onclick="open_content_box(3)" class="content_box_design" tabindex="0" alt="Mars" onkeyup="open_with_enter(event.key, 3)"></div>
                        <div class="thumbnail"><img src="content/Jupiter.png" onclick="open_content_box(4)" class="content_box_design" tabindex="0" alt="Jupiter" onkeyup="open_with_enter(event.key, 4)"></div>
                        <div class="thumbnail"><img src="content/Jupiter_moons.jpg" onclick="open_content_box(5)" class="content_box_design" tabindex="0" alt="Jupiter und die Galileischen Monde" onkeyup="open_with_enter(event.key, 5)"></div>
                        <div class="thumbnail"><img src="content/Saturn.jpg" onclick="open_content_box(6)" class="content_box_design" tabindex="0" alt="Saturn" onkeyup="open_with_enter(event.key, 6)"></div>
                        <div class="thumbnail"><img src="content/Saturn_ring.jpg" onclick="open_content_box(7)" class="content_box_design" tabindex="0" alt="Ringe des Saturn" onkeyup="open_with_enter(event.key, 7)"></div>
                        <div class="thumbnail"><img src="content/Uranus.png" onclick="open_content_box(8)" class="content_box_design" tabindex="0" alt="Uranus" onkeyup="open_with_enter(event.key, 8)"></div>
                        <div class="thumbnail"><img src="content/Uranus_sunrise.jpg" onclick="open_content_box(9)" class="content_box_design" tabindex="0" alt="Dämmerung auf Uranus" onkeyup="open_with_enter(event.key, 9)"></div>
                        <div class="thumbnail"><img src="content/neptun.jpg" onclick="open_content_box(10)" class="content_box_design" tabindex="0" alt="Neptun" onkeyup="open_with_enter(event.key, 10)"></div>
                        <div class="thumbnail"><img src="content/Neptune_storms.jpg" onclick="open_content_box(11)" class="content_box_design" tabindex="0" alt="Stürme auf Neptun" onkeyup="open_with_enter(event.key, 11)"></div>
                        `]

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
                    </dialog>

                    <dialog id="content_box_two" onclick="close_content_box(1)">
                        <header onclick="bubbelingProtection(event)">    
                            <h2>Venus</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Venus.png" alt="Venus_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,0,1,2)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(1,0)" alt="zurück">
                            <button onclick="close_content_box(1)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(1,2)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_three" onclick="close_content_box(2)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Erde</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Earth.jpg" alt="Erde_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,1,2,3)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png"onclick="previous_content(2,1)" alt="zurück">
                            <button onclick="close_content_box(2)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(2,3)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_four" onclick="close_content_box(3)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Mars</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Mars.jpg" alt="Mars_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,2,3,4)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(3,2)" alt="zurück">
                            <button onclick="close_content_box(3)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(3,4)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_five" onclick="close_content_box(4)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Jupiter</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Jupiter.png" alt="Jupiter_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,3,4,5)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(4,3)" alt="zurück">
                            <button onclick="close_content_box(4)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(4,5)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_six" onclick="close_content_box(5)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Die Galileische Monde</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Jupiter_moons.jpg" alt="Jupiter und die Galileischen Monde_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,4,5,6)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(5,4)" alt="zurück">      
                            <button onclick="close_content_box(5)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(5,6)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_seven" onclick="close_content_box(6)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Saturn</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Saturn.jpg"  alt="Saturn_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,5,6,7)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(6,5)" alt="zurück">
                            <button onclick="close_content_box(6)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(6,7)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_eight" onclick="close_content_box(7)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Saturn Ringe</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Saturn_ring.jpg"  alt="Ringe des Saturn_Fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,6,7,8)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(7,6)" alt="zurück">
                            <button onclick="close_content_box(7)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(7,8)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_nine" onclick="close_content_box(8)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Uranus</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Uranus.png" alt="Uranus_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,7,8,9)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(8,7)" alt="zurück">
                            <button onclick="close_content_box(8)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(8,9)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_ten" onclick="close_content_box(9)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Uranus Sonnenaufgang</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Uranus_sunrise.jpg" alt="Dämmerung auf Uranus_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,8,9,10)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(9,8)" alt="zurück">
                            <button onclick="close_content_box(9)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(9,10)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_eleven" onclick="close_content_box(10)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Neptun</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/neptun.jpg" alt="Neptun_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,9,10,11)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(10,9)" alt="zurück">
                            <button onclick="close_content_box(10)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(10,11)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_eleven" onclick="close_content_box(10)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Neptun</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/neptun.jpg" alt="Neptun_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,9,10,11)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(10,9)" alt="zurück">
                            <button onclick="close_content_box(10)">Schließen</button>
                            <img src="img/icon/arrow-right.png" onclick="next_content(10,11)" alt="weiter">
                        </footer>
                    </dialog>

                    <dialog id="content_box_twelve" onclick="close_content_box(11)">
                        <header onclick="bubbelingProtection(event)">
                            <h2>Stürme auf Neptun</h2>
                        </header>
                        <section onclick="bubbelingProtection(event)">
                            <img src="content/Neptune_storms.jpg" alt="Stürme auf Neptun_fullscreen">
                        </section>
                        <footer onkeydown="ArrowNavigation(event,10,11)" onclick="bubbelingProtection(event)">
                            <img src="img/icon/arrow-left.png" onclick="previous_content(11,10)" alt="zurück">
                            <button onclick="close_content_box(11)">Schließen</button>
                            <div class="button_placeholder"></div>
                        </footer>
                    </dialog>
                `]


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