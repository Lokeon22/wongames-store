"use client"
import { useState } from "react"
import Link from "next/link"
import { Search as SearchIcon } from "@styled-icons/material-outlined"
import { Menu2 as MenuIcon } from "@styled-icons/remix-fill"
import { Close as CloseIcon } from "@styled-icons/material-outlined"
import MediaMatch from "../MediaMatch"
import Button from "../Button"
import CartDropdown from "../CartDropdown"
import CartIcon from "../CartIcon"
import UserDropdown from "../UserDropdown"

import Logo from "../Logo"
import * as S from "./styles"

export type MenuProps = {
  username?: string
  status: string
}

const Menu = ({ username, status }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/">
            <S.MenuLink>Home</S.MenuLink>
          </Link>

          <Link href="/games">
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>
      {status !== "loading" && (
        <>
          <S.MenuGroup>
            <S.IconWrapper>
              <SearchIcon aria-label="Search" />
            </S.IconWrapper>
            <S.IconWrapper>
              <MediaMatch greaterThan="medium">
                <CartDropdown />
              </MediaMatch>
              <MediaMatch lessThan="medium">
                <Link href="/cart">
                  <CartIcon />
                </Link>
              </MediaMatch>
            </S.IconWrapper>
            <MediaMatch greaterThan="medium">
              {!username ? (
                <Link href="/signin">
                  <Button>Sign in</Button>
                </Link>
              ) : (
                <UserDropdown username={username} />
              )}
            </MediaMatch>
          </S.MenuGroup>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            />
            <S.MenuNav>
              <Link style={{ marginBottom: "1rem" }} href="/">
                <S.MenuLink>Home</S.MenuLink>
              </Link>

              <Link style={{ marginBottom: "1rem" }} href="/games">
                <S.MenuLink>Explore</S.MenuLink>
              </Link>

              {!!username && (
                <>
                  <Link style={{ marginBottom: "1rem" }} href="/profile/me">
                    <S.MenuLink>My account</S.MenuLink>
                  </Link>
                  <Link href="/wishlist">
                    <S.MenuLink>Wishlist</S.MenuLink>
                  </Link>
                </>
              )}
            </S.MenuNav>

            {!username && (
              <S.RegisterBox>
                <Link style={{ width: "100%" }} href="/signin">
                  <Button fullWidth size="large">
                    Sign in
                  </Button>
                </Link>
                <span>or</span>
                <Link href="/signup">
                  <S.CreateAccount>Sign up</S.CreateAccount>
                </Link>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
