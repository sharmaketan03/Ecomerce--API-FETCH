// console.log(window.location.href)
let curentsearch=new URL(window.location)
let  searchid=curentsearch.searchParams.get("id")
console.log(curentsearch)
console.log(searchid)
// let value=window.location.search.get("id")
// let curentsearch=
let left=document.querySelector("#left")
let right=document.querySelector("#right")
let result=document.querySelector("#result")
const API_KEY="https://fakestoreapi.in/api/products"

async function fetchdata(){
      let response=await fetch(API_KEY)
      // console.log(response);
           let result=await response.json()
           console.log(result.products)
           getdata (result.products)
}

fetchdata()

function getdata(arr){
    // console.log(element)
    
      arr.forEach((element)=>{
if(element.id==searchid){
  // let div=document.createElement("")
        console.log(element)
         const {image,title,price}=element
           let img=document.createElement("img")
           img.src=element.image
           right.innerHTML=`
            <h2>${element.description.split(" ").slice(0,30).join(" ")}</h2>
            <p>${element.title}<p>
           
            <h4>$ ${element.price}</h4>
            <button class="btn1">Add to watchlist</button>
            <button class="btn2">Add to Cart</button>
           
           
           
           `
          left.append(img)
          

       }
           
          
        
           

     
         
      })
}