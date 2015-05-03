google.load('visualization', '1', { packages: ['corechart'] });
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

  function drawVisualization() {

    var queryText = new google.visualization.Query('http://www.google.com/fusiontables/gvizdata?tq=1B5n-vTOUF4Eaaoc23TwitN20lmM2II0DIlRnjTLU');
    queryText.setQuery = ('SELECT Tujuan, tma, ch, fisik, se, kbt');
    queryText.send(function (response) {

      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      var data = response.getDatatable();
      var wrapper = new google.visualization.ChartWrapper({
        containerId: 'visualization',        
        query: data,      
        chartType: 'ColumnChart',
        options: {'title': 'Bojonegoro'}
      });
      wrapper.draw();
    });

    
  }

  function drawVisualization2(id) {
        google.visualization.drawChart({
          containerId: "visualization",
          dataSourceUrl: "http://www.google.com/fusiontables/gvizdata?tq=",
          query: "SELECT Tujuan, tma, ch, fisik, se, kbt FROM 1B5n-vTOUF4Eaaoc23TwitN20lmM2II0DIlRnjTLU WHERE Tujuan = 'Balen'",
          chartType: "ColumnChart",
          options: {
            title: id            
          }
        });
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
  drawVisualization();
  //drawVisualization2(id);
});

});