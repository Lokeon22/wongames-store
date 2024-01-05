import { Download } from "@styled-icons/remix-fill"
import * as S from "./styles"

export type PaymentProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentProps
}

const GameItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <S.Image src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.Download
              href={downloadLink}
              target="__blank"
              aria-label={`Get ${title}`}
            >
              <Download size={22} />
            </S.Download>
          )}
        </S.Title>
        <S.Price>{`$${price}`}</S.Price>
      </S.Content>
    </S.GameContent>

    {!!paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.purchaseDate}</p>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <S.FlagIcon src={paymentInfo.img} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

export default GameItem
