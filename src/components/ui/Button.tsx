'use client'

import Link from 'next/link'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'lg'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps & {
  href: string
  target?: string
  rel?: string
}

export type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-6 py-3 text-base',
  lg: 'px-7 py-4 text-lg',
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children, ...rest } = props as any
  const base = `${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={base} target={(props as ButtonAsLink).target} rel={(props as ButtonAsLink).rel}>
        {children}
      </Link>
    )
  }

  return (
    <button className={base} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  )
}


