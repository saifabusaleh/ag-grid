var gridOptions = {
    columnDefs: [
        {headerName: 'Athlete', field: 'athlete', minWidth: 150},
        {headerName: 'Age', field: 'age', minWidth: 50, filter: 'number'},
        {headerName: 'Country', field: 'country', width: 120},
        {headerName: 'Year', field: 'year', width: 90},
        {headerName: 'Date', field: 'date', width: 110},
        {headerName: 'Sport', field: 'sport', width: 110},
        {headerName: 'Gold', field: 'gold', width: 110, aggFunc: 'sum'},
        {headerName: 'Silver', field: 'silver', width: 110, aggFunc: 'sum'},
        {headerName: 'Bronze', field: 'bronze', width: 110, aggFunc: 'sum'}
    ],

    enableColResize: true,
    ensureDomOrder: true,
    suppressColumnVirtualisation: true,
    rowBuffer: 999
};

// do http request to get our sample data - not using any framework to keep the example self contained.
// you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
function fetchData(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url);
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var httpResult = JSON.parse(httpRequest.responseText);
            callback(httpResult);
        }
    };
}
// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    fetchData('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json', function(data) {
        gridOptions.api.setRowData(data.slice(0, 500));
    });
});