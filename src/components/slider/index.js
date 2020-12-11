import React, { createContext, useContext } from 'react';
import { Body, SlideContainer, ControllButton, CirclesPanel } from './slider/slider'

const SliderSizeContext = createContext();

export const Slider = ({ maxWidth, height, children, ...props }) => {

    return (
        <SliderSizeContext.Provider value={{ maxWidth, height }}>
            <Body maxWidth={maxWidth} height={height} {...props}>{children}</Body>
        </SliderSizeContext.Provider>
    )
}

Slider.Slide = function SliderSlide({ children, ...props }) {
    const { maxWidth, height } = useContext(SliderSizeContext);
    return (
        <SlideContainer {...props} maxWidth={maxWidth} height={height}>
            {children}
        </SlideContainer>
    )
}


Slider.Button = function SliderButton({ children, ...props }) {
    const { maxWidth, height } = useContext(SliderSizeContext);
    return (
        <ControllButton maxWidth={maxWidth} height={height} {...props}>
            {children}
        </ControllButton >
    )
}

Slider.Panel = function SliderPanel({ children, ...props }) {
    return <CirclesPanel {...props}>{children}</CirclesPanel>
}