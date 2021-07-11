import './C5th.css';
import { Grid } from '@material-ui/core';

// eslint-disable-next-line prettier/prettier
const data1 = ['C','G','D','A','E','B','G♭','D♭','A♭','E♭','B♭','F♭'];
// eslint-disable-next-line prettier/prettier
const data2 = ['Am','Em','Bm','F#m','C#m','G#m','E♭m','B♭m','Fm','Cm','Gm','Dm'];
// eslint-disable-next-line prettier/prettier
const data3 = ['Bm(-5)','F#m(-5)','C#m(-5)','G#m(-5)','D#m(-5)','A#m(-5)','Fm(-5)','Cm(-5)','Gm(-5)','Dm(-5)','Am(-5)','Em(-5)'];

export default function C5thPanel() {
  return (
    <div className="c5thcontainer">
      <div className="circle1" />
      <div className="circle2" />
      <div className="circle3" />
      <div className="circle-text1 circle-text">
        {data1.map((x) => (
          <span key={x}>
            <div>{x}</div>
          </span>
        ))}
      </div>
      <div className="circle-text2 circle-text">
        {data2.map((x) => (
          <span key={x}>
            <div>{x}</div>
          </span>
        ))}
      </div>
      <div className="circle-text3 circle-text">
        {data3.map((x) => (
          <span key={x}>
            <div>{x}</div>
          </span>
        ))}
      </div>
    </div>
  );
}
