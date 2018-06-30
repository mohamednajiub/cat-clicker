class Cat {
    constructor(name, src){
        this.name = name;
        this.src = src;
        this.img = `<img src='${this.src}' class ='clicker' alt='${this.name}' title='${this.name}'>`
        this.display();
    }
    display() {
        let container = document.querySelector('.container');
        container.innerHTML += `
            ${this.img}
            <h1> ${this.name} </h1>
        `
        this.click();
    }
    click(){
        let clicksContainer = document.querySelector('.clicksContainer');
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
    'Moala',
];


for (let i = 0; i < catsArray.length; i++) {
    let cat = new Cat(catsNames[i], catsArray[i]); 
    
}