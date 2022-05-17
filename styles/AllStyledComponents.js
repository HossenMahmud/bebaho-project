import styled from 'styled-components';

export const BoxContainer = styled.div`
    background: #FAFAFA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding:30px 20px;
`
export const MakeButton = styled.button`
    background-color:${(props) => props.bg};
    width:${(props) => props.width};
    height:${(props) => props.height};
    border: 1px solid  ${(props) => props.bg};;
    cursor: pointer;
    color:${(props) => props.color};
    border-radius:${(props) => props.radius};
    font-size:14px;
    font-weight:normal;
`;

export const IconContainer = styled.div`
    border: 1px solid #3AA76D;
    border-radius: 50%;
    background-color: #3AA76D;
    width: 50px;
    height: 50px;
    display:flex;
    justify-content:center;
    align-items:center
`
export const HorizontalFlex = styled.div`
    display:flex;
    justify-content:center;
    align-items:center
`
export const LinkTag = styled.a`
text-decoration: none;
color: #000;
font-size: 14px;
`
