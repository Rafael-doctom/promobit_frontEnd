import styled from 'styled-components';

import ImageLogo from '../../../assets/logo.svg'

export const Container = styled.div`
    height: 55px;
    background: #5C16C5;
    width:100%;
`

export const Content = styled.div`
    padding:1rem;
    width: 80%;
    margin: 0 auto;
`

const Logo = () => {
    return (
        <>
            <img src={ImageLogo} />
        </>
    );
};

export default Logo;