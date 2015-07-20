var layers = [6];
var result = [5];
var rawan = [5];
var skin = [5];
var map, n, LatLng, Peta, jum, mapOptions, layer, f, sector;
var global, brief;
var textlow, textmed, texthigh;

$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

var infoWindow;
var markers = [];
var locationSelect;
var cek;
var info;
var third = '1xWU7YlAlajhO7tNybHFtCCT_UlKgaodGW8a7a9w0';
var LAYER_STYLES = {        
    'min': 0,
    'max': 0.1,
    'colors': [      
      '#00FF00',
      '#FFFF00',
      '#cc0000'
    ]        
}
result [0] = '19mnJY0B_KzTG9V2i1A0MbsyKuxXUQ1bCQ3zqMzne';
result [1] = '1aHSmezhiczwTIIQfq4fSM4ZG7oXNoSxJRiU2P1la';
result [2] = '1sUuESYYmfr09WddDlp4KAdFMpFN7bwINrbVtdx4_';
result [3] = '1NTy5EH_0rogpEwNhVDleajyeAeCXMmkCjm1Ns39e';
result [4] = '1-mGizJhlFrN-0zi7nPdUSJ3vPIxUsU4m6QzxS7U_';

function initialize() {  
  Peta = new google.maps.LatLng(-7.2633764,111.7498247);
  jum = 9;
  var first = '1olfUlBaG4ujGW8sF_8-07icKWxRloFPNA6ZAP4s0';
  var second = '1P-m0PYiArCh0Eu2s25ndEn9QDV8kkbfjrSHvzNV6';  
  
  newInit(Peta,jum);
  fusion(first);    
  toggleAll();
  fusion2(second);

  layers [0] = '1xJKmJWufCa2N843uZhxAQ6FSYH3fQ-12t10XmJbT';
  layers [1] = '1nb6tcNnolnlAjTfWwYWc1LRCMm3DP_JIv9ktL3-2';
  layers [2] = '18G9wXsLiTi1Y_Yccqv1w0L_1NIjiQm0HMcDeP6NA';
  layers [3] = '1rFUOsT7s19ZPAknu8NG9rBCDJ2rlfxPDSv1I91qe';
  layers [4] = '1gfXLx7ylTANkOJdOe53bAa2eLbdDMGPYA32RVN2O';      
};  

rawan [0] = '1Lw0wNa8-ozAXqLXH2W1AaHCzdhJts56y6ysAZLvv';
rawan [1] = '1ITtejnPSSMbVSItH8x9pxs7hTAin0oemuBpzf_k-';
rawan [2] = '1SqDupdVO3KXXVAv7GbD4tXjkldlRSEyQ3XDBacSs';
rawan [3] = '1pTNRH6jXv4PytHIeGdptdkDjFl0twJ5oQK7OkIqB';
rawan [4] = '1NuYLsTXCY_Dqf8l-qgjtukYNNO4C2QDqvpYsg_en';  

function newInit(Peta,jum) {
  mapOptions = {
    center: Peta,
    zoom: jum,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  styleMap(map);
}

function fusion(f) {
  layer = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: f
    },          
  });
  layer.setMap(map);
  google.maps.event.addListener(layer, 'click', function(e) {
    sector = e.row['Tujuan'].value;

     $.getScript("js/charts.js", function(){
       updateChart(sector);
     });
    
    var label = e.row['risk'].value;
    if (label>=global[0] && label<=global[1]) {      
      e.infoWindowHtml = '<p class="low">Tingkat Resiko Rendah</p>';      
      $(brief).text(textlow);    
    } else if (label>global[1] && label<=global[2]) {      
      e.infoWindowHtml = '<p class="medium">Tingkat Resiko Sedang</p>';
      $(brief).text(textmed);
    } else {      
      e.infoWindowHtml = '<p class="high">Tingkat Resiko Tinggi</p>';
      $(brief).text(texthigh);
    }
  });
}

function fusion2(f) {
  layer2 = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: f
    },          
  });
  layer2.setMap(map);
}

function getdata(temp) {
  var series =  new geostats();  
  var data = new Array();
  var query = new google.visualization.Query("https://www.google.com/fusiontables/gvizdata?tq=" + encodeURIComponent("SELECT 'risk' FROM " + temp));  
  query.send(handleQueryResponse);
  function handleQueryResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getReasons() + response.getMessage() + response.getDetailedMessage());
      return;
    }    
    for (i = 0; i < response.getDataTable().getNumberOfRows(); i++) {
      for (j = 0; j < 1; j++) {
        data.push(response.getDataTable().getValue(i, j));                   
      }        
    }    
    series.setSerie(data);   
    var a = series.getClassJenks(3);   
    a = HTStyles(data);
    NewStyle(layer, a);
  } 
}

