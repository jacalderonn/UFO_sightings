// from data.js
var tableData = data;

let button = d3.select("#filter-btn");
let input = d3.select("#datetime");

function addTable(){
    d3.event.preventDefault();

    // Cleaning the table before any new search
    let tbody = d3.select("tbody");
    tbody.html("");

    // Getting the date to look up
    let input_datetime = d3.select("#datetime").property("value");

    // Adding rows and elements that match the input date
    for(let i = 0; i<tableData.length; i++){
        if(tableData[i].datetime === input_datetime){
            let tbody = d3.select("tbody");
            let row = tbody.append("tr");
            
            // Adding the elements 
            row.append("td").text(tableData[i].datetime)
            row.append("td").text(tableData[i].city)
            row.append("td").text(tableData[i].state)
            row.append("td").text(tableData[i].country)
            row.append("td").text(tableData[i].shape)
            row.append("td").text(tableData[i].durationMinutes)
            row.append("td").text(tableData[i].comments)
        }
    }
};

button.on("click", addTable);
input.on("submit", addTable);