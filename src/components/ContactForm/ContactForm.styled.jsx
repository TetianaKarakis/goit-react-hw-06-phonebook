import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    margin-top: 15px;
    margin-bottom: 15px;
    font-family: 'Open Sans';
    color: #010713;
    font-size: 50px;
    font-weight: bold;
`;

export const AddBox = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
`;

export const Label = styled.h3`
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
    font-family: 'Open Sans';
    color: #092658;
    font-size: 30px;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 80%;
    margin: 0 auto;
    padding-left: 25px;
    padding-right: 25px;
    height: 40px;
    border: 2px solid black;
    font-family: 'Open Sans';
    color: #092658;
    font-size: 24px;
    border-radius: 20px;
    cursor: pointer;
`;

export const AddContactButton = styled.button`
    max-width: 300px;
    text-decoration: none;
    display: inline-block;
    padding: 12px 40px;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 25px;
    border-radius: 30px;
    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
    background-position: 100% 0;
    background-size: 200% 200%;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: white;
    box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
    cursor: pointer;
    
    :hover,
    :focus {
        box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
        background-position: 0 0;
    }
`;