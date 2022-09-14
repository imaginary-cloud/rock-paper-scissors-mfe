import React from 'react';
import './Button.css';

interface Props {
  children: React.ReactNode
  onClick?: () => void
  large?: boolean
}

export const Button = (
  { children, onClick, large = false }: Props
) => {
  const classNameArr = ["action-button"]

  if (large) {
    classNameArr.push('large')
  }

  const className = classNameArr.join(" ")
  return <button className={className} onClick={onClick}> {children}</button >
}

export default Button;
