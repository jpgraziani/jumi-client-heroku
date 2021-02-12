import React from 'react'

export default function RecipeForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Recipe-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}
