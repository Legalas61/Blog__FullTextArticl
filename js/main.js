let header = document.querySelector('header'),
    title  = document.querySelector('header h1');
window.onscroll = function() {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrolled);

  if (scrolled > 10) {
    header.classList.add("skroll");
    title.classList.add("skrollH1");
  }
  else {
    header.classList.remove("skroll");
    title.classList.remove("skrollH1");
  }
}
