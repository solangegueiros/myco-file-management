import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import UploadProvider from "providers/UploadProvider";
import Provider from "components/Provider";

export default () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [hash, setHash] = useState();

  return (
    <UploadProvider.Consumer>
      {({ actions: { upload } }) => (
        <section className="upload-file-container">
          <Provider />
          <div {...getRootProps({ className: "dropzone mb-4" })}>
            <input {...getInputProps()} />
            <span>Drag 'n' drop some files here, or click to select files</span>
          </div>

          {acceptedFiles.length > 0 && (
            <div>
              <Table striped borderless responsive size="sm">
                <thead>
                  <tr>
                    <th className="text-left">File Name</th>
                    <th className="text-center">Type</th>
                    <th className="text-right">Size</th>
                  </tr>
                </thead>
                <tbody className="fs-11">
                  {acceptedFiles.map(file => (
                    <tr key={file.name}>
                      <td className="text-left">{file.name}</td>
                      <td className="text-center">{file.type}</td>
                      <td className="text-right">{file.size} bytes</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="text-right">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={async () => {
                    const hash = await upload(acceptedFiles);
                    setHash(hash);
                  }}
                >
                  Upload
                </Button>
              </div>
            </div>
          )}

          {hash && (
            <div>
              Your file was successfully uploaded and is accessible under this
              hash:
              <br />
              <pre>{hash}</pre>
            </div>
          )}
        </section>
      )}
    </UploadProvider.Consumer>
  );
};