function JenkStyles(data, kclass) {
  var werno = new Array();
  for (var i = 0; i < kclass.length; i++) {    
    if(i==3){
        break;
    }
    werno.push(new Array());
    for (var j = 0; j < data.length; j++) {
      if(i==0){
        if(data[j]>=kclass[i] && data[j]<=kclass[i+1]){          
          werno[i].push(data[j]);
         }
      } else {
        if(data[j]>kclass[i] && data[j]<=kclass[i+1]){          
          werno[i].push(data[j]);
        }
      }
    }
  }  
}

function HTStyles(a) {  
  var result = getMean(a);
  var werno = new Array();
  var next;  
  if(result.count1>result.count2){
    werno.push(result.min);
    werno.push(result.mean)
    next = getMean(result.temp1);    
    werno.push(next.mean);
  } else {    
    werno.push(result.min);
    next = getMean(result.temp2);    
    werno.push(next.mean);
    werno.push(result.mean);    
  } 
  werno.push(result.max);
  return werno;
}

function getMean(x) {
  var temp1 = new Array();
  var temp2 = new Array();
  var mean;
  var sum=0, count1=0, count2=0, max=0, min=0;
  for (var i = 0; i < x.length; i++) {
    sum = sum + x[i];    
  }
  mean = sum / x.length;
  for (var i = 0; i < x.length; i++) {
    if(x[i]>mean){
      count1++;
      temp1.push(x[i]);
    } else {
      count2++;
      temp2.push(x[i]);
    }
  }
  for (var i = 0; i < temp1.length; i++) {
    if(temp1[i]>max){
      max = temp1[i];
    }
  }
  for (var i = 0; i < temp2.length; i++) {
    if(temp2[i]<min){
      min = temp2[i];
    }
  }
  return {
    mean: mean,
    max: max,
    min: min,
    temp1: temp1,
    temp2: temp2,
    count1: count1,
    count2: count2
  };
}

function NewStyle(layer, data) {
  var layerStyle = LAYER_STYLES;
  var colors = layerStyle.colors;
  var styles = new Array();
  global = data;
  
  for (var i = 0; i < colors.length; i++) {    
      styles.push({
        where: condition(i, data),              
        polygonOptions: {
          fillColor: colors[i],
          fillOpacity: 1
        }
      });              
  }  
  layer.set('styles', styles);
  createLegend(map, data);
}

function condition(i, n) {
  var con;
  if (i==0) {
    con = "risk >= " + n[i];    
  } else {
    con = "risk > " + n[i];    
  }
  return con;
}

function styleMap(map) {
  var style = [{
    featureType: 'all',
    stylers: [{
      saturation: -99
    }]
  }, {
    featureType: 'poi',
    stylers: [{
      visibility: 'off'
    }]
  }, {
    featureType: 'road',
    stylers: [{
      visibility: 'off'
    }]
  }];

  var styledMapType = new google.maps.StyledMapType(style, {
    map: map,
    name: 'Styled Map'
  });
  map.mapTypes.set('map-style', styledMapType);
  map.setMapTypeId('map-style');
}

function createLegend(map, data) {
  var legendWrapper = document.createElement('div');
  legendWrapper.id = 'legendWrapper';
  legendWrapper.index = 1;
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legendWrapper);
  legendContent(legendWrapper, data);
}

function legendContent(legendWrapper, data) {
  var layerStyle = LAYER_STYLES;
  var colors = layerStyle.colors;
  var legend = document.createElement('div');
  legend.id = 'legend';

  var title = document.createElement('p');
  title.innerHTML = "Tingkat Resiko Banjir Bengawan Solo";
  legend.appendChild(title);

  for (var i = 0; i < colors.length; i++) {
    var legendItem = document.createElement('div');
    var color = document.createElement('div');
    color.setAttribute('class', 'color');
    color.style.backgroundColor = colors[i];
    legendItem.appendChild(color);

    var newMin = data[i].toFixed(2);
    var newMax = data[i+1].toFixed(2);
    var minMax = document.createElement('span');
    minMax.innerHTML = newMin + ' - ' + newMax;
    legendItem.appendChild(minMax);

    legend.appendChild(legendItem);
  }

  legendWrapper.appendChild(legend);
}

