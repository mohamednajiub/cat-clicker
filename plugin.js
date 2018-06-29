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

const kitty = new Cat('kitty','./images/2368516302_982f046bb5_o.jpg');
kitty.display();
kitty.click();