import styled from 'styled-components'

export const FirstScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 148px;

    img{
        width: 136px;
        height: 161px;
    }

    p{
        font-family: 'Righteous', cursive;
        font-weight: 400;
        color: #FFFFFF;
        font-size: 45px;
        margin-top: 13px;
    }

    button{
        color: #D70900;
        font-family: 'Recursive';
        font-size: 20px;
        border-radius: 5px;
        background: #FFFFFF;
        border: 2px solid #D70900;
        box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.15);

        margin-top: 30px;
        width: 201px;
        height: 51px;
    }
`