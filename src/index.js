
async function products(){

const response = await fetch('https://fakestoreapi.com/products')
const data = await response.json();
console.log(data);
addProducts (data);
}

function addProducts (a) {

    document.getElementById('mainDiv').innerHTML = 
    a.map( function (e){
        console.log(e.id);
        return `
        <div class="products">
            <img id ="p1" src="${e.image}" alt="product">
            <div class="cont-1">
                <h3 id="title" class="title">${e.title}</h3>
                <p id="dis" class="dis" >${e.description}</p>
                <div class="cont-2">
                    <h2 id="price" class="price">${e.price} $</h2>
                    <button id="${e.id}" class="addBtn">Add to Cart</button>
                </div>
            </div>
        </div>`;
        
    }).join("") 

}
products ();

let myCart = document.getElementById('cart')
document.getElementByClassName('addBtn').addEventListener('click',function (){
    myCart.innerHTML = `
    <div class ="cartProduct">
    <h3> product 1</h3> <p>50$</p> <p>X</p>
</div>
    `
})
// const btnCart = document.getElementsByClassName('addBtn');
// btnCart.addEventListner('click',cart)

// function cart (){
//     console.log("hello");
// }