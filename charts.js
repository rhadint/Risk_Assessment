google.load('visualization', '1');
var n;
var id;
var source;

$(document).ready(function(){  
  //google.setOnLoadCallback(drawItems);
  //google.setOnLoadCallback(drawVisualization);
  function drawItems(url, cont) {
    var jsonChartData = $.ajax({
      url: url,          
      dataType: "json",
      async: false          
    }).responseText;
    
    var chartdata = new google.visualization.DataTable(jsonChartData);        

    var wrapper = new google.visualization.ChartWrapper({
          chartType: 'BarChart',
          dataTable: chartdata,
          options: {'title': 'Bengawan Solo'},
          containerId: cont
        });
    wrapper.draw();
  }

  function drawVisualization(source, id) {
    google.visualization.ChartWrapper({
      containerId: 'visualization',
      dataSourceUrl: 'http://www.google.com/fusiontables/gvizdata?tq=',
      query: 'SELECT Tujuan, tma, ch, fisik, se, kbt FROM ' + source + ' WHERE Tujuan = "Balen"',      
      chartType: 'ColumnChart',
      options: {'title': id
        // height: 400,
        // width: 400
      }
    });
    //wrapper.draw();
  }

  function kirim(id) {
      /*var id_json = JSON.stringify(id);
      request = new XMLHttpRequestobject;
      request.open("POST", "getchartdata.php", true);
      request.setRequestHeader("Content-type", "application/json");
      request.send(id_json);*/
      $.ajax({
        type: "POST",
        url: "getchartdata.php",
        data: {id : id},
        success: function(data){
          alert("success!");
        }
      });
  }

$('.accord-section-subtitle').click(function(){
  var id = $(this).attr('id');
  url = "php/getchartdata.php?kode="+id;  
  switch(id){
    case 'ahp':    
      cont = 'vis';
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
  drawItems(url, cont);
});

$('.accord-section-title').click(function(){
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
  drawVisualization(source, id);
});

});