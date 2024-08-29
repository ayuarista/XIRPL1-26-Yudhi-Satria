document.getElementById('searce-button').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah reload halaman ketika tombol diklik

  const input = document.getElementById('searce-input').value.toLowerCase();
  const results = document.querySelectorAll('.searce-result');

  if (input === 'pantai') {
    results.forEach(result => {
      result.style.display = 'block'; // Tampilkan semua gambar
    });
  } else {
    results.forEach(result => {
      result.style.display = 'none'; // Sembunyikan semua gambar
    });
  }
});

// Untuk menyembunyikan gambar saat pertama kali halaman dimuat
window.onload = function() {
  const results = document.querySelectorAll('.searce-result');
  results.forEach(result => {
    result.style.display = 'none'; // Sembunyikan semua gambar
  });
};
document.getElementById('searce-button').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah reload halaman ketika tombol diklik

  const input = document.getElementById('searce-input').value.toLowerCase();
  const results = document.querySelectorAll('.searce-result');

  if (input === 'pantai') {
    results.forEach(result => {
      result.style.display = 'block'; // Tampilkan semua gambar
    });
  } else {
    results.forEach(result => {
      result.style.display = 'none'; // Sembunyikan semua gambar
    });
  }
});

// Untuk menyembunyikan gambar saat pertama kali halaman dimuat
window.onload = function() {
  const results = document.querySelectorAll('.searce-result');
  results.forEach(result => {
    result.style.display = 'none'; // Sembunyikan semua gambar
  });
};

