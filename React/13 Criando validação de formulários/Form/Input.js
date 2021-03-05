import React from 'react'

const Input = ({
  id,
  label,
  value,
  onBlur,
  type,
  placeholder,
  error,
  onChange
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
      />
      {error && <p>{error}</p>}
    </>
  )
}

export default Input
