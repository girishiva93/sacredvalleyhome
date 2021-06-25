window.onload = function() {
    document.getElementById('button').onclick = function() {
      document.getElementById('modalOverlay').style.display = 'none'
    };
};
setTimeout(function(){
  $('#modalOverlay').fadeOut('slow');
}, 5000);