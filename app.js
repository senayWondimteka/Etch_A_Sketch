window.onload = () => {


            let gridContianer = document.getElementById('grid-container');
            createGrid(gridContianer, 16);

            let newBtn = document.getElementById('new');
            let clearBtn = document.getElementById('clear');

            clearBtn.addEventListener('click', () => {
                let cells = document.querySelectorAll('.cell');
                cells.forEach(cell => {
                    //cell.classList.remove('draw');
                    cell.style.backgroundColor = "white";
                });
            });

            newBtn.addEventListener('click', () => {
                let newSize = prompt("Enter a new grid size between 1 and 100");
                if(!(newSize >= 1 && newSize <= 100 )){
                    alert("Please enter a size between 1 and 100. ");
                    return
                }
                createGrid(gridContianer, newSize);
            });


        };

        function createGrid(gridContianer, newSize) {

            while(gridContianer.firstChild) {
                gridContianer.removeChild(gridContianer.firstChild);
            }

            for( let r = 0; r < newSize; r++) {
                let gridRow = document.createElement('div');
                gridRow.classList.add('row');

                for(let c = 0; c < newSize ; c++) {
                    let gridCell = document.createElement('div');
                    gridCell.classList.add('cell');
                    gridCell.addEventListener( 'mouseover', draw);
                    gridRow.appendChild(gridCell);
                }

                gridContianer.appendChild(gridRow);
            }

            function draw(e) {
                let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            
            let randomColor = "rgb(" + r + "," + g + "," + b + ")";
            e.target.style.backgroundColor = randomColor;

            }
        }