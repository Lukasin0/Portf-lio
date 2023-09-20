$(document).ready(function(){
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault(); 

        var target = this.hash; 
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing'); 
    });
});

$(document).ready(function() {
    setTimeout(function() {
        $('.welcome-text').css({'opacity': '1', 'transform': 'translateY(0px)'});
    }, 200);

    setTimeout(function() {
        $('.name-text').css({'opacity': '1', 'transform': 'translateY(0px)'});
    }, 400);

    setTimeout(function() {
        $('.description-text').css({'opacity': '1', 'transform': 'translateY(0px)'});
    }, 600);

    setTimeout(function() {
        $('.contact-btn').css({'opacity': '1', 'transform': 'translateY(0px)'});
    }, 800);

    setTimeout(function() {
        $('.hero-image').css({'opacity': '1', 'transform': 'translateY(0px)'});
    }, 1000);

    setTimeout(function() {
        $('.scroll-icon').css({'opacity': '1', 'transform': 'translateY(0px)'});
    }, 1200);
});


window.addEventListener("scroll", function() {
    if (window.scrollY > 50) { 
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});



$(document).ready(function () {
    function updateActiveNavItem() {
        var scrollPos = $(document).scrollTop();
        $('.nav-link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-item').removeClass("active");
                currLink.parent().addClass("active");
            }
            else {
                currLink.parent().removeClass("active");
            }
        });
    }

    $(document).on("scroll", updateActiveNavItem);

    $(".nav-link").on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});

function typeText(element, callback) {
    const text = element.getAttribute('data-text');
    let index = 0;

    const interval = setInterval(() => {
        element.textContent += text[index];
        index++;

        if (index === text.length) {
            clearInterval(interval);
            if (callback) callback(); // Ak je poskytnutá ďalšia funkcia, spustíme ju
        }
    }, 75); // 100ms je rýchlosť, s akou sa písmená pridávajú. Môžete ju upraviť podľa potreby.
}

// Spustíme funkcie pre jednotlivé elementy
typeText(document.querySelector('.welcome-text'), () => {
    typeText(document.querySelector('.name-text'), () => {
        typeText(document.querySelector('.description-text'));
    });
});
