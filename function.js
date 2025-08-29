function showTab(paragraphText, contentText, element) {
  
    document.getElementById('paragraph').innerHTML = paragraphText;
    document.getElementById('content').innerHTML = contentText;

   
    document.querySelectorAll('.topnav a').forEach(a => a.classList.remove('active'));

   
    element.classList.add('active');
  }