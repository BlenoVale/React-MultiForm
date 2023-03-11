import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #B8B8D4;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    .backBtn {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }
`;

export const ResumeArea = styled.div``;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    background: #494A7C;
    padding: 20px;
    border-radius: 40px;
    margin-bottom: 20px;

    h3 {
        margin: 0;
        padding: 0;
    }
`;

export const InfoArea = styled.div`
    margin-left: 65px;
    margin-bottom: 40px;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    p {
        font-size: 15px;
        margin: 0;
    }

    div {
        font-size: 20px;
    }
`;