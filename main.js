(function () {
    var PHOTO = 'assets/foto tiara.png';
    var $ = function (i) { return document.getElementById(i) }, rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (PHOTO) { var im = document.createElement('img'); im.src = PHOTO; im.alt = 'Foto Nama Kamu'; $('ph').innerHTML = ''; $('ph').appendChild(im) }
    var IC = { play: '<path d="M8 5v14l11-7z"/>', pause: '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>', next: '<path d="M6 6l8.5 6L6 18zM16 6h2v12h-2z"/>', prev: '<path d="M18 6l-8.5 6 8.5 6zM6 6h2v12H6z"/>', heart: '<path d="M12 21s-7-4.5-9.3-9A5.4 5.4 0 0 1 12 6a5.4 5.4 0 0 1 9.3 6C19 16.5 12 21 12 21z"/>', chev: '<path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' };
    function ic(n) { return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">' + IC[n] + '</svg>' }

    var T = [
        {
            t: 'Sora',
            y: 2026,
            k: 'UI/UX Design',
            r: 'Aplikasi latihan artikulasi untuk anak tunarungu',
            mt: 'Inclusive Learning',
            dur: 30,
            img: 'assets/sora.png',
            c: ['#6D3FD6', '#B79BFF', '#2A1566'],
            st: ['UI/UX Design', 'Figma', 'Inclusive Design'],
            cs: {
                info: ['UI Designer', '1 month (ongoing)', 'Figma, Canva'],

                sum: 'An AI-powered speech therapy app that helps children with hearing impairments improve articulation through interactive learning.',

                blocks: [
                    {
                        h: 'Problem',
                        p: [
                            'Children need speech practice beyond therapy sessions.',
                            'Parents struggle to monitor learning progress.',
                            'Therapy is limited by time and access, and materials are rarely personalized.'
                        ]
                    },
                    {
                        h: 'Solution',
                        p: [
                            'Interactive pronunciation practice.',
                            'AI-based speech analysis with adaptive feedback.',
                            'Progress tracking for parents and therapists.',
                            'Support for independent, inclusive learning.'
                        ]
                    },
                    {
                        h: 'Process',
                        p: [
                            'Empathize: interviewed a teacher of students with hearing impairments.',
                            'Define: personas and journey mapping.',
                            'Ideate: AI features for pronunciation practice and engagement.',
                            'Prototype: accessible, child-friendly wireframes and high-fidelity UI.'
                        ]
                    },
                    {
                        h: 'Current Progress',
                        p: [
                            'User research with teachers and students completed.',
                            'High-fidelity mobile prototype designed.',
                            'Usability testing planned for the next phase.'
                        ]
                    },
                    {
                        h: 'Reflection',
                        wide: true,
                        p: [
                            'This project deepened my understanding of inclusive design: creating accessible learning experiences for children with hearing impairments.'
                        ]
                    }
                ],

                imgs: [
                    {
                        s: 'assets/sora-1.jpg',
                        a: 'Interview with a teacher of students with hearing impairments'
                    },
                    {
                        s: 'assets/sora-2.jpg',
                        a: 'Wireframes'
                    },
                    {
                        s: 'assets/sora-3.jpg',
                        a: 'High-fidelity prototype'
                    }
                ]
            }
        },
        {
            t: 'UMARA',
            y: 2026,
            k: 'UI/UX Design',
            r: 'Aplikasi hyperlocal commerce untuk UMKM dan masyarakat',
            mt: 'Local Commerce',
            dur: 30,
            img: 'assets/umara.png',
            c: ['#17806B', '#8AD6C4', '#0B3B33'],
            st: ['UI/UX Design', 'Figma', 'Hyperlocal Commerce'],
            l: [
                'UMARA menghubungkan UMKM dengan masyarakat di sekitarnya.',
                'Konsepnya berfokus pada belanja lokal yang lebih mudah dan relevan.',
                'Fitur dirancang untuk membantu pengguna menemukan produk dan kebutuhan di sekitar mereka.',
                'UMARA bertujuan mendukung ekosistem UMKM melalui pengalaman digital yang praktis.'
            ]
        },
        {
            t: 'Alzare',
            y: 2026,
            k: 'UI/UX Design',
            r: 'Aplikasi pendamping caregiver pasien Alzheimer',
            mt: 'Caregiving Support',
            dur: 30,
            img: 'assets/alzare.png',
            c: ['#556B3E', '#B9CBA2', '#25301B'],
            st: ['UI/UX Design', 'Figma', 'Health Technology'],
            l: [
                'Alzare dirancang untuk mendukung caregiver dalam mendampingi orang dengan Alzheimer.',
                'Konsep aplikasi terhubung dengan gelang yang dikenakan pengguna.',
                'Integrasi ini menjadi bagian dari pendekatan pemantauan dan pendampingan.',
                'Fokus desainnya adalah membantu caregiver memperoleh dukungan melalui teknologi.'
            ]
        },
        {
            t: 'CareOn',
            y: 2026,
            k: 'UI/UX Design',
            r: 'Aplikasi pemantauan kesehatan pasien TBC dan hipertensi',
            mt: 'Health Monitoring',
            dur: 30,
            img: 'assets/careon.png',
            c: ['#2F6877', '#F2824A', '#122F38'],
            st: ['UI/UX Design', 'Figma', 'Health Technology'],
            l: [
                'CareOn dirancang untuk mendukung pemantauan kesehatan pasien.',
                'Aplikasi berfokus pada kebutuhan pasien dengan TBC dan hipertensi.',
                'Informasi kesehatan disusun agar lebih mudah dipahami dan dipantau.',
                'Tujuannya adalah mendukung proses pemantauan melalui pengalaman digital yang terarah.'
            ]
        },
        {
            t: 'Ray Bouquet',
            y: 2026,
            k: 'Web',
            r: 'Website katalog dan pemesanan buket',          // ganti sesuai fungsi websitemu
            mt: 'Web Development',
            dur: 30,
            img: 'assets/raybouquet.png',
            wide: true,                                         // cover lebar
            c: ['#8E1F2D', '#F0D9B0', '#3D0C14'],
            st: ['Web Development', 'HTML', 'CSS', 'JavaScript'], // ganti dengan stack aslimu
            l: [
                'Ray Bouquet adalah website untuk menampilkan dan memesan buket.',   // ganti 4 baris ini
                'Halaman dirancang agar pengunjung mudah melihat pilihan buket.',    // dengan ceritamu sendiri
                'Alur pemesanan dibuat singkat supaya pelanggan tidak bingung.',
                'Tampilannya dibuat rapi dan responsif di layar HP maupun komputer.'
            ]
        }
    ];
    var STORY = ['Hi everyone, my name is Asya Tiara Syafitrah Susilo.', 'I am an Information Technology student at Universitas Negeri Yogyakarta', 'with an interest in Web Development and UI/UX Design.', 'I enjoy building websites and designing user-friendly interfaces.', 'I’m always eager to learn new technologies, improve my skills,', 'and create digital solutions that are both functional and visually appealing.'];

    var TOUR = [
        {
            m: 'Aug–Oct',
            y: 2026,
            v: 'Front-end Developer',
            c: 'PT Madana Innovation Technology',
            live: 1,
            x: 'Worked as a Front-end Developer intern, contributing to web development and translating designs into functional user interfaces.'
        },
        {
            m: 'Jul',
            y: 2026,
            v: 'UI/UX Designer & UX Researcher, Permifest 2K26',
            c: 'Yogyakarta',
            x: 'Won 2nd Place in the Permifest 2K26 UI/UX Design Competition, organized by PERMIKOMNAS Yogyakarta.'
        },
        {
            m: 'Jun',
            y: 2026,
            v: 'UI/UX Designer, CareOn',
            c: 'Yogyakarta',
            x: 'Won 1st Place at UNITY (National Competition & Innovation of Information Technology), organized by the Technology Engineering Student Activity Unit at Universitas Negeri Yogyakarta.'
        }
    ];
    var cur = 0, prog = 0, playing = false, filt = 'Semua', sdr = false;
    function art(t, i) { var a = t.c, o = (i * 13) % 30; return 'radial-gradient(circle at ' + (24 + o) + '% ' + (30 + o / 2) + '%,' + a[0] + ' 0 27%,transparent 28%),radial-gradient(circle at ' + (76 - o / 2) + '% ' + (72 - o / 3) + '%,' + a[1] + ' 0 22%,transparent 23%),linear-gradient(135deg,' + a[2] + ',#101010)' }
    function bg(t, i) {
    // pakai gambar kalau ada, kalau tidak pakai ilustrasi warna otomatis
    if (t.img) return 'url("' + t.img + '") center top/cover no-repeat, ' + t.c[2];
    return art(t, i);
    }
    function cvr(i) {
        var s = document.createElement('span');
        s.className = 'cv';

        if (T[i].img) {
            var img = document.createElement('img');
            img.src = T[i].img;
            img.alt = 'Cover project ' + T[i].t;
            img.loading = 'lazy';
            s.appendChild(img);
        } else {
            s.style.background = bg(T[i], i);
        }

        return s;
    }
    function fmt(s) { s = Math.floor(s); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2) }
    function toast(m) { var t = $('ts'); t.textContent = m; t.classList.add('on'); setTimeout(function () { t.classList.remove('on') }, 2000) }
    var CV_URL = '/assets/CV_Asya.pdf';

    function downloadCV() {
        window.open(CV_URL, '_blank');
    }
    var gr = $('gr');
    T.forEach(function (t, i) {
        var c = document.createElement('button'); c.className = 'cd rv'; c.dataset.i = i; c.dataset.k = t.k; c.appendChild(cvr(i)); c.insertAdjacentHTML('beforeend', '<span class="go">' + ic('play') + '</span><div class="t"></div><div class="m"></div>'); c.querySelector('.t').textContent = t.t; c.querySelector('.m').textContent = t.y + ' \u2022 ' + t.k; c.onclick = function () { play(i, true) }; gr.appendChild(c);
    });

    var chips = $('chips');

    ['Semua', 'UI/UX Design', 'Web'].forEach(function (c) {
        var b = document.createElement('button');
        b.textContent = c;

        if (c === filt) {
            b.className = 'on';
        }

        b.onclick = function () {
            filt = c;

            [].forEach.call(chips.children, function (x) {
                x.className = x === b ? 'on' : '';
            });

            [].forEach.call(gr.children, function (e) {
                e.style.display =
                    (c === 'Semua' || e.dataset.k === c) ? '' : 'none';
            });
        };

        chips.appendChild(b);
    });

    var tl = $('tur-l'); TOUR.forEach(function (x, i) {
        var d = document.createElement('div'); d.className = 'tk rv';
        d.innerHTML = '<button aria-expanded="false"><span class="dt"><b></b><span></span></span><span><div class="v"></div><div class="c"></div></span><span class="st"></span><span class="ch">' + ic('chev') + '</span></button><div class="xp"><div><p></p></div></div>';
        d.querySelector('.dt b').textContent = x.m; d.querySelector('.dt span').textContent = x.y; d.querySelector('.v').textContent = x.v; d.querySelector('.c').textContent = x.c;
        var s = d.querySelector('.st'); s.textContent = x.live ? 'Ongoing' : 'Completed'; if (x.live) s.className = 'st live'; d.querySelector('.xp p').textContent = x.x;
        var b = d.querySelector('button'); b.onclick = function () { var o = d.classList.toggle('open'); b.setAttribute('aria-expanded', o) }; tl.appendChild(d)
    });

var CAT = {
    'Design':   ['#FF5C9D', '#FFD23F', '#4A1560'],
    'Frontend': ['#34E0A1', '#7CF29A', '#145C4A'],
    'Database': ['#3050FF', '#34E0A1', '#172A66'],
    'Programming': ['#FF8A3D', '#FFD23F', '#8A3A12'],
    'Lainnya':  ['#FF8A3D', '#FFD23F', '#8A3A12']
};

// Ganti isi daftar ini dengan tools dan level aslimu
var TL = [
    { n: 'Figma',        c: 'Design',   v: 92 ,     img: 'https://i.pinimg.com/originals/29/95/95/29959595fe22edde8408b060d3ac3d82.png' },
    { n: 'FigJam',       c: 'Design',   v: 80 ,     img: 'https://cdn-public.softwarereviews.com/production/logos/offerings/9950/large/FigJamlogo.png?1756825642 '},
    { n: 'HTML',         c: 'Frontend', v: 94 ,     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png '},
    { n: 'CSS',          c: 'Frontend', v: 78 ,     img: 'https://tse4.mm.bing.net/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?r=0&pid=Api&h=220&P=0'},
    { n: 'JavaScript',   c: 'Frontend', v: 78 ,     img: 'https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png'},
    { n: 'Vue.js',       c: 'Frontend', v: 75 ,     img: 'https://tse3.mm.bing.net/th/id/OIP.X4TsexmgadMGO-Lm-nBz8AHaHa?r=0&pid=Api&h=220&P=0'},
    { n: 'Python',       c: 'Programming', v: 75 ,  img: 'https://logos-world.net/wp-content/uploads/2021/10/Python-Logo.png'},
    { n: 'Java',         c: 'Programming', v: 75 ,  img: 'https://tse1.mm.bing.net/th/id/OIP.5SWe47uPmqZTi4XDnchpSwHaHa?r=0&pid=Api&h=220&P=0'},
    { n: 'C++',          c: 'Programming', v: 75 ,  img: 'https://tse1.mm.bing.net/th/id/OIP.t5T6bjAgYZBydLa1C8XavwHaIX?r=0&pid=Api&h=220&P=0'},
    { n: 'C',            c: 'Programming', v: 75 ,  img: 'https://www.kindpng.com/picc/m/355-3559027_c-programming-language-logo-clipart-png-download-c.png'},
    { n: 'MySQL',        c: 'Database', v: 75 ,     img: 'https://tse2.mm.bing.net/th/id/OIP.zRDjQdz0UXanotRCPNijZwHaHa?r=0&pid=Api&h=220&P=0'},
    { n: 'Git',          c: 'Lainnya',  v: 70 ,     img: 'https://tse3.mm.bing.net/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?r=0&pid=Api&h=220&P=0'}
];

var tools = $('tools'), tchips = $('tchips');

TL.forEach(function (x, i) {
    var r = document.createElement('div');
    r.className = 'tr rv';
    r.dataset.c = x.c;
    r.style.setProperty('--w', x.v + '%');
    r.innerHTML = '<span class="sq"><img src="' + x.img + '" alt="" loading="lazy"></span>' +
        '<span class="tn"><span class="t"></span><small class="tc"></small></span>' +
        '<span class="bar"><i></i></span>' +
        '<button class="lk" aria-label="Sukai" aria-pressed="false">' + ic('heart') + '</button>';
    r.querySelector('.t').textContent = x.n;
    r.querySelector('.tc').textContent = x.c;
    var h = r.querySelector('.lk');
    h.onclick = function () {
        var o = h.classList.toggle('on');
        h.setAttribute('aria-pressed', o);
        toast(o ? x.n + ' ditambahkan ke Disukai' : x.n + ' dihapus dari Disukai');
    };
    tools.appendChild(r);
});

// Tombol filter kategori (dibuat otomatis dari data di atas)
var tcats = ['Semua'];
TL.forEach(function (x) { if (tcats.indexOf(x.c) < 0) tcats.push(x.c); });
tcats.forEach(function (c) {
    var b = document.createElement('button');
    b.textContent = c;
    if (c === 'Semua') b.className = 'on';
    b.onclick = function () {
        [].forEach.call(tchips.children, function (x) { x.className = x === b ? 'on' : ''; });
        [].forEach.call(tools.children, function (e) {
            e.style.display = (c === 'Semua' || e.dataset.c === c) ? '' : 'none';
        });
    };
    tchips.appendChild(b);
});


    // ===== BUKU: ganti isi daftar ini dengan buku dan review aslimu =====


    var BK = [
        {
            t: 'The Alchemist',
            a: 'Paulo Coelho',
            g: 'Fiction',
            img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg',
            r: 5,
            d: '',
            c: ['#C98B35', '#573719'],
            v: [
                'A story about chasing dreams, trusting the journey, and finding meaning in ordinary moments.',
                'It reminds me that the journey toward our dreams can be just as meaningful as reaching the destination.'
            ],
            q: 'Sometimes, the journey changes us more than the destination.',
            o: 'Recommended for: anyone searching for purpose and inspiration.'
        },
        {
            t: 'Animal Farm',
            a: 'George Orwell',
            g: 'Fiction',
            img: 'https://cdna.artstation.com/p/assets/images/images/015/140/248/large/sascha-sendlbeck-animalfarmsendlbecksascha-withfeedback-frontcover-withoutbleed.jpg?1547203834',
            r: 5,
            d: '',
            c: ['#9E2929', '#351010'],
            v: [
                'A powerful story about revolution, power, and how the promise of equality can become another form of oppression.',
                'It makes me question authority, political ideals, and how easily people can be manipulated when they stop thinking critically.'
            ],
            q: 'Power can change the very ideals it claims to protect.',
            o: 'Recommended for: readers interested in politics and social criticism.'
        },
        {
            t: 'Catatan Seorang Demonstran',
            a: 'Soe Hok Gie',
            g: 'History',
            img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1416554142i/1488085.jpg',
            r: 5,
            d: '',
            c: ['#B9A98A', '#44382C'],
            v: [
                'A collection of thoughts and experiences from someone who refused to stay silent about the world around him.',
                'I admire his courage to question authority and challenge his own beliefs. It reminds me to think independently rather than simply follow the crowd.'
            ],
            q: 'Being critical means having the courage to think independently.',
            o: 'Recommended for: readers interested in Indonesian history and activism.'
        },
        {
            t: 'Filosofi Teras',
            a: 'Henry Manampiring',
            g: 'Self-Improvement',
            img: 'https://cdn.gramedia.com/uploads/picture_meta/2023/11/27/kjf6cgigkomf6sy9o5qauu.jpg',
            r: 5,
            d: '',
            c: ['#4E8278', '#173D36'],
            v: [
                'An accessible introduction to Stoicism and the idea that not everything in life is within our control.',
                'It encourages me to pause before reacting, focus on what I can change, and accept what I cannot.'
            ],
            q: 'Focus on what you can control.',
            o: 'Recommended for: anyone seeking a calmer and more thoughtful approach to life.'
        },
        {
            t: 'The Book You Wish Your Parents Had Read',
            a: 'Philippa Perry',
            g: 'Non-Fiction',
            img: 'https://mojokstore.com/wp-content/uploads/2023/02/The-Book-You-Wish-Your-Parents-Had-Read.jpg',
            r: 5,
            d: '',
            c: ['#D5A6A6', '#70434B'],
            v: [
                'A thoughtful book about parenting, emotional patterns, and how childhood experiences shape our relationships.',
                'It encourages us to understand the feelings behind our behavior and reflect on the patterns we carry into adulthood.'
            ],
            q: 'Understanding ourselves can change how we connect with others.',
            o: 'Recommended for: readers interested in emotions and relationships.'
        },
        {
            t: 'Laut Bercerita',
            a: 'Leila S. Chudori',
            g: 'History',
            img: 'https://imgv2-1-f.scribdassets.com/img/document/633105672/original/e83789a7e4/1703303169?v=1',
            r: 5,
            d: '',
            c: ['#244D75', '#101E36'],
            v: [
                'A moving novel about disappearance, resistance, and the people left behind by political violence.',
                'It reminds me that behind every missing name are people, families, and stories that deserve to be remembered.'
            ],
            q: 'Some stories must be told so that the forgotten are not forgotten.',
            o: 'Recommended for: readers interested in Indonesian history and human rights.'
        },
        {
            t: 'Pulang',
            a: 'Leila S. Chudori',
            g: 'History',
            img: 'https://cdn.gramedia.com/uploads/picture_meta/2023/12/20/xoid3bznddxudnurccgqxi.jpg',
            r: 5,
            d: '',
            c: ['#956B47', '#39251B'],
            v: [
                'A story about exile, identity, memory, and the complicated meaning of home.',
                'It makes me reflect on how home can be more than a place. It can also be a memory, a family, or a sense of belonging.'
            ],
            q: 'Home can be a place, a memory, or a feeling of belonging.',
            o: 'Recommended for: readers interested in history, identity, and family.'
        },
        {
            t: 'Fihi Ma Fihi',
            a: 'Jalaluddin Rumi',
            g: 'Non-Fiction',
            img: 'https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2024/3/6/mtctca2hc3ze8dsyesaq7x.jpg',
            r: 5,
            d: '',
            c: ['#9872B2', '#382347'],
            v: [
                'A collection of Rumi’s reflections on the human heart, the search for truth, and the relationship between the self and the divine.',
                'Its teachings invite me to look inward and reconsider the things I often take for granted.'
            ],
            q: 'Understanding the world often begins with understanding ourselves.',
            o: 'Recommended for: readers who enjoy spiritual and philosophical reflections.'
        },
        {
            t: 'Mereka Hilang Tak Kembali',
            a: 'Aristayanu Bagus, AS Rimbawana, Deby Hermawan, Putro Wasista',
            g: 'History',
            img: 'https://mojokstore.com/wp-content/uploads/2025/10/Mereka-Hilang-1.png',
            r: 4,
            d: '',
            c: ['#515B67', '#171C25'],
            v: [
                'A title that brings to mind stories of disappearance, unanswered questions, and the people who continue searching for the truth.',
                'It invites reflection on memory, justice, and the importance of remembering stories that should not be forgotten.'
            ],
            q: 'Remembering is one way of refusing to let a story disappear.',
            o: 'Recommended for: readers interested in history and human rights.'
        },
        {
            t: 'Pendidikan Kaum Tertindas',
            a: 'Paulo Freire',
            g: 'Non-Fiction',
            img: 'https://img.lazcdn.com/g/p/a65ed1597e76074500a9b905a7366988.jpg_720x720q80.jpg',
            r: 5,
            d: '',
            c: ['#B77A45', '#4C2C1A'],
            v: [
                'A critical look at education, power, and the importance of helping people think for themselves.',
                'It challenges the idea that education should simply teach people to accept the world as it is, encouraging them instead to question and transform it.'
            ],
            q: 'Education should encourage people to question the world, not merely accept it.',
            o: 'Recommended for: readers interested in education and social change.'
        },
        {
            t: 'Tentang Kamu',
            a: 'Tere Liye',
            g: 'Fiction',
            img: 'https://tse1.mm.bing.net/th/id/OIP.8hT27CZHv9RMc01N1KTIqwHaLb?r=0&pid=Api&h=220&P=0',
            r: 5,
            d: '',
            c: ['#B77A45', '#4C2C1A'],
            v: [
                'A critical look at education, power, and the importance of helping people think for themselves.',
                'It challenges the idea that education should simply teach people to accept the world as it is, encouraging them instead to question and transform it.'
            ],
            q: 'Education should encourage people to question the world, not merely accept it.',
            o: 'Recommended for: readers interested in education and social change.'
        },
        {
            t: 'Negeri Para Bedebah',
            a: 'Tere Liye',
            g: 'Fiction',
            img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524561438i/39932088._UY200_.jpg',
            r: 5,
            d: '',
            c: ['#B77A45', '#4C2C1A'],
            v: [
                'A critical look at education, power, and the importance of helping people think for themselves.',
                'It challenges the idea that education should simply teach people to accept the world as it is, encouraging them instead to question and transform it.'
            ],
            q: 'Education should encourage people to question the world, not merely accept it.',
            o: 'Recommended for: readers interested in education and social change.'
        },
        {
            t: 'Seporsi Mie Ayam Sebelum Mati',
            a: 'Brian Khrisna',
            g: 'Fiction',
            img: 'https://tse1.mm.bing.net/th/id/OIP.PxNyFxpsLVLK3UorjK11wgHaK-?r=0&pid=Api&h=220&P=0',
            r: 5,
            d: '',
            c: ['#B77A45', '#4C2C1A'],
            v: [
                'A critical look at education, power, and the importance of helping people think for themselves.',
                'It challenges the idea that education should simply teach people to accept the world as it is, encouraging them instead to question and transform it.'
            ],
            q: 'Education should encourage people to question the world, not merely accept it.',
            o: 'Recommended for: readers interested in education and social change.'
        },
        {
            t: 'Aksi Massa',
            a: 'Tan Malaka',
            g: 'Non-Fiction',
            img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634105777l/1607344.jpg',
            r: 5,
            d: '',
            c: ['#B77A45', '#4C2C1A'],
            v: [
                'A critical look at education, power, and the importance of helping people think for themselves.',
                'It challenges the idea that education should simply teach people to accept the world as it is, encouraging them instead to question and transform it.'
            ],
            q: 'Education should encourage people to question the world, not merely accept it.',
            o: 'Recommended for: readers interested in education and social change.'
        },
    ];


    var bkg = $('bkg'), bks = $('bks'), bkRet = null;
    function stars(n) { return '\u2605\u2605\u2605\u2605\u2605'.slice(0, n) + '\u2606\u2606\u2606\u2606\u2606'.slice(0, 5 - n) }

    function bcv(b) {
        var e = document.createElement('span');
        e.className = 'bcv';
        e.style.background = 'linear-gradient(160deg,' + b.c[0] + ',' + b.c[1] + ')';
        e.style.position = 'relative';
        e.style.overflow = 'hidden';

        if (b.img) {
            var img = document.createElement('img');
            img.src = b.img;
            img.alt = 'Cover buku ' + b.t;
            img.loading = 'lazy';
            img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;';
            e.appendChild(img);
        } else {
            e.innerHTML = '<b></b><i></i>';
            e.firstChild.textContent = b.t;
            e.lastChild.textContent = b.a;
        }

        return e;
    }
    BK.forEach(function (b, i) {
        var c = document.createElement('button'); c.className = 'cd rv'; c.dataset.g = b.g; c.appendChild(bcv(b));
        c.insertAdjacentHTML('beforeend', '<div class="t"></div><div class="m"></div><div class="stz"></div>');
        c.querySelector('.t').textContent = b.t; c.querySelector('.m').textContent = b.a;
        var z = c.querySelector('.stz'); z.textContent = stars(b.r); z.setAttribute('aria-label', 'Rating ' + b.r + ' dari 5');
        c.onclick = function () { openBook(i) }; bkg.appendChild(c)
    });
    var bkGen = ['Semua']; BK.forEach(function (b) { if (bkGen.indexOf(b.g) < 0) bkGen.push(b.g) });
    var bkc = $('bkchips'); bkGen.forEach(function (g) {
        var b = document.createElement('button'); b.textContent = g; if (g === 'Semua') b.className = 'on';
        b.onclick = function () { [].forEach.call(bkc.children, function (x) { x.className = x === b ? 'on' : '' });[].forEach.call(bkg.children, function (e) { e.style.display = (g === 'Semua' || e.dataset.g === g) ? '' : 'none' }) }; bkc.appendChild(b)
    });
    function openBook(i) {
        var b = BK[i]; bkRet = document.activeElement;
        bks.style.setProperty('--tc', b.c[0]);
        var h = $('bkc'); h.innerHTML = ''; h.appendChild(bcv(b));
        $('bkt').textContent = b.t; $('bka').textContent = b.a;
        var n = $('bkn'); n.innerHTML = '';[b.g, stars(b.r), 'Completed ' + b.d].forEach(function (x) { var s = document.createElement('span'); s.textContent = x; n.appendChild(s) });
        var v = $('bkv'); v.innerHTML = ''; b.v.forEach(function (x) { var p = document.createElement('p'); p.textContent = x; v.appendChild(p) });
        $('bkq').textContent = '\u201C' + b.q + '\u201D'; $('bko').textContent = b.o;
        bks.hidden = false; bks.scrollTop = 0; document.body.classList.add('lock'); $('bkx').focus()
    }
    function closeBook() { bks.hidden = true; document.body.classList.remove('lock'); if (bkRet && bkRet.focus) bkRet.focus() }
    $('bkx').onclick = closeBook;

    var lines = $('lines'); STORY.forEach(function (s) { var p = document.createElement('div'); p.className = 'ln'; p.textContent = s; lines.appendChild(p) });
    var lns = lines.children;

    function ui() {
        var t = T[cur]; document.documentElement.style.setProperty('--tc', t.c[0]);
        $('pt').textContent = t.t; $('pc').style.background = bg(t, cur); $('lcv').style.background = bg(t, cur);
        $('tt').textContent = fmt(t.dur);
        document.body.classList.toggle('playing', playing);
        [].forEach.call(document.querySelectorAll('.cd,.rw'), function (e) { e.classList.toggle('on', +e.dataset.i === cur) });
        [].forEach.call(document.querySelectorAll('.rw'), function (e) { var on = +e.dataset.i === cur; e.querySelector('.n').innerHTML = on ? '<span class="eq" aria-hidden="true"><i></i><i></i><i></i></span>' : (+e.dataset.i + 1) });
        var ph = playing ? ic('pause') : ic('play'); $('pp').innerHTML = ph; $('bigp').innerHTML = ph;
        var lb = playing ? 'Jeda' : 'Putar'; $('pp').setAttribute('aria-label', lb); $('bigp').setAttribute('aria-label', lb);
        if (!sheet.hidden) fillSheet();
        prg(); vis();
    }
    function prg() {
        var t = T[cur]; $('sf').style.width = (prog * 100).toFixed(1) + '%'; $('te').textContent = fmt(prog * t.dur); $('sk').setAttribute('aria-valuenow', Math.round(prog * 100));
        if (!sheet.hidden && !t.cs) {
            var n = t.l.length;
            var a = Math.min(n - 1, Math.floor(prog * n));

            [].forEach.call($('sl').children, function (p, i) {
                p.className = i === a ? 'ac' : (i < a ? 'pa' : '');
            });
        }
    }
    function play(i, open) { cur = i; prog = 0; playing = true; ui(); if (open) openSheet() }
    function nextT(d) { cur = (cur + d + T.length) % T.length; prog = 0; ui() }
    $('pp').onclick = $('bigp').onclick = function () { playing = !playing; ui() };
    $('nx').innerHTML = ic('next'); $('pv').innerHTML = ic('prev');
    $('nx').onclick = function () { nextT(1) }; $('pv').onclick = function () { if (prog > .1) { prog = 0; prg() } else nextT(-1) };
    var sk = $('sk');
    function seek(e) { var b = sk.getBoundingClientRect(); prog = Math.max(0, Math.min(.999, (e.clientX - b.left) / b.width)); prg() }
    sk.addEventListener('pointerdown', function (e) { sdr = true; sk.setPointerCapture(e.pointerId); seek(e) });
    sk.addEventListener('pointermove', function (e) { if (sdr) seek(e) });
    sk.addEventListener('pointerup', function () { sdr = false }); sk.addEventListener('pointercancel', function () { sdr = false });
    sk.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { prog = Math.min(.999, prog + .05); prg(); e.preventDefault() } else if (e.key === 'ArrowLeft') { prog = Math.max(0, prog - .05); prg(); e.preventDefault() } });
    setInterval(function () { if (!playing || sdr) return; prog += .2 / T[cur].dur; if (prog >= 1) { nextT(1) } else prg() }, 200);

    var sheet = $('sheet'), ret = null;
    
function fillSheet() {
    var t = T[cur];

    $('sc').style.background = bg(t, cur);
    $('st').textContent = t.t;
    $('sa').textContent = 'Tiara • ' + t.y + ' • ' + t.r;

    $('sg').innerHTML = '';

    t.st.forEach(function (s) {
        var x = document.createElement('span');
        x.textContent = s;
        $('sg').appendChild(x);
    });

    $('sl').innerHTML = '';

    if (t.cs) {
        var meta = document.createElement('div');
        meta.className = 'cs-meta';

        t.cs.info.forEach(function (item) {
            var span = document.createElement('span');
            span.textContent = item;
            meta.appendChild(span);
        });

        $('sl').appendChild(meta);

        var summary = document.createElement('p');
        summary.className = 'cs-summary';
        summary.textContent = t.cs.sum;
        $('sl').appendChild(summary);

        var blocks = document.createElement('div');
        blocks.className = 'cs-blocks';

        t.cs.blocks.forEach(function (block) {
            var section = document.createElement('section');
            section.className = 'cs-block';

            if (block.wide) {
                section.classList.add('wide');
            }

            var title = document.createElement('h3');
            title.textContent = block.h;
            section.appendChild(title);

            block.p.forEach(function (item) {
                var p = document.createElement('p');
                p.textContent = item;
                section.appendChild(p);
            });

            blocks.appendChild(section);
        });

        $('sl').appendChild(blocks);

        if (t.cs.imgs && t.cs.imgs.length > 0) {
            var gallery = document.createElement('div');
            gallery.className = 'cs-gallery';

            t.cs.imgs.forEach(function (item) {
                var figure = document.createElement('figure');
                var img = document.createElement('img');
                var caption = document.createElement('figcaption');

                img.src = item.s;
                img.alt = item.a;
                img.loading = 'lazy';

                caption.textContent = item.a;

                figure.appendChild(img);
                figure.appendChild(caption);
                gallery.appendChild(figure);
            });

            $('sl').appendChild(gallery);
        }
    } else {
        t.l.forEach(function (s) {
            var p = document.createElement('p');
            p.textContent = s;
            $('sl').appendChild(p);
        });
    }
}
    function openSheet() { ret = document.activeElement; sheet.hidden = false; document.body.classList.add('lock'); fillSheet(); prg(); $('sx').focus() }
    function closeSheet() { sheet.hidden = true; document.body.classList.remove('lock'); if (ret && ret.focus) ret.focus() }
    $('nw').onclick = openSheet; $('sx').onclick = closeSheet;


var fo = $('fo'), menu = $('menu'), mo = $('mo');

fo.onclick = function () {
    var o = fo.getAttribute('aria-pressed') !== 'true';
    fo.setAttribute('aria-pressed', o);
    fo.textContent = o ? 'Mengikuti' : 'Ikuti';
    toast(o ? 'Kamu mengikuti profil ini.' : 'Berhenti mengikuti');
};

mo.onclick = function (e) {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
};

addEventListener('click', function () {
    menu.hidden = true;
});

menu.addEventListener('click', function (e) {
    var b = e.target.closest('[data-a]');
    if (!b) return;

    e.stopPropagation();

    var a = b.dataset.a;

    if (a === 'mail') {
        navigator.clipboard.writeText('tiarasusilo12@gmail.com')
            .then(function () {
                toast('Email disalin');
            })
            .catch(function () {
                toast('tiarasusilo12@gmail.com');
            });
    } else if (a === 'link') {
        navigator.clipboard.writeText(location.href)
            .then(function () {
                toast('Tautan disalin');
            })
            .catch(function () {
                toast(location.href);
            });
    } else if (a === 'role') {
        openLogin();
    } else if (a === 'cv') {
        console.log('Tombol CV diklik');
        downloadCV();
    }

    menu.hidden = true;
});

    var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { var el = e.target, sib = [].indexOf.call(el.parentNode.children, el); el.style.transitionDelay = rm ? '0s' : Math.min(sib, 6) * .07 + 's'; el.classList.add('in'); io.unobserve(el) } }) }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.rv').forEach(function (e) { io.observe(e) });
    var ids = ['cerita', 'disko', 'tur', 'alat', 'buku', 'kontak'], links = document.querySelectorAll('.nv nav a');
    var io2 = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { [].forEach.call(links, function (a) { a.classList.toggle('on', a.dataset.s === e.target.id) }) } }) }, { rootMargin: '-35% 0px -55% 0px' });
    ids.forEach(function (i) { io2.observe($(i)) });

    var nv = $('nv'), pb = $('pb'), ph = $('ph'), hc = $('hc'), cue = $('cue'), cs = $('cerita'), tick = false;
    function vis() { var y = scrollY, h = innerHeight; nv.classList.toggle('sc', y > h * .55); pb.classList.toggle('show', playing || y > h * .7) }
    function onS() {
        tick = false; vis(); var y = scrollY, h = innerHeight;
        if (!rm && y < h * 1.2) { ph.style.transform = 'translateY(' + (y * .18).toFixed(1) + 'px)'; hc.style.transform = 'translateY(' + (y * .1 * -1).toFixed(1) + 'px)'; cue.style.opacity = Math.max(0, 1 - y / (h * .25)) }
        var r = cs.getBoundingClientRect(), tot = cs.offsetHeight - h, pr = Math.max(0, Math.min(1, -r.top / tot)), n = STORY.length, p = pr * (n - 1), a = Math.round(p);
        lines.style.setProperty('--p', p.toFixed(3)); $('lpi').style.width = (pr * 100).toFixed(1) + '%';
        for (var i = 0; i < lns.length; i++)lns[i].className = 'ln' + (i === a ? ' ac' : (i < a ? ' pa' : ''));
    }
    addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(onS) } }, { passive: true });
    addEventListener('resize', onS);
    var lo = $('lo'), lf = $('lf'), KEY = 'nf_profil';
    var ROLES = {
        recruiter: { n: 'Recruiter', m: 'Ini ringkasan untuk kamu yang sedang mencari kandidat.', c: [['Pengalaman', '#tur'], ['Karya terbaik', '#disko'], ['Unduh CV', '#cv']] },
        klien: { n: 'Klien', m: 'Ini yang mungkin paling relevan untuk proyekmu.', c: [['Semua karya', '#disko'], ['Ajak bicara', '#kontak']] },
        kreator: { n: 'Sesama kreator', m: 'Silakan intip dapur kerjanya.', c: [['Alat andalan', '#alat'], ['Cerita singkat', '#cerita']] },
        tamu: { n: 'Tamu', m: 'Silakan lihat-lihat dulu.', c: [['Lihat semua karya', '#disko']] }
    };
    function getSaved() { try { return JSON.parse(sessionStorage.getItem(KEY)) } catch (e) { return null } }
    function setSaved(o) { try { sessionStorage.setItem(KEY, JSON.stringify(o)) } catch (e) { } }
    var gate = ['nv', 'home', 'cerita', 'pb'];
    function setInert(on) { gate.forEach(function (i) { var e = $(i); if (e) { if (on) e.setAttribute('inert', ''); else e.removeAttribute('inert') } }); document.querySelectorAll('main').forEach(function (e) { if (on) e.setAttribute('inert', ''); else e.removeAttribute('inert') }) }
    function applyProfile(p) {
        var r = ROLES[p.role] || ROLES.tamu, hi = $('hi'), c = $('hic');
        $('hit').textContent = (p.name ? 'Halo, ' + p.name + '. ' : 'Halo. ') + r.m; c.innerHTML = '';
        r.c.forEach(function (x) { var a = document.createElement('a'); a.textContent = x[0]; a.href = x[1]; if (x[1] === '#cv') { a.onclick = function (e) { e.preventDefault(); downloadCV() } } c.appendChild(a) });
        hi.hidden = false;
    }
    function openLogin() {
        lo.hidden = false; void lo.offsetWidth; lo.classList.remove('out'); setInert(true); document.body.classList.add('lock');
        var s = getSaved(); if (s) { $('ln').value = s.name || ''; var rd = lf.querySelector('input[value="' + s.role + '"]'); if (rd) rd.checked = true }
        $('er').textContent = ''; setTimeout(function () { $('ln').focus() }, 60);
    }
    function closeLogin(p) {
        setSaved(p); applyProfile(p); lo.classList.add('out'); setInert(false); document.body.classList.remove('lock');
        setTimeout(function () { lo.hidden = true; $('bigp').focus({ preventScroll: true }) }, rm ? 0 : 560);
        toast(p.name ? 'Selamat datang, ' + p.name : 'Selamat datang');
    }
    lf.addEventListener('submit', function (e) {
        e.preventDefault();
        var r = lf.querySelector('input[name=role]:checked');
        if (!r) { $('er').textContent = 'Pilih salah satu dulu, atau tekan Lewati saja.'; lf.querySelector('input[name=role]').focus(); return }
        closeLogin({ role: r.value, name: $('ln').value.trim().slice(0, 24) });
    });
    lf.addEventListener('change', function () { $('er').textContent = '' });
    $('ln').addEventListener('input', function () { $('er').textContent = '' });
    $('lsk').onclick = function () { closeLogin({ role: 'tamu', name: '' }) };
    lo.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') { var f = [].filter.call(lo.querySelectorAll('input,button'), function (x) { return x.offsetParent !== null }); var a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus() } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus() } }
    });
    var saved = getSaved();
    if (saved && saved.role) { lo.hidden = true; applyProfile(saved) } else { setInert(true); document.body.classList.add('lock'); setTimeout(function () { $('ln').focus() }, 300) }

    // ===== FORM PESAN =====
