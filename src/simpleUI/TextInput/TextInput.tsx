import React from 'react';
import styled from 'styled-components';

import { ThemeConsumer } from '../theme/ThemeProvider/ThemeProvider';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  size?: 'large' | 'medium' | 'small' | 'normal';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
}

interface colorProps {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

interface InputProps {
  theme: {
    palette: {
      primary: colorProps;
      secondary: colorProps;
      info: colorProps;
      success: colorProps;
      warning: colorProps;
      error: colorProps;
    };
  };
  error: boolean;
  size: string;
}
const Input = styled.input``;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TextInput = (props: TextInputProps) => {
  return (
    <ThemeConsumer>
      {(theme) => {
        const {
          label,
          value,
          onChange,
          type,
          placeholder,
          disabled,
          helperText,
          required,
          name,
          id,
          className,
          style,
          'aria-label': ariaLabel,
          color,
        } = props;
        return (
          <Div theme={theme} color={color} className={className} style={style}>
            <label htmlFor={id}>{label}</label>
            <Input
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              name={name}
              id={id}
              aria-label={ariaLabel}
            />
            {helperText && <span>{helperText}</span>}
          </Div>
        );
      }}
    </ThemeConsumer>
  );
};

TextInput.defaultProps = {
  type: 'text',
  disabled: false,
  error: false,
  fullWidth: false,
  required: false,
  size: 'normal',
};

export default TextInput;
