import { styled } from "styled-components";

const Header = () => {
    return (
        <HeaderTop>
            <ProductTitle>
                コピペでQR読み取りくん
            </ProductTitle>
        </HeaderTop>
    );
}

export default Header;

const HeaderTop = styled.div`
    color: #858585;
    background-color: #8bdfc1;
    padding: 0;
    margin: 0;
    width: 100%;
    padding: 1em;
`

const ProductTitle = styled.h1`
    font-size: 24px;
`