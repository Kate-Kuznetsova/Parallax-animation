const scroll = document.getElementById('scroll');
const experiences = document.getElementById('experiences-link');
const firstCard = document.getElementById('first-card');
const secondCard = document.getElementById('second-card');
const thirdCard = document.getElementById('third-card');
const fourthCard = document.getElementById('fourth-card');

scroll.addEventListener('click', () => {
    firstCard.setAttribute("style", "animation: card-transition 0.6s both ease-in");
    secondCard.setAttribute("style", "animation: card-transition 0.8s both ease-in");
    thirdCard.setAttribute("style", "animation: card-transition 1s both ease-in");
    fourthCard.setAttribute("style", "animation: card-transition 1.2s both ease-in");

    function removeAttribute(){
        firstCard.removeAttribute("style", "animation: card-transition 0.6s both ease-in");
        secondCard.removeAttribute("style", "animation: card-transition 0.8s both ease-in");
        thirdCard.removeAttribute("style", "animation: card-transition 1s both ease-in");
        fourthCard.removeAttribute("style", "animation: card-transition 1.2s both ease-in");
    }
    
    setTimeout(removeAttribute, 2000);
})

experiences.addEventListener('click', () => {
    firstCard.setAttribute("style", "animation: card-transition 0.6s both ease-in");
    secondCard.setAttribute("style", "animation: card-transition 0.8s both ease-in");
    thirdCard.setAttribute("style", "animation: card-transition 1s both ease-in");
    fourthCard.setAttribute("style", "animation: card-transition 1.2s both ease-in");

    function removeAttribute(){
        firstCard.removeAttribute("style", "animation: card-transition 0.6s both ease-in");
        secondCard.removeAttribute("style", "animation: card-transition 0.8s both ease-in");
        thirdCard.removeAttribute("style", "animation: card-transition 1s both ease-in");
        fourthCard.removeAttribute("style", "animation: card-transition 1.2s both ease-in");
    }
    
    setTimeout(removeAttribute, 2000);
})

document.addEventListener('DOMContentLoaded', () => {
    firstCard.setAttribute("style", "animation: card-transition 0.6s both ease-in");
    secondCard.setAttribute("style", "animation: card-transition 0.8s both ease-in");
    thirdCard.setAttribute("style", "animation: card-transition 1s both ease-in");
    fourthCard.setAttribute("style", "animation: card-transition 1.2s both ease-in");

    function removeAttribute(){
        firstCard.removeAttribute("style", "animation: card-transition 0.6s both ease-in");
        secondCard.removeAttribute("style", "animation: card-transition 0.8s both ease-in");
        thirdCard.removeAttribute("style", "animation: card-transition 1s both ease-in");
        fourthCard.removeAttribute("style", "animation: card-transition 1.2s both ease-in");
    }
    
    setTimeout(removeAttribute, 2000);
}) 

