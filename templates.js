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

                                    <div class="button_placeholder">
                                        <button id="previousButton${index}" tabindex="0" onclick="switch_content(${index},${index}-1)" class="dialog_navi_button" alt="zurück"><img src="img/icon/arrow-left.png"></button>
                                    </div>

                                    <button onclick="close_content_box(${index})" tabindex="0" class="dialog_close_button" alt="schließen">Schließen</button>

                                    <div class="button_placeholder">
                                        <button id="nextButton${index}" tabindex="0" onclick="switch_content(${index},${index}+1)" class="dialog_navi_button" alt="weiter"><img src="img/icon/arrow-right.png"></button>
                                    </div>

                                </footer>
                            </dialog>
                            `
}