function onload(event) {
    var starRating1 = raterJs({
        starSize: 30,
        element: document.querySelector("#rater"),
        rateCallback: function rateCallback(rating, done) {
            this.setRating(rating);
            done();
            $('#ratting').val(rating);
        }
    });
}

window.addEventListener("load", onload, false);