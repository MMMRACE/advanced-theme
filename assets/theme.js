// Cart Drawer Toggle
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.cart-drawer').classList.add('open');
    });
  });
  document.querySelector('.close-cart').addEventListener('click', () => {
    document.querySelector('.cart-drawer').classList.remove('open');
  });
});