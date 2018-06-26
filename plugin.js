let cat = document.querySelector('img'),
    clicksContainer = document.querySelector('.clicksContainer');
    clicks = 0;
    clicksContainer.innerHTML = clicks;
cat.addEventListener('click', function(){
    clicks ++;
    clicksContainer.innerHTML = clicks;
});