var FORM_URL = 'https://formspree.io/f/mbgdyywb';
var mf = $('mf'), mfs = $('mfs'), mfst = $('mfst'), mfm = $('mfm'), mfc = $('mfc'), mfe = $('mfe'), lastSent = 0;

function mfStatus(msg, type) { mfst.textContent = msg; mfst.className = 'mfst' + (type ? ' ' + type : ''); }

mfm.addEventListener('input', function () { mfc.textContent = mfm.value.length + '/500'; mfm.removeAttribute('aria-invalid'); });
mfe.addEventListener('input', function () { mfe.removeAttribute('aria-invalid'); });

mf.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = mfe.value.trim(), msg = mfm.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        mfe.setAttribute('aria-invalid', 'true'); mfStatus('Isi email yang valid supaya aku bisa membalas.', 'err'); mfe.focus(); return;
    }
    if (msg.length < 10) {
        mfm.setAttribute('aria-invalid', 'true'); mfStatus('Pesannya terlalu singkat. Tulis minimal 10 karakter ya.', 'err'); mfm.focus(); return;
    }
    if (Date.now() - lastSent < 30000) { mfStatus('Tunggu sebentar sebelum mengirim lagi.', 'err'); return; }
    if (FORM_URL.indexOf('GANTI') > -1) { mfStatus('Formulir belum dihubungkan. Isi FORM_URL di main.js dulu.', 'err'); return; }

    mfs.disabled = true; mfs.textContent = 'Mengirim...'; mfStatus('', '');

    fetch(FORM_URL, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(mf) })
        .then(function (r) {
            if (!r.ok) throw new Error('gagal');
            lastSent = Date.now(); mf.reset(); mfc.textContent = '0/500';
            mfStatus('Terkirim. Terima kasih, aku balas secepatnya.', 'ok'); toast('Pesanmu terkirim');
        })
        .catch(function () { mfStatus('Pesan belum terkirim. Coba lagi, atau kirim lewat email di atas.', 'err'); })
        .then(function () { mfs.disabled = false; mfs.textContent = 'Kirim pesan'; });
});

    ui(); onS();
})();
