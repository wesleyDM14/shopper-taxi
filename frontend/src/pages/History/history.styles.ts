import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: ${(props) => props.theme.colors.dark};
    text-align: center;
    margin-bottom: 30px;
`;

export const InputGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    input {
        padding: 10px;
        font-size: 1rem;
        border: 1px solid ${(props) => props.theme.colors.dark};
        border-radius: 5px;
        width: 300px;

        &:focus {
            border-color: ${(props) => props.theme.colors.primary};
            outline: none;
        }
    }

    button {
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.dark};
        background-color: ${(props) => props.theme.colors.primary};
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme.colors.dark};
            color: #FFF;
        }

        &:disabled {
            background-color: ${(props) => props.theme.colors.primary};
            cursor: not-allowed;
        }
    }
`;

export const FilterGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;

    select {
        padding: 10px;
        font-size: 1rem;
        border: 1px solid ${(props) => props.theme.colors.dark};
        border-radius: 5px;

        &:focus {
        border-color: ${(props) => props.theme.colors.primary};
        outline: none;
        }
    }

    button {
        padding: 10px 20px;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.light};
        background-color: ${(props) => props.theme.colors.primary};
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark};
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-size: 12px;

    th,
    td {
        padding: 10px;
        text-align: left;
        border: 1px solid ${(props) => props.theme.colors.border};
    }

    th {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.light};
        font-size: 14px;
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: ${(props) => props.theme.colors.light};
    }

    tr:hover {
        background-color: ${(props) => props.theme.colors.hover};
    }
`;

export const NoData = styled.tr`
    td {
        text-align: center;
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.gray};
        padding: 20px;
    }
`;