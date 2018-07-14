class Cat {
    constructor(name, src, counter){
        this.name = name;
        this.src = src;
        this.counter = counter;
        this.container = `
            <div class="container">
                <img src='${this.src}' class ='clicker' alt='${this.name}' title='${this.name}'>
                <h1> ${this.name} </h1> 
                <span class="clickContainer">${this.counter}</span>
            </div>
        `;
        this.display();
    }
    display() {
        let body = document.querySelector('body');
        body.innerHTML += `${this.container}`
        this.click();
    }
    click() {
        let imgs = document.querySelectorAll('.clicker');
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('click',() =>{                
                let clicks = document.querySelectorAll('.clickContainer');
                clicks[i].innerHTML++;
            });
        }
    }
}

const cats = [
    {
        catName: 'Kitty',
        catUrl: './images/1.jpg',
        catCounter: 0
    },
    {
        catName: 'Moala',
        catUrl: './images/2.jpg',
        catCounter: 0
    }
]
for (let i = 0; i < cats.length; i++) {
    new Cat(cats[i]['catName'], cats[i]['catUrl'], cats[i]['catCounter']);
}
