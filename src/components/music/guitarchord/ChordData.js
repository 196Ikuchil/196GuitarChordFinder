/* eslint-disable prettier/prettier */
const x = 'x';

export const ChordData = [
  // C
  [
    // M
    [[0, 1, 0, 2, 3, x, 0], [-1, 3, 3, 3, -1, x, 3],[-1,-1,2,3,3,-1,8]],
    // m
    [[-1, 2, 3, 3, -1, x, 3], [-1, -1, -1, 3, 3, -1, 8],[2,4,3,1,x,x,10]],
    // M7
    [[0, 0, 0, 1, 2, x, 0],[-1,3,2,3,-1,x,3],[1,2,3,4,x,x,7]],
    // _7
    [[0,1,3,2,3,x,0],[-1,3,-1,3,-1,x,3],[-1,-1,2,-1,3,-1,8]],
    // m7
    [[-1,2,-1,3,-1,x,3],[-1,-1,-1,-1,3,-1,8],[3,-1,3,-1,3,x,0],[2,2,3,1,x,x,10]],
    // M(-5)
    [[2,1,x,2,3,x,0],[2,1,x,4,3,x,0],[-1,3,3,2,-1,x,3],[-1,-1,4,3,2,-1,8]],
    // m(-5)
    [],
    // m7(-5)
    [[x,2,1,2,1,x,3],[x,1,2,2,x,2,7],[-2,-2,-2,1,x,x,10]],
    // mM7
    [[3,0,0,1,3,x,0],[-1,-1,-1,2,3,-1,8],[-1,2,2,3,-1,x,3],[2,3,3,1,x,x,10]],
    // aug
    [[x,-1,-1,2,3,x,0],[x,3,3,4,1,x,3],[1,2,2,3,x,x,8]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // -D
  [
    // M
    [[-1, 3, 3, 3, -1, x, 4], [-1, 2, -1, 3, 4, x, 0],[-1,-1,2,3,3,-1,9]],
    // m
    [[-1, 2, 3, 3, -1, x, 4], [-1, -1, -1, 3, 3, -1, 9],[2,4,3,1,x,x,11]],
    // M7
    [[-1, -1, -1, 2, 3, x, 0],[-1,3,2,3,-1,x,4],[1,2,3,4,x,x,8]],
    // _7
    [[x,1,3,2,3,x,2],[-1,3,-1,3,-1,x,4],[-1,-1,2,-1,3,-1,9]],
    // m7
    [[-1,2,-1,3,-1,x,4],[-1,-1,-1,-1,3,-1,9],[3,-1,3,-1,3,x,2],[2,2,3,1,x,x,11]],
    // M(-5)
    [[2,1,x,2,3,x,2],[2,1,x,4,3,x,2],[-1,3,3,2,-1,x,4],[-1,-1,4,3,2,-1,9]],
    // m(-5)
    [],
    // m7(-5)
    [[x,2,1,2,1,x,4],[x,1,2,2,x,2,8],[-2,-2,-2,1,x,x,11]],
    // mM7
    [[x,-1,-1,3,4,x,0],[-1,-1,-1,2,3,-1,9],[-1,2,2,3,-1,x,4],[2,3,3,1,x,x,11]],
    // aug
    [[x,-1,-1,2,3,x,2],[x,3,3,4,1,x,4],[1,2,2,3,x,x,9]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // D
  [
    // M
    [[2, 3, 2, 0, x, x, 0], [-1, 3, 3, 3, -1, x, 5], [-1, 2, -1, 3, 4, x, 2],[-1,-1,2,3,3,-1,10]],
    // m
    [[1, 3, 2, 0, x, x, 0], [-1, 2, 3, 3, -1, x, 5], [-1, -1, -1, 3, 3, -1, 10],],
    // M7
    [[-2, -2, -2, 0, x, x, 0],[-1,3,2,3,-1,x,5],[1,2,3,4,x,x,9]],
    // _7
    [[2,1,2,0,x,x,0],[x,1,3,2,3,x,3],[-1,3,-1,3,-1,x,5],[-1,-1,2,-1,3,-1,10]],
    // m7
    [[-1,-1,2,0,x,x,0],[-1,2,-1,3,-1,x,5],[-1,-1,-1,-1,3,-1,10],[3,-1,3,-1,3,x,3]],
    // M(-5)
    [[2,1,x,2,3,x,3],[2,1,x,4,3,x,3],[-1,3,3,2,-1,x,5],[-1,-1,4,3,2,-1,10]],
    // m(-5)
    [],
    // m7(-5)
    [[x,2,1,2,1,x,5],[x,1,2,2,x,2,9],[-1,-1,-1,0,x,x,0]],
    // mM7
    [[x,-1,-1,2,4,x,2],[-1,-1,-1,2,3,-1,10],[-1,2,2,3,-1,x,5],[1,2,2,0,x,x,0]],
    // aug
    [[2,3,3,0,x,x,0],[x,-1,-1,2,3,x,3],[x,3,3,4,1,x,5],[1,2,2,3,x,x,10]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // -E
  [
    // M
    [[3, 4, 3, 1, x, x, 1], [-1, 3, 3, 3, -1, x, 6], [-1, 2, -1, 3, 4, x, 3],[-1,-1,2,3,3,-1,11]],
    // m
    [[2, 4, 3, 1, x, x, 1], [-1, 2, 3, 3, -1, x, 6], [-1, -1, -1, 3, 3, -1,11],],
    // M7
    [[1, -3, -3, -3, x, x, 0],[-1,3,2,3,-1,x,6],[1,2,3,4,x,x,10]],
    // _7
    [[3,2,3,1,x,x,0],[x,1,3,2,3,x,4],[-1,3,-1,3,-1,x,6],[-1,-1,2,-1,3,-1,11]],
    // m7
    [[-1,2,-1,3,-1,x,6],[-1,-1,-1,-1,3,-1,11],[3,-1,3,-1,3,x,4],[2,2,3,1,x,x,0]],
    // M(-5)
    [[2,1,x,2,3,x,4],[2,1,x,4,3,x,4],[-1,3,3,2,-1,x,6],[-1,-1,4,3,2,-1,11]],
    // m(-5)
    [],
    // m7(-5)
    [[x,2,1,2,1,x,6],[x,1,2,2,x,2,10],[-2,-2,-2,1,x,x,0]],
    // mM7
    [[x,-1,-1,2,4,x,3],[-1,-1,-1,2,3,-1,11],[-1,2,2,3,-1,x,6],[2,3,3,1,x,x,0]],
    // aug
    [[x,-1,-1,2,3,x,4],[x,3,3,4,1,x,6],[1,2,2,3,x,x,11]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // E
  [
    // M
    [[0, 0, 1, 2, 2, 0, 0], [-1, 3, 3, 3, -1, x, 7], [3, 4, 3, 1, x, x, 2],[-1, 2, -1, 3, 4, x, 4]],
    // m
    [[0, 0, 0, 2, 2, 0, 0], [-1, 2, 3, 3, -1, x, 7], [2, 4, 3, 1, x, x, 2]],
    // M7
    [[0,0,1,1,2,0,0],[1, -3, -3, -3, x, x, 2],[-1,3,2,3,-1,x,7],[1,2,3,4,x,x,11]],
    // _7
    [[0,0,1,0,2,0,0],[3,2,3,1,x,x,2],[x,1,3,2,3,x,5],[-1,3,-1,3,-1,x,7]],
    // m7
    [[-1,2,-1,3,-1,x,7],[0,0,0,0,2,0,x,0],[3,-1,3,-1,3,x,5],[2,2,3,1,x,x,2]],
    // M(-5)
    [[2,1,x,2,3,x,5],[2,1,x,4,3,x,5],[-1,3,3,2,-1,x,7],[0,0,3,2,1,0,0]],
    // m(-5)
    [],
    // m7(-5)
    [[0,3,0,2,1,0,0],[x,2,1,2,1,x,7],[x,1,2,2,x,2,11],[-2,-2,-2,1,x,x,2]],
    // mM7
    [[0,0,0,1,2,0,0],[x,-1,-1,2,4,x,4],[-1,2,2,3,-1,x,7],[2,3,3,1,x,x,2]],
    // aug
    [[x,-1,-1,2,3,x,5],[x,3,3,4,1,x,7],[0,1,2,2,x,x,0]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // F
  [
    // M
    [[-1, -1, 2, 3, 3, -1, 1], [-1, 3, 3, 3, -1, x, 8], [3, 4, 3, 1, x, x, 3],[-1, 2, -1, 3, 4, x, 5]],
    // m
    [[-1, -1, -1, 3, 3, -1, 0], [-1, 2, 3, 3, -1, x, 8], [2, 4, 3, 1, x, x, 3]],
    // M7
    [[1, -3, -3, -3, x, x, 3],[-1,3,2,3,-1,x,8],[0,1,2,3,x,x,0]],
    // _7
    [[-1,-1,2,-1,3,-1,0],[3,2,3,1,x,x,3],[x,1,3,2,3,x,6],[-1,3,-1,3,-1,x,8]],
    // m7
    [[-1,2,-1,3,-1,x,8],[-1,-1,-1,-1,3,-1,0],[3,-1,3,-1,3,x,6],[2,2,3,1,x,x,3]],
    // M(-5)
    [[2,1,x,2,3,x,6],[2,1,x,4,3,x,6],[-1,3,3,2,-1,x,8],[-1,-1,4,3,2,-1,0]],
    // m(-5)
    [],
    // m7(-5)
    [[x,0,1,1,x,1,0],[x,2,1,2,1,x,8],[x,0,1,1,x,1,0],[-2,-2,-2,1,x,x,3]],
    // mM7
    [[x,-1,-1,2,4,x,5],[-1,-1,-1,2,3,-1,0],[-1,2,2,3,-1,x,8],[2,3,3,1,x,x,3]],
    // aug
    [[x,-1,-1,2,3,x,6],[x,3,3,4,1,x,8],[1,2,2,3,x,x,0]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // -G
  [
    // M
    [[-1, -1, 2, 3, 3, -1, 2], [-1, 3, 3, 3, -1, x, 9], [3, 4, 3, 1, x, x, 4],[-1, 2, -1, 3, 4, x, 6]],
    // m
    [[-2, -2, -2, 4, 4, -2, 1], [-1, 2, 3, 3, -1, x, 9], [2, 4, 3, 1, x, x, 4]],
    // M7
    [[1, -3, -3, -3, x, x, 4],[-1,3,2,3,-1,x,9],[1,2,3,4,x,x,1]],
    // _7
    [[-1,-1,2,-1,3,-1,2],[3,2,3,1,x,x,4],[x,1,3,2,3,x,7],[-1,3,-1,3,-1,x,9]],
    // m7
    [[-1,2,-1,3,-1,x,9],[-1,-1,-1,-1,3,-1,2],[3,-1,3,-1,3,x,7],[2,2,3,1,x,x,4]],
    // M(-5)
    [[2,1,x,2,3,x,7],[2,1,x,4,3,x,7],[-1,3,3,2,-1,x,9],[-1,-1,4,3,2,-1,2]],
    // m(-5)
    [],
    // m7(-5)
    [[x,2,1,2,1,x,9],[x,1,2,2,x,2,0],[-2,-2,-2,1,x,x,4]],
    // mM7
    [[x,-1,-1,2,4,x,6],[-1,-1,-1,2,3,-1,2],[-1,2,2,3,-1,x,9],[2,3,3,1,x,x,4]],
    // aug
    [[x,-1,-1,2,3,x,7],[x,3,3,4,1,x,9],[1,2,2,3,x,x,2]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // G
  [
    // M
    [[3, 0, 0, 0, 2, 3, 0], [-1, -1, 2, 3, 3, -1, 3], [-1, 3, 3, 3, -1, x, 10], [3, 4, 3, 1, x, x, 5],[-1, 2, -1, 3, 4, x, 7]],
    // m
    [[-1, -1, -1, 3, 3, -1, 3], [-1, 2, 3, 3, -1, x, 10], [2, 4, 3, 1, x, x, 5]],
    // M7
    [[1, -3, -3, -3, x, x, 5],[-1,3,2,3,-1,x,10],[1,2,3,4,x,x,2]],
    // _7
    [[-1,-1,2,-1,3,-1,3],[3,2,3,1,x,x,5],[x,1,3,2,3,x,8],[-1,3,-1,3,-1,x,10]],
    // m7
    [[-1,2,-1,3,-1,x,10],[-1,-1,-1,-1,3,-1,3],[3,-1,3,-1,3,x,8],[2,2,3,1,x,x,5]],
    // M(-5)
    [[2,1,x,2,3,x,8],[2,1,x,4,3,x,8],[-1,3,3,2,-1,x,10],[-1,-1,4,3,2,-1,3]],
    // m(-5)
    [],
    // m7(-5)
    [[x,2,1,2,1,x,10],[x,1,2,2,x,2,2],[-2,-2,-2,1,x,x,5]],
    // mM7
    [[x,-1,-1,2,4,x,7],[-1,-1,-1,2,3,-1,3],[-1,2,2,3,-1,x,10],[2,3,3,1,x,x,5]],
    // aug
    [[3,0,0,1,2,3,0],[x,-1,-1,2,3,x,8],[x,3,3,4,1,x,10],[1,2,2,3,x,x,3]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // -A
  [
    // M
    [[-1, -1, 2, 3, 3, -1, 4], [-1, 3, 3, 3, -1, x, 11], [3, 4, 3, 1, x, x, 6],[-1, 2, -1, 3, 4, x, 8]],
    // m
    [[-1, -1, -1, 3, 3, -1, 4], [-1, 2, 3, 3, -1, x, 11], [2, 4, 3, 1, x, x, 6]],
    // M7
    [[1, -3, -3, -3, x, x, 6],[-1,3,2,3,-1,x,11],[1,2,3,4,x,x,3]],
    // _7
    [[-1,-1,2,-1,3,-1,4],[3,2,3,1,x,x,6],[x,1,3,2,3,x,9],[-1,3,-1,3,-1,x,11]],
    // m7
    [[-1,2,-1,3,-1,x,11],[-1,-1,-1,-1,3,-1,4],[3,-1,3,-1,3,x,9],[2,2,3,1,x,x,6]],
    // M(-5)
    [[2,1,x,2,3,x,9],[2,1,x,4,3,x,9],[-1,3,3,2,-1,x,11],[-1,-1,4,3,2,-1,4]],
    // m(-5)
    [],
    // m7(-5)
    [[x,2,1,2,1,x,11],[x,1,2,2,x,2,3],[-2,-2,-2,1,x,x,6]],
    // mM7
    [[x,-1,-1,2,4,x,8],[-1,-1,-1,2,3,-1,4],[-1,2,2,3,-1,x,11],[2,3,3,1,x,x,6]],
    // aug
    [[x,-1,-1,2,3,x,9],[x,3,3,4,1,x,11],[1,2,2,3,x,x,4]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // A
  [
    // M
    [[0, 2, 2, 2, 0, x, 0], [-1, -1, 2, 3, 3, -1, 5], [-1, 3, 3, 3, -1, x, 12], [3, 4, 3, 1, x, x, 7],[-1, 2, -1, 3, 4, x, 9]],
    // m
    [ [0, 1, 2, 2, 0, x, 0], [-1, -1, -1, 3, 3, -1, 5],[2, 4, 3, 1, x, x, 7]],
    // M7
    [[1, -3, -3, -3, x, x, 7],[0,2,1,2,0,x,0],[1,2,3,4,x,x,4]],
    // _7
    [[0,2,0,2,0,x,0],[3,2,3,1,x,x,7],[x,1,3,2,3,x,10],[-1,-1,2,-1,3,-1,5],[3,2,2,2,0,x,0]],
    // m7
    [[0,1,0,2,0,x,0],[-1,-1,-1,-1,3,-1,5],[3,-1,3,-1,3,x,10],[2,2,3,1,x,x,7]],
    // M(-5)
    [[2,1,x,2,3,x,10],[2,1,x,4,3,x,10],[1,2,2,1,0,x,0],[-1,-1,4,3,2,-1,5]],
    // m(-5)
    [],
    // m7(-5)
    [[3,-1,2,-1,0,x,0],[x,1,0,1,0,x,0],[x,1,2,2,x,2,4],[-2,-2,-2,1,x,x,7]],
    // mM7
    [[x,-1,-1,2,4,x,9],[-1,-1,-1,2,3,-1,5],[0,1,1,2,0,x,0],[2,3,3,1,x,x,7]],
    // aug
    [[1,2,2,3,0,x,0],[x,-1,-1,2,3,x,10],[x,2,2,3,0,x,0],[1,2,2,3,x,x,5]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // -B
  [
    // M
    [[-1, 3, 3, 3, -1, x, 1], [-1, -1, 2, 3, 3, -1, 6], [-1, 3, 3, 3, -1, x, 13], [3, 4, 3, 1, x, x, 8],[-1, 2, -1, 3, 4, x, 10]],
    // m
    [[-1, 2, 3, 3, -1, x, 0],[-1, -1, -1, 3, 3, -1, 6],  [2, 4, 3, 1, x, x, 8]],
    // M7
    [[1, -3, -3, -3, x, x, 8],[-1,3,2,3,-1,x,0],[1,2,3,4,x,x,5]],
    // _7
    [[-1,3,-1,3,-1,x,0],[3,2,3,1,x,x,8],[x,1,3,2,3,x,11],[-1,-1,2,-1,3,-1,6],],
    // m7
    [[-1,2,-1,3,-1,x,0],[-1,-1,-1,-1,3,-1,6],[3,-1,3,-1,3,x,11],[2,2,3,1,x,x,8]],
    // M(-5)
    [[2,1,x,2,3,x,11],[2,1,x,4,3,x,11],[-1,3,3,2,-1,x,0],[-1,-1,4,3,2,-1,6]],
    // m(-5)
    [],
    // m7(-5)
    [[x,2,1,2,1,x,0],[x,1,2,2,x,2,5],[-2,-2,-2,1,x,x,8]],
    // mM7
    [[x,-1,-1,2,4,x,10],[-1,-1,-1,2,3,-1,6],[-1,2,2,3,-1,x,0],[2,3,3,1,x,x,8]],
    // aug
    [[x,-1,-1,2,3,x,11],[x,3,3,4,1,x,0],[1,2,2,3,x,x,6]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ],
  // B
  [
    // M
    [[-1, 3, 3, 3, -1, x, 2], [-1, -1, 2, 3, 3, -1, 7], [-1, 3, 3, 3, -1, x, 14], [3, 4, 3, 1, x, x, 9],[-1, 2, -1, 3, 4, x, 11]],
    // m
    [[-1, 2, 3, 3, -1, x, 2],[-1, -1, -1, 3, 3, -1, 7],  [2, 4, 3, 1, x, x, 9]],
    // M7
    [[1, -3, -3, -3, x, x, 9],[-1,3,2,3,-1,x,1],[1,2,3,4,x,x,6]],
    // _7
    [[2,0,2,1,2,x,0],[3,2,3,1,x,x,9],[-1,3,-1,3,-1,x,2],[-1,-1,2,-1,3,-1,7],],
    // m7
    [[-1,2,-1,3,-1,x,2],[-1,-1,-1,-1,3,-1,7],[2,0,2,0,2,x,0],[2,2,3,1,x,x,9]],
    // M(-5)
    [[1,0,x,1,2,x,0],[1,0,x,3,2,x,0],[-1,3,3,2,-1,x,2],[-1,-1,4,3,2,-1,7]],
    // m(-5)
    [],
    // m7(-5)
    [[x,2,1,2,1,x,2],[x,1,2,2,x,2,6],[-2,-2,-2,1,x,x,9]],
    // mM7
    [[x,-1,-1,2,4,x,11],[-1,-1,-1,2,3,-1,7],[-1,2,2,3,-1,x,2],[2,3,3,1,x,x,9]],
    // aug
    [[x,0,0,1,2,x,0],[x,0,0,1,2,x,0],[x,3,3,4,1,x,2],[1,2,2,3,x,x,7]],
    // augM7
    [],
    // aug7
    [],
    // dim
    [],
    // dim7
    [],
  ]
];
