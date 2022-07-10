import DropzoneComponent from "../components/Upload";
import { Container, Content } from "./styles";

export const Main = () => {
  return (
    <Container>
      <Content>
        <DropzoneComponent />
      </Content>
    </Container>
  );
};
