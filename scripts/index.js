// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "ANISA" && password === "ANISA") {
    Swal.fire({
      icon: "Succes",
      title: "Login Berhasil!",
      text: "Selamat Datang",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "Error",
      title: "Login Gagal!",
      text: "Coba cek lagi username sama passwordnya ya:)",
      confirmButtonText: "Coba Lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}
