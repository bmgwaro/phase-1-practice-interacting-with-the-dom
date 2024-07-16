document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const likesList = document.querySelector('.likes');
  
    let timer = setInterval(incrementCounter, 1000);
    let count = 0;
    let isPaused = false;
  
    function incrementCounter() {
      if (!isPaused) {
        count++;
        counter.innerText = count;
      }
    }
  
    plusBtn.addEventListener('click', function() {
      count++;
      counter.innerText = count;
    });
  
    minusBtn.addEventListener('click', function() {
      count--;
      counter.innerText = count;
    });
  
    heartBtn.addEventListener('click', function() {
      const li = document.createElement('li');
      li.innerText = `${count} has been liked`;
      likesList.appendChild(li);
    });
  
    pauseBtn.addEventListener('click', function() {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(timer);
        pauseBtn.innerText = 'resume';
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        heartBtn.disabled = true;
      } else {
        timer = setInterval(incrementCounter, 1000);
        pauseBtn.innerText = 'pause';
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        heartBtn.disabled = false;
      }
    });
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        const commentDiv = document.getElementById('list');
        const commentP = document.createElement('p');
        commentP.innerText = commentText;
        commentDiv.appendChild(commentP);
        commentInput.value = '';
      }
    });
  });