document.getElementById('post-btn')
    .addEventListener('click',function(){

        // step-1 get the input field value
       const textBox=document.getElementById('comment-box');
      //step-2  now put the value in a variable 
       const commentText =textBox.value ;
         // now i get the parent container of the p and append the p into the container
        const commentContainer=document.getElementById('comment-container')
        // step-3 now create a p to put the text on it and push it on the container of the comment box
        const newComment =document.createElement('p')
        // we push it on paragraph
        newComment.innerText=commentText 
      
        newComment.classList.add('comment')
         commentContainer.appendChild(newComment)
       
    })