class Cat {
    constructor(name, src){
        this.name = name;
        this.src = src;
        this.clicks = 0;
        this.counter = `<span class="clickContainer">${this.clicks}</span>`;
        this.container = `
            <div class="container">
                <img src='${this.src}' class ='clicker' alt='${this.name}' title='${this.name}'>
                <h1> ${this.name} </h1> 
            </div>
        `;
        this.display();
    }
    display() {
        let body = document.querySelector('body');
        body.innerHTML += `
            ${this.container}
        `
        this.click();
    }
    click(){
        this.container += this.counter;
        let imgs = document.querySelectorAll('.clicker');
        imgs.forEach((img)=> {
            img.addEventListener('click', ()=>{
                this.clicks ++;
                this.counter = `<span class="clickContainer">${this.clicks}</span>`;
                console.log(this.clicks);
            });
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
    new Cat(catsNames[i], catsArray[i]); 
    
}