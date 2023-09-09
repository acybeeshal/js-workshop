
const text = document.getElementById("myText");
    
text.addEventListener("mouseover", function() {
  const content = text.innerHTML;
  const highlighted = content.replace(/([A-Z])/g, '<span class="highlight">$1</span>');
  text.innerHTML = highlighted;
});

text.addEventListener("mouseout", function() {
  const content = text.innerHTML;
  const unhighlighted = content.replace(/(<span class="highlight">|<\/span>)/g, '');
  text.innerHTML = unhighlighted;
});