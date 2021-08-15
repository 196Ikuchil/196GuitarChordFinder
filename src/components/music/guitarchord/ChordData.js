/* eslint-disable prettier/prettier */
const x = 'x';

export const getChordsData = (key, chord) => ChordData[chord][key]
export const getSelectedChordData = (key, chord, num) => ChordData[chord][key][num]
const ChordData = [
  // M
  [
// M
    [[0, 1, 0, 2, 3, x, 0], [-1, 3, 3, 3, -1, x, 3],[-1,-1,2,3,3,-1,8]],
// M
    [[-1, 3, 3, 3, -1, x, 4], [-1, 2, -1, 3, 4, x, 0],[-1,-1,2,3,3,-1,9]],
// M
    [[2, 3, 2, 0, x, x, 0], [-1, 3, 3, 3, -1, x, 5], [-1, 2, -1, 3, 4, x, 2],[-1,-1,2,3,3,-1,10]],
// M
    [[3, 4, 3, 1, x, x, 1], [-1, 3, 3, 3, -1, x, 6], [-1, 2, -1, 3, 4, x, 3],[-1,-1,2,3,3,-1,11]],
// M
    [[0, 0, 1, 2, 2, 0, 0], [-1, 3, 3, 3, -1, x, 7], [3, 4, 3, 1, x, x, 2],[-1, 2, -1, 3, 4, x, 4]],
// M
    [[-1, -1, 2, 3, 3, -1, 1], [-1, 3, 3, 3, -1, x, 8], [3, 4, 3, 1, x, x, 3],[-1, 2, -1, 3, 4, x, 5]],
// M
    [[-1, -1, 2, 3, 3, -1, 2], [-1, 3, 3, 3, -1, x, 9], [3, 4, 3, 1, x, x, 4],[-1, 2, -1, 3, 4, x, 6]],
// M
    [[3, 0, 0, 0, 2, 3, 0], [-1, -1, 2, 3, 3, -1, 3], [-1, 3, 3, 3, -1, x, 10], [3, 4, 3, 1, x, x, 5],[-1, 2, -1, 3, 4, x, 7]],
// M
    [[-1, -1, 2, 3, 3, -1, 4], [-1, 3, 3, 3, -1, x, 11], [3, 4, 3, 1, x, x, 6],[-1, 2, -1, 3, 4, x, 8]],
// M
    [[0, 2, 2, 2, 0, x, 0], [-1, -1, 2, 3, 3, -1, 5], [-1, 3, 3, 3, -1, x, 12], [3, 4, 3, 1, x, x, 7],[-1, 2, -1, 3, 4, x, 9]],
// M
    [[-1, 3, 3, 3, -1, x, 1], [-1, -1, 2, 3, 3, -1, 6], [-1, 3, 3, 3, -1, x, 13], [3, 4, 3, 1, x, x, 8],[-1, 2, -1, 3, 4, x, 10]],
// M
    [[-1, 3, 3, 3, -1, x, 2], [-1, -1, 2, 3, 3, -1, 7], [-1, 3, 3, 3, -1, x, 14], [3, 4, 3, 1, x, x, 9],[-1, 2, -1, 3, 4, x, 11]],
  ],
  // m
  [
    // m
    [[-1, 2, 3, 3, -1, x, 3], [-1, -1, -1, 3, 3, -1, 8],[2,4,3,1,x,x,10]],
// m
    [[-1, 2, 3, 3, -1, x, 4], [-1, -1, -1, 3, 3, -1, 9],[2,4,3,1,x,x,11]],
// m
    [[1, 3, 2, 0, x, x, 0], [-1, 2, 3, 3, -1, x, 5], [-1, -1, -1, 3, 3, -1, 10],],
// m
    [[2, 4, 3, 1, x, x, 1], [-1, 2, 3, 3, -1, x, 6], [-1, -1, -1, 3, 3, -1,11],],
// m
    [[0, 0, 0, 2, 2, 0, 0], [-1, 2, 3, 3, -1, x, 7], [2, 4, 3, 1, x, x, 2]],
// m
    [[-1, -1, -1, 3, 3, -1, 0], [-1, 2, 3, 3, -1, x, 8], [2, 4, 3, 1, x, x, 3]],
// m
    [[-2, -2, -2, 4, 4, -2, 1], [-1, 2, 3, 3, -1, x, 9], [2, 4, 3, 1, x, x, 4]],
// m
    [[-1, -1, -1, 3, 3, -1, 3], [-1, 2, 3, 3, -1, x, 10], [2, 4, 3, 1, x, x, 5]],
// m
    [[-1, -1, -1, 3, 3, -1, 4], [-1, 2, 3, 3, -1, x, 11], [2, 4, 3, 1, x, x, 6]],
// m
    [ [0, 1, 2, 2, 0, x, 0], [-1, -1, -1, 3, 3, -1, 5],[2, 4, 3, 1, x, x, 7]],
// m
    [[-1, 2, 3, 3, -1, x, 0],[-1, -1, -1, 3, 3, -1, 6],  [2, 4, 3, 1, x, x, 8]],
// m
    [[-1, 2, 3, 3, -1, x, 2],[-1, -1, -1, 3, 3, -1, 7],  [2, 4, 3, 1, x, x, 9]],
  ],
  // M7
  [
    // M7
    [[0, 0, 0, 2, 3, x, 0],[-1,3,2,3,-1,x,3],[1,2,3,4,x,x,7], [-3, -3, -3,1, x, x, 10],[x,1,2,2,x,1,8]],
// M7
    [[-1,3,2,3,-1,x,4],[-1, -1, -1, 3, 4, x, 0],[1,2,3,4,x,x,8], [-3, -3, -3,1, x, x,11],[x,1,2,2,x,1,9]],
// M7
    [[-2, -2, -2, 0, x, x, 0],[-1,3,2,3,-1,x,5],[1,2,3,4,x,x,9],[x,1,2,2,x,1,10]],
// M7
    [[-3, -3, -3,1, x, x, 0],[-1,3,2,3,-1,x,6],[1,2,3,4,x,x,10],[x,1,2,2,x,1,11]],
// M7
    [[0,0,1,1,2,0,0],[-3, -3, -3,1, x, x, 2],[-1,3,2,3,-1,x,7],[1,2,3,4,x,x,11],[x,0,1,1,x,0,0]],
// M7
    [[0,1,2,3,x,x,0],[1, -3, -3, -3, x, x, 3],[-3, -3, -3,1, x, x, 3],[-1,3,2,3,-1,x,8],[x,1,2,2,x,1,0]],
// M7
    [[1,2,3,4,x,x,1],[-3, -3, -3,1, x, x, 4],[-1,3,2,3,-1,x,9],[x,1,2,2,x,1,2]],
// M7
    [[2, 0, 0, 0, 2, 3, 0], [-3, -3, -3,1, x, x, 5],[-1,3,2,3,-1,x,10],[1,2,3,4,x,x,2],[x,1,2,2,x,1,3]],
// M7
    [[1,2,3,4,x,x,3],[-3, -3, -3,1, x, x, 6],[-1,3,2,3,-1,x,11],[x,1,2,2,x,1,4]],
// M7
    [[1,2,3,4,x,x,4],[-3, -3, -3,1, x, x, 7],[0,2,1,2,0,x,0],[x,1,2,2,x,1,5]],
// M7
    [[-1,3,2,3,-1,x,0],[-3, -3, -3,1, x, x, 8],[1,2,3,4,x,x,5],[x,1,2,2,x,1,6]],
// M7
    [[-3, -3, -3,1, x, x, 9],[-1,3,2,3,-1,x,2],[1,2,3,4,x,x,6],[x,1,2,2,x,1,7]],
  ],
  // _7
  [
    // _7
    [[0,1,3,2,3,x,0],[-1,3,-1,3,-1,x,3],[-1,-1,2,-1,3,-1,8]],
// _7
    [[x,1,3,2,3,x,2],[-1,3,-1,3,-1,x,4],[-1,-1,2,-1,3,-1,9]],
// _7
    [[2,1,2,0,x,x,0],[x,1,3,2,3,x,3],[-1,3,-1,3,-1,x,5],[-1,-1,2,-1,3,-1,10]],
// _7
    [[3,2,3,1,x,x,0],[x,1,3,2,3,x,4],[-1,3,-1,3,-1,x,6],[-1,-1,2,-1,3,-1,11]],
// _7
    [[0,0,1,0,2,0,0],[3,2,3,1,x,x,2],[x,1,3,2,3,x,5],[-1,3,-1,3,-1,x,7]],
// _7
    [[-1,-1,2,-1,3,-1,0],[3,2,3,1,x,x,3],[x,1,3,2,3,x,6],[-1,3,-1,3,-1,x,8]],
// _7
    [[-1,-1,2,-1,3,-1,2],[3,2,3,1,x,x,4],[x,1,3,2,3,x,7],[-1,3,-1,3,-1,x,9]],
// _7
    [[1,0,0,0,2,3,0],[-1,-1,2,-1,3,-1,3],[3,2,3,1,x,x,5],[x,1,3,2,3,x,8],[-1,3,-1,3,-1,x,10]],
// _7
    [[-1,-1,2,-1,3,-1,4],[3,2,3,1,x,x,6],[x,1,3,2,3,x,9],[-1,3,-1,3,-1,x,11]],
// _7
    [[0,2,0,2,0,x,0],[3,2,3,1,x,x,7],[x,1,3,2,3,x,10],[-1,-1,2,-1,3,-1,5],[3,2,2,2,0,x,0]],
// _7
    [[-1,3,-1,3,-1,x,0],[3,2,3,1,x,x,8],[x,1,3,2,3,x,11],[-1,-1,2,-1,3,-1,6],],
// _7
    [[2,0,2,1,2,x,0],[3,2,3,1,x,x,9],[-1,3,-1,3,-1,x,2],[-1,-1,2,-1,3,-1,7],],
  ],
  // m7
  [
    // m7
    [[-1,2,-1,3,-1,x,3],[-1,-1,-1,-1,3,-1,8],[3,-1,3,-1,3,x,0],[2,2,3,1,x,x,10]],
// m7
    [[-1,2,-1,3,-1,x,4],[-1,-1,-1,-1,3,-1,9],[3,-1,3,-1,3,x,2],[2,2,3,1,x,x,11]],
// m7
    [[-1,-1,2,0,x,x,0],[-1,2,-1,3,-1,x,5],[-1,-1,-1,-1,3,-1,10],[3,-1,3,-1,3,x,3]],
// m7
    [[2,2,3,1,x,x,0],[-1,2,-1,3,-1,x,6],[-1,-1,-1,-1,3,-1,11],[3,-1,3,-1,3,x,4]],
// m7
    [[0,0,0,0,2,0,x,0],[-1,2,-1,3,-1,x,7],[3,-1,3,-1,3,x,5],[2,2,3,1,x,x,2]],
// m7
    [[-1,-1,-1,-1,3,-1,0],[-1,2,-1,3,-1,x,8],[3,-1,3,-1,3,x,6],[2,2,3,1,x,x,3]],
// m7
    [[-1,-1,-1,-1,3,-1,2],[-1,2,-1,3,-1,x,9],[3,-1,3,-1,3,x,7],[2,2,3,1,x,x,4]],
// m7
    [[-1,-1,-1,-1,3,-1,3],[-1,2,-1,3,-1,x,10],[3,-1,3,-1,3,x,8],[2,2,3,1,x,x,5]],
// m7
    [[-1,-1,-1,-1,3,-1,4],[-1,2,-1,3,-1,x,11],[3,-1,3,-1,3,x,9],[2,2,3,1,x,x,6]],
// m7
    [[0,1,0,2,0,x,0],[-1,-1,-1,-1,3,-1,5],[3,-1,3,-1,3,x,10],[2,2,3,1,x,x,7]],
// m7
    [[-1,2,-1,3,-1,x,0],[-1,-1,-1,-1,3,-1,6],[3,-1,3,-1,3,x,11],[2,2,3,1,x,x,8]],
// m7
    [[2,0,2,0,2,x,0],[-1,2,-1,3,-1,x,2],[-1,-1,-1,-1,3,-1,7],[2,2,3,1,x,x,9]],
  ],
  // M(-5)
  [
    // M(-5)
    [[2,1,x,2,3,x,0],[2,1,x,4,3,x,0],[-1,3,3,2,-1,x,3],[-1,-1,4,3,2,-1,8]],
// M(-5)
    [[2,1,x,2,3,x,2],[2,1,x,4,3,x,2],[-1,3,3,2,-1,x,4],[-1,-1,4,3,2,-1,9]],
// M(-5)
    [[2,1,x,2,3,x,3],[2,1,x,4,3,x,3],[-1,3,3,2,-1,x,5],[-1,-1,4,3,2,-1,10]],
// M(-5)
    [[2,1,x,2,3,x,4],[2,1,x,4,3,x,4],[-1,3,3,2,-1,x,6],[-1,-1,4,3,2,-1,11]],
// M(-5)
    [[2,1,x,2,3,x,5],[2,1,x,4,3,x,5],[-1,3,3,2,-1,x,7],[0,0,3,2,1,0,0]],
// M(-5)
    [[2,1,x,2,3,x,6],[2,1,x,4,3,x,6],[-1,3,3,2,-1,x,8],[-1,-1,4,3,2,-1,0]],
// M(-5)
    [[2,1,x,2,3,x,7],[2,1,x,4,3,x,7],[-1,3,3,2,-1,x,9],[-1,-1,4,3,2,-1,2]],
// M(-5)
    [[2,1,x,2,3,x,8],[2,1,x,4,3,x,8],[-1,3,3,2,-1,x,10],[-1,-1,4,3,2,-1,3]],
// M(-5)
    [[2,1,x,2,3,x,9],[2,1,x,4,3,x,9],[-1,3,3,2,-1,x,11],[-1,-1,4,3,2,-1,4]],
// M(-5)
    [[2,1,x,2,3,x,10],[2,1,x,4,3,x,10],[1,2,2,1,0,x,0],[-1,-1,4,3,2,-1,5]],
// M(-5)
    [[2,1,x,2,3,x,11],[2,1,x,4,3,x,11],[-1,3,3,2,-1,x,0],[-1,-1,4,3,2,-1,6]],
// M(-5)
    [[1,0,x,1,2,x,0],[1,0,x,3,2,x,0],[-1,3,3,2,-1,x,2],[-1,-1,4,3,2,-1,7]],
  ],
  // m(-5)
  [
    // m(-5)
    [[x,2,3,2,1,x,3]],
// m(-5)
    [[x,2,3,2,1,x,4]],
// m(-5)
    [[x,2,3,2,1,x,5]],
// m(-5)
    [[x,2,3,2,1,x,6]],
// m(-5)
    [[x,2,3,2,1,x,7]],
// m(-5)
    [[x,2,3,2,1,x,8]],
// m(-5)
    [[x,2,3,2,1,x,9]],
// m(-5)
    [[x,2,3,2,1,x,10]],
// m(-5)
    [[x,2,3,2,1,x,11]],
// m(-5)
    [[x,1,2,1,0,x,0]],
// m(-5)
    [[x,2,3,2,1,x,0]],
// m(-5)
    [[x,2,3,2,1,x,2]],
  ],
  // m7(-5)
  [
    // m7(-5)
    [[x,2,1,2,1,x,3],[x,1,2,2,x,2,7],[-2,-2,-2,1,x,x,10]],
// m7(-5)
    [[x,2,1,2,1,x,4],[x,1,2,2,x,2,8],[-2,-2,-2,1,x,x,11]],
// m7(-5)
    [[-1,-1,-1,0,x,x,0],[x,2,1,2,1,x,5],[x,1,2,2,x,2,9]],
// m7(-5)
    [[-2,-2,-2,1,x,x,0],[x,2,1,2,1,x,6],[x,1,2,2,x,2,10]],
// m7(-5)
    [[0,3,0,2,1,0,0],[x,2,1,2,1,x,7],[x,1,2,2,x,2,11],[-2,-2,-2,1,x,x,2]],
// m7(-5)
    [[x,0,1,1,x,1,0],[x,2,1,2,1,x,8],[-2,-2,-2,1,x,x,3]],
// m7(-5)
    [[x,1,2,2,x,2,0],[x,2,1,2,1,x,9],[-2,-2,-2,1,x,x,4]],
// m7(-5)
    [[x,1,2,2,x,2,2],[x,2,1,2,1,x,10],[-2,-2,-2,1,x,x,5]],
// m7(-5)
    [[2,0,1,0,2,x,0],[x,2,1,2,1,x,11],[x,1,2,2,x,2,3],[-2,-2,-2,1,x,x,6]],
// m7(-5)
    [[3,-1,2,-1,0,x,0],[x,1,0,1,0,x,0],[x,1,2,2,x,2,4],[-2,-2,-2,1,x,x,7]],
// m7(-5)
    [[x,2,1,2,1,x,0],[x,1,2,2,x,2,5],[-2,-2,-2,1,x,x,8]],
// m7(-5)
    [[x,2,1,2,1,x,2],[x,1,2,2,x,2,6],[-2,-2,-2,1,x,x,9]],
  ],
  // mM7
  [
    // mM7
    [[3,0,0,1,3,x,0],[-1,-1,-1,2,3,-1,8],[-1,2,2,3,-1,x,3],[2,3,3,1,x,x,10]],
// mM7
    [[x,-1,-1,3,4,x,0],[-1,-1,-1,2,3,-1,9],[-1,2,2,3,-1,x,4],[2,3,3,1,x,x,11]],
// mM7
    [[x,-1,-1,2,4,x,2],[-1,-1,-1,2,3,-1,10],[-1,2,2,3,-1,x,5],[1,2,2,0,x,x,0]],
// mM7
    [[x,-1,-1,2,4,x,3],[-1,-1,-1,2,3,-1,11],[-1,2,2,3,-1,x,6],[2,3,3,1,x,x,0]],
// mM7
    [[0,0,0,1,2,0,0],[x,-1,-1,2,4,x,4],[-1,2,2,3,-1,x,7],[2,3,3,1,x,x,2]],
// mM7
    [[-1,-1,-1,2,3,-1,0],[x,-1,-1,2,4,x,5],[-1,2,2,3,-1,x,8],[2,3,3,1,x,x,3]],
// mM7
    [[-1,-1,-1,2,3,-1,2],[x,-1,-1,2,4,x,6],[-1,2,2,3,-1,x,9],[2,3,3,1,x,x,4]],
// mM7
    [[-1,-1,-1,2,3,-1,3],[x,-1,-1,2,4,x,7],[-1,2,2,3,-1,x,10],[2,3,3,1,x,x,5]],
// mM7
    [[3,0,1,1,x,x,0],[-1,-1,-1,2,3,-1,4],[x,-1,-1,2,4,x,8],[-1,2,2,3,-1,x,11],[2,3,3,1,x,x,6]],
// mM7
    [[0,1,1,2,0,x,0],[-1,-1,-1,2,3,-1,5],[x,-1,-1,2,4,x,9],[2,3,3,1,x,x,7]],
// mM7
    [[-1,-1,-1,2,3,-1,6],[-1,2,2,3,-1,x,0],[x,-1,-1,2,4,x,10],[2,3,3,1,x,x,8]],
// mM7
    [[2,3,3,0,2,x,0],[-1,-1,-1,2,3,-1,7],[-1,2,2,3,-1,x,2],[2,3,3,1,x,x,9],[x,-1,-1,2,4,x,11]],
  ],
  // aug
  [
    // aug
    [[x,-1,-1,2,3,x,0],[x,3,3,4,1,x,3],[1,2,2,3,x,x,8]],
// aug
    [[x,-1,-1,2,3,x,2],[x,3,3,4,1,x,4],[1,2,2,3,x,x,9]],
// aug
    [[2,3,3,0,x,x,0],[x,-1,-1,2,3,x,3],[x,3,3,4,1,x,5],[1,2,2,3,x,x,10]],
// aug
    [[x,-1,-1,2,3,x,4],[x,3,3,4,1,x,6],[1,2,2,3,x,x,11]],
// aug
    [[0,1,2,2,x,x,0],[x,-1,-1,2,3,x,5],[x,3,3,4,1,x,7]],
// aug
    [[1,2,2,3,x,x,0],[x,-1,-1,2,3,x,6],[x,3,3,4,1,x,8]],
// aug
    [[1,2,2,3,x,x,2],[x,-1,-1,2,3,x,7],[x,3,3,4,1,x,9]],
// aug
    [[3,0,0,1,2,3,0],[x,-1,-1,2,3,x,8],[x,3,3,4,1,x,10],[1,2,2,3,x,x,3]],
// aug
    [[1,2,2,3,x,x,4],[x,-1,-1,2,3,x,9],[x,3,3,4,1,x,11]],
// aug
    [[1,2,2,3,0,x,0],[x,-1,-1,2,3,x,10],[1,2,2,3,x,x,5]],
// aug
    [[2,3,3,0,1,x,0],[x,-1,-1,2,3,x,11],[x,3,3,4,1,x,0],[1,2,2,3,x,x,6]],
// aug
    [[x,0,0,1,2,x,0],[x,3,3,4,1,x,2],[1,2,2,3,x,x,7]],
  ],
  // augM7
  [
    // augM7
    [[x,3,2,4,1,x,3],[x,2,2,2,x,1,8],[3,3,4,1,x,x,10]],
// augM7
    [[x,3,2,4,1,x,4],[x,2,2,2,x,1,9],[3,3,4,1,x,x,11]],
// augM7
    [[2,2,3,0,x,x,0],[x,3,2,4,1,x,5],[x,2,2,2,x,1,10]],
// augM7
    [[x,3,2,4,1,x,6],[x,2,2,2,x,1,11],[3,3,4,1,x,x,0]],
// augM7
    [[x,1,1,1,x,0,0],[x,3,2,4,1,x,7],[3,3,4,1,x,x,2]],
// augM7
    [[x,2,2,2,x,1,0],[x,3,2,4,1,x,8],[3,3,4,1,x,x,3]],
// augM7
    [[x,2,2,2,x,1,2],[x,3,2,4,1,x,9],[3,3,4,1,x,x,4]],
// augM7
    [[x,2,2,2,x,1,3],[x,3,2,4,1,x,10],[3,3,4,1,x,x,5]],
// augM7
    [[x,2,2,2,x,1,4],[x,3,2,4,1,x,11],[3,3,4,1,x,x,6]],
// augM7
    [[x,2,2,2,x,1,5],[x,2,1,3,0,x,0],[3,3,4,1,x,x,7]],
// augM7
    [[x,3,2,4,1,x,0],[x,2,2,2,x,1,6],[3,3,4,1,x,x,8]],
// augM7
    [[x,3,2,4,1,x,2],[x,2,2,2,x,1,7],[3,3,4,1,x,x,9]],
  ],
  // aug7
  [
    // aug7
    [[4,x,3,2,3,x,0],[2,1,1,2,x,x,5],[-1,2,2,-1,x,-1,8]],
// aug7
    [[3,x,2,1,2,x,0,3],[2,1,1,2,x,x,6],[-1,2,2,-1,x,-1,9]],
// aug7
    [[2,1,3,0,x,x,0],[3,x,2,1,2,x,0,4],[2,1,1,2,x,x,7],[-1,2,2,-1,x,-1,10]],
// aug7
    [[3,x,2,1,2,x,0,5],[2,1,1,2,x,x,8],[-1,2,2,-1,x,-1,11]],
// aug7
    [[0,3,1,2,3,0],[3,x,2,1,2,x,0,6],[2,1,1,2,x,x,9],[0,1,1,0,x,0,0]],
// aug7
    [[3,x,2,1,2,x,0,7],[2,1,1,2,x,x,10],[-1,2,2,-1,x,-1,1]],
// aug7
    [[3,x,2,1,2,x,0,8],[2,1,1,2,x,x,11],[-1,2,2,-1,x,-1,2]],
// aug7
    [[3,x,2,1,2,x,0,9],[1,0,0,1,x,x,0],[-1,2,2,-1,x,-1,3]],
// aug7
    [[3,x,2,1,2,x,0,10],[2,1,1,2,x,x,1],[-1,2,2,-1,x,-1,4]],
// aug7
    [[1,2,0,3,0,x,0],[3,x,2,1,2,x,0,11],[2,1,1,2,x,x,2],[-1,2,2,-1,x,-1,5]],
// aug7
    [[2,x,1,0,1,x,0,0],[2,1,1,2,x,x,3],[-1,2,2,-1,x,-1,6]],
// aug7
    [[3,x,2,1,2,x,0,0],[2,1,1,2,x,x,4],[-1,2,2,-1,x,-1,7]],
  ],
  // dim
  [
    // dim
    [[x,3,1,3,2,x,2],[2,1,2,1,x,x,10],[-1,3,-1,3,2,-1,8]],
// dim
    [[x,3,1,3,2,x,3],[2,1,2,1,x,x,11],[-1,3,-1,3,2,-1,9]],
// dim
    [[1,0,1,0,x,x,0],[x,3,1,3,2,x,4],[-1,3,-1,3,2,-1,10]],
// dim
    [[2,1,2,1,x,x,0],[x,3,1,3,2,x,5],[-1,3,-1,3,2,-1,11]],
// dim
    [[0,2,0,2,1,0,0],[x,3,1,3,2,x,6],[2,1,2,1,x,x,2]],
// dim
    [[1,0,1,0,x,1,0],[x,3,1,3,2,x,7],[2,1,2,1,x,x,3],[-1,3,-1,3,2,-1,0]],
// dim
    [[x,1,2,1,0,2,0],[x,3,1,3,2,x,8],[2,1,2,1,x,x,4],[-1,3,-1,3,2,-1,2]],
// dim
    [[x,-1,2,-1,x,2,2],[x,3,1,3,2,x,9],[2,1,2,1,x,x,5],[-1,3,-1,3,2,-1,3]],
// dim
    [[x,-1,2,-1,x,2,3],[x,3,1,3,2,x,10],[2,1,2,1,x,x,6],[-1,3,-1,3,2,-1,4]],
// dim
    [[2,1,2,1,0,x,0],[x,3,1,3,2,x,11],[2,1,2,1,x,x,7],[-1,3,-1,3,2,-1,5]],
// dim
    [[0,2,0,2,1,x,0],[2,1,2,1,x,x,8],[-1,3,-1,3,2,-1,6]],
// dim
    [[x,3,1,3,2,x,0],[2,1,2,1,x,x,9],[-1,3,-1,3,2,-1,7]],
  ],
  // dim7
  [
    // dim7
    [[x,3,1,3,2,x,2],[2,1,2,1,x,x,10],[-1,3,-1,3,2,-1,8]],
// dim7
    [[x,3,1,3,2,x,3],[2,1,2,1,x,x,11],[-1,3,-1,3,2,-1,9]],
// dim7
    [[1,0,1,0,x,x,0],[x,3,1,3,2,x,4],[-1,3,-1,3,2,-1,10]],
// dim7
    [[2,1,2,1,x,x,0],[x,3,1,3,2,x,5],[-1,3,-1,3,2,-1,11]],
// dim7
    [[0,2,0,2,1,0,0],[x,3,1,3,2,x,6],[2,1,2,1,x,x,2]],
// dim7
    [[1,0,1,0,x,1,0],[x,3,1,3,2,x,7],[2,1,2,1,x,x,3],[-1,3,-1,3,2,-1,0]],
// dim7
    [[x,1,2,1,0,2,0],[x,3,1,3,2,x,8],[2,1,2,1,x,x,4],[-1,3,-1,3,2,-1,2]],
// dim7
    [[x,-1,2,-1,x,2,2],[x,3,1,3,2,x,9],[2,1,2,1,x,x,5],[-1,3,-1,3,2,-1,3]],
// dim7
    [[x,-1,2,-1,x,2,3],[x,3,1,3,2,x,10],[2,1,2,1,x,x,6],[-1,3,-1,3,2,-1,4]],
// dim7
    [[2,1,2,1,0,x,0],[x,3,1,3,2,x,11],[2,1,2,1,x,x,7],[-1,3,-1,3,2,-1,5]],
// dim7
    [[0,2,0,2,1,x,0],[2,1,2,1,x,x,8],[-1,3,-1,3,2,-1,6]],
// dim7
    [[x,3,1,3,2,x,0],[2,1,2,1,x,x,9],[-1,3,-1,3,2,-1,7]],
  ],
  // 6
  [
// 6
    [[x,2,3,3,4,x,0],[-3,-3,-3,-3,1,x,4],[-1,-1,-1,-1,3,4,5],[x,2,3,1,x,2,8],[x,3,2,3,x,1,9],[3,-1,3,-1,x,x,11]],
// 6
    [[0,1,2,2,3,x,0],[-3,-3,-3,-3,1,x,3],[-1,-1,-1,-1,3,4,6],[x,2,3,1,x,2,7],[x,3,2,3,x,1,8],[3,-1,3,-1,x,x,10]],
// 6
    [[2,0,2,0,x,x,0],[x,1,2,2,3,x,3],[-3,-3,-3,-3,1,x,5],[-1,-1,-1,-1,3,4,7],[x,2,3,1,x,2,9],[x,3,2,3,x,1,10]],
// 6
    [[3,-1,3,-1,x,x,0],[x,1,2,2,3,x,4],[-3,-3,-3,-3,1,x,6],[-1,-1,-1,-1,3,4,8],[x,2,3,1,x,2,10],[x,3,2,3,x,1,11]],
// 6
    [[0,2,1,2,2,0,0],[3,-1,3,-1,x,x,2],[x,1,2,2,3,x,5],[-3,-3,-3,-3,1,x,7],[-1,-1,-1,-1,3,4,9],[x,2,3,1,x,2,11],[x,2,1,2,x,0,0]],
// 6
    [[x,3,2,3,x,1,0],[3,-1,3,-1,x,x,3],[x,1,2,2,3,x,6],[-3,-3,-3,-3,1,x,8],[x,1,2,0,x,1,0],[-1,-1,-1,-1,3,4,10],[x,2,3,1,x,2,12]],
// 6
    [[x,3,2,3,x,1,2],[3,-1,3,-1,x,x,4],[x,1,2,2,3,x,7],[-3,-3,-3,-3,1,x,9],[-1,-1,-1,-1,3,4,11],[x,2,3,1,x,2,0]],
// 6
    [[0,0,0,0,2,3,0],[x,3,2,3,x,1,3],[3,-1,3,-1,x,x,5],[x,1,2,2,3,x,8],[-3,-3,-3,-3,1,x,10],[x,2,3,1,x,2,2]],
// 6
    [[-1,-1,-1,-1,3,4,0],[x,3,2,3,x,1,4],[3,-1,3,-1,x,x,6],[x,1,2,2,3,x,9],[-3,-3,-3,-3,1,x,11],[x,2,3,1,x,2,3]],
// 6
    [[-2,-2,-2,-2,0,x,0],[-1,-1,-1,-1,3,4,2],[x,3,2,3,x,1,5],[3,-1,3,-1,x,x,7],[x,1,2,2,3,x,10],[x,2,3,1,x,2,4]],
// 6
    [[-3,-3,-3,-3,1,x,0],[-1,-1,-1,-1,3,4,3],[x,3,2,3,x,1,6],[3,-1,3,-1,x,x,8],[x,1,2,2,3,x,11],[x,2,3,1,x,2,5]],
// 6
    [[-3,-3,-3,-3,1,x,2],[-1,-1,-1,-1,3,4,4],[x,3,2,3,x,1,7],[3,-1,3,-1,x,x,9],[x,1,2,2,3,x,12],[x,2,3,1,x,2,6]],
  ],
  // m6
  [
    // C
    [[x,-1,2,-1,3,x,0],[2,3,1,x,2,x,2],[x,2,2,1,x,2,7],[-1,3,-1,3,3,-1,8],[2,-1,3,-1,x,x,10]],
    // -D
    [[x,-1,2,-1,3,x,2],[2,3,1,x,2,x,3],[x,2,2,1,x,2,8],[-1,3,-1,3,3,-1,9],[2,-1,3,-1,x,x,11]],
    // D
    [[1,0,2,0,x,x,0],[x,-1,2,-1,3,x,3],[2,3,1,x,2,x,4],[x,2,2,1,x,2,9],[-1,3,-1,3,3,-1,10]],
    // -E
    [[2,-1,3,-1,x,x,0],[x,-1,2,-1,3,x,4],[2,3,1,x,2,x,5],[x,2,2,1,x,2,10],[-1,3,-1,3,3,-1,11]],
    // E
    [[0,2,0,2,2,0,0],[2,-1,3,-1,x,x,2],[x,-1,2,-1,3,x,5],[2,3,1,x,2,x,6],[x,2,2,1,x,2,11]],
    // F
    [[-1,3,-1,3,3,-1,0],[x,1,1,0,x,1,0],[2,-1,3,-1,x,x,3],[x,-1,2,-1,3,x,6],[2,3,1,x,2,x,7],],
    // -G
    [[-1,3,-1,3,3,-1,2],[x,2,2,1,x,2,0],[2,-1,3,-1,x,x,4],[x,-1,2,-1,3,x,7],[2,3,1,x,2,x,8]],
    // G
    [[x,3,3,2,x,3,0],[-1,3,-1,3,3,-1,3],[2,-1,3,-1,x,x,5],[x,-1,2,-1,3,x,8],[2,3,1,x,2,x,9],[x,2,2,1,x,2,2]],
    // -A
    [[x,2,2,1,x,2,3],[-1,3,-1,3,3,-1,4],[2,-1,3,-1,x,x,6],[x,-1,2,-1,3,x,9],[2,3,1,x,2,x,10],[x,2,2,1,x,2,3]],
    // A
    [[2,1,2,2,0,x,0],[x,2,2,1,x,2,4],[-1,3,-1,3,3,-1,5],[2,-1,3,-1,x,x,7],[x,-1,2,-1,3,x,10],[2,3,1,x,2,x,11]],
    // -B
    [[x,2,0,3,1,x,0],[1,2,0,x,1,x,0],[x,2,2,1,x,2,5],[-1,3,-1,3,3,-1,6],[2,-1,3,-1,x,x,8],[x,-1,2,-1,3,x,11]],
    // B
    [[2,0,1,0,2,x,0],[x,-0,1,0,2,x,0],[2,3,1,x,2,x,1],[x,2,2,1,x,2,6],[-1,3,-1,3,3,-1,7],[2,-1,3,-1,x,x,9],]
  ],
  // M7 9
  [
    // C
    [[0,0,0,0,3,x,0],[3,-1,-1,-1,-1,x,5],[1,2,1,x,x,2,7],[x,2,3,1,2,x,2],[x,2,1,3,x,2,7],[2,4,1,2,x,x,9],[1,3,3,1,x,x,10],[-1,-1,2,3,-1,x,3],[3,-1,2,2,x,-1,8]],
    // -D
    [[x,2,3,1,2,x,3],[3,-1,-1,-1,-1,x,6],[1,2,1,x,x,2,8],[x,2,1,3,x,2,8],[2,4,1,2,x,x,10],[1,3,3,1,x,x,11],[-1,-1,2,3,-1,x,4],[3,-1,2,2,x,-1,9]],
    // D
    [[0,2,2,0,x,x,0],[3,-1,-1,-1,-1,x,7],[1,2,1,x,x,2,9],[x,2,3,1,2,x,4],[x,2,1,3,x,2,9],[2,4,1,2,x,x,11],[-1,-1,2,3,-1,x,5],[3,-1,2,2,x,-1,10]],
    // -E
    [[1,3,3,1,x,x,0],[3,-1,-1,-1,-1,x,8],[1,2,1,x,x,2,10],[x,2,3,1,2,x,5],[x,2,1,3,x,2,10],[1,3,0,1,x,x,0],[-1,-1,2,3,-1,x,6],[3,-1,2,2,x,-1,11]],
    // E
    [[2,0,1,1,2,0,0],[1,3,3,1,x,x,2],[3,-1,-1,-1,-1,x,9],[1,2,1,x,x,2,11],[x,2,3,1,2,x,6],[x,2,1,3,x,2,11],[2,4,1,2,x,x,0],[-1,-1,2,3,-1,x,7],[2,0,1,1,x,0,0]],
    // F
    [[0,1,0,2,x,1,0],[1,3,3,1,x,x,3],[3,-1,-1,-1,-1,x,10],[0,1,0,x,x,1,0],[x,2,3,1,2,x,7],[2,4,1,2,x,x,2],[-1,-1,2,3,-1,x,8],[3,-1,2,2,x,-1,0]],
    // -G
    [[x,2,1,3,x,2,0],[1,3,3,1,x,x,4],[3,-1,-1,-1,-1,x,11],[1,2,1,x,x,2,0],[x,2,3,1,2,x,8],[2,4,1,2,x,x,3],[-1,-1,2,3,-1,x,9],[3,-1,2,2,x,-1,2]],
    // G
    [[1,3,3,1,x,x,5],[2,0,0,0,0,x,0],[1,2,1,x,x,2,2],[x,2,3,1,2,x,9],[x,2,1,3,x,2,2],[2,4,1,2,x,x,4],[-1,-1,2,3,-1,x,10],[3,-1,2,2,x,-1,3]],
    // -A
    [[1,3,3,1,x,x,6],[3,-1,-1,-1,-1,x,0],[1,2,1,x,x,2,3],[x,2,3,1,2,x,10],[x,2,1,3,x,2,3],[2,4,1,2,x,x,5],[-1,-1,2,3,-1,x,11],[3,-1,2,2,x,-1,4]],
    // A
    [[0,0,1,2,0,x,0],[1,3,3,1,x,x,7],[3,-1,-1,-1,-1,x,2],[1,2,1,x,x,2,4],[x,2,3,1,2,x,11],[x,2,1,3,x,2,4],[2,4,1,2,x,x,6],[3,-1,2,2,x,-1,5]],
    // -B
    [[1,1,2,0,1,x,0],[-1,-1,2,3,-1,x,0],[1,3,3,1,x,x,8],[3,-1,-1,-1,-1,x,3],[1,2,1,x,x,2,5],[x,1,2,0,1,x,0],[x,2,1,3,x,2,5],[2,4,1,2,x,x,7],[3,-1,2,2,x,-1,6]],
    // B
    [[-1,-1,2,3,-1,x,2],[1,3,3,1,x,x,9],[3,-1,-1,-1,-1,x,4],[1,2,1,x,x,2,6],[x,2,3,1,2,x,0],[x,2,1,3,x,2,6],[2,4,1,2,x,x,8],[3,-1,2,2,x,-1,7]],
  ],
  // 69
  [
    // C
    [[2,2,-1,-1,2,x,2],[2,2,-1,-1,-1,2,7],[2,2,1,2,x,x,9]],
    // -D
    [[2,2,-1,-1,2,x,3],[2,2,-1,-1,-1,2,8],[2,2,1,2,x,x,10]],
    // D
    [[2,2,-1,-1,2,x,4],[2,2,-1,-1,-1,2,9],[2,2,1,2,x,x,11]],
    // -E
    [[1,1,0,1,x,x,0],[2,2,-1,-1,2,x,5],[2,2,-1,-1,-1,2,10]],
    // E
    [[2,2,-1,-1,2,x,6],[2,2,-1,-1,-1,2,11],[2,2,1,2,x,x,0]],
    // F
    [[1,1,0,0,0,1,0],[2,2,-1,-1,2,x,7],[2,2,1,2,x,x,2]],
    // -G
    [[2,2,-1,-1,2,x,8],[2,2,-1,-1,-1,2,0],[2,2,1,2,x,x,3]],
    // G
    [[2,2,-1,-1,2,x,9],[2,2,-1,-1,-1,2,2],[2,2,1,2,x,x,4]],
    // -A
    [[2,2,-1,-1,2,x,10],[2,2,-1,-1,-1,2,3],[2,2,1,2,x,x,5]],
    // A
    [[2,0,2,2,0,x,0],[2,2,-1,-1,2,x,11],[2,2,-1,-1,-1,2,4],[2,2,1,2,x,x,6]],
    // -B
    [[1,1,0,0,1,x,0],[2,2,-1,-1,-1,2,5],[2,2,1,2,x,x,7]],
    // B
    [[2,2,-1,-1,2,x,0],[2,2,-1,-1,-1,2,6],[2,2,1,2,x,x,8]],
  ],
  // m69
  [
    // C
    [[x,3,2,1,3,x,0],[3,3,1,3,x,x,8],[3,3,-1,x,x,-1,8],[x,x,2,2,1,3,6]],
    // -D
    [[x,3,2,1,3,x,2],[3,3,1,3,x,x,9],[3,3,-1,x,x,-1,9],[x,x,2,2,1,3,7]],
    // D
    [[x,3,2,1,3,x,3],[3,3,1,3,x,x,10],[3,3,-1,x,x,-1,10],[x,x,2,2,1,3,8]],
    // -E
    [[x,3,2,1,3,x,4],[3,3,1,3,x,x,11],[3,3,-1,x,x,-1,11],[x,x,2,2,1,3,9]],
    // E
    [[2,2,0,2,2,0,0],[x,3,2,1,3,x,5],[2,2,0,2,x,x,0],[x,x,2,2,1,3,10]],
    // F
    [[x,3,2,1,3,x,6],[3,3,1,3,x,x,0],[3,3,-1,x,x,-1,0],[x,x,2,2,1,3,11]],
    // -G
    [[x,x,1,1,0,2,0],[x,3,2,1,3,x,7],[3,3,1,3,x,x,2],[3,3,-1,x,x,-1,2]],
    // G
    [[x,x,2,2,1,3,0],[x,3,2,1,3,x,8],[3,3,1,3,x,x,3],[3,3,-1,x,x,-1,3]],
    // -A
    [[x,3,2,1,3,x,9],[3,3,1,3,x,x,4],[3,3,-1,x,x,-1,4],[x,x,2,2,1,3,2]],
    // A
    [[x,3,2,1,3,x,10],[3,3,1,3,x,x,5],[3,3,-1,x,x,-1,5],[x,x,2,2,1,3,3]],
    // -B
    [[x,3,2,1,3,x,11],[3,3,1,3,x,x,6],[3,3,-1,x,x,-1,6],[x,x,2,2,1,3,4]],
    // B
    [[x,2,1,0,2,x,0],[3,3,1,3,x,x,7],[3,3,-1,x,x,-1,7],[x,x,2,2,1,3,5]],
  ],
  // 7b9
  [
    // C
    [[2,-1,2,-1,2,x,2],[x,x,1,3,2,3,6],[2,-1,2,-1,x,-1,8],[-1,3,-1,2,x,x,9],[x,1,2,1,2,x,2]],
    // -D
    [[2,-1,2,-1,2,x,3],[x,x,1,3,2,3,7],[2,-1,2,-1,x,-1,9],[-1,3,-1,2,x,x,10],[x,1,2,1,2,x,3]],
    // D
    [[2,-1,2,-1,2,x,4],[x,x,1,3,2,3,8],[2,-1,2,-1,x,-1,10],[-1,3,-1,2,x,x,11],[x,1,2,1,2,x,4]],
    // -E
    [[1,0,1,0,2,0],[0,2,0,1,x,x,0],[2,-1,2,-1,2,x,5],[x,x,1,3,2,3,9],[2,-1,2,-1,x,-1,11],[x,1,2,1,2,x,5]],
    // E
    [[-1,3,-1,2,x,x,0],[2,-1,2,-1,2,x,6],[x,x,1,3,2,3,10],[x,1,2,1,2,x,6]],
    // F
    [[-1,3,-1,2,x,x,2],[2,-1,2,-1,2,x,7],[x,x,1,3,2,3,11],[2,-1,2,-1,x,-1,0],[x,1,2,1,2,x,7]],
    // -G
    [[0,2,0,2,1,2,0],[-1,3,-1,2,x,x,3],[2,-1,2,-1,2,x,8],[x,x,0,2,1,2,0],[2,-1,2,-1,x,-1,2],[x,1,2,1,2,x,8]],
    // G
    [[x,0,1,3,2,3,0],[-1,3,-1,2,x,x,4],[2,-1,2,-1,2,x,9],[2,-1,2,-1,x,-1,3],[x,1,2,1,2,x,9]],
    // -A
    [[-1,3,-1,2,x,x,5],[2,-1,2,-1,2,x,10],[x,x,1,3,2,3,2],[2,-1,2,-1,x,-1,4],[x,1,2,1,2,x,10]],
    // A
    [[3,2,3,2,0,x,0],[-1,3,-1,2,x,x,6],[2,-1,2,-1,2,x,11],[x,x,1,3,2,3,3],[2,-1,2,-1,x,-1,5],[x,1,2,1,2,x,11]],
    // -B
    [[1,0,1,0,1,x,0],[x,x,1,3,2,3,4],[2,-1,2,-1,x,-1,6],[-1,3,-1,2,x,x,7],[x,0,1,0,1,x,0]],
    // B
    [[x,1,2,1,2,x,0],[2,-1,2,-1,2,x,0],[x,x,1,3,2,3,5],[2,-1,2,-1,x,-1,7],[-1,3,-1,2,x,x,8]],
  ],
  // 79
  [
    // C
    [[x,2,2,1,2,x,2],[x,1,3,4,x,4,5],[x,2,-1,2,-1,2,7],[-1,2,3,-1,x,x,10],[2,3,1,2,x,x,9],[3,-1,2,-1,3,-1,8],],
    // -D
    [[x,2,2,1,2,x,3],[x,1,3,4,x,4,6],[x,2,-1,2,-1,2,8],[-1,2,3,-1,x,x,11],[2,3,1,2,x,x,10],[3,-1,2,-1,3,-1,9],],
    // D
    [[0,1,2,0,x,x,0],[x,2,2,1,2,x,4],[x,1,3,4,x,4,7],[x,2,-1,2,-1,2,9],[2,3,1,2,x,x,11],[3,-1,2,-1,3,-1,10],],
    // -E
    [[1,2,0,1,x,x,0],[-1,2,3,-1,x,x,0],[x,2,2,1,2,x,5],[x,1,3,4,x,4,8],[x,2,-1,2,-1,2,10],[3,-1,2,-1,3,-1,11],],
    // E
    [[2,0,1,0,2,0,0],[-1,2,3,-1,x,x,2],[2,3,1,2,x,x,0],[x,2,2,1,2,x,6],[x,1,3,4,x,4,9],[x,2,-1,2,-1,2,11]],
    // F
    [[3,-1,2,-1,3,-1,0],[-1,2,3,-1,x,x,3],[2,3,1,2,x,x,2],[x,2,2,1,2,x,7],[x,1,3,4,x,4,10],[x,1,0,1,0,1,0]],
    // -G
    [[3,-1,2,-1,3,-1,2],[2,3,1,2,x,x,3],[-1,2,3,-1,x,x,4],[x,2,2,1,2,x,8],[x,1,3,4,x,4,11],[x,2,-1,2,-1,2,0]],
    // G
    [[3,-1,2,-1,3,-1,3],[2,3,1,2,x,x,4],[-1,2,3,-1,x,x,5],[x,2,2,1,2,x,9],[x,0,2,3,x,3,0],[x,2,-1,2,-1,2,2]],
    // -A
    [[3,-1,2,-1,3,-1,4],[2,3,1,2,x,x,5],[-1,2,3,-1,x,x,6],[x,2,2,1,2,x,10],[x,1,3,4,x,4,0],[x,2,-1,2,-1,2,3]],
    // A
    [[3,-2,4,-2,0,x,0],[3,-1,2,-1,3,-1,5],[2,3,1,2,x,x,6],[-1,2,3,-1,x,x,7],[x,2,2,1,2,x,11],[x,1,3,4,x,4,2],[x,2,-1,2,-1,2,4]],
    // -B
    [[x,1,1,0,1,x,0],[3,-1,2,-1,3,-1,6],[2,3,1,2,x,x,7],[x,1,3,4,x,4,3],[x,2,-1,2,-1,2,5],[-1,2,3,-1,x,x,8]],
    // B
    [[x,2,2,1,2,x,0],[3,-1,2,-1,3,-1,7],[2,3,1,2,x,x,8],[x,1,3,4,x,4,4],[x,2,-1,2,-1,2,6],[-1,2,3,-1,x,x,9]],
  ],
  // 7#9
  [
    // C
    [[x,3,2,1,2,x,2],[x,x,2,2,1,2,7],[4,-1,2,-1,3,-1,8],[3,3,1,2,x,x,9],],
    // -D
    [[x,3,2,1,2,x,3],[x,x,2,2,1,2,8],[4,-1,2,-1,3,-1,9],[3,3,1,2,x,x,10],],
    // D
    [[x,3,2,1,2,x,4],[x,x,2,2,1,2,9],[4,-1,2,-1,3,-1,10],[3,3,1,2,x,x,11]],
    // -E
    [[2,2,0,1,x,x,0],[x,3,2,1,2,x,5],[x,x,2,2,1,2,10],[4,-1,2,-1,3,-1,11]],
    // E
    [[3,0,1,0,2,0,0],[3,3,1,2,x,x,0],[x,3,2,1,2,x,6],[x,x,2,2,1,2,11]],
    // F
    [[3,3,1,2,x,x,2],[x,3,2,1,2,x,7],[x,x,1,1,0,1,0],[4,-1,2,-1,3,-1,0]],
    // -G
    [[3,3,1,2,x,x,3],[x,3,2,1,2,x,8],[x,x,2,2,1,2,0],[4,-1,2,-1,3,-1,2]],
    // G
    [[3,3,1,2,x,x,4],[x,3,2,1,2,x,9],[x,x,2,2,1,2,2],[4,-1,2,-1,3,-1,3]],
    // -A
    [[3,3,1,2,x,x,5],[x,3,2,1,2,x,10],[x,x,2,2,1,2,3],[4,-1,2,-1,3,-1,4]],
    // A
    [[3,3,1,2,x,x,6],[x,3,2,1,2,x,11],[x,x,2,2,1,2,4],[4,-1,2,-1,3,-1,5]],
    // -B
    [[x,2,1,0,1,x,0],[3,3,1,2,x,x,7],[x,x,2,2,1,2,5],[4,-1,2,-1,3,-1,6]],
    // B
    [[3,3,1,2,x,x,8],[x,3,2,1,2,x,0],[x,x,2,2,1,2,6],[4,-1,2,-1,3,-1,7]],
  ]
];

  // //
  // [
  //   // C
  //   [],
  //   // -D
  //   [],
  //   // D
  //   [],
  //   // -E
  //   [],
  //   // E
  //   [],
  //   // F
  //   [],
  //   // -G
  //   [],
  //   // G
  //   [],
  //   // -A
  //   [],
  //   // A
  //   [],
  //   // -B
  //   [],
  //   // B
  //   [],
  // ]