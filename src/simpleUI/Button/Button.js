import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../theme/ThemeProvider/ThemeProvider';

const Button = styled.button`
  background-color: ${(props) => props.theme.palette[props.color].main};
  color: ${(props) => props.theme.palette[props.color].contrastText};
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
    transform: scale(0.98);
    background-color: ${(props) => props.theme.palette[props.color].dark};
  }
  &:focus {
    outline: ${(props) => props.theme.palette[props.color].main} auto 1px;
  }
  &:hover {
    background-color: ${(props) => props.theme.palette[props.color].main}40;
  }
  ${(props) =>
    props.variant === 'outlined' &&
    `
    background-color: transparent;
    border: 1px solid ${props.theme.palette[props.color].main};
    color: ${props.theme.palette[props.color].main};
  `}

  ${(props) =>
    props.variant === 'text' &&
    `
    background-color: transparent;
    color: ${props.theme.palette[props.color].main};
    box-shadow: none;
    &:hover {
      background-color: ${props.theme.palette[props.color].main}40;
    }
  `}

  ${(props) =>
    props.disabled &&
    `
    background-color: ${props.theme.palette[props.color].main}40;
    color: ${props.theme.palette[props.color].main};
    box-shadow: none;
    cursor: default;
    &:hover {
      transform: none;
    }

    &:active {
      background-color: ${props.theme.palette[props.color].main}40; 
    }
  `}

  ${(props) =>
    props.size === 'large' &&
    `
    padding: 0.9rem 1.6rem;
    font-size: 0.8rem;
  `}

  ${(props) =>
    props.size === 'medium' &&
    `
    padding: 0.7rem 1.4rem;
    font-size: 0.7rem;
  `}

  ${(props) =>
    props.size === 'small' &&
    `
    padding: 0.5rem 1rem;
    font-size: 0.6rem;
  `}

  ${(props) =>
    props.fullWidth &&
    `
    width: 100%;
  `}
  ${(props) =>
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

const ButtonComponent = (props) => {
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
          onClick={() => (disabled ? null : onClick())}
          variant={variant}
          color={color}
          size={size}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
          fullWidth={fullWidth}
          autoWidth={autoWidth}
          ref={ref}
          className={className}
          style={style}
          id={id}
          type={type}
          name={name}
          aria-label={props['aria-label']}
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
  size: 'medium',
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
