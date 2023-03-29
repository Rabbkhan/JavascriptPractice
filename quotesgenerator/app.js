let quote= document.getElementById('quote');
let author= document.getElementById('author');
let button= document.getElementById('button');
let date= document.getElementById('date');
button.addEventListener('click', e =>{
e.preventDefault();
    const url = "https://api.quotable.io/random";
    fetch(url)
    .then(function(data){
        return data.json();
    })
    .then(function(data){

        quote.innerHTML = ` <mark>  ${data.content} </mark>`;
        author.innerHTML = `-  ${data.author}`;
        date.innerHTML =  data.dateAdded;
        console.log(data);

    })
    .catch(function(err){
        console.log(err);
    })



})
