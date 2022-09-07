window.addEventListener('load', () => {
    // reference to button
    const btn = document.querySelector('.navbutton');
    // reference to navigation
    const nav = document.querySelector('.navigation');
    // add a listener to button
    btn.addEventListener('click', () => {
        // nav.classList.add('open');
        if(nav.classList.contains('open')){
            nav.classList.remove('open');
        }
        else{
            nav.classList.add('open');
        }
    });
});