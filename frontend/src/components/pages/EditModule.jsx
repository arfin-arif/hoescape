import { useState } from "react";
import { HiDocumentText } from "react-icons/hi";
import Bootcump from "../basic/BootCump";
import ExportBtn from "../basic/ExportBtn";
import CopyLink from "../booking/CopyLink";
import DragDropBody from "../hotel-edit/DragDropBody";
import Input from "../hotel-edit/Input";
import TextArea from "../hotel-edit/TextArea";
import FixedOffer from "../module/FixecOffer";
import ModuleTemplate from "../module/ModuleTemplate";
import SaveTemplate from "../module/SaveTemplate";
import SectionThree from "../module/SectionThree";
import SectionTwo from "../module/SectionTwo";

export default function EditModule() {
  const bootCump = [
    {
      name: "Modules",
      url: "/module",
      icon: <HiDocumentText />,
    },
    {
      name: "El Plazo Module v2",
    },
  ];

  const [title, setTitle] = useState("");
  const [title1, setTitle1] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [isTemplate, setIsTemplate] = useState(false);

  const [isSaveTemplate, setIsSaveTemplate] = useState(false);

  return (
    <div className=" module-edit hotel">
      <ModuleTemplate addhotel={isTemplate} handler={setIsTemplate} />

      <SaveTemplate addhotel={isSaveTemplate} handler={setIsSaveTemplate} />
      <div className="container">
        <Bootcump data={bootCump} />

        <div className="module-edit-wrp booking-box">
          <div className="module-edit-top">
            <div className="left">
              <div className="icon">
                <HiDocumentText />
              </div>
            </div>{" "}
            <ExportBtn
              handler={() => setIsTemplate(true)}
              text="Import Template  "
            />
          </div>
          <CopyLink />
          <div className="module-edit-basic">
            <h4>Module Preview</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin
            </p>
            <DragDropBody />
            <div className="module-edit-basic-item">
              <label htmlFor="title">Title</label>
              <Input
                d={{ value: title, label: "Enter Title" }}
                i="title"
                handler={setTitle}
              />
            </div>
            <div className="module-edit-basic-item">
              <label htmlFor="">Description</label>
              <TextArea />
            </div>
          </div>{" "}
          <div className="module-edit-basic">
            <h4>Section 1</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin
            </p>

            <div className="module-edit-basic-item">
              <label htmlFor="title1">Title</label>
              <Input
                d={{ value: title1, label: "Enter Title" }}
                i="title1"
                handler={setTitle1}
              />
            </div>
            <div className="module-edit-basic-item">
              <label htmlFor="">Description</label>
              <TextArea />
            </div>
            <div className="module-edit-basic-item">
              <label htmlFor="vidwoLink">Video Link</label>
              <Input
                d={{ value: videoLink, label: "Enter URL" }}
                i="vidwoLink"
                handler={setVideoLink}
              />
            </div>
          </div>
          <SectionTwo />
          <SectionThree />
          <FixedOffer saveTemplateHandler={setIsSaveTemplate} />
          <div className="hotel-edit-footer">
            <div className="left">
              <button>Discard</button>
            </div>
            <div className="right">
              <button onClick={() => setIsSaveTemplate(true)}>
                Save as Template
              </button>
              <button className="submit">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
