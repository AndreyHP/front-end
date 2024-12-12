function createImg(){
	var div = document.getElementById("page-body");
	var img = document.createElement("img");


	img.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2.tmbi.com%2FTOH%2FImages%2FPhotos%2F37%2F1200x1200%2Fexps28800_UG143377D12_18_1b_RMS.jpg&f=1&nofb=1&ipt=8da74013bda9beed361e937129bcd74dbb2737a57501abe022d56d512f8a8b40&ipo=images";


	img.className = "burger";


	div?.appendChild(img);

}


function createButton(){
	var div = document.getElementById("search-container");
    


	var btn = document.createElement("button");
    var spacer = document.createElement("div");
    

	btn.textContent = "Pedidos";
    spacer.className = "spacer";

	//btn.className = "center-btn";
    div?.appendChild(spacer);
	div?.appendChild(btn);
    


	// Add an event listener to the button
	btn.addEventListener('click', () => {
		
	});

};


document.addEventListener("DOMContentLoaded", () => {
	createImg();
    createButton();
});