import React from "react";

function Button({ children, onClick }) {
  return (
    <button class="button-54" role="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
