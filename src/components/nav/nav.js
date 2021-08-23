window.onscroll = function() {
    var el = document.getElementsByClassName('header')[0];
    var className = 'fade';
    if (el.classList) {
      if (window.scrollY > 30)
        el.classList.add(className);
      else
        el.classList.remove(className);
    }
  };