var demoCss = demoCss || {};

// Just to control menu opening on Mobile. 
// Use :hover is out of scope and :focus is non reliable especially on mobile devices.
demoCss.nav = (function(){

    var btn;
    var nav;

    var IS_ACTIVE_CLASSNAME = 'is-active';

    function init() {
        btn = document.getElementById('js-btn-nav-trigger');
        nav = document.getElementById('js-nav');

        if (btn.addEventListener) {
            // IE9+ and Modern
            btn.addEventListener('click', openMenu);
        } else {
            // IE8
            btn.attachEvent('onclick', function(){
                openMenu.call(btn);
            });
        }
    }

    function openMenu() {
        toggleClass(this, IS_ACTIVE_CLASSNAME);
        toggleClass(nav, IS_ACTIVE_CLASSNAME);
    }

    function toggleClass(el, classname) {
        if (el.classList) {
            el.classList.toggle(classname);
        } else {
            var classes = el.className.split(' ');
            var existingIndex = -1;
            for (var i = classes.length; i--;) {
                if (classes[i] === classname) {
                    existingIndex = i;
                }
            }

            if (existingIndex >= 0) {
                classes.splice(existingIndex, 1);
            } else {
                classes.push(classname);
            }

            el.className = classes.join(' ');
        }
    }

    return {
        init: init
    };
}());