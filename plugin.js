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
        click(){
            let imgs = document.querySelectorAll('.clicker');
            console.log(imgs.length);
            for (let i = 0; i < imgs.length; i++){
                let img = imgs[i];
                img.addEventListener('click',() =>{
                    this.counter ++;
                    const counters = document.querySelectorAll('.clickContainer');
                    for(let i = 0; i < counters.length; i++) {
                        counters[i].innerHTML = this.counter;
                    }
                    console.log(this.counter);
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

    // // clear the screen for testing
    // document.body.innerHTML = '';
    // document.body.style.background="white";

    // var nums = [1,2,3];

    // // Let's loop over the numbers in our array
    // for (var i = 0; i < nums.length; i++) {

    //     // This is the number we're on...
    //     var num = nums[i];

    //     // We're creating a DOM element for the number
    //     var elem = document.createElement('div');
    //     elem.textContent = num;

    //     // ... and when we click, alert the value of `num`
    //     elem.addEventListener('click', (function(num) {
    //         return function(){
    //             alert(num);
    //         }
            
    //     })(num));

    //     // finally, let's add this element to the document
    //     document.body.appendChild(elem);
    // };

