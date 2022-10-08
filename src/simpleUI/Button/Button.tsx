import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../theme/ThemeProvider/ThemeProvider';

interface ButtonComponentProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'large' | 'medium' | 'small' | 'normal';
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  autoWidth?: boolean;
  ref?: React.RefObject<HTMLButtonElement>;
  name?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  value?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
}

interface colorProps {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

interface ButtonProps {
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
  color: string;
  size: string;
  fullWidth: boolean;
  autoWidth: boolean;
  variant: string;
  disabled: boolean;
}

const Button = styled.button`
  background-color: ${(props: ButtonProps) =>
    props.theme.palette[props.color as keyof ButtonProps['theme']['palette']]
      .main};
  color: ${(props: ButtonProps) =>
    props.theme.palette[props.color as keyof ButtonProps['theme']['palette']]
      .contrastText};
  cursor: pointer;
  border: none;
  padding: 0.7rem 1.4rem;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 0.4rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
  margin: 0.5rem;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.99);
    background-color: ${(props: ButtonProps) =>
      props.theme.palette[props.color as keyof ButtonProps['theme']['palette']]
        .dark};
  }

  ${(props: ButtonProps) =>
    props.variant === 'outlined' &&
    `
    background-color: transparent;
    border: 1px solid ${
      props.theme.palette[props.color as keyof ButtonProps['theme']['palette']]
        .main
    };
    color: ${
      props.theme.palette[props.color as keyof ButtonProps['theme']['palette']]
        .main
    };
  `}

  ${(props: ButtonProps) =>
    props.variant === 'text' &&
    `
    background-color: transparent;
    color: ${
      props.theme.palette[props.color as keyof ButtonProps['theme']['palette']]
        .main
    };
    box-shadow: none;
    
    &:hover {
      background-color: ${
        props.theme.palette[
          props.color as keyof ButtonProps['theme']['palette']
        ].main
      }40;
    }
  `}

  ${(props: ButtonProps) =>
    props.disabled &&
    `
    background-color: ${
      props.theme.palette[props.color as keyof ButtonProps['theme']['palette']]
        .main
    }40;
    color: ${
      props.theme.palette[props.color as keyof ButtonProps['theme']['palette']]
        .main
    };
    box-shadow: none;
    cursor: default;
    &:hover {
      transform: none;
    }

    &:active {
      background-color: ${
        props.theme.palette[
          props.color as keyof ButtonProps['theme']['palette']
        ].main
      }40;
    }
  `}

  ${(props: ButtonProps) =>
    props.size === 'large' &&
    `
    padding: 0.9rem 1.6rem;
    font-size: 0.8rem;
  `}

  ${(props: ButtonProps) =>
    props.size === 'medium' &&
    `
    padding: 0.7rem 1.4rem;
    font-size: 0.7rem;
  `}

  ${(props: ButtonProps) =>
    props.size === 'small' &&
    `
    padding: 0.5rem 1rem;
    font-size: 0.6rem;
  `}

  ${(props: ButtonProps) =>
    props.fullWidth &&
    `
    width: 100%;
  `}
  ${(props: ButtonProps) =>
    props.autoWidth &&
    `
    width: auto;
  `}
`;

const IconStart = styled.span`
  margin-right: 0.5rem;
`;

const IconEnd = styled.span`
  margin-left: 0.5rem;
`;

const ButtonComponent = (props: ButtonComponentProps) => {
  const {
    children,
    onClick,
    variant,
    color,
    size,
    disabled,
    startIcon,
    endIcon,
    fullWidth,
    autoWidth,
    ref,
    name,
    id,
    type,
    value,
    className,
    style,
    ...rest
  } = props;

  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          theme={theme}
          color={color || 'primary'}
          size={size || 'medium'}
          variant={variant || 'contained'}
          disabled={disabled || false}
          fullWidth={fullWidth || false}
          autoWidth={autoWidth || false}
          onClick={onClick}
          ref={ref}
          name={name}
          id={id}
          type={type}
          value={value}
          className={className}
          style={style}
          {...rest}
        >
          {startIcon && <IconStart>{startIcon}</IconStart>}
          {children}
          {endIcon && <IconEnd>{endIcon}</IconEnd>}
        </Button>
      )}
    </ThemeConsumer>
  );
};

// Consider optional props and default values

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
  ]),
  size: PropTypes.oneOf(['normal', 'small', 'medium', 'large']),
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
  autoWidth: PropTypes.bool,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

ButtonComponent.defaultProps = {
  onClick: () => {},
  variant: 'contained',
  color: 'primary',
  size: 'normal',
  disabled: false,
  startIcon: null,
  endIcon: null,
  fullWidth: false,
  autoWidth: false,
  ref: null,
  name: '',
  id: '',
  type: 'button',
  value: '',
  className: '',
  style: {},
};

export default ButtonComponent;
