import styled from 'styled-components'

export const Answer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: #FFFFFF;
    margin-bottom: 5px;
    width: 90vw;
    height: 20vh;
    padding-left: 6px;
    padding-right: 12px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);


.answerText{
    display: flex;

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-left: 15px;
}

.OptionsContainer{
    width: 90vw;
    display: flex;
    justify-content: space-evenly;

}

.redBox{
    height: 40px;
    width: 90px;
    font-size: 14px;
    background-color: #FF3030;
    color: #FFFFFF;
    font-family: 'Recursive';
    border-radius: 5px;

}

.redBox p{
    margin-top: 13px;
    margin-left: 4px;
}

.yellowBox{
    height: 40px;
    width: 90px;
    font-size: 14px;
    background-color: #FF922E;
    color: #FFFFFF;
    font-family: 'Recursive';
    align-items: center;
    text-align: center;
    border-radius: 5px;
}

.yellowBox p{
    margin-top: 6px;
}

.greenBox{
    height: 40px;
    width: 90px;
    font-size: 14px;
    background-color: #2FBE34;
    color: #FFFFFF;
    font-family: 'Recursive';
    align-items: center;
    text-align: center;
    border-radius: 5px;
}

.greenBox p{
    margin-top: 15px;
}
`
export const CardStart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #FFFFFF;
    margin-bottom: 5px;
    width: 90vw;
    height: 10vh;
    padding-left: 6px;
    padding-right: 12px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;

}

ion-icon{
    font-weight: 700;
    font-size: 32px;
    color:#333333;
}
`