google.load('visualization', '1', { packages: ['corechart'] });
var n;
var id;
var source;
var cont;
var query;
var opt;

//$(document).ready(function(){  
  function drawVisualization(opt, cont, source) {
    if (cont=='vis') {
      query = new google.visualization.Query("https://www.google.com/fusiontables/gvizdata?tq=");
      query.setQuery("select 'Tujuan', 'ch', 'sosial', 'fisik', 'ekonomi', 'kbt' from " + source + " where Tujuan = '" + opt + "'");
    } else {      
      query = new google.visualization.Query("https://www.google.com/fusiontables/gvizdata?tq=");
      query.setQuery("select 'Tujuan', 'tma', 'ch', 'se', 'fisik', 'kbt' from " + source + " where Tujuan = '" + opt + "'");
    }    
    query.send(handleQueryResponse);
    function handleQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getReasons() + response.getMessage() + response.getDetailedMessage());
        return;
      }
      var data = response.getDataTable();
      var wrapper = new google.visualization.ChartWrapper();
      wrapper.setDataTable(data);
      wrapper.setChartType("ColumnChart");
      wrapper.setContainerId(cont);                  
      wrapper.draw();
    }
  }

  function updateChart (opt) {
    cont = this.value;
    source = this.value;
    drawVisualization(cont, source, opt);
  }

$('.accord-section-title').click(function(){
  id = $(this).attr('id');  
  switch(id){    
    case 'ngawi':          
      source = '1pAq8MExPv4_lh7zzbwPo9XJvECH-du4wb-R1I4Ng';
      opt = 'Ngawi';
      cont = "vis";
      break;
    case 'bojonegoro':       
      source = '1B5n-vTOUF4Eaaoc23TwitN20lmM2II0DIlRnjTLU';
      opt = 'Balen';
      cont = "visualization";
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
  drawVisualization(opt, cont, source);
});

//});