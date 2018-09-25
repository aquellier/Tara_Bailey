function smoothscroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.getElementById(`${anchor.name}`).scrollIntoView({
              behavior: 'smooth',
              block: "start",
          });
      });
  });
}

export { smoothscroll };
