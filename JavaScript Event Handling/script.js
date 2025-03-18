document.querySelectorAll(".thumb").forEach(thumb => {
    thumb.addEventListener("click", function() {
        document.getElementById("mainImage").src = this.src.replace("/100/100", "/600/400");
    });
});