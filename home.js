$(document).ready(function() {
	// toggle mobile menu
	$("#menu-icon").click(function() {
		$("nav ul").toggleClass("show");
	});

	// submit search form
	$("#search-form").submit(function(event) {
		event.preventDefault();
		var keywords = $("#search").val();
		// TODO: send AJAX request to server to search for books
	});
});

let search = document.getElementById(`search`);
  search.addEventListener("input",function(){

    let inputVal = search.value.toLowerCase();
    console.log(`Input event fired`,inputVal);
    let bookCards = document.getElementsByClassName(`bookCard`);
    Array.from(bookCards).forEach(function(element){
        let cardTxt = element.getElementsByClassName(`bkname`)[0].innerText;
        console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else {
            element.style.display = "none";
        }
    })

})