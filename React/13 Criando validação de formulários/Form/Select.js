import React from 'react'

const Select = ({options, value, setValue}) => {
  return (
    <select>
      <option value={value} onChange={({target}) => setValue(target.value)}>
        Selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}

export default Select
