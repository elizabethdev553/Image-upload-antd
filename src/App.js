import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Input, Col, Row } from "antd";
const App = () => {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState("");

  // const navigate = useNavigate();

  const onAdd = (e) => {
    setUrl(e.target.value);
  };

  const onSub = (e) => {
    setFile(e.target.files[0]);
  };

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("url", url);

    const config = {
      headers: {
        "Content-Type": "multipart/form-Data",
      },
    };

    const res = await axios.post("/qr-code-save", formData, config);
    console.log(res);

    if (res.data.status === 201) {
      console.log("201");
    } else {
      console.log("error");
      // alert("prem saini")
    }
  };

  return (
    <section>
      <Row>
        <Col span={12} offset={6}>
          <h1 className="text-center">UPLOAD QR Code</h1>
          <Form>
            <div className="mb-3">
              <label className="form-label">URL:</label>
              <Input
                type="text"
                className="form-control"
                name="url"
                onChange={onAdd}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">SELECT QR Code</label>
              <Input
                className="form-control"
                type="file"
                name="photo"
                onChange={onSub}
              />
            </div>

            <Button type="submit" onClick={addUserData}>
              SUBMIT
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default App;
