案

# chordの渡し方

1-6弦の順番に配列で渡す。
ex.) Fm
```
const chord = {
  chord: [-2, -2, -2, 3, 3, -2], // 1st to 6th string, -2 = non position (barres)
  position: 0,
  barres: [{ fromString: 6, toString: 1, fret: 1 }]
};
```
ChordBox.js側でvexchord用に変換して渡してくれる。

### セーハ0の検知
barresのfretが0になった時、ChordBox側でbarres={}に置換してくれる

### セーハにかぶる弦
-2 を指定することで、ChordBox側で[]に置換してくれる。

## mute
muteは本来'x'だが面倒くさいので、-1を指定すると、ChordBox側で置換してくれる
ex.) C
```
const chord = {
  chord: [0, 1, 0, 2, 3, -1], // 1st to 6th string, -2 = non position (barres)
  position: 0,
  barres: [{ fromString: 6, toString: 1, fret: 0 }]
};
```