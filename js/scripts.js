var layers = [6];
var result = [5];
var rawan = [5];
var skin = [5];
var map;
var n;
var LatLng;
var Peta;
var jum;
var mapOptions;
var layer;
var f;
var sector;

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
  result [4] = '1lpvQYRmshDAvLVWS2j5NGV6hAk74WzJWwiPdwTCP';

function initialize() {  
  Peta = new google.maps.LatLng(-7.2633764,111.7498247);
  jum = 9;
  var first = '1olfUlBaG4ujGW8sF_8-07icKWxRloFPNA6ZAP4s0';
  var second = '1P-m0PYiArCh0Eu2s25ndEn9QDV8kkbfjrSHvzNV6';  
  
  newInit(Peta,jum);
  fusion(first);
  //loop();
  fusion(second);
  toggleAll();

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
};

function loop(){  
  for (var i = 0; i < 5; i++) {    
    var a = new google.maps.FusionTablesLayer({
      query: {
        select: 'geometry',
        from: result[i]
      },          
    });
    console.log(result[i]);
    a.setMap(map);
    styleLayerBySector(a);
  }
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

    // $.ajax({
    //   url: 'js/charts.js',
    //   dataType: "script",
    //   context: this,
    //   success: function() { updateChart(sector); },
    //   cache: true
    // });

    var electricity = e.row['risk'].value;
    if (electricity == Math.min(e)) {
      e.infoWindowHtml = '<p class="high">Tingkat Resiko Rendah</p>';
    } else if (electricity == Math.max(e)) {
      e.infoWindowHtml = '<p class="medium">Tingkat Resiko Tinggi</p>';
    } else {
      e.infoWindowHtml = '<p class="low">Tingkat Resiko Sedang</p>';
    }

    
  });
}

function createLegend(map, id) {
  var legendWrapper = document.createElement('div');
  legendWrapper.id = 'legendWrapper';
  legendWrapper.index = 1;
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legendWrapper);
  legendContent(legendWrapper, id);
}

function legendContent(legendWrapper, id) {
  var legend = document.createElement('div');
  legend.id = 'legend';

  var title = document.createElement('p');
  title.innerHTML = "Tingkat Resiko Kabupaten " + id;
  legend.appendChild(title);

  var layerStyle = LAYER_STYLES;
  var colors = layerStyle.colors;
  var minNum = layerStyle.min;
  var maxNum = layerStyle.max;
  var step = (maxNum - minNum) / colors.length;
  for (var i = 0; i < colors.length; i++) {
    var legendItem = document.createElement('div');
    var color = document.createElement('div');
    color.setAttribute('class', 'color');
    color.style.backgroundColor = colors[i];
    legendItem.appendChild(color);

    var newMin = minNum + step * i;
    var newMax = newMin + step;
    var minMax = document.createElement('span');
    minMax.innerHTML = Math.round(newMin) + ' - ' + Math.round(newMax);
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
  styleLayerBySector(layer);  
  fusion(rawan[n-1]);
}

function toggleAll(){
  fusion(third);
  styleLayerBySector(layer);
  //fusion(second);
}

function doNothing() {}

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
      break;
    case 'bojonegoro': 
      n=2;
      Peta = new google.maps.LatLng(-7.2633764,111.7498247);      
      break;
    case 'tuban':
      n=3;
      Peta = new google.maps.LatLng(-7.0127631,112.0115064);      
      break;
    case 'lamongan':
      n=4;
      Peta = new google.maps.LatLng(-7.088084,112.3734886);      
      break;
    case 'gresik':
      n=5;
      Peta = new google.maps.LatLng(-7.0879808,112.5235898);      
      break;
    default: break;
  } 
  newInit(Peta,jum);
  toggleLayer(n);  
  if(id!='jatim'){
    toggleAHP(n);
  }      
  createLegend(map, id);
});

function styleLayerBySector(layer) {
  var layerStyle = LAYER_STYLES;
  var colors = layerStyle.colors;
  var minNum = layerStyle.min;
  var maxNum = layerStyle.max;
  var step = (maxNum - minNum) / colors.length;

  var styles = new Array();
  for (var i = 0; i < colors.length; i++) {
    var newMin = minNum + step * i;
    styles.push({
      where: generateWhere(newMin),
      polygonOptions: {
        fillColor: colors[i],
        fillOpacity: 1
      }
    });
  }
  layer.set('styles', styles);
}

function generateWhere(minNum) {
  // var whereClause = new Array();
  // whereClause.push("risk = ");
  // whereClause.push(minNum);        
  var whereClause = "risk >= " + minNum;
  return whereClause;
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

/* end google maps -----------------------------------------------------*/

});