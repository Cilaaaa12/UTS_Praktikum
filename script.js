// script.js

document.addEventListener("DOMContentLoaded", function() {
    
    // --- Validasi Form Buku Tamu ---
    const syakila_guestForm = document.getElementById("syakila_guestBookForm");

    if (syakila_guestForm) {
        syakila_guestForm.addEventListener("submit", function(event) {
            
            let nama = document.getElementById("syakila_nama").value;
            let email = document.getElementById("syakila_email").value;
            let pesan = document.getElementById("syakila_pesan").value;

            if (nama.trim() === "" || email.trim() === "" || pesan.trim() === "") {
                event.preventDefault(); 
                alert("Mohon isi semua field yang wajib diisi!");
            } else {
                alert("Terima kasih, pesan Anda telah dikirim!");
                // event.preventDefault(); 
                // syakila_guestForm.reset();
            }
        });
    }

    // --- Scroll to Top Button ---
    const syakila_scrollTopButton = document.getElementById("syakila_scroll_top");

    if (syakila_scrollTopButton) {
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > 200) {
                syakila_scrollTopButton.style.display = "flex";
            } else {
                syakila_scrollTopButton.style.display = "none";
            }
        });

        syakila_scrollTopButton.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});