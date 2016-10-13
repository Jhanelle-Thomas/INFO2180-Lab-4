window.onload = function() {
	var win = false;
	var start = false;
	
	var message = document.getElementById("status");;
	var boundaries = document.getElementsByClassName("boundary");
	var maze = document.getElementById("maze");
	var startGame = document.getElementById("start");
	var endGame = document.getElementById("end");
	
	function youLose(mes) {
		for(var x = 0; x <boundaries.length - 1; x++) {
			boundaries[x].className = "boundary youlose";
		}
		message.innerHTML = mes;
	}
	
	function youWin(mes) {
		win = true;
		message.innerHTML = mes;
	}
	
	for(var i = 0; i < boundaries.length - 1; i++) {	
        boundaries[i].onmouseover = function() {
			if(!win && start) {
				youLose("YOU LOST!!!")
			}
		};
    }
	
	startGame.onmouseover = function() {
		if (start && !win) {
			youLose("YOU LOST!!!");
		} else {
			start = true;
		}		
	};
	
	startGame.onclick = function() {
		win = false;
		start = true;
		
		message.innerHTML = "Move your mouse over the \"S\" to begin.";
		for(var x = 0; x <boundaries.length - 1; x++) {
				boundaries[x].className = "boundary";
		}		
	};
	
	endGame.onmouseover = function() {
		if (start) {
			youWin("YOU WIN!!!!");
		}
	};
	
	maze.onmouseleave = function() {
		if(start && !win) {
			youLose("YOU LOST!!!");
		}		
	}
}