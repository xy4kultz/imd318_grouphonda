function toggleMenu() {
    const menu = document.getElementById('navbar'); 
    const currentDisplay = window.getComputedStyle(menu).display;

    if (currentDisplay === 'none') {            
        menu.style.display = 'block';                  
    } else {
        menu.style.display = 'none';                   
    }
}
