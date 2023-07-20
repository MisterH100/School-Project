let icon = document.querySelector(".nav__icon i")
let dropDown = document.querySelector(".nav--drop-down")

//click on icon function
icon.addEventListener('click', () => {
	    if(dropDown.style.display === "flex"){
			dropDown.style.display =  "none"; //hide drop down
		    icon.classList.add("fa-bars");    //change icon to bars
		    icon.classList.remove("fa-x");
        }
		else{
			dropDown.style.display = "flex"; //show drop down
		    icon.classList.add("fa-x");      //change icon to  x
		    icon.classList.remove("fa-bars");
		}
});