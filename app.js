let img=document.querySelector("#person-img")
console.log(img.src)
//Id #,cls .

let names=["John Atkin","Petrucci","Adam Clover","James LaBrie","Rishi Raghu"]
let images=["person-1.jpeg","person1.jpg","person2.jpg","person3.jpg"]
let suprisebtn=document.querySelector(".random-btn")
let rightarrow=document.querySelector(".next-btn")
console.log(rightarrow)
let leftarrow=document.querySelector(".prev-btn")
console.log(rightarrow)

let i=-1;
function changeup(i){
    if(i==3){
        return 0;
    }
    else
    {
        return i+=1;
    }
}
function changedown(i){
    if(i<=0){
        return 3;
    }
    else
    {
        return i-=1;
    }
}



rightarrow.addEventListener("click",function(event){
    i=changeup(i)
    document.querySelector("#author").textContent=names[i]
    document.querySelector("#person-img").src=images[i];
})
leftarrow.addEventListener("click",function(event){
    i=changedown(i)
    document.querySelector("#author").textContent=names[i]
    document.querySelector("#person-img").src=images[i];
})
suprisebtn.addEventListener("click",function(event){
    //random number between 0 and 4 
    let random=Math.floor((Math.random()*4)+0)
    document.querySelector("#author").textContent=names[random]
    document.querySelector("#person-img").src=images[random]
})