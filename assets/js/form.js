function handleFormSubmission(event) {
    event.preventDefault();
  
    const usernameInput = document.getElementById('username');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
  
    const username = usernameInput.value.trim();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
  
    if (!username || !title || !content) {
      alert('All FIELDS ARE REQUIRED');
      return;
    }
  
    storeBlogPost(username, title, content);
  
    window.location.href = 'blog.html';
  }
  
  function storeBlogPost(username, title, content) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    const newPost = {
      username: username,
      title: title,
      content: content
    };
  
    posts.push(newPost);
  
    localStorage.setItem('posts', JSON.stringify(posts));
  }
  
  document.getElementById('blog-form').addEventListener('submit', handleFormSubmission);
  