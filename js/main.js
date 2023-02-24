"use strict";

{
    const cells = document.querySelectorAll(".cell");
    let descsData = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 0, 0, 0],
        [0, 0, 0, 4, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    let turn = 0;
    let playerNum = 4;
    let ownColorValue = 1;
    let ownColors = ["white", "black", "blue", "yellow"];

    cells.forEach((cell) => {
        const desc = document.createElement("div");
        cell.appendChild(desc);
    });

    function reverseDiscs(descsData, index, ownColorValue) {
        const direction = [0, 1, 1, 1, 0, -1, -1, -1];
        let x = index % 8;
        let y = Math.floor(index / 8);
        let BranchData = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 2, 0, 0, 0],
            [0, 0, 0, 2, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];
        let validCheckValue = 0;
        let validCheckChild = 0;

        // can't put many descs
        if (descsData[y][x] !== 0) {
            return descsData;
        }

        // reseach each derections
        for (let operator = 0; operator < direction.length; operator++) {
            x = index % 8;
            y = Math.floor(index / 8);
            x += direction[operator];
            y += direction[(operator + 6) % 8];
            BranchData = [
                [...descsData[0]],
                [...descsData[1]],
                [...descsData[2]],
                [...descsData[3]],
                [...descsData[4]],
                [...descsData[5]],
                [...descsData[6]],
                [...descsData[7]],
            ];
            validCheckChild = 0;
            while (x >= 0 && x < 8 && y >= 0 && y < 8) {
                if (descsData[y][x] === 0) {
                    break; 
                }
                if (descsData[y][x] === ownColorValue) {
                    descsData = [
                        [...BranchData[0]],
                        [...BranchData[1]],
                        [...BranchData[2]],
                        [...BranchData[3]],
                        [...BranchData[4]],
                        [...BranchData[5]],
                        [...BranchData[6]],
                        [...BranchData[7]],
                    ];
                    if (validCheckChild > 0) {
                        validCheckValue++;
                    }
                    break;
                }
                BranchData[y][x] = ownColorValue;
                x += direction[operator];
                y += direction[(operator + 6) % 8];
                validCheckChild++;
            }
        }
        if (validCheckValue > 0) {
            x = index % 8;
            y = Math.floor(index / 8);
            descsData[y][x] = ownColorValue;
        }
        
        return descsData;
    }

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            ownColorValue = turn % playerNum + 1;
            turn++;
            console.log(ownColorValue);

            descsData = [
                [...reverseDiscs(descsData, index, ownColorValue)[0]],
                [...reverseDiscs(descsData, index, ownColorValue)[1]],
                [...reverseDiscs(descsData, index, ownColorValue)[2]],
                [...reverseDiscs(descsData, index, ownColorValue)[3]],
                [...reverseDiscs(descsData, index, ownColorValue)[4]],
                [...reverseDiscs(descsData, index, ownColorValue)[5]],
                [...reverseDiscs(descsData, index, ownColorValue)[6]],
                [...reverseDiscs(descsData, index, ownColorValue)[7]],
            ];

            let x, y = 0;

            cells.forEach((cell, index) => {
                x = index % 8;
                y = Math.floor(index / 8);
                const cellChild = cell.firstChild;

                for (let i = 0; i < playerNum; i++) {
                    if (descsData[y][x] === i + 1) {
                        cellChild.classList.add(ownColors[i]);
                    }
                    if (descsData[y][x] !== i + 1) {
                        cellChild.classList.remove(ownColors[i]);
                    }
                }
            });
            console.log(descsData);
        });
    });
}