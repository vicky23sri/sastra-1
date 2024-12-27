AOS.init({
    duration: 800,            
    easing: 'ease-in-out',    
    once: false,              
    mirror: true,            
    anchorPlacement: 'center-bottom',
    offset: 100,            
    delay: 0,      
    disable: false,
    startEvent: 'DOMContentLoaded',
    useClassNames: true,
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate'
});
document.addEventListener('scroll', function() {
    AOS.refresh();
});
window.addEventListener('resize', function() {
    AOS.refresh();
});