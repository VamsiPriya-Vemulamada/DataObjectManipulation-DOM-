var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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

