
// get grid div
const grid = document.querySelector('.grid'); 

// create div with 'cell' class an x amount of times
function createCell(amount) { 
    let cell = document.createElement('div');
    cell.className = "cell";
    cell.addEventListener("mouseenter", function (event){
        event.target.style.background = "purple";
    })
    amount
    return cell;
}

// create grid with number input
function createGrid(number){
    multiply = number * 16;
    gridMeasurements = number * 16;
    while (multiply --){
        grid.appendChild(createCell());
        grid.style.height = gridMeasurements + 'px';
        grid.style.width = gridMeasurements + 'px';
        
    }
}

function clearGrid(){
    createCell.cell.style.background = "purple";  
}


createGrid(42)