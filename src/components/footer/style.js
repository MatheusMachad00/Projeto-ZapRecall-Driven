import styled from 'styled-components'

export const Baseboard = styled.footer`
    background-color: #FFFFFF;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;


    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
    padding-top: 24px;


p{
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 22px;
    color:#333333;
}

.footerIcons{
    display: flex;
    margin-top: 6px;
}

span{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 15px;
}
`

export const FinalMessage = styled.div`
span{
    display: flex;
    
}

span p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 5px;
    margin-left: 10px;

}

p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
    margin-top: -14px;
    margin-bottom: 12px;
    
}
`