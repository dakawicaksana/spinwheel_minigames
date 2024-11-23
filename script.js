let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let popup = document.getElementById("prize-popup");
let prizeText = document.getElementById("prize-text");
let questionText = document.getElementById("question")
let answerText = document.getElementById("answer")
let totalSpin = document.getElementById("totalspin")
const judultext = document.getElementById("judul")
const timerText = document.getElementById("timer")
let valueSpin = parseInt(localStorage.getItem('total_spin')) || 0;
let timervalue = 10;
const btnanswer = document.getElementById('btn_answer')
const closebtn = document.getElementById('close')

let number = Math.round(Math.random() * 360);

const prizes = [
    {
        'nama': 'Ipa',
        'pertanyaan': [
            {
                'soal': 'Perubahan Wujud yang terjadi pada benda cair menjadi benda padat adalah ?',
                'jawaban': 'Membeku'
            },
            {
                'soal': 'Siapa Penemu Gaya Gravitasi ?',
                'jawaban': 'Isaac Newton'
            },
            {
                'soal': 'Lapisan kulit terluar manusia disebut ?',
                'jawaban': 'Epidermis'
            },
            {
                'soal': 'Apa fungsi utama dari akar pada tumbuhan?',
                'jawaban': 'menyerap air dan nutrisi dari tanah'
            },
            {
                'soal': 'Apa itu gravitasi?',
                'jawaban': 'Gaya tarik menarik benda'
            },
            {
                'soal': 'Apa yang dimaksud dengan Herbivora?',
                'jawaban': 'Pemakan tumbuh tumbuhan'
            },
            {
                'soal': 'Apa yang dimaksud dengan Karnivora?',
                'jawaban': 'Pemakan Daging'
            },
            {
                'soal': 'Apa yang dimaksud dengan Omnivora?',
                'jawaban': 'Pemakan Segala (dagin dan tumbuhan)'
            },
            {
                'soal': 'Apa fungsi utama dari daun pada tumbuhan?',
                'jawaban': 'Fotosintesis'
            },
            {
                'soal': 'Apa unsur utama penyusun air?',
                'jawaban': 'Hidrogen dan oksigen'
            },
            {
                'soal': 'Apa alat pernapasan pada ikan?',
                'jawaban': 'Insang'
            },
            {
                'soal': 'Apa alat pernapasan pada manusia?',
                'jawaban': 'Paru-paru'
            },
        ][Math.floor(Math.random() * 12)],

    },
    {
        'nama': 'Pend. Agama',
        'pertanyaan': [
            {
                'soal': 'Surat yang diturunkan di Kota Mekkah disebut?',
                'jawaban': 'Surat Makkiyah '
            },
            {
                'soal': 'Nabi yang memiliki Mukjizat Bisa berbicara dengan Hewan yaitu?',
                'jawaban': 'Nabi Sulaiman '
            },
            {
                'soal': 'Siapa nama malaikat yang ditugaskan Allah untuk menyampaikan wahyu?',
                'jawaban': 'Malaikat Jibril'
            },
            {
                'soal': 'apa surah pertama yang diturunkan kepada nabi Muhammad saw?',
                'jawaban': 'Surat Al Alaq ayat 1 - 5'
            },
            {
                'soal': 'Berapa Jumlah Surah dalam AL Quran?',
                'jawaban': '114 Surah'
            },
            {
                'soal': 'Surat yang isinya mengutarakan Kisah Beberapa orang Nabi Adalah Surat?',
                'jawaban': 'Surat Al Anbiya'
            },
            {
                'soal': 'Berapa Jumlah Keseluruhan Ayat dalam Al Quran?',
                'jawaban': '6666 Ayat'
            },
            {
                'soal': 'Siapa nama Sahabat Nabi Muhammad SAW yang mendapat Julukan Ash-Shiddiq?',
                'jawaban': 'Abu Bakar'
            },
            {
                'soal': 'Nabi yang pernah ditugaskan oleh Allah SWT untuk menyembelih Anaknya Sendiri adalah Nabi?',
                'jawaban': 'Nabi Ibrahim AS'
            },
            {
                'soal': 'Kitab yang Diturunkan kepada Nabi Musa adalah?',
                'jawaban': 'Kitab Taurat'
            },
            {
                'soal': 'dimanakah Nabi Muhammad SAW Menerima Wahyu dari Allah SWT?',
                'jawaban': 'Gua Hira'
            },
            {
                'soal': 'Apa rukun iman ke 6 dalam Islam?',
                'jawaban': 'Percaya kepada Qadha dan Qadhar'
            }
        ][Math.floor(Math.random() * 12)],
    },
    {
        'nama': 'Bhs. Inggris',
        'pertanyaan': [
            {
                'soal': 'I ... a student.',
                'jawaban': 'am'
            },
            {
                'soal': 'What is the capital city of Indonesia ?',
                'jawaban': 'Jakarta'
            },
            {
                'soal': 'Translate to English: "Dia sedang membaca buku."',
                'jawaban': 'she is reading a book'
            },
            {
                'soal': 'He ...... slept on 21.00 yesterday',
                'jawaban': 'was'
            },
            {
                'soal': 'Everest is the .......... Mountain In the World',
                'jawaban': 'highest'
            },
            {
                'soal': 'what is V2 of Buy?',
                'jawaban': 'Bought'
            },
            {
                'soal': 'A Country Famous For Windmills is .... ',
                'jawaban': 'Netherlands'
            },
            {
                'soal': 'Indra Buy ...... Apples From Supermarket ',
                'jawaban': 'Many'
            },
        ][Math.floor(Math.random() * 8)],
    },
    {
        'nama': 'Informatika',
        'pertanyaan': [
            {
                'soal': 'Siapa pendiri dari Microsoft?',
                'jawaban': 'Bill Gates'
            },
            {
                'soal': 'Siapa Pendiri dari perusahaan Apple?',
                'jawaban': 'Steve Jobs'
            },
            {
                'soal': 'Siapa pendiri dari META ?',
                'jawaban': 'Mark Zuckerberg'
            },
            {
                'soal': 'Apa itu Hardware?',
                'jawaban': 'Komponen dari sebuah komputer yang sifatnya dapat dilihat dengan kasat mata'
            },
            {
                'soal': 'Apa kepanjangan dari Email?',
                'jawaban': 'Electronic Mail'
            },
            {
                'soal': 'Apa kepanjangan dari RAM?',
                'jawaban': 'Random Access Memory'
            },
            {
                'soal': 'Sebutkan salah satu aplikasi pengolah angka di Windows!',
                'jawaban': 'Microsoft Excel'
            },
        ][Math.floor(Math.random() * 7)],
    },
    {
        'nama': 'PJOK',
        'pertanyaan': [
            {
                'soal': 'Berapa Jumlah orang dalam 1 Tim pada permainan Bola Basket?',
                'jawaban': '5 Orang'
            },
            {
                'soal': 'Berapa total waktu Pertandingan Sepak Bola?',
                'jawaban': '2 x 45 Menit (90 menit)'
            },
            {
                'soal': 'Teknik yang digunakan untuk menggiring Bola Basket namanya?',
                'jawaban': 'Dribbling'
            },
            {
                'soal': 'Sebutkan 3 contoh gaya yang digunakan dalam renang!',
                'jawaban': 'Gaya Katak, Gaya kupu - kupu, Gaya Dada, Gaya Punggung, Gaya Bebas'
            },
            {
                'soal': 'Gerakan yang wajib dilakukan sebelum Memulai Olahraga agar tidak mengalami Cidera adalah?',
                'jawaban': 'Gerakan Pemanasan'
            },
            {
                'soal': 'Sebutkan 2 macam teknik Smash dalam Bulutangkis!',
                'jawaban': 'Forehand Smash, Backhand Smash'
            },
            {
                'soal': 'Teknik dalam Bola Basket yang digunakan untuk memasukkan Bola kedalam Ring adalah?',
                'jawaban': 'Shooting '
            },
            {
                'soal': 'Siapa Atlet Sepak Bola terkenal yang berasal dari Negara Portugal?',
                'jawaban': 'Christiano Ronaldo'
            },
            {
                'soal': 'dimanakah Lokasi Piala Dunia 2018 diselenggarakan?',
                'jawaban': 'Russia'
            },
            {
                'soal': 'Sebutkan minimal 2 Contoh Permanian Bola Besar!',
                'jawaban': 'Basket, Volly, Sepak Bola, Futsal, Sepak Takraw, Bowling'
            },
        ][Math.floor(Math.random() * 10)],
    },
    {
        'nama': 'Bhs. Indonesia',
        'pertanyaan': [
            {
                'soal': 'Sebutkan Sturktur Teks Berita!',
                'jawaban': 'judul, kepala berita, tubuh berita, dan ekor berita.'
            },
            {
                'soal': 'Tokoh jahat yang berada dalam cerita disebut?',
                'jawaban': 'Tokoh Antagonis '
            },
            {
                'soal': 'Teks yang mengajak dan Mempengaruhi pembaca untuk mengikuti kemauan dalam teks adalah?',
                'jawaban': 'Teks Persuasif'
            },
            {
                'soal': '"Ringan tangan" Artinya?',
                'jawaban': 'Suka menolong / membantu'
            },
            {
                'soal': 'paragraf yang ide pokok atau gagasan utamanya terletak di awal paragraf adalah?',
                'jawaban': 'Paragraf Deduktif.'
            },
            {
                'soal': 'Informasi yang dapat dipastikan kebenarannya berdasarkan data, bukti, atau observasi adalah ',
                'jawaban': 'Fakta'
            },
        ][Math.floor(Math.random() * 6)],
    },
    {
        'nama': 'Rekayasa Perangkat Lunak',
        'pertanyaan': [
            {
                'soal': 'Apa kepangjangan dari HTML?',
                'jawaban': 'Hypertext Markup Language'
            },
            {
                'soal': 'Sebutkan tiga bahasa pemrograman yang kamu ketahui!',
                'jawaban': 'Javascript,Python,Php,C++,C#,C,Swift,Java dsb.'
            },
            {
                'soal': 'sistem operasi yang diciptakan oleh microsoft adalah?',
                'jawaban': 'Windows'
            },
            {
                'soal': 'Browser yang diciptakan Google adalah?',
                'jawaban': 'Chrome'
            },
            {
                'soal': 'Sistem operasi yang diciptakan Apple adalah?',
                'jawaban': 'MacOS'
            },
            {
                'soal': 'Apakah HTML termasuk bahasa pemrograman?',
                'jawaban': 'Tidak'
            },
            {
                'soal': 'Apa kepanjangan dari AI?',
                'jawaban': 'Artificial Intelligence'
            },
            {
                'soal': 'Apa kepanjangan dari PPLG?',
                'jawaban': 'Pengembangan Perangkat Lunak dan Gim'
            },
        ][Math.floor(Math.random() * 8)],
    },
    {
        'nama': 'Matematika',
        'pertanyaan': [
            {
                'soal': 'Bilangan asli yang lebih dari 1 dan faktor pembaginya 1 dan bilangan itu sendiri adalah ?',
                'jawaban': 'Bilangan Prima.'
            },
            {
                'soal': 'Sebutkan Rumus Volume Kubus!',
                'jawaban': 'S x S x S'
            },
            {
                'soal': 'Berapa Jumlah sisi pada kubus?',
                'jawaban': '6 Sisi'
            },
            {
                'soal': 'Sebutkan Rumus Volume Balok!',
                'jawaban': 'p x l x t'
            },
            {
                'soal': ' Jika Bilangan Positif dikalikan dengan Bilangan Negatif maka hasilnya?',
                'jawaban': 'Negatif'
            },
            {
                'soal': 'Sebutkan 3 contoh bangun ruang!',
                'jawaban': 'Kubus, Balok, Tabung, Bola, Kerucut'
            },
        ][Math.floor(Math.random() * 6)],
    },
];

