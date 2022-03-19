// storing the row number as 1, will increase latter
let row = 1;

//getting submitted items from the form
let submitted_item = document.getElementById("submitButton");
submitted_item.addEventListener("click", DisplayEmployeeDetails);

//storing submutted items in an object then accessing them in a table
function DisplayEmployeeDetails() {

    let obj = {
        Name: document.getElementById("name").value,
        Address: document.getElementById("address").value,
        Id: document.getElementById("empid").value,
        Designation: document.getElementById("designation").value
    }

    //Checkint the inputs are empty or not
    if (!obj.Name || !obj.Address || !obj.Id || !obj.Designation) {
        alert("Please fill all of the boxes properly.");
        return;
    }

    let table = document.getElementById("table");
    let newRow = table.insertRow(row);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = obj.Name;
    cell2.innerHTML = obj.Address;
    cell3.innerHTML = obj.Id;
    cell4.innerHTML = obj.Designation;

    row++;

    // for edit any row getting the row's value
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            console.log(rIndex);

            document.getElementById("updatedName").value = this.cells[0].innerHTML;
            document.getElementById("updatedAddress").value = this.cells[1].innerHTML;
            document.getElementById("updatedId").value = this.cells[2].innerHTML;
            document.getElementById("updatedDesignation").value = this.cells[3].innerHTML;
        };
    }
}



// Storing the row's values which one we want to edit in the updated inputs box
function editRow() {
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("updatedName").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("updatedAddress").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("updatedId").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("updatedDesignation").value;
}

// updating the data to the existing employee table
function editTableDisplay() {
    document.querySelector('#editTable').setAttribute('style', 'display: block;')
}