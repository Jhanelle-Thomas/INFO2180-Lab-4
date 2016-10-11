window.onload = function() {
	var lost = false;
	var win = false;
	var start = false;
	var end = false;
	var outOfBounds = false;
	
	var boundaries = document.getElementsByClassName("boundary");
	for(var i = 0; i < boundaries.length; i++) {	
        var boundary = boundaries[i];
        boundary.onmouseover = function() {
			lost = true;
			for(var x = 0; x <boundaries.length; x++) {
				boundaries[x].style.backgroundColor = "#f88";
			}
			
		};
    }
	
	/*
	var boundaries = document.getElementsByClassName("boundary");
	for(var i = 0; i < boundaries.length; i++) {	
        var boundary = boundaries[i];
        boundary.onmouseover = function() {
			this.className = "youlose";
			lost = true;
		};
    }
	
	var boundaries = document.querySelectorAll(".boundary");
	for(var i = 0; i < boundaries.length; i++) {	
        var boundary = boundaries[i];
        boundary.onmouseover = function() {
			this.className = "youlose";
			lost = true;
		};
	}*/
	
	var startGame = document.getElementById("start");
	startGame.onmouseover = function() {
		if (start) {
			lost = true;
		} else {
			start = true;
		}
		
	};
	
	var endGame = document.getElementById("end");
	endGame.onmouseover = function() {
		if (start && !lost) {
			win = true;
		} else if (start && outOfBounds) {
			lost = true;
		}
	};
}

