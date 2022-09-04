
const init = () => {
  document.getElementById('search_clothes').addEventListener('submit', (e) => {
    e.preventDefault();  
    const input = document.getElementById('clothes');
    console.log (input.value)
    fetch(`http://localhost:3000/Clothes/${input.value}`)
    .then(response => response.json())
    .then(clothes => fetchClothes(clothes));
  });

  function fetchClothes(clothes){
      const ul=document.getElementById('list')
      const li=document.createElement('li')
      li.innerHTML=`${clothes.price} Ksh for Each of ${clothes.title}`;
      ul.appendChild(li)
    
  }
 document.getElementById('lucky').addEventListener('submit',comment)
    
 function comment(e){
      e.preventDefault()
    let commentSent={
      comment:e.target.comment.value,
    }
    
    sentCommentToJson(commentSent)
    }
    function sentCommentToJson(sentComment){
      fetch(' http://localhost:3000/comments',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
        },
        body:JSON.stringify(sentComment)

      })
      .then(response=>response.json())
      // .then(commets=>console.log(commets))
    }
  }

document.addEventListener('DOMContentLoaded', init);

  

