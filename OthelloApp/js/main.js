"use strict";

{
    const cells = document.querySelectorAll("cell");
    const descsData = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    function isValid(index) {
        
    }

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            if (isValid(index) === false) {
                return;
            }

            showDescs();
        });
    });

    console.log(Math.floor(1.3));
}