import styled from 'styled-components'
import media from '../Device';

export const SliderWrapper = styled.div`
max-width:1240px;
height:490px;
display:flex;
flex-direction:row;
justify-content:space-between;
margin:0 auto;
margin-top:150px;
background-color:#fff;
border-radius:10px;
overflow:hidden;
position:relative;
margin-top:100px;
${media.tablet`
flex-direction:column;

`};
`;

export const Visualise = styled.div`
width:60%;
display:flex;
flex-direction:row;  
position:absolute;
transform: ${props => `translateX(-${props.Index * (750)}px)`};
transition: all 0.5s linear;
${media.tablet`
transform: none;
transition:none;
flex-direction:column;  
align-items:start;
margin:0 auto;
`};
`;

export const Lines = styled.div`
width:35%;
height:100%;
position:absolute;
z-index:1000;
background-color:#fff;
right:0;
${media.tablet`
display:none;
`};
`;

export const Text = styled.div`
h1{
    widht:auto;
    font-size:13px;
    border-bottom:1px solid #ccc;
    padding:15px 0px;
    cursor:pointer;
    color:${({ color }) => color ? '#8295c0' : '#3b3b3b'}
}

`;

export const Container = styled.div`
width:750px;
min-width:750px;
background-color:#eee;
height:100%;
visibility:${({ display }) => display ? 'visible' : 'hidden'};
flex:1;
img{
width:100%;
height:auto;
transition: all .5s ease;
}
h1{
color:#7f92b9;
font-size:20px;
padding:0px 40px;
}
p{
color:#3b3b3b;
line-height:1.4;
padding:0px 20px;
}
a{
    text-decoration:none;
    color:#6F91C8;
    :hover{
        text-decoration:underline;
    }
}
${media.tablet`
display:${({ display }) => display ? 'block' : 'none'};
height:auto;
width:500px;
min-width:500px;
margin:0 auto;
h1{
    color:#7f92b9;
    font-size:16px;
    }
    p{
    color:#3b3b3b;
    line-height:1.4;
    font-size:14px;
    }
`};
`;


export const Toggle = styled.div`
width:10px;
height:10px;
border-radius:50%;
background-color :${({ color }) => color ? '#8295c0' : '#3b3b3b'};
margin-right:5px;
cursor:pointer;
`;
export const MobileToggle = styled.div`
display:none;
margin-left:65px;
${media.tablet`
display:flex;
margin-top:10px;
`};
`;

