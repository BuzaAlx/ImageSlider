import React, { createRef, useState, useEffect } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { GiPlainCircle, GiCircle } from 'react-icons/gi';
import { Slider } from '../components/slider'

export function SliderContainer({ data, maxWidth, height, withArrowNavigation, withDotsNavigation, ...props }) {
    const [index, setIndex] = useState(0);
    const [circleSize, setCircleSize] = useState(0)

    let lastSlideIndex = data.length - 1;
    const handleIncrease = function (index) {
        setIndex((index) => {
            if (index === lastSlideIndex) {
                return 0;
            } else {
                return index + 1
            }
        })
    }
    const handleDecrease = function (index) {
        setIndex((index) => {
            if (index === 0) {
                return lastSlideIndex;
            } else {
                return index - 1
            }
        })
    }
    const calculatePosition = function (index, personIndex) {
        let position = 'nextSlide';

        if (index === personIndex) {
            position = "currentSlide"
        }
        if (personIndex === index - 1 || (index === 0 && personIndex === lastSlideIndex)) {
            position = 'previousSlide';
        }
        return position
    }

    const myRef = createRef()


    useEffect(() => {
        let imgHeight = myRef.current.height;
        setCircleSize(imgHeight / 18);
    }, [])


    useEffect(() => {
        let interval;
        if (props.autoslide) {
            interval = setInterval(() => {
                handleIncrease()
            }, 3000)
        }
        return () => clearInterval(interval)
    }, [index])



    return (
        <Slider maxWidth={maxWidth} height={height}>
            {data.map((person, personIndex) => {
                let position = calculatePosition(index, personIndex)

                return (<Slider.Slide key={person.id} position={position} >
                    <img ref={myRef} src={person.image} alt={person.title} className="person-img" />
                </Slider.Slide>)
            })}

            {withArrowNavigation ? <>
                <Slider.Button prev onClick={handleDecrease}>
                    <FiChevronLeft size={25} className="chevron" />
                </Slider.Button>
                <Slider.Button next onClick={handleIncrease}>
                    <FiChevronRight size={25} className="chevron" />
                </Slider.Button></> : null}
            {withDotsNavigation ? <Slider.Panel>
                {data.map((el, indexEl) => {
                    if (index === indexEl) {
                        return <GiPlainCircle size={circleSize} />
                    } else {
                        return <GiCircle size={circleSize} onClick={() => { setIndex(indexEl) }} />
                    }
                })}
            </Slider.Panel> : null}
        </Slider>
    )
}