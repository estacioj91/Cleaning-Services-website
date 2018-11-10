import "../docs/scripts/materialize"
//inits nav bar
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});
document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(el, {});
});