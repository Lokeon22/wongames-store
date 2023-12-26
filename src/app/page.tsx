import { Container } from "../components/Container"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Heading from "../components/Heading"

export default async function Home() {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Most popular
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}
