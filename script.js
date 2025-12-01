function show(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(page).classList.add("active");
}

/* LOGIN → ROLE */
document.getElementById("loginBtn").onclick = () => show("rolePage");
document.getElementById("googleBtn").onclick = () => show("rolePage");
document.getElementById("facebookBtn").onclick = () => show("rolePage");

/* ROLE → LOGIN USAHA */
document.getElementById("usahaBtn").onclick = () => show("usahaLoginPage");

/* LOGIN USAHA */
document.getElementById("masukUsahaBtn").onclick = () => {
    let namaUsaha = document.getElementById("namaUsahaInput").value;
    document.getElementById("namaUsahaLabel").innerText = namaUsaha;
    show("usahaDashboardPage");
};

/* MENU USAHA */
document.getElementById("menuUsahaBtn").onclick = () => {
    document.getElementById("menuDropdown").classList.toggle("hidden");
};
document.getElementById("logoutUsaha").onclick = () => show("loginPage");

/* MENU PELANGGAN */
document.getElementById("menuPelangganBtn").onclick = () => {
    document.getElementById("menuDropdownPelanggan").classList.toggle("hidden");
};
document.getElementById("logoutPelanggan").onclick = () => show("loginPage");

/* ROLE → PELANGGAN PAGE */
document.getElementById("pelangganBtn").onclick = () => show("pelangganPage");

/* BOTTOM NAV USAHA */
document.getElementById("navBerandaUsaha").onclick = () => show("usahaDashboardPage");
document.getElementById("navLanggananUsaha").onclick = () => alert("Halaman Langganan Usaha");

/* BOTTOM NAV PELANGGAN */
document.getElementById("navBerandaPelanggan").onclick = () => show("pelangganPage");
document.getElementById("navLanggananPelanggan").onclick = () => alert("Menuju halaman langganan pelanggan");
