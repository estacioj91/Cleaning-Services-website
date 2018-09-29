import "../docs/scripts/materialize"
//inits nav bar
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});
//inits carousel
document.addEventListener('DOMContentLoaded', function () {
    //returns array of elements that match selector
    var elems = document.querySelectorAll('.carousel-img');
    //inits all elements of the elems array with options
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
    //sets interval so images scroll at the interval
    setInterval(function () {
        //selects first instance, might need to be changed later
        instances[0].next();
    }, 3000);
});
document.addEventListener('DOMContentLoaded', function () {
    //returns array of elements that match selector
    var elems = document.querySelectorAll('.carousel-cards');
    //inits all elements of the elems array with options
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
    //sets interval so images scroll at the interval
    setInterval(function () {
        //selects first instance, might need to be changed later
        instances[0].next();
    }, 5000);
});