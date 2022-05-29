import styled from "styled-components";

export const Header = styled.header`
    padding: 10px 50px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
        rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
        rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav {
        a {
            margin: 0 10px;
            padding: 10px;
            &.active {
                font-weight: bold;
            }
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
        width: 2.5rem;
        margin-right: 6px;
    }
    h1 {
        font-weight: 300;
    }
`;
