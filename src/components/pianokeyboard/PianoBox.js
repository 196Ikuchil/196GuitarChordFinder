import styles from './pianostyle.css';

export default function PianoBox() {
  return (
    <section id="pianobox">
      <div className="pianobase">
        <div className="keys" style={styles}>
          <div data-key="65" className="key" data-note="C">
            <span className="hints">A</span>
          </div>
          <div data-key="87" className="key sharp" data-note="C#">
            <span className="hints">W</span>
          </div>
          <div data-key="83" className="key" data-note="D">
            <span className="hints">S</span>
          </div>
          <div data-key="69" className="key sharp" data-note="D#">
            <span className="hints">E</span>
          </div>
          <div data-key="68" className="key" data-note="E">
            <span className="hints">D</span>
          </div>
          <div data-key="70" className="key" data-note="F">
            <span className="hints">F</span>
          </div>
          <div data-key="84" className="key sharp" data-note="F#">
            <span className="hints">T</span>
          </div>
          <div data-key="71" className="key" data-note="G">
            <span className="hints">G</span>
          </div>
          <div data-key="89" className="key sharp" data-note="G#">
            <span className="hints">Y</span>
          </div>
          <div data-key="72" className="key" data-note="A">
            <span className="hints">H</span>
          </div>
          <div data-key="85" className="key sharp" data-note="A#">
            <span className="hints">U</span>
          </div>
          <div data-key="74" className="key" data-note="B">
            <span className="hints">J</span>
          </div>
          <div data-key="75" className="key" data-note="C">
            <span className="hints">K</span>
          </div>
          <div data-key="79" className="key sharp" data-note="C#">
            <span className="hints">O</span>
          </div>
          <div data-key="76" className="key" data-note="D">
            <span className="hints">L</span>
          </div>
          <div data-key="80" className="key sharp" data-note="D#">
            <span className="hints">P</span>
          </div>
          <div data-key="186" className="key" data-note="E">
            <span className="hints">;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
