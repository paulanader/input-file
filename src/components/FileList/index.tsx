import { CircularProgressbar } from "react-circular-progressbar";
import { Container, FileInfo, Preview } from "./styles";
import "react-circular-progressbar/dist/styles.css";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import Img from "../../assets/image.jpeg";

interface IFileInfoProps {
  value: File & { preview: string };
}

export const FileList: React.FC<IFileInfoProps> = ({ value }) => {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview
            style={{
              width: 36,
              height: 36,
              backgroundImage: `url(${value.preview ? value.preview : Img})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div>
            <strong>{value.name}</strong>
            <span>
              {`${(value.size / 1000000).toFixed(2)}MB`}
              <button onClick={() => {}}>Excluir</button>
            </span>
          </div>
        </FileInfo>
        <div>
          <CircularProgressbar
            value={50}
            styles={{ root: { width: 24 }, path: { stroke: "#7159c1" } }}
            strokeWidth={10}
          />
          <a href={value.preview} target="_blank" rel="noopener noreferrer">
            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>
          <MdCheckCircle size={24} color="#78e5d5" />
          <MdError size={24} color="#e57878" />
        </div>
      </li>
    </Container>
  );
};
