

const filterClass = document.querySelectorAll('.filter-param');
const filterForm = document.getElementById('filter-param-form');
const overlay = document.querySelector('.collection-grid');

// console.log(overlay);

filterClass.forEach((filter) => filter.addEventListener("change", (e)=> {
  e.preventDefault();
  overlay.classList.add('filter-active');
  setTimeout( () => {
    
    overlay.classList.remove('filter-active');
  }, 800)
  filterForm.submit();
}))