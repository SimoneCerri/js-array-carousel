# !Quest!
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

- MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

- MILESTONE 2
 Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

- MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

- BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

- BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

Consigli del giorno:
Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".



# ?Solution?

- Step N.1 : static markup on HTML.
- Step N.2 : make an array in JS , removing the HTML static markup.
    - array with the markup inside.
    - FOR cycle with template literal.
    - hide all img exept the first.
- Step N.3 : on CLICK change "active" img.
    - CLICK to next button for next img.
    - CLICK to prev byutton for previous img.
- BONUS N.1 : fix the bug
    - about CLICK on prev (when you are on first img).
    - about CLICK on next (when you are on last img).
- BONUS N.2 : add the visualization as the second screenshot.
    - opacity on minimized img.
    - colored border on the selected one.
    - change layout on the other part too when swap img. <!-- mi sparo -->