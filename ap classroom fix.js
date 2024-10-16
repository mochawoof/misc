// AP classroom fix for slightly older browsers
// Run in console

setInterval(() => {
    let right_columns = document.querySelectorAll(".right-column");
    right_columns.forEach((e) => {
        e.style.position = "absolute";
        e.style.top = "0";
        e.style.right = "0";
    });
}, 500);