/* DISTORSI RAKYAT — redaksi v0.4 / 13 Oktober 2026. Static, no tracking. */
'use strict';
const stories = [
  {
    id:'bbm-listrik',category:'poster',sort:'01',label:'POSTER / SATIR',date:'3 MEI 2025',
    art:'BALI\nPERNAH\nGELAP',color:'a-red',
    title:'BALI PERNAH BLACKOUT. TRANSISI JANGAN IKUT GELAP.',
    excerpt:'Pemadaman luas Bali pada Mei 2025 menjadi pengingat: kendaraan listrik butuh jaringan yang tangguh.',
    lead:'Listrik masa depan perlu infrastruktur masa depan. Tidak cukup spanduk dan colokan.',
    paragraphs:[
      'FAKTA — PLN menyatakan sistem kelistrikan Bali mengalami gangguan pada Jumat, 2 Mei 2025 sekitar pukul 16.00 WITA. Listrik seluruh pelanggan kembali normal pada Sabtu, 3 Mei sekitar pukul 03.30 WITA. Pemulihan kurang dari 12 jam itu merupakan hasil kerja personel PLN yang patut diapresiasi.',
      'SATIR — Warga diminta pindah dari pompa BBM ke colokan listrik. Lalu, ketika listrik mati, apakah harus pindah lagi ke lilin? Ini kritik metaforis soal ketahanan jaringan, bukan klaim bahwa kendaraan listrik memicu pemadaman.',
      'PERTANYAAN REDAKSI — Bagaimana jaminan kualitas jaringan, cadangan energi, dan ketersediaan pengisian daya bila pemakaian kendaraan listrik bertambah? Transisi patut didukung sekaligus diawasi.'
    ],
    sources:[['PLN — Seluruh pelanggan Bali kembali menyala, 3 Mei 2025','https://web.pln.co.id/cms/media/siaran-pers/2025/05/pln-berhasil-pulihkan-100-kelistrikan-bali-seluruh-pelanggan-kembali-menyala/']]
  },
  {
    id:'mbg-sanitasi',category:'satir',sort:'02',label:'SATIR / KEAMANAN PANGAN',date:'7 SEPTEMBER 2026',
    art:'1.999\nDAPUR\nDIHENTIKAN',color:'a-paper',
    title:'MAKAN BERGIZI. DAPURNYA HARUS LULUS UJI.',
    excerpt:'BGN menghentikan sementara 1.999 dapur MBG yang belum mendaftar SLHS pada September 2026.',
    lead:'Gizi anak-anak bukan sekadar angka porsi. Keamanan pangan itu harga mati.',
    paragraphs:[
      'FAKTA — Badan Gizi Nasional mengumumkan pada 7 September 2026 bahwa 1.999 dapur Satuan Pelayanan Pemenuhan Gizi (SPPG) ditutup sementara karena belum melakukan pendaftaran Sertifikat Laik Higiene Sanitasi (SLHS). Menurut BGN, penghentian dilakukan untuk investigasi lanjutan.',
      'PENTING — Status belum mendaftar SLHS tidak sama dengan pernyataan bahwa semua dapur itu menyebabkan keracunan. Kritik terhadap pengawasan tidak boleh mengubah data administrasi menjadi tuduhan tindak pidana.',
      'SATIR — Kalau programnya Makan Bergizi Gratis, jangan sampai bonusnya “uji coba kebersihan”. Standar harus hadir sebelum makanan tersaji, bukan setelah sebuah masalah menjadi berita.'
    ],
    sources:[['BGN — Penghentian sementara 1.999 dapur belum daftar SLHS, 7 September 2026','https://www.bgn.go.id/news/foto/tegaskan-keamanan-pangan-kepala-bgn-sudaryono-resmi-tutup-sementara-1999-dapur-mbg-yang-belum-mendaftar-slhs']]
  },
  {
    id:'suwung',category:'satir',sort:'03',label:'SATIR / LINGKUNGAN',date:'9 JUNI 2026',
    art:'SAMPAH\nBUKAN\nESTAFET',color:'a-acid',
    title:'SAMPAH DIPILAH. TANGGUNG JAWAB JANGAN DILEMPAR.',
    excerpt:'Suwung dibatasi bagi sampah residu sejak April 2026. Transisi butuh fasilitas, bukan sekadar instruksi.',
    lead:'Sampah memang harus diurus dari sumber. Tapi sistem setelah sumbernya juga harus siap.',
    paragraphs:[
      'FAKTA — Kementerian Lingkungan Hidup menjelaskan bahwa sejak 1 April 2026, TPA Suwung di Bali tidak menerima sampah organik dan diprioritaskan untuk residu. Pada 9 Juni 2026 KLH menegaskan fokus penataan adalah menghentikan praktik open dumping, bukan semata menutup total TPA.',
      'KONTEKS — Pemilahan dan pengurangan sampah di sumber merupakan arah yang baik. Namun keberhasilan memerlukan tempat pemrosesan, pengangkutan, edukasi, pengawasan, serta informasi publik yang konsisten.',
      'SATIR — Kalau sampah cuma pindah dari bak ke pinggir jalan lalu disebut solusi, itu bukan ekonomi sirkular. Itu jalan-jalan keliling kota tanpa tujuan.'
    ],
    sources:[
      ['KLH — Pembatasan pembuangan sampah TPA Suwung, 7 April 2026','https://kemenlh.go.id/news/detail/pasca-pembatasan-pembuangan-sampah-klhbplh-inspeksi-langsung-tpa-suwung-di-bali'],
      ['KLH — Penegasan penghentian open dumping, 9 Juni 2026','https://kemenlh.go.id/news/detail/bukan-tutup-tpa-menteri-lh-tegaskan-stop-open-dumping-dan-dorong-ekosistem-green-jobs-di-bali']
    ]
  },
  {
    id:'ombudsman',category:'editorial',sort:'04',label:'EDITORIAL / PELAYANAN PUBLIK',date:'21 JANUARI 2026',
    art:'633\nAKSES\nWARGA',color:'a-dark',
    title:'PELAYANAN PUBLIK BUKAN MAIN TEBAK PROSEDUR.',
    excerpt:'Ombudsman Bali mencatat 633 akses masyarakat sepanjang 2025, dan menyelesaikan 251 laporan.',
    lead:'Berkas warga bukan perlombaan mencari meja yang benar.',
    paragraphs:[
      'FAKTA — Ombudsman RI Perwakilan Bali mencatat 633 akses masyarakat selama 2025. Angka tersebut mencakup laporan, konsultasi, respons cepat, investigasi inisiatif sendiri, dan tembusan—bukan 633 kasus yang terbukti.',
      'FAKTA — Sebanyak 260 laporan ditindaklanjuti dan 251 diselesaikan, atau 96,54%. Hasil penyelesaian ini patut diapresiasi. Ombudsman juga mencatat dugaan maladministrasi seperti tidak memberi pelayanan, penyimpangan prosedur, dan penundaan berlarut dalam laporan warga.',
      'EDITORIAL — Standar layanan, biaya, durasi, jalur pengaduan, dan tindak lanjut mesti mudah diketahui. Warga tidak seharusnya bermain petak umpet hanya untuk mendapatkan haknya.'
    ],
    sources:[['Ombudsman RI Bali — Laporan Tahunan 2025, 21 Januari 2026','https://ombudsman.go.id/perwakilan/news/r/pwksiaran--ombudsman-bali-paparkan-laporan-tahunan-2025-pengawasan-pelayanan-publik']]
  },
  {
    id:'anggaran',category:'satir',sort:'05',label:'SATIR / KEUANGAN PUBLIK',date:'8 OKTOBER 2026',
    art:'ANGGARAN\nDINAS\nDIET 30%',color:'a-red2',
    title:'PERJALANAN DINAS DIET. PELAYANAN JANGAN IKUT KURUS.',
    excerpt:'Reuters melaporkan instruksi pengurangan 30% sisa anggaran perjalanan dinas lembaga pemerintah.',
    lead:'Hemat itu bagus. Jangan sampai warga yang membayar kekurangannya.',
    paragraphs:[
      'FAKTA MENURUT REUTERS — Laporan 8 Oktober 2026 menyebut kementerian/lembaga diminta mengurangi 30% sisa anggaran perjalanan dinas dan membekukan belanja tak esensial pada sisa 2026. Reuters menyebut dokumen surat edaran dan dua sumber yang mengetahui arahan tersebut.',
      'KONTEKS — Efisiensi dapat membantu pengendalian defisit. Persoalannya terletak pada pelaksanaan: publik memerlukan transparansi mana kegiatan seremonial yang dipangkas dan mana pelayanan yang tetap dilindungi.',
      'SATIR — Selamat! Ternyata rapat daring sudah ditemukan sejak lama. Yang tidak boleh ikut dipangkas adalah kunjungan pelayanan darurat, pengawasan lapangan, dan hak warga.'
    ],
    sources:[['Reuters — Indonesia orders cost-cutting measures, 8 Oktober 2026','https://www.reuters.com/world/asia-pacific/indonesia-orders-cost-cutting-measures-keep-fiscal-deficit-check-sources-say-2026-10-08/']]
  },
  {
    id:'karhutla',category:'satir',sort:'06',label:'SATIR / LINGKUNGAN',date:'13 OKTOBER 2026',
    art:'LANGIT\nBUKAN\nASBAK!',color:'a-slate',
    title:'LANGIT BUKAN ASBAK. ASAP TAK PUNYA PASPOR.',
    excerpt:'Reuters melaporkan pengerahan tambahan sumber daya pemadaman karhutla di tengah kritik terhadap kabut asap.',
    lead:'Kalau asap menyeberang batas, tanggung jawab pencegahan jangan berhenti di batas administrasi.',
    paragraphs:[
      'FAKTA MENURUT REUTERS — Pada 13 Oktober 2026, Presiden Prabowo Subianto memerintahkan tambahan sumber daya untuk menghadapi kebakaran hutan dan lahan. Laporan tersebut juga menyoroti meningkatnya kritik atas kabut asap dan dampaknya terhadap kualitas udara regional.',
      'KONTEKS — Pengerahan personel dan bantuan untuk pemadaman patut diapresiasi. Publik tetap berhak meminta data penyebab, pengawasan lahan, penindakan pelanggaran yang terbukti, pemulihan lingkungan, dan perlindungan kesehatan.',
      'SATIR — Paru-paru warga bukan filter cadangan nasional. Yang perlu dibakar adalah kebiasaan menunda pencegahan, bukan hutannya.'
    ],
    sources:[['Reuters — Prabowo orders more resources to fight wildfires, 13 Oktober 2026','https://www.reuters.com/business/environment/indonesias-prabowo-orders-more-resources-fight-wildfires-haze-anger-grows-2026-10-13/']]
  }
];
const grid=document.getElementById('article-grid');
function el(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node}
function card(s){
  const a=el('article','article-card');a.dataset.category=s.category;
  const button=el('button');button.type='button';button.dataset.story=s.id;button.setAttribute('aria-label','Baca '+s.title);
  const artwork=el('div','card-art '+s.color);
  artwork.append(el('span','card-stamp','DR / '+s.sort+' / TERBIT'),el('div','card-art-text',s.art),el('div','card-bottom','DISTORSI RAKYAT / SATIR • SUMBER TERBUKA'));
  const body=el('div','card-body');
  body.append(el('p','card-meta',s.label+' / '+s.date),el('h3','',s.title),el('p','',s.excerpt),el('span','card-read','BACA SELENGKAPNYA ↗'));
  button.append(artwork,body);a.append(button);return a
}
stories.forEach(s=>grid.append(card(s)));
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(other=>{const active=other===b;other.classList.toggle('active',active);other.setAttribute('aria-pressed',String(active))});
  document.querySelectorAll('.article-card').forEach(c=>{c.hidden=b.dataset.filter!=='semua'&&c.dataset.category!==b.dataset.filter});
}));
const storyDialog=document.getElementById('story-dialog');const reportDialog=document.getElementById('report-dialog');
let selected=null;
function openStory(id){
  const s=stories.find(item=>item.id===id);if(!s)return;
  selected=s;
  document.getElementById('story-meta').textContent=s.label+' / '+s.date+' / SUMBER TERBUKA';
  document.getElementById('story-title').textContent=s.title;
  document.getElementById('story-lead').textContent=s.lead;
  const body=document.getElementById('story-body');body.replaceChildren();
  body.append(el('p','', 'PENJELASAN REDAKSI — Bagian bertanda FAKTA bersumber pada rujukan di bawah. SATIR/EDITORIAL adalah komentar redaksi, bukan tuduhan baru.'));
  for(const paragraph of s.paragraphs)body.append(el('p','',paragraph));
  const sourceList=document.getElementById('story-sources');sourceList.replaceChildren();
  for(const [name,url] of s.sources){
    const a=el('a','',name+' ↗');a.href=url;a.rel='noopener noreferrer';a.target='_blank';
    const li=el('li');li.append(a);sourceList.append(li)
  }
  document.getElementById('share-status').textContent='';
  if(!storyDialog.open)storyDialog.showModal();
  history.replaceState(null,'','#artikel-'+s.id);
}
document.addEventListener('click',e=>{
  const storyButton=e.target.closest('[data-story]');if(storyButton)openStory(storyButton.dataset.story);
  if(e.target.closest('[data-report]'))reportDialog.showModal();
  if(e.target.closest('[data-close-story]'))storyDialog.close();
  if(e.target.closest('[data-close-report]'))reportDialog.close();
});
storyDialog.addEventListener('close',()=>{if(location.hash.startsWith('#artikel-'))history.replaceState(null,'','#arsip')});
for(const d of [storyDialog,reportDialog])d.addEventListener('click',e=>{if(e.target===d)d.close()});
document.getElementById('share-story').addEventListener('click',async()=>{
  if(!selected)return;const url=new URL(location.href);url.hash='artikel-'+selected.id;const status=document.getElementById('share-status');
  try{
    if(navigator.share)await navigator.share({title:selected.title,url:url.href});
    else if(navigator.clipboard){await navigator.clipboard.writeText(url.href);status.textContent='TAUTAN DISALIN.'}
    else status.textContent=url.href;
  }catch(e){if(e.name!=='AbortError')status.textContent='GAGAL BERBAGI. SALIN ALAMAT HALAMAN.'}
});
const toggle=document.getElementById('menu-toggle'),nav=document.getElementById('main-nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Tutup menu':'Buka menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
document.getElementById('report-form').addEventListener('submit',e=>{
  e.preventDefault();
  const val=id=>document.getElementById(id).value.trim();
  const draft=['DISTORSI RAKYAT — DRAF LAPORAN WARGA','STATUS: DRAF PRIBADI. BELUM TERKIRIM.','','Kategori: '+val('cat'),'Judul: '+val('title'),'Waktu/lokasi: '+val('place'),'','Kronologi:',val('details'),'','Bukti: '+val('evidence'),'','Periksa lagi sebelum disampaikan. Hindari data pribadi yang tidak perlu.'].join('\n');
  const url=URL.createObjectURL(new Blob([draft],{type:'text/plain;charset=utf-8'}));
  const a=el('a');a.href=url;a.download='distorsi-rakyat-draf.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
  document.getElementById('report-status').textContent='DRAF DIUNDUH. TIDAK DIKIRIM KE REDAKSI.'
});
document.getElementById('year').textContent=new Date().getFullYear();
if(location.hash.startsWith('#artikel-'))openStory(decodeURIComponent(location.hash.slice(9)));
