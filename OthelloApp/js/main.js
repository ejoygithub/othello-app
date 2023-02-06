"use strict";

{
    const cells = document.querySelectorAll(".cell");
    let descsData = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 0, 0, 0],
        [0, 0, 0, 2, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    let descsBranch = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    let turn = 0;
    let ownColorValue = 1;

    function reverseDiscs(index, ownColorValue) {
        let x = index % 8;
        let y = Math.floor(index / 8);
        let wholeParam = 0;
        let partParam;

        if (descsData[y][x] !== 0) {
            return;
        }

        // each derections
        x = index % 8;
        y = Math.floor(index / 8);
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
            descsBranch[y][x] = ownColorValue;
            partParam++;
            if (descsData[y][x] === ownColorValue && partParam > 1) {
                descsData = descsBranch;
                wholeParam++;
                break;
            }
            x++;
        }
        x = index % 8;
        y = Math.floor(index / 8);
        descsBranch = descsData;
        partParam = 0;
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x++;
                y++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            descsBranch[y][x] = ownColorValue;
            partParam++;
            if (descsData[y][x] === ownColorValue && partParam > 1) {
                descsData = descsBranch;
                wholeParam++;
                break;
            }
            x++;
            y++;
        }
        x = index % 8;
        y = Math.floor(index / 8);
        descsBranch = descsData;
        partParam = 0;
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                y++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            descsBranch[y][x] = ownColorValue;
            partParam++;
            if (descsData[y][x] === ownColorValue && partParam > 1) {
                descsData = descsBranch;
                wholeParam++;
                break;
            }
            y++;
        }
        x = index % 8;
        y = Math.floor(index / 8);
        descsBranch = descsData;
        partParam = 0;
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x--;
                y++;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            descsBranch[y][x] = ownColorValue;
            partParam++;
            if (descsData[y][x] === ownColorValue && partParam > 1) {
                descsData = descsBranch;
                wholeParam++;
                break;
            }
            x--;
            y++;
        }
        x = index % 8;
        y = Math.floor(index / 8);
        descsBranch = descsData;
        partParam = 0;
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x--;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            descsBranch[y][x] = ownColorValue;
            partParam++;
            if (descsData[y][x] === ownColorValue && partParam > 1) {
                descsData = descsBranch;
                wholeParam++;
                break;
            }
            x--;
        }
        x = index % 8;
        y = Math.floor(index / 8);
        descsBranch = descsData;
        partParam = 0;
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x--;
                y--;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            descsBranch[y][x] = ownColorValue;
            partParam++;
            if (descsData[y][x] === ownColorValue && partParam > 1) {
                descsData = descsBranch;
                wholeParam++;
                break;
            }
            x--;
            y--;
        }
        x = index % 8;
        y = Math.floor(index / 8);
        descsBranch = descsData;
        partParam = 0;
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                y--;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            descsBranch[y][x] = ownColorValue;
            partParam++;
            if (descsData[y][x] === ownColorValue && partParam > 1) {
                descsData = descsBranch;
                wholeParam++;
                break;
            }
            y--;
        }
        x = index % 8;
        y = Math.floor(index / 8);
        descsBranch = descsData;
        partParam = 0;
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
            if (descsData[y][x] === 0 && partParam === 0) {
                x++;
                y--;
                continue;
            }
            if (descsData[y][x] === 0 || (descsData[y][x] === ownColorValue && partParam === 0)) {
                break;
            }
            descsBranch[y][x] = ownColorValue;
            partParam++;
            if (descsData[y][x] === ownColorValue && partParam > 1) {
                descsData = descsBranch;
                wholeParam++;
                break;
            }
            x++;
            y--;
        }

        

        
        if (wholeParam > 0) {
            x = index % 8;
            y = Math.floor(index / 8);
            descsData[y][x] = ownColorValue;
            turn++;
        }
    }

    cells.forEach((cell) => {
        const desc = document.createElement("div");
        cell.appendChild(desc);
    });

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            switch (turn % 2) {
                case 0:
                    ownColorValue = 1;
                    break;
                case 1:
                    ownColorValue = 2;
                    break;
            }

            reverseDiscs(index, ownColorValue);

            cells.forEach((cell, index) => {
                let x = index % 8;
                let y = Math.floor(index / 8);
                const cellChild = cell.firstChild;

                switch (descsData[y][x]) {
                    case 1:
                        if (cellChild.classList.contains("black")) {
                        }
                        cellChild.classList.add("white");
                        break;
                    case 2:
                        if (cellChild.classList.contains("white")) {
                            cellChild.classList.remove("white");
                        }
                        cellChild.classList.add("black");
                        break;
                }
            });
            console.log(descsData);
        });
    });
}