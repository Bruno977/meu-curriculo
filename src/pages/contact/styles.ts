import styled from 'styled-components';

export const Aside = styled.aside`
  li p {
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
  }
  li div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    span {
      color: ${(props) => props.theme.colors.white};
      font-size: 1rem;
    }
  }

  ul {
    li {
      &:not(:last-of-type) a:hover span {
        color: ${(props) => props.theme.colors.green300};
      }
    }
    li + li {
      margin-top: 1.25rem;
    }
    li a {
      display: inline-block;
    }
    li:last-of-type a:hover svg {
      fill: ${(props) => props.theme.colors.white};
    }
    li:last-of-type a:hover svg * {
      stroke: ${(props) => props.theme.colors.white};
    }
    li:last-of-type a + a {
      padding-left: 0.625rem;
    }
  }
`;

export const Content = styled.div``;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.25rem;
`;
