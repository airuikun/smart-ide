import "./index.css";

function Wrap({icon, text,...props}) {
  return (
    <div className='btn_vscode' {...props}>
      <span className="icon_color">{icon}</span><span className="icon_vscode">{text}</span>
    </div>
  );
}

export default Wrap;
