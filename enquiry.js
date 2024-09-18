//* label animation
//? document merupakan representasi dari document html
document.addEventListener("click", (e) => {
  //? e.target merupakan representasi dari element yang diklik
  //? e.target.id merupakan id dari element yang diklik
  if (e.target.id === "name") {
    e.target.addEventListener("input", () => {
      if (e.target.value !== "") {
        //? memastikan pada element yang diklik terdapat sebuah value jika ada maka akan menambahkan class active
        e.target.style.border = "2px solid var(--primary)";
        //? classlist.add() digunakan untuk menambahkan class ke element
        e.target.nextElementSibling.classList.add("active");
      } else {
        //? memastikan pada element yang diklik tidak terdapat sebuah value jika tidak ada maka akan menghilangkan class active
        e.target.style.border = "none";
        e.target.style.borderBottom = "1px solid var(--primary)";
        //? classlist.remove() digunakan untuk menghilangkan class dari element
        e.target.nextElementSibling.classList.remove("active");
      }
    });
  } else if (e.target.id === "text-area") {
    e.target.addEventListener("input", () => {
      if (e.target.value !== "") {
        e.target.style.border = "2px solid var(--primary)";
        //? classlist.add() digunakan untuk menambahkan class ke element
        e.target.nextElementSibling.classList.add("active");
      } else {
        e.target.style.border = "none";
        e.target.style.borderBottom = "1px solid var(--primary)";
        //? classlist.remove() digunakan untuk menghilangkan class dari element
        e.target.nextElementSibling.classList.remove("active");
      }
    });
  } else if (e.target.id === "email") {
    e.target.addEventListener("input", () => {
      if (e.target.value !== "") {
        e.target.style.border = "2px solid var(--primary)";
        //? classlist.add() digunakan untuk menambahkan class ke element
        e.target.nextElementSibling.classList.add("active");
      } else {
        e.target.style.border = "none";
        e.target.style.borderBottom = "1px solid var(--primary)";
        //? classlist.remove() digunakan untuk menghilangkan class dari element
        e.target.nextElementSibling.classList.remove("active");
      }
    });
  } else if (e.target.id === "telephone") {
    e.target.addEventListener("input", () => {
      if (e.target.value !== "") {
        e.target.style.border = "2px solid black";
        //? classlist.add() digunakan untuk menambahkan class ke element
        e.target.nextElementSibling.classList.add("active");
      } else {
        e.target.style.border = "none";
        e.target.style.borderBottom = "1px solid black";
        //? classlist.remove() digunakan untuk menghilangkan class dari element
        e.target.nextElementSibling.classList.remove("active");
      }
    });
  }
});

//* checkbox email dan telephone untuk menampilkan input
//? mengambil element checkbox email dan telephone
const checkboxEmail = document.querySelector("#checkbox-email");
const checkboxTelephone = document.querySelector("#checkbox-telephone");
let checkedEmail = false;
let checkedTelephone = false;

//? menambahkan event listener untuk checkbox
checkboxEmail.addEventListener("click", () => {
  const inputEmail = document.querySelector(".input-email");
  inputEmail.classList.toggle("active");
  checkedEmail = !checkedEmail;
  checkboxValidation();
});

checkboxTelephone.addEventListener("click", () => {
  const inputTelephone = document.querySelector(".input-telephone");
  inputTelephone.classList.toggle("active");
  checkedTelephone = !checkedTelephone;
  checkboxValidation();
});

//* validate form
const ourForm = document.querySelector("#ourform");
let isValidName = false;
let isValidAlamat = false;
let isValidEmail = false;
let isValidTelephone = false;
let isValidPackage = false;

