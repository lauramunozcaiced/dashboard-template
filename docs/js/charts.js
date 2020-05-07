
    google.charts.load('current', {'packages':['corechart', 'geochart'], 'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'},);
    google.charts.setOnLoadCallback(drawAreaChart);
    google.charts.setOnLoadCallback(drawDognoutCompleteChart);
    google.charts.setOnLoadCallback(drawDognoutMiddleChart);
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawAreaChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['',        80,20],
        ['Jan 02',  30,70],
        ['Jan 03',  60,20],
        ['Jan 04',  10,40],
        ['Jan 05', 120,30],
        ['Jan 06',  30,80],
        ['Jan 07',  10,50],
        ['',        20,30],
      ]);

      var options = {
        colors:['#1abb9c','#73879c'],
        legend: 'none',
        lineWidth: 0,
        vAxis: {minValue: 0}
      };

      var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

    function drawDognoutCompleteChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['IOS',     30],
        ['Android', 10],
        ['Blackberry',  20],
        ['Symbiam', 15],
        ['Others',    30]
      ]);

      var options = {
        slices: [{color: '#3498db'}, {color: '#26b99a'}, {color: '#9b59b6'}, {color: '#9cc2cb'}, {color: '#e74c3c'}],
        pieSliceText: 'none',
        pieHole: 0.4,
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }

    function drawDognoutMiddleChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['3200%',     25],
          ['', 25],
          ['',  25],
          ['Ejemplo2',  25],
        ]);
  
        var options = {
            legend: 'bottom',
          slices: [{color: '#ededed'}, {color: 'transparent'}, {color: 'transparent'}, {color: '#26b99a'} ],
          pieSliceText: 'none',
          pieHole: 0.4,
        };
  
        var chart = new google.visualization.PieChart(document.getElementById('donutmiddlechart'));
        chart.draw(data, options);
      }
  

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['Britain', 700],
          ['Spain', 700]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }