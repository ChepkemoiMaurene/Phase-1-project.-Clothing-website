// const input = document.getElementById('btn');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });

const init = () => {
  const inputForm =document.getElementById('search_clothes')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('clothes');
    fetch(`http://localhost:3000/Clothes/${input.value}`)
    .then(response => response.json())
    .then(data => fetchClothes(data));
  });

  function fetchClothes(clothes){
      const ul=document.getElementById('list')
      const li=document.createElement('li')
      li.innerHTML=`${clothes.price} Ksh for Each of ${clothes.title}`;
      ul.appendChild(li)
    
    
    }
    document.getElementById('lucky').addEventListener('submit',(e)=>{
      e.preventDefault();
      console.log(e.target.comment.value)
      
      })
     function postComment(newKey){
      let input={

      }
     }
     function fetchComment(postedComment) {
  return fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(postedComment)
    })
    .then(response => response.json())
    .then(comment => console.log(comment))

}

document.addEventListener('DOMContentLoaded', init);


// document.getElementById('lucky').addEventListener('submit',POST)
// function fetchData(){
//   fetch(' http://localhost:3000/Clothes')
//   .then(resp=>resp.json)
//   .then(data=>addPost(data))
// }
// function addPost(){

// }



