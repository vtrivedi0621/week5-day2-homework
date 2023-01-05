var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add ('flex-ctr');

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

for(let i in menuLinks){
    let a = document.createElement('a');
    a.textContent = menuLinks[i].text;

    a.setAttribute('href','menuLinks[i].href');
    if(menuLinks[i].text !=='about'){
        a.setAttribute('link','menuLinks[i].subLinks');
        
    }
    
    topMenuEl.appendChild(a);
}

let subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

let topMenuLinks = document.querySelectorAll('nav a');
let showingSubMenu = false;

topMenuEl.addEventListener('click', function(e) {
    e.preventDefault();
    
    //topMenuLinks.push(a);

    let el = document.querySelector('.active');
    if(el) {
        //mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
        el.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    }
    //topMenuLinks[i].addEventListener.remove('.active');
    e.target.classList.add('active');

    let links = [];
    for(let j in menuLinks) {
        links.push(menuLinks[j].subLinks);
    }
    console.log(links);

    let link = e.target.hasAttribute('link');

    if(link) {
        showingSubMenu = true;

    }else {
        showingSubMenu = false;
    }

    if(showingSubMenu == true ){
    
        function buildSubMenu(links){

       
       subMenuEl.textContent= ' ';
  
       for(let i=1;i<links.length;i++){
         for(let j=0;j<links.length;j++){

          if(e.target.text == menuLinks[i].text){
         let a1=document.createElement('a'); 
         
          a1.textContent = links[i][j].text;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

         
        subMenuEl.appendChild(a1);
       }
      }
      
     }  

    }
     subMenuEl.style.top = '100%';
}
 else{
     subMenuEl.style.top = '0';
 }

buildSubMenu(links);

});

subMenuEl.addEventListener('click',function(e){
    e.preventDefault();
    showingSubMenu=false;
    subMenuEl.style.top = '0';
    // for(let i in topMenuLinks){
    //         //topMenuLinks[i].classList.remove('active');
    //     //    e.target.classList.remove('active');  
    //        }
    
        mainEl.innerHTML = `<h1>${e.target.text}</h1>`;
})

topMenuEl.addEventListener('click', function(e) {
  e.preventDefault();
  if(e.target.text == 'about') {
    mainEl.innerHTML = `<h1>${e.target.text}</h1>`;
  }
});


    

