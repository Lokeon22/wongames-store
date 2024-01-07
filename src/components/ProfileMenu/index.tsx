import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from "@styled-icons/material-outlined"

import Link from "next/link"
import * as S from "./styles"

export type ProfileMenuProps = {
  activeLink?: "/profile/me" | "/profile/cards" | "/profile/orders" | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me">
      <S.Link isActive={activeLink === "/profile/me"}>
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.Link>
    </Link>

    <Link href="/profile/cards">
      <S.Link isActive={activeLink === "/profile/cards"}>
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders">
      <S.Link isActive={activeLink === "/profile/orders"}>
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.Link>
    </Link>

    <Link href="/logout">
      <S.Link>
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
