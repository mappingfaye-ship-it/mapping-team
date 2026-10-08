const USERS={melvynbaure:["MelvynBaure","482916"],dorianwurtz:["DorianWurtz","735128"],ethanmorgado:["EthanMorgado","269407"],paulbancel:["PaulBancel","804351"],paullauranson:["PaulLauranson","613792"],nicolasmorgado:["NicolasMorgado","957024"],sandramathiaud:["SandraMathiaud","140683"]};
function login(u,p){const r=USERS[(u||"").trim().toLowerCase()];if(r&&r[1]===p){sessionStorage.setItem("user",r[0]);return true}return false}
function guard(){const u=sessionStorage.getItem("user");if(!u)location.replace("index.html");return u}
function logout(){sessionStorage.removeItem("user");location.href="index.html"}
function nav(page){const u=guard();document.body.insertAdjacentHTML("afterbegin",`<nav><b class="grad">🎬 Mapping Chartreuse</b><a href="accueil.html" class="${page=="a"?"on":""}">Accueil</a><a href="agenda.html" class="${page=="g"?"on":""}">Agenda</a><button onclick="logout()">${u} · Déconnexion</button></nav>`)}
