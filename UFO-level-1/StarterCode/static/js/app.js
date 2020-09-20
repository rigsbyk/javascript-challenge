// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Short version of addition table to HTML

function buildTable(tableData){
    tbody.html("");

    //Loop thru the data to add to add it to HTML wit the arrow function
    tableData.forEach(alienData => {
        var row = tbody.append("tr");
        Object.entries(alienData).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
};

// Filter data from the table using date filter
var button = d3.select("#filter-btn")

button.on("click", function() {
    // Prevent the website from refreshing
    d3.event.preventDefault();
    // Select the input element where we will type our filter
    var inputFilterDate = d3.select("#datetime");

    // Get the value date of the input filter
    var inputDate = inputFilterDate.property("value").trim();

    // Let makes the filter happen
    var filteredDate = tableData.filter(tableData=>tableData.datetime === inputDate);

    // Add filtered to the sighting table 

    tbody.html("")

    var result = {
        filteredDate
    }

    if (result.filteredDate.length !=0){
        buildTable(filteredDate);
    }
        else {
            tbody.append("tr").append("td").text("Filter did not work, try another one!!!")
        }

});



buildTable(tableData);

var resetButton = d3.select("#reset-btn")
resetButton.on("click", function() {
    tbody.html("");
    buildTable(tableData)
});

