<html>
  <head>
    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script type="text/javascript">

      // Load the Visualization API and the piechart package.
      google.load('visualization', '1');

      google.setOnLoadCallback(gambar);

      function drawItems() {
        var jsonChartData = $.ajax({
          url: "getchartdata.php",          
          dataType: "json",
          async: false          
        }).responseText;

        var jsonTableData = $.ajax({
          url: "gettabledata.php",          
          dataType: "json",
          async: false
        }).responseText;

        var chartdata = new google.visualization.DataTable(jsonChartData);
        var tabledata = new google.visualization.DataTable(jsonTableData);
        var options = {                      
            width:1000,
            height:1000
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));        
        chart.draw(chartdata, options);

        var table = new google.visualization.Table(document.getElementById('table_div'));
        table.draw(tabledata, {showRowNumber: true, alternatingRowStyle: true});
      }

      function gambar() {
        var jsonChartData = $.ajax({
          url: "getchartdata.php",          
          dataType: "json",
          async: false          
        }).responseText;

        var chartdata = new google.visualization.DataTable(jsonChartData);

        var wrapper = new google.visualization.ChartWrapper({
          chartType: 'BarChart',
          dataTable: chartdata,
          options: {'title': 'Bengawan Solo'},
          containerId: 'vis'
        });
        wrapper.draw();
      }

      
    </script>
  </head>
  <body>    
    <!--Div that will hold the pie chart>
    <div id="chart_div"></div>    
    <div id="table_div"></div-->
    <div id="vis_div" style="width: 600px; height: 400px"></div>
  </body>
</html>