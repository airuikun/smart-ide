import { useEffect, useState } from "react";
import { Button, Modal, Input, Form } from "antd";
import "./index.css";

function UnitTest(props) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    console.log('当前url:', window.location.href)
    const apiKey = localStorage.getItem('chatgpt_api_key');
    if ( !apiKey ) {
      setVisible(true);
    } else {
      window.CHATGPT_API_KEY = apiKey;
    }
  }, []);


  const handleOk = async () => {
    const data = await form.validateFields();
    window.CHATGPT_API_KEY = data.target;
    localStorage.setItem('chatgpt_api_key', data.target);
    setVisible(false);
    form.resetFields();
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const openModal = () => {
    setVisible(true);
    const apiKey = localStorage.getItem('chatgpt_api_key');
    if (apiKey) {
      form.setFieldsValue({target: apiKey});
    }
  };

  return (
    <div className="chatgpt_unit_test">
      <Modal
        title={'请输入 API Key'}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={'确定'}
        footer={<Button type="primary" onClick={handleOk}>确定</Button>}
      >
        <Form
          form={form}
          initialValues={{
            target: ``,
          }}
        >
          <Form.Item name="target">
            <Input placeholder="请输入 API Key" />
          </Form.Item>
        </Form>
      </Modal>
      <Button type="primary" className="btn_style" onClick={openModal}>更换key</Button>
    </div>
  );
}

export default UnitTest;
