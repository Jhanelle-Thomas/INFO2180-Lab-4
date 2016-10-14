window.onload = function() {
	var win = false;
	var start = false;
	
	var message = document.getElementById("status");;
	var boundaries = document.getElementsByClassName("boundary");
	var maze = document.getElementById("maze");
	var startGame = document.getElementById("start");
	var endGame = document.getElementById("end");
	var out = document.getElementsByTagName("body")[0];
	
	var left = maze.offsetLeft;
	var right = maze.offsetLeft + maze.offsetWidth;
	var t = maze.offsetTop;
	var bottom = maze.offsetTop + maze.offsetHeight;
	
	function youLose() {
		for(var x = 0; x <boundaries.length - 1; x++) {
			boundaries[x].className = "boundary youlose";
		}
		message.innerHTML = "YOU LOST!!!";
	}
	
	function youWin() {
		win = true;
		message.innerHTML = "YOU WIN!!!!";
	}
	
	for(var i = 0; i < boundaries.length - 1; i++) {	
        boundaries[i].onmouseover = function() {
			if(!win && start) {
				youLose()
			}
		};
    }
	
	startGame.onmouseover = function() {
		if (start && !win) {
			youLose();
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
			youWin();
		}
	};
	 
	/* 
	maze.onmouseleave = function() {
		if(start && !win) {
			youLose();
		}		
	}*/

	out.onmousemove = function(event) {
		if (start && !win) {
			mouseX = event.clientX;
			mouseY = event.clientY;
			if (mouseX > right || mouseX < left || mouseY > bottom || mouseY < t) {
					youLose();						
			}
		}
	}
}