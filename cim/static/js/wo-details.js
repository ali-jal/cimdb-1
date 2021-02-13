console.log("I am  connected!")

function go_back() {
  window.history.back();
}



// Open another wo using the wo_id
//reloads the page
function reload_workorder(){
  console.log("clicked")
  var wo=document.getElementById("wo_id_reload").value;
  
  valid=["879845","815348"]
  if(valid.includes(wo)){
      
    var url='/wo-details?'+'wo_id='+wo
    console.log("URL IS: ",url)
    
    window.location.href=url
  }else{
  alert('only "879845" and "815348" are implemented for demo')
}
}




  

//get component information details
function components_info(serial_number){
  console.log("clicked")
    
  valid=["P7125","P8766"]
if(valid.includes(serial_number)){
  var url='/product-details?'+'product_sn='+serial_number
  console.log("URL IS: ",url)
  
  window.location.href=url
}else{
  alert('only "P7125" and"P8766" are implemented for demo')

};

}

//edit product information 
function edit_product_info(serial_number){
  console.log("clicked")
  alert("Product: "+serial_number+" will be editted later!")
};

//delete product details
function delete_product(serial_number){
  console.log("clicked")
  alert("Product: "+serial_number+" will be DELETED later!")
};


var d

fetch('/data/product_catalog')
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  d=data
})
.catch((error) => {
  console.error('Error:', error);
});

document.addEventListener('input', function (event) {

    // Only run on our select menu
	if (event.target.id !== 'product_family') return;

	// The selected value
	console.log(event.target.value);
    var family=document.getElementById("product_family").value
    console.log("selected: ",family)
    var models = document.getElementById("product_pn")
    //clear options
    models.innerHTML = ""
    console.log("Data is: ",d)
    var topmax = d[family].length
    console.log("max is: ", topmax, " and values are: ",d[family])
    // console.log("values are: ",d[family])
    for (var i = 0; i < d[family].length; i++) {
        var o = document.createElement("option");
        o.value = d[family][i]
        o.text = d[family][i]
        models.appendChild(o);
}

	// The selected option element
	console.log(event.target.options[event.target.selectedIndex]);

}, false)
