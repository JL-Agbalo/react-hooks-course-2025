import { useState } from "react";

export const Visible = () => {
    const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  }

return (
  <div>
          <h1>Toggle Visibility</h1>
          {visible && <p>This is some text that can be hidden.</p>}
          <button
          onClick={toggleVisibility}
          >{visible ? 'Hide' : 'Show'}</button>

  </div>
);
};

