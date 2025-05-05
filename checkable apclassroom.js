let check;
let next;

document.querySelectorAll("button").forEach((b) => {
	if (b.innerText == "Check Answer") {
		check = b;
	} else if (b.innerText == "Next") {
		next = b;
	}
});

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
	
	function a() {
		next.click();
		document.querySelector(".slides-control").childNodes.forEach((s) => {
			if (s.style && stop.disabled == false) {
				if (s.style.visibility == "visible") {
					let l = s.querySelector("ul");
					function o(i) {
						let e = l.childNodes[i];
    					e.children[0].click();
    					check.click();
    					if (!e.classList.contains("lrn_correct") && i < l.childNodes.length) {
        					setTimeout(() => {o(i + 1);}, 200);
    					}
					}
					o(0);
				}
			}
		});
	}
	a();
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
	start.disabled = false;
	stop.disabled = true;
}