import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { AiFillDelete } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";

export default function DrapDropBody({ urlSet }) {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [url, setUrl] = useState("");
  const fileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUrl(event.target.result);
        urlSet(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setUrl(null);
    }
  };

  return (
    <div className="drag-drop-body">
      {url && (
        <button onClick={() => setUrl("")} className="close">
          <AiFillDelete />
        </button>
      )}
      {(url && <img src={url} alt="" />) || (
        <>
          <div className="icon">
            <BsUpload />
          </div>
          <span>
            Drag & drop files or <label htmlFor="img"> Browse files</label>
          </span>

          <p>JPG, PNG or GIF - Max file size 2MB</p>
        </>
      )}
      <FileUploader
        handleChange={fileHandler}
        name="file"
        className="upload"
        types={fileTypes}
      />
      <input
        onChange={(e) => fileHandler(e)}
        type="file"
        accept="image/*"
        id="img"
      />
    </div>
  );
}
