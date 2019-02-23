var numIslands = function (grid) {
    var islands = 0;

    // find land pieces
    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid[r].length; c++) {
            if ('1' === grid[r][c]) {
                walk(grid, r, c);
                islands++;
            }
        }
    }
    return islands;
};

function walk(grid, row, col) {
    if ('1' === grid[row][col]) {
        grid[row][col] = '*'; // mark land piece as visited
        /* left*/       if (col > 0) walk(grid, row, col - 1);
        /* right */     if (col < grid[row].length - 1) walk(grid, row, col + 1);
        /* top */       if (row > 0) walk(grid, row - 1, col);
        /* bottom */    if (row < grid.length - 1) walk(grid, row + 1, col);
    }
}
numIslands([
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0]
]);