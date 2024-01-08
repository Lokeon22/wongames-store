import Link from "next/link"
import {
  AccountCircle,
  ChevronRight,
  FavoriteBorder,
  ExitToApp
} from "@styled-icons/material-outlined"
import Dropdown from "../Dropdown"
import * as S from "./styles"

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronRight style={{ rotate: "90deg" }} size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me">
        <S.LinkWrapper>
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.LinkWrapper>
      </Link>
      <Link href="/wishlist">
        <S.LinkWrapper>
          <FavoriteBorder size={24} />
          <span>Wishlist</span>
        </S.LinkWrapper>
      </Link>
      <Link href="/">
        <S.LinkWrapper>
          <ExitToApp size={24} />
          <span>Sign out</span>
        </S.LinkWrapper>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
