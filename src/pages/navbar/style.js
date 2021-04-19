import styled from 'styled-components'

export const NavigationBar = styled.nav`
    nav {
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 30px 10%;
       background-color: #fff;
    }

    h4 {
        padding: 9px 25px;
        background-color:#d8e0e4;
        border-radius: 50px;
        cursor: pointer;
        color: #333;
        transition: all 0.3s ease 0s;
    }

    li {
        display: inline-block;
        padding: 0px 30px;
    }

    li a{

        padding: 9px 25px;
        background-color:#d8e0e4;
        border-radius: 50px;
        color: #333;
        transition: all 0.3s ease 0s;
    }

    li a:hover, h4:hover{
        background-color: #333;
        color: #fff;
    }
    
`;