let p = fetch('https://inshorts.deta.dev/news?category=all');
let author = 
p.then((value1) => {
  return value1.json();
}).then((value2) => {
  console.log(value2.data)
  let names = value2.data;
  let ob ="";
  for(let item of names){
    const markup =`
    <div class="main-block hidden">
    <div class="left-content hidden">
    <img src="${item.imageUrl}" alt="">
</div>
<div class="right-content hidden">
    <h5><a href="${item.readMoreUrl}">${item.title}</a></h5>
    <div class="info hidden">
        <p><b>${item.author}</b></p>
        <p id="time-section"><b>${item.date}</b></p>
    </div>
</div>
</div>
    `;
    document.querySelector('#content-js').insertAdjacentHTML('beforeend',markup);
  }

  
})


window.onload = function () {

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}