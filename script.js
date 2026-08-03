function buka(menu){

    const popup = document.getElementById("popup");
    const judul = document.getElementById("judul");
    const isi = document.getElementById("isi");

    popup.style.display = "flex";

    if(menu=="pelajaran"){

        judul.innerHTML="Jadwal Pelajaran";

        isi.innerHTML=`
<pre>
📅 SENIN
• PJOK
• PKN
• B. Indonesia

📅 SELASA
• TKR

📅 RABU
• TKR

📅 KAMIS
• PAI
• PKD

📅 JUMAT
• B. Inggris
• MTK
• B. Indonesia
</pre>
`;

    }

    if(menu=="piket"){

        judul.innerHTML="Jadwal Piket";

        isi.innerHTML=`
<pre>
📅 SENIN
• Rijki
• Aldivo
• Raihan

📅 SELASA
• Bayu
• Dewa
• Ripaldo

📅 RABU
• Delvin
• Rendi
• Pajar

📅 KAMIS
• Adi
• Abdurohim
• Arya
</pre>
`;

    }

    if(menu=="organisasi"){

        judul.innerHTML="👥 Organisasi Yakuza";

        isi.innerHTML=`
<pre>
👨‍🏫 Wali Kelas
Kudus

👑 Ketua Kelas
Rizki

🥈 Wakil Ketua
Aldivo

💰 Bendahara
Dewa

🛡️ Keamanan
Raihan

🧰 Peralatan
Aryaandika

🧹 Kebersihan
Abdurohim
</pre>
`;

    }

}

function tutup(){
    document.getElementById("popup").style.display="none";
}

// Tutup popup kalau klik di luar kotak
window.onclick=function(e){
    const popup=document.getElementById("popup");

    if(e.target==popup){
        popup.style.display="none";
    }
}
