

const quickViewBtn = document.querySelectorAll('#quick-view-icon');
const quickModal = document.getElementById('quick-view');
const closeBtn = document.getElementById('close');

if(quickViewBtn){
    quickViewBtn.forEach( v  => v.addEventListener('click', ()=> {

      const url = '/products/' + v.getAttribute('product-handle') + '.js';
      fetch(url)
      .then((res) => res.json())
      .then( data => {
       document.getElementById('productImg').src = data.images[0];
       document.getElementById('productTitle').innerHTML = data.title;
       document.getElementById('productDes').innerHTML = data.description;
       document.getElementById('productPrice').innerHTML = v.getAttribute('product-price');
       quickModal.classList.add('modal__active');
      });


 }));
}

if(closeBtn){
  closeBtn.addEventListener('click', ()=> {
    quickModal.classList.remove('modal__active');
  })
}
