document.querySelectorAll('.checkout-form input, .checkout-form textarea').forEach((field)=>{
  field.addEventListener('input',()=>field.classList.toggle('has-value',field.value.trim().length>0));
});
document.querySelectorAll('.add-button').forEach((button)=>{
  button.addEventListener('click',()=>{button.classList.add('adding'); button.querySelector('span').textContent='✓';});
});
