document.getElementById("backButton").addEventListener("click", function() {
    // Kembali ke halaman pendaftaran
    window.location.href = "index.html";  // Halaman pendaftaran
});

document.getElementById("schoolForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Logika untuk lanjut ke halaman pembayaran setelah mengisi form
    window.location.href = "pembayaran.html";  // Ganti dengan URL halaman pembayaran
});
