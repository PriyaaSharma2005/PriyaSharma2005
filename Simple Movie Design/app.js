const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow,i)=>{
    const itemNumber=movieLists[i].querySelectorAll("img").length;
    let ClickCounter=0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth/270);
        ClickCounter++
        if (itemNumber-(5+ClickCounter)+(5-ratio) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`;
        }else{
             movieLists[i].style.transform = "translateX(0)";
             ClickCounter = 0;
        }
    });
});
//Toggle
const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.movie-list-title,.navbar,.navbar-container,.sidebar,.left-menu-icon,.toggle,.featured-button,.featured-button:hover,.movie-list-item-button,.movie-list-item-button:hover,.movie-list-item-desc,.movie-list-item-title");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})