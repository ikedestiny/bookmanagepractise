const lib = [];

const books = document.querySelector('.books');
const addButton = document.querySelector('#addButton');
const thed = document.querySelector('#myd');

const namefield = document.querySelector('input[name="name"');
const pricefield = document.querySelector('input[name="price"');
const pagesfield = document.querySelector('input[name="pages"');
const subButton = document.querySelector('#submitButton');

// const deleteButton = document.querySelector('.del');


// deleteButton.addEventListener('click',($event)=>{
//     event.preventDefault();
//     deleteButton.parentNode
//     removeBookfromlib(deleteButton.parentElement.data);
//     books.remove(deleteButton.parentElement);
// })


subButton.addEventListener('click',($event)=>{
    event.preventDefault();
    var newBook = new book(namefield.value,pagesfield.value,pricefield.value);
    lib.push(newBook);
    addBookToHTML(newBook);
    pricefield.value="";
    namefield.value='';
    pagesfield.value ='';
    thed.close();
})





addButton.addEventListener('click',()=>{
    thed.show();
})


function book(title,pages,price){
    this.title = title;
    this.pages = pages;
    this.price = price;
}

function addBookToLib(book){
    lib.push(book);
}



// addBookToLib(new book("the gods are angry",2353,24));
// addBookToLib(new book("the gods are angry",2353,24));
// addBookToLib(new book("the gods are angry",2353,24));
// addBookToLib(new book("the gods are angry",2353,24));
// addBookToLib(new book("the gods are angry",2353,24));
// addBookToLib(new book("heroine dynasty",235743,248932898));



console.log(lib)


function addBookToHTML(abook){
    let boo = document.createElement('div');
        boo.classList.add('book');

        var bookname = document.createElement('i');
        bookname.classList.add('name');
        bookname.textContent =abook.title;

        var delButton = document.createElement('button');
        delButton.classList.add('del');
        delButton.textContent='DEL';
        delButton.id=lib.length;

        delButton.addEventListener('click',()=>{
            books.removeChild(boo);
            lib.splice(delButton.id-1,1);
            console.log(lib)
        })



        var bookprice = document.createElement('i');
        bookprice.classList.add('price');
        bookprice.textContent = abook.price;

        var bookpages = document.createElement('i');
        bookpages.classList.add('pages');
        bookpages.textContent = abook.pages;

        boo.appendChild(bookname);
        boo.appendChild(delButton)
        boo.appendChild(bookprice);
        boo.appendChild(bookpages);

        books.appendChild(boo)
}

function addLibToHTML(){

    lib.forEach(element => {
       addBookToHTML(element)
    });
}

addLibToHTML();


function removeBookfromlib(data){
    lib.splice(data,1);
}