// ==== TOP NAV ====
//Nav bar
    const bar = document.getElementById("bar");
    const cancel = document.getElementById("cancel");
    const move = document.getElementById("sfTpNvItms");

    // Open menu when bars icon is clicked
    bar.addEventListener("click", function () {
        move.style.left = "0";
    });

    // Close menu when cross icon is clicked
    cancel.addEventListener("click", function () {
        move.style.left = "-100%";
    });