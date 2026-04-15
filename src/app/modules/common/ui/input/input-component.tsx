import { HTMLInputTypeAttribute } from 'react';
import './index.scss';

interface IInputProps {
  id: string
  type?: HTMLInputTypeAttribute | undefined;

  side?: 'left' | 'right'

  label?: string
  inputClassName?: string
  inputProps?: Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className' | 'id' | 'type'>
}

/**
 * Компонент инпута
 * @param props Свойства инпута
 * @param props.id id инпута
 * @param props.type тип инпута. По умолчанию 'text'
 * @param props.side сторона текста. По умолчанию 'left'
 * @param props.inputClassName className для инпута
 * @param props.inputProps прочие стандартные свойства инпута
 * @param props.label лейбл инпута
 * @returns JSX
 */
const InputComponent = ({ id, type = 'text', side = 'left', inputClassName, inputProps, label }: IInputProps): JSX.Element => {
  return (
    <div className='input-container'>
      {label &&
        <label className='input-label' htmlFor={ id }>
          { label }
        </label>
      }

      <input
        type={ type }
        className={ `input-field input-field--${side} ${inputClassName}` }
        { ...inputProps }
      />
    </div>
  )
}

export { InputComponent }
