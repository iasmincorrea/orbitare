if (window.matchMedia("(min-width:1026px)").matches) {
    function checkScroll() {
        var items = document.querySelectorAll('.services-item');
        
        items.forEach(function(item) {
            if (isElementInViewport(item)) {
                item.classList.add('show');
            }
        });
    }
    
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    
    checkScroll();
}