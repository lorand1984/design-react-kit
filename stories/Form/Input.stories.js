import React, { useState } from 'react'
import AsyncSelect from 'react-select/async'

import {
  DropdownIndicator,
  multiOptions,
  Input as AutocompleteInput
} from './Autocomplete/AutocompleteExample'
import TextArea from './Input/TextArea/TextArea'

import Esempi from './docs/Input/Esempi.md'
import Placeholder from './docs/Input/Placeholder.md'
import IconButton from './docs/Input/IconButton.md'
import Password from './docs/Input/Password.md'
import Disabled from './docs/Input/Disabled.md'
import Readonly from './docs/Input/Readonly.md'
import Normalize from './docs/Input/Normalize.md'
import Textarea from './docs/Input/Textarea.md'
import InputAutocomplete from './docs/Input/InputAutocomplete.md'

import { Input, Icon } from '../../src'

export default {
  title: 'Componenti/Form/Input'
}

export const EsempiDiCampiDiInput = () => (
  <div>
    <Input type="text" label="Campo di tipo testuale" id="exampleInputText" />
    <Input type="email" label="Campo di tipo email" id="exampleInputEmail" />
    <Input
      type="number"
      label="Campo di tipo numerico"
      id="exampleInputNumber"
    />
    <Input type="tel" label="Campo di tipo telefono" id="exampleInputTel" />
    <Input
      type="time"
      label="Campo di tipo ora"
      id="exampleInputTime"
      min="9:00"
      max="18:00"
    />
  </div>
)

EsempiDiCampiDiInput.story = {
  name: 'Esempi di campi di input'
}

export const UtilizzoDiPlaceholderELabel = () => (
  <div>
    <Input label="Etichetta di esempio" id="exampleLabel" />
    <Input
      label="Etichetta di esempio"
      type="text"
      placeholder="Testo di esempio"
      id="examplePlaceholder"
    />
    <Input
      label="Etichetta di esempio"
      type="text"
      placeholder="Testo di esempio"
      infoText="Ulteriore testo informativo"
      id="exampleinfoText"
    />
  </div>
)

UtilizzoDiPlaceholderELabel.story = {
  name: 'Utilizzo di placeholder e label'
}

export const InputConIconaOBottoni = () => {
  const [isFocused, toggleFocus] = useState(false)

  const toggleFocusLabel = () => toggleFocus(true)
  const toggleBlurLabel = e => {
    if (e.target.value === '') {
      toggleFocus(!isFocused)
    }
  }
  return (
    <div>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <Icon icon="it-pencil" style={{ ariaHidden: true }} size="sm" />
            </div>
          </div>
          <label htmlFor="input-group-1" className={isFocused ? 'active' : ''}>
            Con Etichetta
          </label>
          <input
            type="text"
            className={isFocused ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel}
            onBlur={toggleBlurLabel}
            id="input-group-1"
            name="input-group-1"
          />
          <div className="input-group-append">
            <button className="btn" type="button" id="button-1">
              Invio
            </button>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <Icon
                icon="it-pencil"
                color="danger"
                style={{ ariaHidden: true }}
                size="sm"
              />
            </div>
          </div>
          <label htmlFor="input-group-2" className="active">
            Con Etichetta e placeholder
          </label>
          <input
            type="text"
            className={isFocused ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel}
            onBlur={toggleBlurLabel}
            id="input-group-2"
            name="input-group-2"
            placeholder="Lorem Ipsum"
          />
          <div className="input-group-append">
            <button className="btn" type="button" id="button-2">
              Invio
            </button>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <Icon
                icon="it-pencil"
                color="primary"
                style={{ ariaHidden: true }}
                size="sm"
              />
            </div>
          </div>
          <label htmlFor="input-group-3" className={isFocused ? 'active' : ''}>
            Con Etichetta e bottone di tipo primary
          </label>
          <input
            type="text"
            className={isFocused ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel}
            onBlur={toggleBlurLabel}
            id="input-group-3"
            name="input-group-3"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" id="button-3">
              Invio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

InputConIconaOBottoni.story = {
  name: 'Input con icona o bottoni'
}

export const InputPassword = () => (
  <Input
    type="password"
    id="exampleInputPassword"
    label="Password con label, placeholder e testo di aiuto"
    infoText="Inserisci almeno 8 caratteri e una lettera maiuscola"
  />
)

InputPassword.story = {
  name: 'Input password'
}

export const _Disabilitato = () => (
  <Input label="Contenuto disabilitato" id="exampleDisabled" disabled />
)

export const _Readonly = () => (
  <Input label="Contenuto in sola lettura" id="examplereadOnly" readOnly />
)

export const ReadonlyNormalizzato = () => (
  <Input label="Contenuto in sola lettura" id="exampleNormalized" normalized />
)

ReadonlyNormalizzato.story = {
  name: 'Readonly normalizzato'
}

export const _InputAutocompleteConDati = () => {
  // "value" is used to show or propagate it externally
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('')

  const handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, '')
    setValue(inputValue)
    return inputValue
  }

  return (
    <div className="form-group">
      <AsyncSelect
        id="autocomplete-regioni"
        components={{
          DropdownIndicator,
          AutocompleteInput,
          IndicatorSeparator: null
        }}
        cacheOptions
        loadOptions={(inputValue, callback) => {
          setTimeout(() => {
            callback(
              multiOptions.filter(i =>
                i.label.toLowerCase().includes(inputValue.toLowerCase())
              )
            )
          }, 1000)
        }}
        defaultOptions
        placeholder="Testo da cercare"
        onInputChange={handleInputChange}
        classNamePrefix="react-autocomplete"
      />
      <label htmlFor="autocomplete-regioni" className="sr-only">
        Cerca nel sito
      </label>
    </div>
  )
}

_InputAutocompleteConDati.story = {
  name: 'Input autocomplete'
}

export const AreaDiTesto = () => (
  <TextArea rows="3" label="Esempio di area di testo" />
)

AreaDiTesto.story = {
  name: 'Area di testo'
}

export const AreaDiTestoConSegnaposto = () => (
  <TextArea
    rows="3"
    label="Esempio di area di testo"
    placeholder="Testo di esempio"
  />
)

AreaDiTestoConSegnaposto.story = {
  name: 'Area di testo con segnaposto'
}