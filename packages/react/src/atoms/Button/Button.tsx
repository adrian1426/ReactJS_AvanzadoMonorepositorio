import React from 'react';
import '@ahh/css/'

interface ButtonProps {
  label: string
}

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return (
    <button>
      {label}
    </button>
  );
};

export default Button;