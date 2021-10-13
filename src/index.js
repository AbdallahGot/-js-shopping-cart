
async function products(){

const response = await fetch('https://fakestoreapi.com/products')
const data = await response.json();
console.log(data);
addProducts (data);
}
////////////////////////////////////////////////////////////////////////////////////
function addProducts (a) {

    document.getElementById('mainDiv').innerHTML = 
    a.map( e => {
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
    
    let myCart = document.getElementById('newProduct')
    let myClass = document.getElementsByClassName('addBtn');

for (var i = 0; i < myClass.length; i++) {
    myClass[i].addEventListener('click', cart); 
    }
    function cart (){
     let btnId = this.id;
     console.log(btnId);
    let news = document.createElement('div');
    let row = document.createElement('hr');
    news.innerHTML = `<h3> product x${btnId}</h3> <p>$</p> <p id="delete" class="delete">X</p>`;

    
    myCart.appendChild(news);
    myCart.appendChild(row);
}

}
products ();