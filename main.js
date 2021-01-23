let customerArray = [];
let customer;

document.addEventListener("DOMContentLoaded", function (event) {
        // disable the lower part of the form until we have user input for all values
    document.getElementById("experience").disabled = true;
   
})


function formSubmitEvent() {
    let name = document.getElementById("custname").value;
    let city = document.getElementById("city").value;
    let payment = document.getElementById("payment").value;

    // we could do much better validation, but that's not the point of this example!
    if (name.length > 2 &&  city.length > 2 ) {
        document.getElementById("experience").disabled = false;       
    }
    else {
        alert("please fill in all fields");
    }

    customer = name + " " + city + " " + payment; 
    customerArray.push(customer);
    makeList();
}

function makeList() {
    let myUl = document.getElementById('list');
    myUl.innerHTML = "";
    let ul = document.createElement('ul');
    document.getElementById('list').appendChild(ul);
    for (let i = 0; i < customerArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = customerArray[i];
    };    
}