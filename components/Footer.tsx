import { styled } from "styled-components"

const Footer = () => {
    return (
        <FooterTop>
            <div>&copy; hiroki 2023</div>
        </FooterTop>
    )
}

export default Footer;

const FooterTop = styled.div`
    text-align: center;
    position: sticky;
    top: 100vh;
    width: 100%;
    color: #858585;
`