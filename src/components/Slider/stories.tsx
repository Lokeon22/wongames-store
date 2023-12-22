import { StoryFn, Meta } from "@storybook/react"
import Slider from "."
import { Settings } from "react-slick"
import styled from "styled-components"

export default {
  title: "Slider",
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const SLide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: StoryFn = () => (
  <Slider settings={settings}>
    <SLide>1</SLide>
    <SLide>2</SLide>
    <SLide>3</SLide>
    <SLide>4</SLide>
    <SLide>5</SLide>
  </Slider>
)

const vericalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: StoryFn = () => (
  <Slider settings={vericalSettings}>
    <SLide>1</SLide>
    <SLide>2</SLide>
    <SLide>3</SLide>
    <SLide>4</SLide>
    <SLide>5</SLide>
  </Slider>
)
