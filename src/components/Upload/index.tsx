import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  dragActive,
  dragReject,
  DropContainer,
  notDragActive,
  UploadMessage,
} from "./styles";

import { FileList } from "../FileList";

const DropzoneComponent = () => {
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      console.log(files);
    },
    [files]
  );

  const { isDragActive, isDragReject, getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      multiple: true,
    });

  return (
    <div>
      <DropContainer
        className={`${!isDragActive && notDragActive} ${
          isDragActive && dragActive
        } ${isDragReject && dragReject}`}
        {...getRootProps()}
        isDragActive={isDragActive}
        isDragReject={isDragReject}
      >
        <input {...getInputProps()} />
        {!isDragActive && (
          <UploadMessage>Arraste seus arquivos aqui</UploadMessage>
        )}
        {isDragReject && <UploadMessage>Arquivo não suportado</UploadMessage>}
        {isDragActive && <UploadMessage>Solte os arquivos aqui</UploadMessage>}
      </DropContainer>
      {files.map((file) => (
        <FileList value={file} />
      ))}
    </div>
  );
};

export default DropzoneComponent;

//<img src={file.preview} alt=""/>
