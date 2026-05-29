const questions = [
      {
        question: "1. Kamu dengar suara aneh dari lantai atas saat sendirian di rumah.",
        answers: [
          { text: "A. Cek suara itu sendirian", type: "victim" },
          { text: "B. Teriak “halo?”", type: "chaos" },
          { text: "C. Kunci pintu dan pura-pura gak dengar", type: "veteran" },
          { text: "D. Langsung keluar rumah", type: "survivor" }
        ]
      },
      {
        question: "2. Temanmu bilang: “Kayaknya kita gak sendirian di sini…”",
        answers: [
          { text: "A. Ketawa", type: "chaos" },
          { text: "B. Panik", type: "background" },
          { text: "C. Suruh dia berhenti bercanda", type: "victim" },
          { text: "D. Diam-diam mulai nyari jalan keluar", type: "survivor" }
        ]
      },
      {
        question: "3. Ada boneka tua gerak sendiri.",
        answers: [
          { text: "A. Deketin bonekanya", type: "victim" },
          { text: "B. Buang bonekanya", type: "veteran" },
          { text: "C. Bakar rumahnya sekalian", type: "chaos" },
          { text: "D. Nope I’m outta here", type: "survivor" }
        ]
      },
      {
        question: "4. Kamu menemukan buku kuno di basement dengan tulisan aneh.",
        answers: [
          { text: "A. Dibaca keras-keras", type: "victim" },
          { text: "B. Simpan buat penelitian", type: "veteran" },
          { text: "C. Tutup lagi pelan-pelan", type: "background" },
          { text: "D. Langsung tinggalin tempat itu", type: "survivor" }
        ]
      },
      {
        question: "5. Killer jatuh setelah dipukul.",
        answers: [
          { text: "A. Biarin aja, pasti udah mati", type: "victim" },
          { text: "B. Toel toel badannya", type: "chaos" },
          { text: "C. Ikat dulu buat jaga-jaga", type: "veteran" },
          { text: "D. Kabur secepat mungkin", type: "survivor" }
        ]
      },
      {
        question: "6. Mobil tiba-tiba mogok di tengah hutan.",
        answers: [
          { text: "A. Keluar cari bantuan", type: "victim" },
          { text: "B. Tetap di mobil", type: "veteran" },
          { text: "C. Panik", type: "background" },
          { text: "D. Pasrah, terima nasib bakal mati di situ", type: "chaos" }
        ]
      },
      {
        question: "7. Temanmu hilang satu per satu.",
        answers: [
          { text: "A. Cari mereka sendirian", type: "victim" },
          { text: "B. Tetap bersama kelompok", type: "veteran" },
          { text: "C. Hubungi polisi", type: "survivor" },
          { text: "D. Langsung curiga ada yang gak beres", type: "veteran" }
        ]
      },
      {
        question: "8. Kamu lihat sosok berdiri diam di ujung lorong.",
        answers: [
          { text: "A. Deketin sosok itu", type: "victim" },
          { text: "B. Panggil, “Hai bro!”", type: "chaos" },
          { text: "C. Mundur pelan-pelan", type: "veteran" },
          { text: "D. Kabur tanpa lihat belakang", type: "survivor" }
        ]
      },
      {
        question: "9. Dalam zombie apocalypse, prioritasmu:",
        answers: [
          { text: "A. Cari senjata buat lawan zombie", type: "veteran" },
          { text: "B. Cari makanan buat bertahan hidup", type: "survivor" },
          { text: "C. Cari tempat aman buat berlindung", type: "survivor" },
          { text: "D. Menangis dan menyerah", type: "background" }
        ]
      },
      {
        question: "10. Karakter horror favoritmu biasanya:",
        answers: [
          { text: "A. Villain", type: "villain" },
          { text: "B. Final girl/boy", type: "survivor" },
          { text: "C. Side character lucu", type: "chaos" },
          { text: "D. Karakter misterius yang morally questionable", type: "villain" }
        ]
      },
      {
        question: "11. Ada pintu basement yang terkunci sendiri.",
        answers: [
          { text: "A. Buka pintu karena penasaran", type: "victim" },
          { text: "B. Cari tahu sumber suara", type: "veteran" },
          { text: "C. Tinggalin rumah itu sekarang juga", type: "survivor" },
          { text: "D. Cuekin, “Apa yang terjadi di basement bukan urusanku.”", type: "background" }
        ]
      },
      {
        question: "12. Kamu sendirian di rumah dan TV tiba-tiba nyala sendiri.",
        answers: [
          { text: "A. Matikan TV langsung", type: "veteran" },
          { text: "B. Langsung panik mencet-mencet remote", type: "background" },
          { text: "C. Rekam buat konten, siapa tau FYP", type: "chaos" },
          { text: "D. Cabut listrik rumah sekalian", type: "survivor" }
        ]
      },
      {
        question: "13. Kalau hidup di film horror, kamu kemungkinan:",
        answers: [
          { text: "A. Mati pertama", type: "victim" },
          { text: "B. Bertahan cukup lama, walau akhirnya mati juga", type: "background" },
          { text: "C. Jadi survivor trauma", type: "survivor" },
          { text: "D. Diem-diem ternyata villain sebenarnya", type: "villain" }
        ]
      },
      {
        question: "14. Kamu menemukan rekaman VHS misterius.",
        answers: [
          { text: "A. Ditonton soalnya penasaran", type: "victim" },
          { text: "B. Jual di online shop, biar cuan", type: "chaos" },
          { text: "C. Simpan di lemari", type: "background" },
          { text: "D. Hancurkan rekaman itu tanpa rasa penasaran", type: "survivor" }
        ]
      },
      {
        question: "15. Temanmu bilang: “Aku dengar suara dari bawah tempat tidur.”",
        answers: [
          { text: "A. Cek bawah tempat tidur", type: "victim" },
          { text: "B. Suruh dia cek sendiri", type: "chaos" },
          { text: "C. Kabur, takut banget", type: "background" },
          { text: "D. Nyalain semua lampu", type: "veteran" }
        ]
      },
      {
        question: "16. Kamu sedang road trip. Seorang penduduk lokal memberi tahu ada jalan pintas menuju tujuanmu, tapi jalannya sepi dan hampir tidak pernah dilewati orang.",
        answers: [
          { text: "A. Lewat jalan pintas itu, hemat waktu adalah prioritas", type: "victim" },
          { text: "B. Tanya dulu kenapa jarang ada yang lewat dan apakah ada alternatif lain", type: "veteran" },
          { text: "C. Tetap lewat jalan utama yang ramai meskipun lebih lama", type: "survivor" },
          { text: "D. Overthinking 30 menit sampai akhirnya matahari terbenam", type: "background" }
        ]
      },
      {
        question: "17. Kamu lihat ada orang aneh di pinggir jalan mau numpang di mobilmu.",
        answers: [
          { text: "A. Cuekin aja, jangan percaya sama orang asing", type: "survivor" },
          { text: "B. Tawarin tumpangan karena kamu orang baik", type: "victim" },
          { text: "C. Lihat dulu apakah orangnya mencurigakan", type: "veteran" },
          { text: "D. Berhentiin mobil bentar terus tinggalin (ngeprank)", type: "chaos" }
        ]
      },
      {
        question: "18. Grupmu menemukan ruang bawah tanah penuh foto orang hilang.",
        answers: [
          { text: "A. Investigasi lebih jauh", type: "victim" },
          { text: "B. Foto buat bukti", type: "veteran" },
          { text: "C. Langsung keluar dan hubungi polisi", type: "survivor" },
          { text: "D. Kita pura-pura gak lihat apa-apa.", type: "background" }
        ]
      },
      {
        question: "19. Killer sedang mengejarmu.",
        answers: [
          { text: "A. Lari lurus terus", type: "victim" },
          { text: "B. Cari tempat sembunyi", type: "veteran" },
          { text: "C. Lawan balik killernya", type: "survivor" },
          { text: "D. Nangis sambil minta maaf meskipun gak salah apa-apa", type: "background" }
        ]
      },
      {
        question: "20. Saat naik lift, ada tombol lantai 13. Padahal gedung itu hanya punya 12 lantai.",
        answers: [
          { text: "A. Pencet aja, penasaran isi lantai 13", type: "victim" },
          { text: "B. Tanya satpam di situ", type: "veteran" },
          { text: "C. Naik ke lantai lain", type: "background" },
          { text: "D. Langsung pakai tangga aja", type: "survivor" }
        ]
      }
    ];

    const scores = {
      survivor: 0,
      victim: 0,
      chaos: 0,
      villain: 0,
      veteran: 0,
      background: 0
    };

    const results = {
      survivor: {
        title: "🏆 The Final Survivor",
        desc: "Kamu terlalu paranoid untuk mati di film horror. Orang lain menganggapmu overthinking, tapi ketika hantunya muncul, siapa yang masih hidup? Tepat. Kamu."
      },
      victim: {
        title: "☠️ The Curious Victim",
        desc: "Rasa penasaranmu lebih kuat daripada insting bertahan hidup. Kalau ada pintu misterius, kamu buka. Kalau ada suara aneh, kamu cek. Kalau ada buku kutukan, kamu baca keras-keras."
      },
      chaos: {
        title: "🤡 The Chaos Goblin",
        desc: "Tidak ada yang bisa memprediksi keputusanmu. Bahkan killer dan hantunya pun bingung menghadapi tingkahmu."
      },
      villain: {
        title: "🔪 Secret Villain",
        desc: "Semakin lama quiz berjalan, semakin kami khawatir kamu bukan korbannya."
      },
      veteran: {
        title: "📚 Horror Movie Veteran",
        desc: "Kamu terlalu banyak nonton horror. Kamu tahu semua red flag, semua trope, dan semua keputusan bodoh yang tidak boleh dilakukan."
      },
      background: {
        title: "🏃 Background Survivor",
        desc: "Kamu selamat bukan karena jago. Kamu selamat karena tidak cukup penting bagi plot untuk dibunuh."
      }
    };

    let currentQuestion = 0;

    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const progressElement = document.getElementById("progress");
    const quizElement = document.getElementById("quiz");
    const resultElement = document.getElementById("result");
    const resultTitle = document.getElementById("result-title");
    const resultDesc = document.getElementById("result-desc");

    function showQuestion() {
      const q = questions[currentQuestion];

      progressElement.textContent = `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;
      questionElement.textContent = q.question;
      answersElement.innerHTML = "";

      q.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(answer.type);
        answersElement.appendChild(button);
      });
    }

    function selectAnswer(type) {
      scores[type]++;
      currentQuestion++;

      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      let highestType = "survivor";
      let highestScore = -1;

      for (let type in scores) {
        if (scores[type] > highestScore) {
          highestScore = scores[type];
          highestType = type;
        }
      }

      quizElement.style.display = "none";
      resultElement.style.display = "block";

      resultTitle.textContent = results[highestType].title;
      resultDesc.textContent = results[highestType].desc;
    }

    function restartQuiz() {
      currentQuestion = 0;

      for (let type in scores) {
        scores[type] = 0;
      }

      resultElement.style.display = "none";
      quizElement.style.display = "block";

      showQuestion();
    }

    quizElement.style.display = "none";
    resultElement.style.display = "none";

    document.getElementById("start-btn").addEventListener("click", () => {
      const introScreen = document.getElementById("intro-screen");

      introScreen.style.opacity = "0";

      setTimeout(() => {
        introScreen.style.display = "none";
        quizElement.style.display = "block";
        showQuestion();
      }, 300);
    });