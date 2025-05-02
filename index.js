// const a=[1,2,3]
// const b=[...a,4]
// a.push(5)
// console.log(b)



let result=document.querySelector("#results")
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
      arr.forEach((element)=>{
           let maindiv=document.createElement("div")
           maindiv.classList.add("box")
           const {image,title,price}=element
          
        
            maindiv.innerHTML=`
           <a href="singleproduct.html?id=${element.id}"> <img src="${image}"></a>
            <p>${title.split(" ").slice(0,3)+"..."}<p>
            <h4>$ ${price}</h4>
            <button class="btn1">Add to watchlist</button>
            <button class="btn2">Add to Cart</button>
          ` 

      //     .split(" ").slice(0,3)+"..."   jyada [paragraph ho ]
         result.append(maindiv)
         
      })
}