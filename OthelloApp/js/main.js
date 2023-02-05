"use strict";

{
    const cells = document.querySelectorAll(".cell");
    let descsData = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    let descsBranch = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    let turn = 0;
    let x = 0;
    let y = 0;

    function reverseDiscs(index, ownColorValue) {
        x = index % 8;
        y = Math.floor(index / 8);
        let wholeParam = 0;
        let partParam;

        if (descsData[y][x] !== 0) {
            return;
        }

        // each derections
        descsBranch = descsData;
        partParam = 0;
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            if (descsData[y][x] !== ownColorValue) {
                descsBranch[y][x] = ownColorValue;
                partParam++;
            }
            if (descsData[y][x] === ownColorValue && partParam > 0) {
                descsData = descsBranch;
                wholeParam++;
            }
            x++;
        }
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            if (descsData[y][x] !== ownColorValue) {
                descsBranch[y][x] = ownColorValue;
                partParam++;
            }
            if (descsData[y][x] === ownColorValue && partParam > 0) {
                descsData = descsBranch;
                wholeParam++;
            }
            x++;
            y++;
        }
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            if (descsData[y][x] !== ownColorValue) {
                descsBranch[y][x] = ownColorValue;
                partParam++;
            }
            if (descsData[y][x] === ownColorValue && partParam > 0) {
                descsData = descsBranch;
                wholeParam++;
            }
            y++;
        }
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            if (descsData[y][x] !== ownColorValue) {
                descsBranch[y][x] = ownColorValue;
                partParam++;
            }
            if (descsData[y][x] === ownColorValue && partParam > 0) {
                descsData = descsBranch;
                wholeParam++;
            }
            x--;
            y++;
        }
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            if (descsData[y][x] !== ownColorValue) {
                descsBranch[y][x] = ownColorValue;
                partParam++;
            }
            if (descsData[y][x] === ownColorValue && partParam > 0) {
                descsData = descsBranch;
                wholeParam++;
            }
            x--;
        }
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            if (descsData[y][x] !== ownColorValue) {
                descsBranch[y][x] = ownColorValue;
                partParam++;
            }
            if (descsData[y][x] === ownColorValue && partParam > 0) {
                descsData = descsBranch;
                wholeParam++;
            }
            x--;
            y--;
        }
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            if (descsData[y][x] !== ownColorValue) {
                descsBranch[y][x] = ownColorValue;
                partParam++;
            }
            if (descsData[y][x] === ownColorValue && partParam > 0) {
                descsData = descsBranch;
                wholeParam++;
            }
            y--;
        }
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            if (descsData[y][x] !== ownColorValue) {
                descsBranch[y][x] = ownColorValue;
                partParam++;
            }
            if (descsData[y][x] === ownColorValue && partParam > 0) {
                descsData = descsBranch;
                wholeParam++;
            }
            x++;
            y--;
        }

        

        if (wholeParam > 0) {
            descsData[y][x] = ownColorValue;
        }
    }

    let ownColorValue = 2;

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            // switch (turn) {
            //     case 0:
            //         ownColorValue = 1;
            //         break;
            //     case 1:
            //         ownColorValue = 2;
            //         break;
            // }

            reverseDiscs(index, ownColorValue);

            console.log(descsData);
        });
    });
}