import { useState } from "react";
import Input from "../hotel-edit/Input";
import TextArea from "../hotel-edit/TextArea";

export default function SectionTwo() {
  const [videoLink, setVideoLink] = useState("");
  const [videoLink1, setVideoLink1] = useState("");
  const [title, setTitle] = useState("");
  return (
    <div className="module-edit-basic">
      <h4>Section 2</h4>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin
      </p>

      <div className="module-edit-basic-wrp">
        <div className="module-edit-basic-item">
          <label htmlFor="vidwoLink">1st Video Link</label>
          <Input
            d={{ value: videoLink, label: "Enter URL" }}
            i="vidwoLink"
            handler={setVideoLink}
          />
        </div>
        <div className="module-edit-basic-item">
          <label htmlFor="vidwoLink1">2nd Video Link</label>
          <Input
            d={{ value: videoLink1, label: "Enter URL" }}
            i="vidwoLink1"
            handler={setVideoLink1}
          />
        </div>
      </div>

      <div className="module-edit-basic-item">
        <label htmlFor="title1">Title</label>
        <Input
          d={{ value: title, label: "Enter Title" }}
          i="title1"
          handler={setTitle}
        />
      </div>
      <div className="module-edit-basic-item">
        <label htmlFor="">Description</label>
        <TextArea />
      </div>
    </div>
  );
}
