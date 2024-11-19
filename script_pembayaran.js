// script_pembayaran.js
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Tampilkan pesan sukses di layar (opsional)
    document.getElementById('successMessage').style.display = 'block';

    // Setelah beberapa detik, arahkan ke halaman success.html
    setTimeout(function() {
        window.location.href = 'pembayaran_berhasil.html'; // Ganti dengan URL halaman sukses Anda
    }, 2000); // Waktu tunggu 2 detik sebelum diarahkan
});

// Fungsi untuk tombol back
function goBack() {
    window.history.back();
}
