import { CircularProgressbar } from "react-circular-progressbar";
import { Container, FileInfo, Preview } from "./styles";
import "react-circular-progressbar/dist/styles.css";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import Img from "../../assets/image.jpeg";
import fileSize from "filesize";
type FileInfoType = {
  preview?: string;
  progress?: number;
  uploaded?: boolean;
  error?: boolean;
  url?: string | null;
}

interface IFileInfoProps {
  value: File & FileInfoType ;
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
              {fileSize(value.size)}
              {value.url && <button onClick={() => {}}>Excluir</button>}
            </span>
          </div>
        </FileInfo>
        <div>
          {!value.uploaded && !value.error && (
            <CircularProgressbar
            value={value.progress ? value.progress : 0}
            styles={{ root: { width: 24 }, path: { stroke: "#7159c1" } }}
            strokeWidth={10}
          />
          )}
          {value.url && (
            <a href={value.preview} target="_blank" rel="noopener noreferrer">
            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>
          )}
          {value.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
          {value.error && <MdError size={24} color="#e57878" />}
        </div>
      </li>
    </Container>
  );
};
