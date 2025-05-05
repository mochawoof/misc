let check;
let next;

document.querySelectorAll("button").forEach((b) => {
	if (b.innerText == "Check Answer") {
		check = b;
	} else if (b.innerText == "Next") {
		next = b;
	}
});


let interval = -1;

let start = document.createElement("button");
start.innerText = "Start";
start.disabled = false;
start.style.position = "fixed";
start.style.left = 0;
start.style.top = 0;
start.style.zIndex = Number.MAX_SAFE_INTEGER;
document.body.appendChild(start);

start.onclick = () => {
	clearInterval(interval);
	start.disabled = true;
	stop.disabled = false;
	
	interval = setInterval(() => {
		next.click();
		document.querySelector(".slides-control").childNodes.forEach((s) => {
			if (s.style) {
				if (s.style.visibility == "visible") {
					let l = s.querySelector("ul");
					for (let i = 0; i < l.childNodes.length; i++) {
    						let e = l.childNodes[i];
    						e.children[0].click();
    						check.click();
    						if (e.classList.contains("lrn_correct")) {
        						break;
    						}
					}
				}
			}
		});
	}, 500);
};

let stop = document.createElement("button");
stop.innerText = "Stop";
stop.disabled = true;
stop.style.position = "fixed";
stop.style.left = "50px";
stop.style.top = 0;
stop.style.zIndex = Number.MAX_SAFE_INTEGER;
document.body.appendChild(stop);
stop.onclick = () => {
	clearInterval(interval);
	start.disabled = false;
	stop.disabled = true;
}