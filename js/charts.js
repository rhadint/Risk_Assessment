google.load('visualization', '1', { packages: ['corechart'] });
var n;
var id;
var source;
var cont;
var query;
var opt;
var temp1;
var temp2;

$(document).ready(function(){  
  function drawVisualization(opt, cont, source) {
    if (cont=='vis3') {
      query = new google.visualization.Query("https://www.google.com/fusiontables/gvizdata?tq=");
      query.setQuery("select 'Tujuan', 'ch' as 'Water Level', 'sosial' as 'Rainfall', 'fisik' as 'PV', 'ekonomi' as 'EV', 'kbt' as 'Event' from " + source + " where Tujuan = '" + opt + "'");
    } else {            
      query = new google.visualization.Query("https://www.google.com/fusiontables/gvizdata?tq=");
      query.setQuery("select 'Tujuan', 'tma' as 'Water Level', 'ch' as 'Rainfall', 'kbt' as 'Past Events', 'sos' as 'SV', 'fis' as 'PV', 'eko' as 'EV', 'kap' as 'Capacities' from " + source + " where Tujuan = '" + opt + "'");
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
    drawVisualization(opt, temp1, temp2);
  }

  window.updateChart = updateChart;

$('.accord-section-title').click(function(){
  id = $(this).attr('id');  
  switch(id){    
    case 'ngawi':          
      source = '19mnJY0B_KzTG9V2i1A0MbsyKuxXUQ1bCQ3zqMzne';
      opt = 'Ngawi';
      cont = "vis";
      break;
    case 'bojonegoro':       
      source = '1aHSmezhiczwTIIQfq4fSM4ZG7oXNoSxJRiU2P1la';
      opt = 'Balen';
      cont = "visualization";
      break;
    case 'tuban':      
      source = '1sUuESYYmfr09WddDlp4KAdFMpFN7bwINrbVtdx4_';
      opt = 'Widang';
      cont = "vis2";
      break;
    case 'lamongan':      
      source = '1NTy5EH_0rogpEwNhVDleajyeAeCXMmkCjm1Ns39e';
      opt = 'Babat';
      cont = "vis1";
      break;
    case 'gresik':      
      source = '1lpvQYRmshDAvLVWS2j5NGV6hAk74WzJWwiPdwTCP';
      opt = 'Manyar';
      cont = "vis3";
      break;
    default: break;
  }
  if(id!='jatim'){    
    drawVisualization(opt, cont, source);
    temp1=cont;
    temp2=source;
  }
});

});