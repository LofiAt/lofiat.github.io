function moveCarouselLeft() {
    if (document.getElementById("spacesCategoriesCarousel").scrollLeft > 252) {
        document.getElementById("spacesCategoriesCarousel").scrollTo(252,0);
    }
    else {
        document.getElementById("spacesCategoriesCarousel").scrollTo(0,0);
    }
}

function moveCarouselRight() {
    if (document.getElementById("spacesCategoriesCarousel").scrollLeft < 252) {
        document.getElementById("spacesCategoriesCarousel").scrollTo(252,0);
    }
    else {
        document.getElementById("spacesCategoriesCarousel").scrollTo(376,0);
    }
}
