function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    if (posts.length === 0) {
      blogPostsContainer.innerHTML = "<p>No posts available.</p>";
      return;
    }
  
    blogPostsContainer.innerHTML = '';
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.username}</p>
        <p>${post.content}</p>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }
  
  function navigateToLandingPage() {
    window.location.href = 'index.html';
  }
  
  document.getElementById('back-button').addEventListener('click', function() {
    navigateToLandingPage();
  });
  
  document.getElementById('toggle-mode').addEventListener('change', function() {
    toggleMode();
  });
  
  window.addEventListener('load', function() {
    displayBlogPosts();
  });