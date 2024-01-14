"use client"
import { useState } from "react"
import * as S from "./styles"

import { Close } from "@styled-icons/material-outlined/Close"
import { FilterList } from "@styled-icons/material-outlined/FilterList"

import Heading from "../Heading"
import Checkbox from "../Checkbox"
import Radio from "../Radio"
import Button from "../Button"

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Fields[]
}

export type Fields = {
  label: string
  name: string
}

export type Values = {
  [field: string]: boolean | string
}

export type ExplorerSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExplorerSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  function handleChange(name: string, value: string | boolean) {
    setValues((s) => ({ ...s, [name]: value }))
  }

  const handleFilterMenu = () => {
    setIsOpen(false)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === "checkbox" &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={!!values[field.name]}
                  onCheck={(v) => handleChange(field.name, v ? field.name : "")}
                />
              ))}

            {item.type === "radio" &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleChange(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button
          fullWidth
          size="medium"
          onClick={() => {
            onFilter(values)
            handleFilterMenu()
          }}
        >
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
