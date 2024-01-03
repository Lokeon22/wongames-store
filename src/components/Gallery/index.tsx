"use client"
import { useState, useEffect, useRef } from "react"
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined"
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined"
import { Close } from "@styled-icons/material-outlined"
import SlickSlider from "react-slick"

import Slider, { SliderSettings } from "../Slider"
import * as S from "./styles"

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: "ondemand",
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

type GalleryImageProps = {
  src: string
  label: string
}

export type GaleryProps = {
  items: GalleryImageProps[]
}

const Galery = ({ items }: GaleryProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const slider = useRef<SlickSlider>(null)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === "Escape" && setIsOpen(false)
    }

    window.addEventListener("keyup", handleKeyUp)
    return () => window.removeEventListener("keyup", handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <S.Image
            key={index}
            src={item.src}
            alt={item.label}
            role="button"
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={36} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <S.Image
                key={`Gallery - ${index}`}
                src={item.src}
                alt={`Gallery - ${item.label}`}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Galery
