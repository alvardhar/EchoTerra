document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const container = document.querySelector('.container');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Replace the content with success message and Home link
    container.innerHTML = `
      <h1>Log in successfully!</h1>
      <p><a href="home.html">Home</a></p>
    `;
  });
});
