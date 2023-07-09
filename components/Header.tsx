import { styled } from "styled-components";

const Header = () => {
    return (
        <HeaderTop>
            <TitleLink
                href="/"
                tabIndex={32767}
            >
                <ProductTitle>
                    コピペでQR読み取りくん
                </ProductTitle>
            </TitleLink>
        </HeaderTop>
    );
}

export default Header;

const HeaderTop = styled.div`
    color: #858585;
    border-bottom: solid 1px #acacac;
    padding: 0;
    margin: 0;
    width: 100%;
    padding: 1em;
    `

const ProductTitle = styled.h1`
    font-size: 24px;
    display: inline;
`

const TitleLink = styled.a`
    &:hover{
        color: #cfcfcf;
    }
`