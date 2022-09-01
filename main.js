// const input = document.getElementById('btn');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });

const init = () => {
  const inputForm =document.getElementById('search_clothes')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('clothes');
    console.log(input.value)

    fetch(`'http://localhost:3000/Clothes/${input.value}`)
    .then(response => response.json())
    .then(data => analyseData(data));
  });

  function analyseData(clothes){
    clothes.forEach(data=>{  
      const ul=document.getElementById('list')
      const li=document.createElement('li')
      li.innerHTML+=data.price;
      ul.appendChild(li)
    

    })
    
    }
  }


document.addEventListener('DOMContentLoaded'
const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');

      title.innerText = data.title;
      summary.innerText = data.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);



// document.getElementById('search_clothes').addEventListener('submit',searchClothes)
// function fetchData(){
//   fetch('http://localhost:3000/Clothes')
// .then(resp=>resp.json())
// .then(data=>searchClothes(data))
// }
// fetchData()

// function searchClothes(){


// }