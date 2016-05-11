$(document).ready(function() {
    var tour = new Tour({
        steps: [
          {
            orphan: "true",
            title: "Selamat Datang",
            content: "Selamat Datang di Sistem Pengukuran Tingkat risiko Kawasan Rawan Bencana Sungai Bengawan Solo"            
          },
          {
            orphan: "true",
            title: "Konten",
            content: "Sistem ini terdiri dari dua bagian, peta dan penjelasan"
          },
          {
            element: "#main",
            title: "Bagian Peta",
            content: "Pada bagian ini, anda dapat melihat Peta Kawasan Rawan Bencana Banjir Sungai Bengawan Solo, ditandai dengan wilayah yang berwarna",
            placement: "top"
          },
          {
            element: "#legendWrapper",
            title: "Legenda Peta",
            content: "Pada bagian ini, anda dapat melihat Legenda peta yang menjelaskan keterangan warna sesuai dengan tingkatan risiko masing-masing kecamatan",
            placement: "top"
          },
          {
            element: "#jatim",
            title: "Judul Fitur",
            content: "Pada bagian ini, anda dapat memilih wilayah yang ingin anda lihat tingkatan risikonya",
            placement: "right"
          },
          {
            element: "#accord-1",
            title: "Penjelasan Fitur",
            content: "Pada bagian ini, anda dapat membaca penjelasan mengenai tingkatan risiko untuk wilayah yang telah dipilih"
          },
          {
            element: "#accord-1",
            title: "Penjelasan Fitur",
            content: "Pada fitur pertama ini, anda hanya akan membaca penjelasan singkat mengenai tingkatan risiko di Jawa Timur"
          },
          {
            orphan: "true",
            title: "Penjelasan Fitur",
            content: "Untuk selanjutnya, anda dapat memilih untuk masing-masing kabupaten agar lebih mudah",
            onNext: function() {
              $("#jatim").removeClass('active');
              $("#accord-1").slideUp(300).removeClass('open');
              $("#ngawi").addClass('active')
              $("#accord-2").slideDown(300).addClass('open');              
            }
          }
    ]});
      tour.addSteps([          
          {
            element: "#ngawi",
            title: "Pilih Kabupaten",
            content: "Pada bagian ini, anda akan melihat tingkat risiko masing-masing sesuai dengan kabupaten yang anda pilih"
          },
          {
            element: "#ngawi",
            title: "Pilih Kabupaten",
            content: "Saat ini anda sedang memilih Kabupaten Ngawi, didalamnya terdapat penjelasan mengenai tingkatan risiko kecamatan-kecamatan yang ada pada kabupaten tersebut"
          },
          {
            element: "#vis",
            title: "Grafik Tingkatan risiko",
            content: "Pada bagian ini, anda akan melihat keterangan mengenai kriteria-kriteria masing-masing kecamatan per tingkatan risiko"
          },
          {
            element: "#vis",
            title: "Grafik Tingkatan risiko",
            content: "Terdapat 6 kriteria yang dijadikan acuan dalam menghitung tingkat risiko untuk masing-masing kecamatan"
          },
          {
            element: "#vis",
            title: "Grafik Tingkatan Resiko",
            content: "Yaitu curah hujan(Rainfall), tinggi muka air(Water Level), dan kejadian bencana tercatat(Past Events) yang terangkum dalam analisa ancaman"
          },
          {
            element: "#vis",
            title: "Grafik Tingkatan Resiko",
            content: "Analisa ini digunakan untuk melihat kemungkinan terjadinya banjir pada kecamatan yang dipilih"
          },
          {
            element: "#vis",
            title: "Grafik Tingkatan Resiko",
            content: "Lalu kerentanan sosial(SV), kerentanan ekonomi(EV), dan kerentanan fisik(PV) yang terangkum dalam analisa kerentanan"
          },
          {
            element: "#vis",
            title: "Grafik Tingkatan Resiko",
            content: "Analisa ini digunakan untuk menghitung kemungkinan besaran dampak yang diterima ketika adanya bencana banjir"
          },
          {
            element: "#vis",
            title: "Grafik Tingkatan Resiko",
            content: "Dengan mempertimbangkan faktor kependudukan(sosial), lahan terbangun dan fasilitas publik(fisik), dan lahan produktif masyarakat(ekonomi)"
          },
          {
            element: "#dampak",
            title: "Penjelasan Dampak dan Saran",
            content: "Pada bagian ini, anda akan melihat kemungkinan dampak yang akan diterima kecamatan tersebut apabila terjadi banjir"
          },
          {
            element: "#dampak",
            title: "Penjelasan Dampak dan Saran",
            content: "Beserta kemungkinan kerugian dan kerusakan yang akan dialami oleh wilayah tersebut"
          },
          {
            element: "#dampak",
            title: "Penjelasan Dampak dan Saran",
            content: "Juga akan dijelaskan mengenai saran yang dapat dilakukan untuk mengurangi dampak risiko tersebut"
          },
          {
            orphan: "true",
            title: "Terima Kasih",
            content: "Dengan ini selesailah panduan mengenai fitur-fitur yang ada di sistem ini, silahkan memilih kabupaten yang lain untuk melihat tingkat risikonya"            
          }
    ]);

// Initialize the tour    
    tour.init();

// Start the tour
    tour.start();
    $('.accord-section-title').click(function(){      
      tour.start();
    });
});