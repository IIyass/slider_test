import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as Style from './style'
import Data from '../Data'

const Slider = () => {

    const [Index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (Index < Data.length - 1) {
                setIndex(Index + 1)
            }
            else {
                setIndex(0)
            }
        }, 3000)
    }, [Index])


    return (
        <Style.SliderWrapper>
            <Style.Visualise>
                {Data.map(({ line, content, title }, index) => {
                    return index === Index && <Style.Container>
                        <img src={line} />
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </Style.Container>
                })}
                <Style.MobileToggle>
                    {Data.map(({ line, content, title }, index) => {
                        return <Style.Toggle color={index === Index} />
                    })}
                </Style.MobileToggle>
            </Style.Visualise>
            <Style.Lines>
                {Data.map(({ title }, index) => {
                    return <Style.Text color={index === Index}><h1 onClick={() => setIndex(index)}>{title}</h1></Style.Text>
                })}
            </Style.Lines>
        </Style.SliderWrapper>
    )
}

export default Slider;