//* function validasi untuk nama
const validateName = (name) => {
  const regex = /^[a-zA-Z\s]+$/; //regex [a-zA-Z] untuk huruf
  if (!regex.test(name.value)) {
    //? memastikan inputan hanya huruf
    name.nextElementSibling.nextElementSibling.innerHTML = "*nama harus huruf";
    //? mengambil tag p yang merupakan child selanjut-selanjutnya
    name.nextElementSibling.nextElementSibling.style.color = "red";
    isValidName = false;
  } else if (name.value.trim() === "") {
    //? memastikan inputan tidak boleh kosong
    name.nextElementSibling.nextElementSibling.innerHTML = "*nama tidak boleh kosong";
    name.nextElementSibling.nextElementSibling.style.color = "red";
    isValidName = false;
  } else if (name.value.length < 3) {
    //? memastikan inputan minimal 3 huruf
    name.nextElementSibling.nextElementSibling.innerHTML = "*nama minimal 3 huruf";
    name.nextElementSibling.nextElementSibling.style.color = "red";
    isValidName = false;
  } else {
    //? kondisi jika inputan valid
    name.nextElementSibling.nextElementSibling.innerHTML = "*nama valid";
    name.nextElementSibling.nextElementSibling.style.color = "green";
    isValidName = true;
  }

  return isValidName;
};

//* function validasi untuk alamat
const validateAlamat = (alamat) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9\s]+$/; //! regex (?=.*[a-zA-Z]) setidaknya ada satu/lebih huruf dan (?=.*[0-9]) untuk angka
  if (!regex.test(alamat.value)) {
    //? memastikan inputan hanya angka dan huruf
    alamat.nextElementSibling.nextElementSibling.innerHTML = "*alamat harus mengandung angka dan huruf";
    //? mengambil tag p yang merupakan child selanjut-selanjutnya dan mengubah tulisannya dan juga warnanya
    alamat.nextElementSibling.nextElementSibling.style.color = "red";
    isValidAlamat = false;
  } else if (alamat.value.trim() === "") {
    //? memastikan inputan tidak boleh kosong
    alamat.nextElementSibling.nextElementSibling.innerHTML = "*alamat tidak boleh kosong";
    alamat.nextElementSibling.nextElementSibling.style.color = "red";
    isValidAlamat = false;
  } else {
    //? kondisi jika inputan valid
    alamat.nextElementSibling.nextElementSibling.innerHTML = "*alamat valid";
    alamat.nextElementSibling.nextElementSibling.style.color = "green";
    isValidAlamat = true;
  }

  return isValidAlamat;
};

//* function validasi untuk email
const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/; //! regex [a-zA-Z0-9]+@ setelah huruf harus ada @ dan harus ada huruf lagi setelah +\. artinya harus ada titik {2,4} setelah \. harus ada huruf antara 2-4
  if (!regex.test(email.value)) {
    //? memastikan inputan hanya email
    email.nextElementSibling.nextElementSibling.innerHTML = "*email tidak valid";
    //? mengambil tag p yang merupakan child selanjut-selanjutnya dan mengubah tulisannya dan juga warnanya
    email.nextElementSibling.nextElementSibling.style.color = "red";
    isValidEmail = false;
  } else {
    //? kondisi jika inputan valid
    email.nextElementSibling.nextElementSibling.innerHTML = "*email valid";
    email.nextElementSibling.nextElementSibling.style.color = "green";
    isValidEmail = true;
  }

  return isValidEmail;
};

//* function validasi untuk telephone
const validateTelephone = (telephone) => {
  const regex = /^[0-9]+$/; //! regex hanya angka
  if (!regex.test(telephone.value)) {
    //? memastikan inputan hanya angka
    telephone.nextElementSibling.nextElementSibling.innerHTML = "*nomor tidak valid";
    //? mengambil tag p yang merupakan child selanjut-selanjutnya dan mengubah tulisannya dan juga warnanya
    telephone.nextElementSibling.nextElementSibling.style.color = "red";
    isValidTelephone = false;
  } else if (telephone.value.length < 10) {
    //? memastikan inputan minimal 10 digit
    telephone.nextElementSibling.nextElementSibling.innerHTML = "*nomor minimal 10 digit";
    telephone.nextElementSibling.nextElementSibling.style.color = "red";
    isValidTelephone = false;
  } else {
    //? kondisi jika inputan valid
    telephone.nextElementSibling.nextElementSibling.innerHTML = "*nomor valid";
    telephone.nextElementSibling.nextElementSibling.style.color = "green";
    isValidTelephone = true;
  }

  return isValidTelephone;
};

