google.load('visualization', '1', { packages: ['corechart'] });
var n;
var id;
var source;
var cont;

$(document).ready(function(){    
  function drawItems(url, cont) {
    var jsonChartData = $.ajax({
      url: url,          
      dataType: "json",
      async: false          
    }).responseText;
    
    //var chartdata = new google.visualization.DataTable(jsonChartData);        

    var wrapper = new google.visualization.ChartWrapper({
          chartType: 'BarChart',
          dataTable: chartdata,
          options: {'title': 'Bengawan Solo'},
          containerId: cont
        });
    wrapper.draw();
  }

  function drawVisualization(cont) {

    var queryText = "SELECT  Tujuan, tma, ch, fisik, se, kbt FROM 1B5n-vTOUF4Eaaoc23TwitN20lmM2II0DIlRnjTLU";
    var encodedQuery = encodeURIComponent(queryText);

    var site =  ['https://www.googleapis.com/fusiontables/v2/query'];
    site.push('?sql=' + encodedQuery);
    site.push('&key=AIzaSyAenEAiceGY8ebGZiL_MrkMDil_mETnPa0');

    var data = $.ajax({
      url: site.join(''),
      dataType: 'jsonp',
      async: false
    }).responseText;

    var chartdata = new google.visualization.DataTable(data);

    var wrapper = new google.visualization.ChartWrapper({              
      chartType: 'ColumnChart',
      dataTable: chartdata,
      options: {'title': 'Bojonegoro'},      
    });
    wrapper.setContainerId(cont);
    wrapper.draw();
  }

$('.accord-section-title').click(function(){
  var id = $(this).attr('id');
  //url = "php/getchartdata.php?kode="+id;  
  switch(id){
    case 'ahp':    
      cont = 'vis';
      break;
    case 'bojonegoro':
      cont = 'visualization';
      break;
    case 'tma':      
      cont = 'vis1';
      break;
    case 'ch':       
      cont = 'vis2';
      break;
    case 'kbt':      
      cont = 'vis3';
      break;
    case 'af':      
      cont = 'vis4';
      break;
    case 'se':      
      cont = 'vis5';
      break;
    default: break;
  }
  //drawItems(url, cont);
  drawVisualization(cont);
});

$('.accord-section-subtitle').click(function(){
  id = $(this).attr('id');  
  switch(id){
    case 'jatim':       
      source = new google.maps.LatLng(-7.4326065,111.394829);      
      break;
    case 'ngawi':          
      source = new google.maps.LatLng(-7.4326065,111.394829);      
      break;
    case 'bojonegoro':       
      source = '1B5n-vTOUF4Eaaoc23TwitN20lmM2II0DIlRnjTLU';            
      break;
    case 'tuban':      
      source = new google.maps.LatLng(-7.0127631,112.0115064);      
      break;
    case 'lamongan':      
      source = new google.maps.LatLng(-7.088084,112.3734886);      
      break;
    case 'gresik':      
      source = new google.maps.LatLng(-7.0879808,112.5235898);      
      break;
    default: break;
  }
  //drawVisualization(); 
});
});