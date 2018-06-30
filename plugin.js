class Cat {
    constructor(name, src){
        this.name = name;
        this.src = src
    }
    display() {
        const img = document.querySelector('img'),
              name = document.querySelector('.name');
        img.setAttribute('src', this.src);
        img.setAttribute('alt', this.name);
        img.setAttribute('title', this.name);
        name.innerHTML = this.name
    }
    click(){
        const clicksContainer = document.querySelector('.clicksContainer');
        let clickCounter = 0;
        clicksContainer.innerHTML = clickCounter;
        addEventListener('click', () => {
            clickCounter ++;
            clicksContainer.innerHTML = clickCounter;
        });
    }
}


let catsArray = [
    './images/2368516302_982f046bb5_o.jpg',
    './images/5372754294_db6acaa1e5_b.jpg',
],
catsNames = [
    'Kitty',
    'Votica'
];
for (let i = 0; i < catsArray.length; i++) {
    let container = document.querySelector('.container');
    let cats = new Cat(catsNames[i],catsArray[i]);
        cats.display();
        cats.click();
    container.innerHTML = cat;
}
