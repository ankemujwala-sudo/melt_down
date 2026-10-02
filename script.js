function showToast(message){
  const toast=document.getElementById("toast");
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);
}
function orderItem(item){
  showToast(item + " added to your order! 🍨");
}
function sendFeedback(e){
  e.preventDefault();
  showToast("Thank you! Your feedback has been received. 💜");
  e.target.reset();
}
document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click',()=>{
    const menu=document.getElementById('navMenu');
    if(menu.classList.contains('show')){
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
