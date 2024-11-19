document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan pengiriman form secara default

    // Cek apakah form valid
    const form = event.target;
    if (form.checkValidity()) {
        // Jika valid, arahkan ke halaman Asal Sekolah
        window.location.href = 'asal_sekolah.html';
    } else {
        // Tampilkan pesan jika form tidak valid
        alert('Mohon isi semua field yang wajib!');
    }
});
