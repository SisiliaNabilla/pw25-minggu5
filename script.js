document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || pesan === "") {
      alert("Harap lengkapi semua kolom!");
      event.preventDefault();
    } else if (!email.includes("@")) {
      alert("Email tidak valid!");
      event.preventDefault();
    } else {
      alert("Pesan Anda telah berhasil dikirim. Terima kasih!");
    }
  });
