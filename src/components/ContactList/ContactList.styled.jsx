import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const List = styled.ul`
    margin-top: 15px;
    margin-bottom: 15px;
    font-family: 'Open Sans';
    color: #010713;
    font-size: 50px;
    font-weight: bold;
`;

export const ListItem = styled.li`
    width: 350px;
    margin-top: 15px;
    margin-bottom: 15px;
    font-family: 'Open Sans';
    color: #010711;
    font-size: 20px;
    font-weight: bold;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

export const Button = styled.button`
    max-width: 100px;
    text-decoration: none;
    display: inline-block;
    padding: 12px;
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
`