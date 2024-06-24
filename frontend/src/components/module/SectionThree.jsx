import { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import Input from "../hotel-edit/Input";
import TextArea from "../hotel-edit/TextArea";

export default function SectionThree() {
  const [title, setTitle] = useState("");

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      items: [
        {
          label: "Title",
          pls: "Enter Title",
          value: "",
        },
        {
          label: "Image Link",
          pls: "Enter RUL",
          value: "",
        },
        {
          label: "Redirect URL",
          pls: "Enter URL",
          value: "",
        },
      ],
    },
    {
      id: 1,
      items: [
        {
          label: "Title",
          pls: "Enter Title",
          value: "",
        },
        {
          label: "Image Link",
          pls: "Enter RUL",
          value: "",
        },
        {
          label: "Redirect URL",
          pls: "Enter URL",
          value: "",
        },
      ],
    },
  ]);

  const handleChange = (blogIndex, itemIndex, newValue) => {
    // Create a copy of the blogs state
    const updatedBlogs = [...blogs];

    // Update the value of the specified item
    updatedBlogs[blogIndex].items[itemIndex].value = newValue;

    // Set the updated state
    setBlogs(updatedBlogs);
  };

  const addNewBlog = () => {
    // Create a new blog object with initial values
    const newBlog = {
      id: blogs.length + 1, // Generate a unique ID (you can use a different approach for unique IDs)
      items: [
        {
          label: "Title",
          pls: "Enter Title",
          value: "",
        },
        {
          label: "Image Link",
          pls: "Enter URL",
          value: "",
        },
        {
          label: "Redirect URL",
          pls: "Enter URL",
          value: "",
        },
      ],
    };

    // Add the new blog entry to the existing array
    setBlogs([...blogs, newBlog]);
  };

  const deleteRegion = (blogIndex) => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = prevBlogs.filter(
        (blog, index) => index !== blogIndex
      );
      return updatedBlogs;
    });
  };

  return (
    <div className="module-edit-basic">
      <h4>Section 3</h4>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin
      </p>

      <div className="module-edit-basic-item">
        <label htmlFor="title1">Title</label>
        <Input
          d={{ value: title, label: "Enter Title" }}
          i="title1"
          handler={setTitle}
        />
      </div>
      <div className="module-edit-basic-item">
        <label htmlFor="">sub-Description</label>
        <TextArea />
      </div>

      <br />
      <h4>Blog</h4>
      {blogs.map((blog, i) => (
        <div key={i} className="module-edit-basic-wrp">
          {blog.items.map((item, j) => (
            <div key={j} className="module-edit-basic-item">
              <label htmlFor="vidwoLink">{item.label}</label>
              <Input
                d={{ value: item.value, label: item.pls }}
                i="vidwoLink"
                handler={(e) => handleChange(i, j, e)}
              />
            </div>
          ))}
          <button onClick={() => deleteRegion(blog.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button onClick={addNewBlog}>
        <AiOutlinePlus />
        Add More
      </button>

      <div className="module-edit-basic-item">
        <label htmlFor="">Bottom Description</label>
        <TextArea />
      </div>
    </div>
  );
}
