import styled from 'styled-components'

export const StyledButton = styled.button`
position: absolute;
bottom: 5%;
${(props => props.primary ? "left: 10%" : "right: 10%")};
width: 220px;
height: 70px;
background-color: transparent;
border: ${(props) => props.primary ? "2px solid rgb(115, 255, 0)" : '2px solid red'};
border-radius: 40px;
cursor: pointer;
color: ${props => props.primary ? "rgb(115, 255, 0)" : "red"};
font-size: 20px;
transition: 0.2s;
opacity: 0.8;
&:hover {
    width: 225px;
    opacity:1;
`