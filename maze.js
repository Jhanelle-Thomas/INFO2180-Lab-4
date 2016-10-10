window.onload = function() {
	var lost = false;
	var win = false;
	var start = false;
	var end = false;
	var outOfBounds = false;
	
	/*
	var boundaryID = document.getElementById("boundary1");
	boundaryID.onmouseover = function() {
		boundaryID.style.backgroundColor = "red";
	}
	*/
	
	var boundaries = document.getElementsByClassName("boundary");
	for(var i = 0; i < boundaries.length; i++) {	
        var boundary = boundaries[i];
        boundary.onmouseover = function() {
			lost = true;
			this.style.backgroundColor = "red";
		};
    }
	
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

