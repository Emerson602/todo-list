if (document.addEventListener) {
			    document.addEventListener("contextmenu", function(e) {
			        e.preventDefault();
			        return false;
			    });
			} else { //Versões antigas do IE
			    document.attachEvent("oncontextmenu", function(e) {
			        e = e || window.event;
			        e.returnValue = false;
			        return false;
			    });
			}