function toggleLayer(n) {  
  styleMap(map);
  if(n==0){
    initialize();     
  } else {
    fusion(layers[n-1]);          
  }
}

function toggleAHP(n) {  
  fusion(result[n-1]);
  getdata(result[n-1]);      
  fusion2(rawan[n-1]);
}

function toggleAll(){
  fusion(third);
  getdata(third);  
}

$('.accord-section-title').click(function(){
  var id = $(this).attr('id');  
  jum = 10;
  switch(id){
    case 'jatim': 
      n=0;
      Peta = new google.maps.LatLng(-7.4326065,111.394829);            
      break;
    case 'ngawi':
      n=1;      
      Peta = new google.maps.LatLng(-7.4326065,111.394829);
      brief = "#dampak";
      break;
    case 'bojonegoro': 
      n=2;
      Peta = new google.maps.LatLng(-7.2633764,111.7498247);      
      brief = "#dampak1";
      break;
    case 'tuban':
      n=3;
      Peta = new google.maps.LatLng(-7.0127631,112.0115064);      
      brief = "#dampak2";
      break;
    case 'lamongan':
      n=4;
      Peta = new google.maps.LatLng(-7.088084,112.3734886);      
      brief = "#dampak3";
      break;
    case 'gresik':
      n=5;
      Peta = new google.maps.LatLng(-7.0879808,112.5235898);      
      brief = "#dampak4";
      break;
    default: break;
  } 
  newInit(Peta,jum);
  toggleLayer(n);  
  if(id!='jatim'){
    toggleAHP(n);
  }
});

textlow = "Untuk tingkat resiko rendah, kecamatan tersebut akan terkena banjir dengan kedalaman hingga 0.75 m yang berdampak pada hingga 500 jiwa per km persegi. Banjir ini akan menggenangi beberapa bangunan dan lahan produktif dengan potensi kerugian mencapai 750 juta rupiah. Aktivitas ekonomi terganggu, aktivitas pendidikan dan pekerjaan terhambat, akses kegiatan kemasyarakatan terganggu, ruang dan pelayanan publik tersendat, serta sumber air terkontaminasi dan sanitasi tidak berjalan";
textmed = "Untuk tingkat resiko sedang, kecamatan tersebut akan terkena banjir dengan kedalaman hingga 1.5 m yang berdampak pada hingga 1000 jiwa per km persegi. Banjir ini akan menggenangi banyak bangunan dan lahan produktif dengan potensi kerugian mencapai 1.5 milliar rupiah. Aktivitas ekonomi terganggu, aktivitas pendidikan dan pekerjaan terhambat, akses kegiatan kemasyarakatan terganggu, ruang dan pelayanan publik tersendat, serta sumber air terkontaminasi dan sanitasi tidak berjalan. Terjadi kerusakan pada infrastruktur dan bangunan (jalan, jembatan). Timbulnya penyakit-penyakit menahun (PES, dsb.) Adanya penduduk yang mengungsi dan kemungkinan orang terhanyut atau hilang";
texthigh = "Untuk tingkat resiko tinggi, kecamatan tersebut akan terkena banjir dengan kedalaman lebih 1.5 m yang berdampak pada hingga lebih dari 1000 jiwa per km persegi. Banjir ini akan menggenangi seluruh bangunan dan lahan produktif dengan potensi kerugian lebih dari 3 milliar rupiah. Aktivitas ekonomi terganggu, aktivitas pendidikan dan pekerjaan terhambat, akses kegiatan kemasyarakatan terganggu, ruang dan pelayanan publik tersendat, serta sumber air terkontaminasi dan sanitasi tidak berjalan. Terjadi kerusakan pada infrastruktur dan bangunan (jalan, jembatan). Timbulnya penyakit-penyakit menahun (PES, dsb.) Adanya penduduk yang mengungsi dan kemungkinan orang terhanyut atau hilang. Listrik dan jaringan telekomunikasi padam, memicu timbulnya bencana kedua (Tanah longsor, dsb.), munculnya trauma dan stress pasca bencana, timbulnya kekerasan-kekerasan dan perbuatan menyimpang. Banyak kerugian yang diterima, mulai dari aset kekayaan dan harta benda";

});
