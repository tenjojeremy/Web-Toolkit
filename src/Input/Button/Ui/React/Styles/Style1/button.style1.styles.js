import styled from 'styled-components'

export const Wrapper = styled.div`
  /* Base */
  background-color: ${({ color }) => `var(--color-${color}-background)`};
  border-radius: 100px;
  cursor: pointer;
  padding: var(--spacing-s);
  display: flex;  
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.2s ease-in-out;
  height: 40px;  
  border: 2px solid ${({ color }) => `var(--color-${color}-background)`};
  user-select: none;

  &:active {
    border: 2px solid ${({ color }) => `var(--color-${color}-darker)`};
  }

  /* Active */
  ${({ active, color }) =>
    active && `border: 2px solid var(--color-${color}-darker);`}

  /* Disabled */
  ${({ disabled }) =>
    disabled &&
    `
  background-color: var(--color-disabled-background);
  border: 2px solid var(--color-disabled-background);
  &:active {
    border: 2px solid var(--color-disabled-background);
  }`}

  /* Outlined */
  ${({ outlined }) =>
    outlined &&
    `background-color: transparent;
     border: 2px solid var(--color-white);
     &:active {
       border: 2px solid var(--color-white);
    }`}

  /* with Icon */
  ${({ icon, color }) =>
    icon &&
    `
  svg {
    margin-left: 10px;
    fill: var(--color-${color}-darker);
    }
  `}

  /* FAB */
  ${({ type, color }) =>
    type === 'FAB' &&
    `
    box-shadow: var(--boxShadow-1);
    background-color: var(--color-${color});
    border: 2px solid var(--color-${color});
     &:active {
       border: 2px solid var(--color-${color});
    }
  svg {
    margin-left: 10px;
    fill: var(--color-white);
    }
  `}
`