totalSpin.textContent = valueSpin

btn.onclick = function () {

    btn.disabled = true;
    let spinAmount = (360 * 5) + number;

    container.style.transform = "rotate(" + spinAmount + "deg)";

    setTimeout(() => {
        let angle = (spinAmount % 360) + 22.5;
        if (angle >= 360) {
            angle -= 360;
        }
        let index = Math.floor(angle / 45);

        let prez = prizes[index].pertanyaan


        prizeText.textContent = prizes[index].nama;
        questionText.textContent = prez.soal;
        answerText.textContent = prez.jawaban
        popup.classList.remove("hidden");

        setInterval(() => {
            if (timervalue > 0) {
                timervalue -= 1
                timerText.innerText = timervalue
            }
            else if (timervalue == 0) {
                timerText.innerText = "Waktu Habis"
                timerText.style.color = "red"
                timerText.style.textDecoration = "none"
            } else {
                timerText.classList.add("hidden")
            }
        }, 1000);

        setTimeout(() => {
            questionText.classList.add("hidden")
            timerText.classList.add("hidden")
            judultext.textContent = "Jawaban"
            btnanswer.classList.remove("hidden")
            btn.disabled = false;
        }, 13000);
    }, 5000);
};

btnanswer.onclick = () => {
    answerText.classList.remove("hidden");
    btnanswer.classList.add('hidden')
}

closebtn.onclick = () => {

    valueSpin += 1;
    localStorage.setItem('total_spin', valueSpin);
    totalSpin.textContent = valueSpin;
    popup.classList.add("hidden");
    window.location.reload()
}