//* function validasi untuk paket
const validatePackage = (package) => {
  if (package.value === "pilih") {
    //? memastikan inputan harus dipilih
    package.nextElementSibling.innerHTML = "*pilih salah satu";
    //? mengambil tag p yang merupakan child selanjutnya
    package.nextElementSibling.style.color = "red";
    isValidPackage = false;
  } else {
    //? kondisi jika inputan valid
    package.nextElementSibling.innerHTML = "*paket dipilih";
    package.nextElementSibling.style.color = "green";
    isValidPackage = true;
  }

  return isValidPackage;
};

//* function validasi untuk checkbox
const checkboxValidation = () => {
  if (checkedEmail && checkedTelephone) {
    //? kondisi jika email dan telephone telah dipilih
    checkboxTelephone.parentElement.nextElementSibling.innerHTML = "*email dan telephone telah dipilih";
    //? mengambil tag p yang berada diluar div input checkbox
    checkboxTelephone.parentElement.nextElementSibling.style.color = "green";
    return true;
  } else if (checkedEmail || checkedTelephone) {
    //? kondisi jika email atau telephone telah dipilih
    if (checkedEmail) {
      //? kondisi jika email dipilih
      checkboxTelephone.parentElement.nextElementSibling.innerHTML = "*email telah dipilih";
      checkboxTelephone.parentElement.nextElementSibling.style.color = "green";
    } else {
      //? kondisi jika telephone dipilih
      checkboxTelephone.parentElement.nextElementSibling.innerHTML = "*telephone telah dipilih";
      checkboxTelephone.parentElement.nextElementSibling.style.color = "green";
    }
    return true;
  } else {
    //? kondisi jika email dan telephone belum dipilih
    checkboxTelephone.parentElement.nextElementSibling.innerHTML = "*harap pilih salah satu";
    checkboxTelephone.parentElement.nextElementSibling.style.color = "red";
    return false;
  }
};

//* function validasi untuk radio
const radioValidation = () => {
  const gender = document.getElementsByName("gender");
  let genValue = false;
  const outputGender = document.getElementById("outputGender");
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked == true) {
      outputGender.innerHTML = "<span style = 'color : green'>*gender telah dipilih</span>";
      return genValue = true;
    }
  }
  if (!genValue) {
    outputGender.innerHTML = "<span style = 'color : red'>*Harap pilih gender!</span>";
    return genValue = false;
  }
}

//* pengecekan saat input
//? ourForm merupakan representasi dari elemen form
ourForm.addEventListener("click", (e) => {
  //? e.target merupakan representasi dari elemen yang diklik
  //? e.target.id merupakan id dari elemen yang diklik
  if (e.target.id === "name") {
    //! e.target.id === "name" artinya jika id dari elemen yang diklik adalah name maka akan dibeikan event input yang akan menjalankan suatu function
    e.target.addEventListener("input", () => {
      validateName(e.target);
    });
  } else if (e.target.id === "text-area") {
    e.target.addEventListener("input", () => {
      validateAlamat(e.target);
    });
  } else if (e.target.id === "email") {
    e.target.addEventListener("input", () => {
      validateEmail(e.target);
    });
  } else if (e.target.id === "telephone") {
    e.target.addEventListener("input", () => {
      validateTelephone(e.target);
    });
  } else if (e.target.id === "drop") {
    e.target.addEventListener("click", (e) => {
      validatePackage(e.target);
    });
  }
});

