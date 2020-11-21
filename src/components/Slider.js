import React, { useState, useEffect } from 'react'
import * as Style from './style'
import Data from '../Data'


const Slider = () => {

    const [Index, setIndex] = useState(0);

    useEffect(() => {

        const timer = setTimeout(() => {
            if (Index < Data.length - 1) {
                setIndex(Index + 1)
            }
            else {
                setIndex(0)
            }
        }, 10000);
        return () => clearTimeout(timer);
    }, [Index])

    console.log(Data.length)
    return (
        <Style.SliderWrapper>
            <Style.Visualise Index={Index} tot={Data.length}>
                {Data.map(({ line, content, title }, index) => {
                    return <Style.Container display={index === Index}>
                        <img src={line} />
                        <p>{content}</p>
                    </Style.Container>
                })}
                <Style.MobileToggle>
                    {Data.map(({ line, content, title }, index) => {
                        return <Style.Toggle onClick={() => setIndex(index)} color={index === Index} />
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