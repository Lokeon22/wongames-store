import Link from "next/link"
import * as S from "./styles"
import Logo from "../Logo"
import Heading from "../Heading"

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading size="small" color="black" lineBottom lineColor="secondary">
          CONTACT
        </Heading>

        <a href="mailto:sac@wongames.com">suporte@wongames.gg</a>
        <a href="phone">+55 21 33283719</a>
      </S.Column>

      <S.Column>
        <Heading size="small" color="black" lineBottom lineColor="secondary">
          FOLLOW US
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading size="small" color="black" lineBottom lineColor="secondary">
          LINKS
        </Heading>

        <nav aria-labelledby="footer-resources">
          <Link href="/store">Loja</Link>
          <Link href="/games">Explorar</Link>
          <Link href="/search">Buscar</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading size="small" color="black" lineBottom lineColor="secondary">
          LOCATION
        </Heading>

        <span>Rua 7 de maio</span>
        <span>527 - 89020330</span>
        <span>Rio de Janeiro, Brasil</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 © All rights reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
