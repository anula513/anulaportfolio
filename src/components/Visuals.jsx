import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";

// Hero visual: a short transcript plays, one line is highlighted, and a
// decision record is pulled out of it with its quote verified. This is the
// core idea of the Meeting Intelligence Tracker, shown instead of described.
// The `key` swap remounts the panel, which restarts the CSS animation.
export function ExtractionDemo() {
  const [run, setRun] = useState(0);

  return (
    <figure className="demo" aria-label="Animated example: a decision extracted from a meeting transcript">
      <div className="demo-bar">
        <span className="demo-file">launch-sync.txt</span>
        <button className="demo-replay" onClick={() => setRun((r) => r + 1)}>
          <RotateCcw size={14} aria-hidden="true" /> Replay
        </button>
      </div>

      <div className="demo-body" key={run}>
        <ol className="transcript">
          <li style={{ "--d": "0.2s" }}>
            <b>Priya</b> Are we still launching Monday?
          </li>
          <li style={{ "--d": "0.7s" }}>
            <b>Sam</b> Only if QA signs off by Friday.
          </li>
          <li style={{ "--d": "1.2s" }} className="is-source">
            <b>Leo</b> <mark>Then Monday it is, pending QA. I&apos;ll own the sign-off.</mark>
          </li>
        </ol>

        <div className="record">
          <div className="record-title">Decision: launch Monday</div>
          <dl>
            <dt>Status</dt><dd>provisional</dd>
            <dt>Condition</dt><dd>QA signs off by Friday</dd>
            <dt>Owner</dt><dd>Leo</dd>
          </dl>
          <div className="verified">
            <Check size={14} aria-hidden="true" /> Quote found in transcript
          </div>
        </div>
      </div>
    </figure>
  );
}

// Texting Style Clone visual: the same incoming text answered by each approach.
// Replies are illustrative until the real comparison is finished.
export function StyleCloneVisual() {
  return (
    <figure className="chat" aria-label="Illustrative replies from three approaches">
      <div className="bubble bubble--in">are u coming tonight?</div>
      <div className="reply">
        <span className="reply-label">Prompting</span>
        <div className="bubble bubble--out bubble--stiff">Yes, I will be there tonight! Looking forward to it.</div>
      </div>
      <div className="reply">
        <span className="reply-label">RAG</span>
        <div className="bubble bubble--out">yess omw soon</div>
      </div>
      <div className="reply">
        <span className="reply-label">Fine-tuned</span>
        <div className="bubble bubble--out bubble--hot">ya!! leaving in 10 🩷</div>
      </div>
      <figcaption>Illustrative replies. Real results coming soon.</figcaption>
    </figure>
  );
}

export function MetricsVisual({ metrics }) {
  return (
    <div className="mini-metrics">
      {metrics.map((m) => (
        <div key={m.label} className="mini-metric">
          <div className="mini-value">{m.value}</div>
          <div className="mini-label">{m.label}</div>
          {m.note && <div className="mini-note">{m.note}</div>}
        </div>
      ))}
    </div>
  );
}
