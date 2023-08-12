import { styled } from "styled-components";

const Header = () => {
    return (
        <HeaderTop>
            <TitleLink
                href="/"
                tabIndex={32767}
            >
                <LogoImage
                    src="/logo.png"
                    alt="logo"
                />
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

const LogoImage = styled.img`
    width: 2em;
    height: 2em;
    border: solid 1px #dbdbdb;
    border-radius: 50%;
`

const ProductTitle = styled.h1`
    margin-left: 0.2em;
    font-size: 24px;
    display: inline;
`

const TitleLink = styled.a`
    appearance: none;
    border: none;
    display: flex;
    padding: 0;
    text-decoration: none;
    &:hover{
        color: #cfcfcf;
    }
`