import styled from 'styled-components'

export const Baseboard = styled.footer`
    background-color: #FFFFFF;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    height: 13vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


p{
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 22px;
    color:#333333;
}

.footerIcons{
    display: flex;
    margin-top: 6px;
}
`

export const FinalMessage = styled.div`
.span{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 15px;
}

p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
}
`