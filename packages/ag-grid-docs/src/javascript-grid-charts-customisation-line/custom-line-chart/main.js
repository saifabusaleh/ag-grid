var columnDefs = [
    {field: "country", width: 150, chartType: 'category'},
    {field: "gold", chartType: 'series'},
    {field: "silver", chartType: 'series'},
    {field: "bronze", chartType: 'series'},
    {headerName: "A", valueGetter: 'Math.floor(Math.random()*1000)', chartType: 'series'},
    {headerName: "B", valueGetter: 'Math.floor(Math.random()*1000)', chartType: 'series'},
    {headerName: "C", valueGetter: 'Math.floor(Math.random()*1000)', chartType: 'series'},
    {headerName: "D", valueGetter: 'Math.floor(Math.random()*1000)', chartType: 'series'}
];

function createRowData() {
    let countries = ["Ireland", "Spain", "United Kingdom", "France", "Germany", "Luxembourg", "Sweden",
        "Norway", "Italy", "Greece", "Iceland", "Portugal", "Malta", "Brazil", "Argentina",
        "Colombia", "Peru", "Venezuela", "Uruguay", "Belgium"];
    let rowData = [];
    countries.forEach( function(country, index) {
        rowData.push({
                country: country,
                gold: Math.floor(((index+1 / 7) * 333)%100),
                silver: Math.floor(((index+1 / 3) * 555)%100),
                bronze: Math.floor(((index+1 / 7.3) * 777)%100),
        });
    });
    return rowData;
}

var gridOptions = {
    defaultColDef: {
        width: 100,
        resizable: true
    },
    popupParent: document.body,
    columnDefs: columnDefs,
    rowData: createRowData(),
    enableRangeSelection: true,
    enableCharts: true,
    onGridReady: onGridReady,
    processChartOptions: processChartOptions
};

function processChartOptions(params) {

    var options = params.options;
    console.log('chart options:', options);

    // we are only interested in processing bar type.
    // so if user changes the type using the chart control,
    // we ignore it.
    if (params.type!=='line') {
        console.log('chart type is ' + params.type + ', making no changes.');
        return params.options;
    }

    options.height = 500;
    options.width = 1000;

    options.padding = {top: 10, right: 10, bottom: 20, left: 20};

    options.tooltipClass = 'my-tool-tip-class';

    options.legendPosition = 'bottom';
    options.legendPadding = 20;

    var legend = options.legend;
    legend.markerStrokeWidth = 4;
    legend.markerSize = 30;
    legend.markerPadding = 20;
    legend.itemPaddingX = 40;
    legend.itemPaddingY = 100;
    legend.labelFont = 'italic 20px Comic Sans MS';
    legend.labelColor = '#2222aa';

    // changes to the xAxis
    var xAxis = options.xAxis;
    xAxis.lineWidth = 4;
    xAxis.lineColor = '#000000';

    xAxis.tickWidth = 4;
    xAxis.tickSize = 10;
    xAxis.tickPadding = 10;
    xAxis.tickColor = 'black';

    xAxis.labelFont = 'italic 15px Comic Sans MS';
    xAxis.labelColor = 'rgb(0,0,0)';
    xAxis.labelRotation = 20;
    xAxis.labelFormatter = function(value) {
        return value.toString().toUpperCase();
    };
    xAxis.gridStyle = [
        {
            stroke: 'red',
            lineDash: [4,2]
        },
        {
            stroke: 'blue'
        }
    ];

    // changes to the yAxis
    var yAxis = options.yAxis;
    yAxis.lineWidth = 4;
    yAxis.lineColor = '#000000';
    yAxis.tickWidth = 4;
    yAxis.tickSize = 10;
    yAxis.tickPadding = 10;
    yAxis.tickColor = 'black';
    yAxis.labelFont = 'italic 15px Comic Sans MS';
    yAxis.labelColor = 'rgb(0,0,0)';
    yAxis.labelRotation = -20;
    yAxis.labelFormatter = function(value) {
        return value.toString().toUpperCase();
    };
    yAxis.gridStyle = [
        {
            stroke: 'black',
            lineDash: [2,2]
        }
    ];

    var seriesDefaults = options.seriesDefaults;

    var gold = '#d4af37';
    var silver = '#c0c0c0';
    var bronze = '#cd7f32';

    var gold2 = '#c49f27';
    var silver2 = '#b0b0b0';
    var bronze2 = '#bd6f22';

    seriesDefaults.fills = [gold, silver, bronze];
    seriesDefaults.strokes = [gold2, silver2, bronze2];
    seriesDefaults.strokeWidth = 10;

    seriesDefaults.marker = true;
    seriesDefaults.markerSize = 20;
    seriesDefaults.markerStrokeWidth = 10;

    seriesDefaults.tooltipRenderer = function(params) {
        var xField = params.xField;
        var yField = params.yField;
        var x = params.datum[xField];
        var y = params.datum[yField];
        return '<b>'+xField.toUpperCase()+':</b> ' + x + '<br/><b>'+yField.toUpperCase()+':</b> '+y;
    };

    return options;
}

function onGridReady(params) {
    var cellRange = {
        rowStartIndex: 0,
        rowEndIndex: 4,
        columns: ['country', 'gold', 'silver', 'bronze']
    };

    var chartRangeParams = {
        cellRange: cellRange,
        chartType: 'line'
    };

    setTimeout(function () {
        params.api.chartRange(chartRangeParams);
    }, 100);
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});