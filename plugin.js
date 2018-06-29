let cats = document.querySelectorAll('.cat'),
    clicksContainer = document.querySelector('.clicksContainer'),
    clicks = 0,
    names = document.querySelectorAll('.name'),
    catsArray = [
        './images/2368516302_982f046bb5_o.jpg',
        './images/5372754294_db6acaa1e5_b.jpg',
    ],
    catsNames = [
        'Cat 1',
        'Cat 2'
    ]
;

clicksContainer.innerHTML = clicks;
for (let i = 0; i < cats.length; i++) {
    cats[i].setAttribute("src", catsArray[i]);
    cats[i].addEventListener('click', () => {
        clicks ++;
        clicksContainer.innerHTML = clicks;
    });
    for (let i = 0; i < catsNames.length; i++) {
        names[i].innerHTML = catsNames[i]
    }
}