//* pengecekan saat di submit
//? ourForm merupakan representasi dari elemen form
ourForm.addEventListener("submit", (e) => {
  //? e.target merupakan representasi dari elemen yang diklik
  e.preventDefault();
  //? e.preventDefault() berfungsi untuk menghentikan proses submit
  const hidden = document.getElementById("verifikasi");
  hidden.style.display = "block"; //! div verifikasi di hidden namun ketika klik submit div akan muncul
  const output = document.getElementById("text-verifikasi");

  //? mengambil tag input seperti name, email, dll
  const name = document.querySelector("#name");
  const alamat = document.querySelector("#text-area");
  const email = document.querySelector("#email");
  const telephone = document.querySelector("#telephone");
  const package = document.querySelector("#drop");

  //! mengecek ulang setiap input apakah sudah terisi
  let isValidName = validateName(name);
  let isValidAlamat = validateAlamat(alamat);
  let isValidEmail = validateEmail(email);
  let isValidTelephone = validateTelephone(telephone);
  let isValidPackage = validatePackage(package);
  let isValidGender = radioValidation();

  //! mengecek apakah checkbox email dan telephone di pilih
  checkboxValidation();

  if (checkedEmail && checkedTelephone) {
    //? kondisi ketika email dan telephone di pilih
    if (isValidName && isValidAlamat && isValidEmail && isValidTelephone && isValidPackage && isValidGender) {
      //? kondisi ketika semua input terisi dengan benar
      output.innerHTML = "<h2 style='color: green;'>Form Berhasil Terkirim. Terima Kasih!</h2>";
    } else {
      //? kondisi ketika salah satu input tidak terisi dengan benar
      output.innerHTML = "<h2 style='color: red;'>Form Gagal Terkirim. Harap isi nama, alamat, email, telephone, paket dan gender!</h2>";
    }

    } else if (checkedEmail || checkedTelephone) {
    //? kondisi ketika email di pilih / telephone di pilih
    if (checkedEmail) {
      //? kondisi ketika email di pilih
      if (isValidName && isValidAlamat && isValidEmail && isValidPackage && isValidGender) {
        //? kondisi ketika semua input terisi dengan benar, kecuali telephone
        output.innerHTML = "<h2 style='color: green;'>Form Berhasil Terkirim. Terima Kasih!</h2>";
      } else {
        //? kondisi ketika salah satu input tidak terisi dengan benar, kecuali telephone
        output.innerHTML = "<h2 style='color: red;'>Form Gagal Terkirim. Harap isi email dan gender!</h2>";
      }
    } else if (checkedTelephone) {
      //? kondisi ketika telephone di pilih
      if (isValidName && isValidAlamat && isValidTelephone && isValidPackage && isValidGender) {
        //? kondisi ketika semua input terisi dengan benar, kecuali email
        output.innerHTML = "<h2 style='color: green;'>Form Berhasil Terkirim. Terima Kasih!</h2>";
      } else {
        //? kondisi ketika salah satu input tidak terisi dengan benar, kecuali email
        output.innerHTML = "<h2 style='color: red;'>Form Gagal Terkirim. Harap isi telephone dan gender!</h2>";
      }
    }
  } else {
    //? kondisi pengecualian dari semua kondisi diatas
    if (isValidName && isValidAlamat && isValidPackage && checkedEmail == true && checkedTelephone == true && isValidGender) {
      //? kondisi ketika semua input terisi dengan benar
      output.innerHTML = "<h2 style='color: green;'>Form Berhasil Terkirim. Terima Kasih!</h2>";
    } else {
      //? kondisi ketika salah satu input tidak terisi dengan benar
      output.innerHTML = "<h2 style='color: red;'>Form Gagal Terkirim. Harap isi nama, alamat, paket, gender, dan Email/Telephone!</h2>";
    }
  }
});
