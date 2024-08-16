// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

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
mainEl.innerHTML = "<h1> DOM Manipulation </h1>";
mainEl.classList.add("flex-ctr");

let topmenuEl = document.getElementById("top-menu");
topmenuEl.style.height = "100%";
topmenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topmenuEl.classList.add("flex-around");

// for each loop is like a for loop method in which we will write all the required exceution inside the scope of the elements like wise we will write in paranthesis of foreah for the execution
menuLinks.forEach( link => {
    const linkelement =document.createElement("a");
    linkelement.textContent = link.text;
    linkelement.href = link.href;
    topmenuEl.appendChild(linkelement);
});

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = '--sub-menu-bg';
subMenuEl.classList.add( 'flex-around');
subMenuEl.style.position = "absolute" ;
subMenuEl.style.top = 0;

// Add Event Listener
const topMenuLinks = topmenuEl.getElementsByTagName("a");
topmenuEl.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.targetName !== "A")
    return;
  
console.log(click.target.textContent);
});

 if(!e.target.classList.contains(active)){
  const linkObject = menuLinks.find(link => link.text === e.target.target.textContent);
 
 if(linkObject && linkObject.subLinks){
 subMenuEl.style.top = "100%";
 }
 else{
  subMenuEl.style.top = "0";
 }
};




