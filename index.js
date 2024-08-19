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
subMenuEl.addEventListener('click',function(e)
{
  e.preventDefault();
  if(e.target.targetName !== "A")
    return;

console.log(click.target.textContent);

  subMenuEl.style.top = "0";

  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.setAttribute("class", "flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = 0;
  // Grabbing all topMenuEl <a> elements
  const topMenuLinks = document.querySelectorAll("a");
  //Add EventListener
  topMenuEl.addEventListener("click", function (e) {
    e.preventDefault();
    //The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if (!e.target.matches("a")) {
      return;
    }
    console.log(e.target.textContent);
    //The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
    e.target.classList.toggle("active");
    //The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    topMenuLinks.forEach((link) => {
      if (link !== e.target) {
        link.classList.remove("active");
      }
    });
    //===Part 5 - Adding Submenu Interaction===
    //Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
    //If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    //Otherwise, set the CSS top property of subMenuEl to 0.
    //Hint: Caching the "link" object will come in handy for passing its subLinks array later.
    const clickedLink = menuLinks.find(
      (link) => link.text === e.target.textContent
    );
    if (e.target.classList.contains("active") && clickedLink.subLinks) {
      subMenuEl.style.top = "100%";
      buildSubMenu(clickedLink.subLinks);
    } else {
      if (!clickedLink.subLinks) {
        subMenuEl.style.top = 0;
      }
    }
    function buildSubMenu(subLinks) {
      //Clear the current contents of subMenuEl.
      subMenuEl.innerHTML = "";
      //Iterate over the subLinks array, passed as an argument, and for each "link" object:
      subLinks.forEach((link) => {
        //Create an <a> element.
        const a = document.createElement("a");
        //Add an href attribute to the <a>, with the value set by the href property of the "link" object.
        a.setAttribute("href", link.href);
        //Set the element's content to the value of the text property of the "link" object.
        a.textContent = link.text;
        //Append the new element to the subMenuEl.
        subMenuEl.appendChild(a);
      });
    }
  });






