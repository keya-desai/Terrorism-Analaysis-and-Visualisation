/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("stackedDiv", am4charts.XYChart);


// Add data
chart.data = [
{"year":  "1970", "attacks": 468, "kills": 33, "wounds": 160}, 
{"year":  "1971", "attacks": 247, "kills": 20, "wounds": 55}, 
{"year":  "1972", "attacks": 68, "kills": 10, "wounds": 35}, 
{"year":  "1973", "attacks": 58, "kills": 45, "wounds": 33}, 
{"year":  "1974", "attacks": 94, "kills": 16, "wounds": 54}, 
{"year":  "1975", "attacks": 149, "kills": 24, "wounds": 158}, 
{"year":  "1976", "attacks": 105, "kills": 4, "wounds": 41}, 
{"year":  "1977", "attacks": 130, "kills": 4, "wounds": 17}, 
{"year":  "1978", "attacks": 87, "kills": 8, "wounds": 8}, 
{"year":  "1979", "attacks": 69, "kills": 18, "wounds": 58}, 
{"year":  "1980", "attacks": 67, "kills": 15, "wounds": 22}, 
{"year":  "1981", "attacks": 74, "kills": 8, "wounds": 15}, 
{"year":  "1982", "attacks": 78, "kills": 11, "wounds": 37}, 
{"year":  "1983", "attacks": 44, "kills": 8, "wounds": 5}, 
{"year":  "1984", "attacks": 63, "kills": 3, "wounds": 780}, 
{"year":  "1985", "attacks": 40, "kills": 3, "wounds": 13}, 
{"year":  "1986", "attacks": 49, "kills": 1, "wounds": 36}, 
{"year":  "1987", "attacks": 34, "kills": 1, "wounds": 1}, 
{"year":  "1988", "attacks": 27, "kills": 1, "wounds": 1}, 
{"year":  "1989", "attacks": 42, "kills": 3, "wounds": 14}, 
{"year":  "1990", "attacks": 32, "kills": 5, "wounds": 7}, 
{"year":  "1991", "attacks": 30, "kills": 2, "wounds": 4}, 
{"year":  "1992", "attacks": 32, "kills": 2, "wounds": 3}, 
{"year":  "1993", "attacks": 55, "kills": 10, "wounds": 16}, 
{"year":  "1994", "attacks": 60, "kills": 178, "wounds": 738}, 
{"year":  "1995", "attacks": 35, "kills": 2, "wounds": 119}, 
{"year":  "1996", "attacks": 40, "kills": 2, "wounds": 18}, 
{"year":  "1997", "attacks": 31, "kills": 4, "wounds": 3}, 
{"year":  "1998", "attacks": 53, "kills": 20, "wounds": 40}, 
{"year":  "1999", "attacks": 32, "kills": 0, "wounds": 7}, 
{"year":  "2000", "attacks": 41, "kills": 3008, "wounds": 16515}, 
{"year":  "2001", "attacks": 33, "kills": 4, "wounds": 11}, 
{"year":  "2002", "attacks": 33, "kills": 0, "wounds": 0}, 
{"year":  "2003", "attacks": 9, "kills": 0, "wounds": 0}, 
{"year":  "2004", "attacks": 21, "kills": 0, "wounds": 0}, 
{"year":  "2005", "attacks": 6, "kills": 1, "wounds": 14}, 
{"year":  "2006", "attacks": 8, "kills": 0, "wounds": 0}, 
{"year":  "2007", "attacks": 18, "kills": 2, "wounds": 13}, 
{"year":  "2008", "attacks": 11, "kills": 18, "wounds": 41}, 
{"year":  "2009", "attacks": 17, "kills": 4, "wounds": 17}, 
{"year":  "2010", "attacks": 10, "kills": 0, "wounds": 2}, 
{"year":  "2011", "attacks": 20, "kills": 7, "wounds": 7}, 
{"year":  "2012", "attacks": 20, "kills": 23, "wounds": 436}, 
{"year":  "2013", "attacks": 29, "kills": 26, "wounds": 19}, 
{"year":  "2014", "attacks": 38, "kills": 54, "wounds": 58}, 
{"year":  "2015", "attacks": 64, "kills": 68, "wounds": 139}, 
{"year":  "2016", "attacks": 65, "kills": 95, "wounds": 932}
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;

var title = chart.titles.create();
title.text = "Number of Attacks/Deaths/Wounds in the U.S. through the Years (1970-2017)";
title.fontSize = 25;
title.marginBottom = 30;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inside = true;
valueAxis.renderer.labels.template.disabled = true;
valueAxis.min = 0;
/* valueAxis.max = 3100; */

// Create series
function createSeries(field, name) {
  
  // Set up series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.name = name;
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "year";
  series.sequencedInterpolation = true;
  
  // Make it stacked
  series.stacked = true;
  
  // Configure columns
  series.columns.template.width = am4core.percent(60);
  series.tooltipHTML = "<span style='font-size:14px; color:#000000;'><b>{name}: {valueY.value}</b></span>";
  series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
  
  // Add label
  var labelBullet = series.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.text = "{valueY}";
  labelBullet.locationY = 0.5;
  labelBullet.label.hideOversized = true;
  
  return series;
}

createSeries("attacks", "attacks");
createSeries("kills", "kills");
createSeries("wounds", "wounds");
/* createSeries("lamerica", "Latin America");
createSeries("meast", "Middle-East");
createSeries("africa", "Africa");
 */
chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = categoryAxis;
chart.scrollbarX = new am4core.Scrollbar();
// Create vertical scrollbar and place it before the value axis

chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.parent = chart.leftAxesContainer;
chart.scrollbarY.toBack();
 
// Legend
chart.legend = new am4charts.Legend();