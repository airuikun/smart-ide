import { Button, Modal, Input, Form, message } from "antd";
import { useEffect, useState } from "react";
import { ApartmentOutlined } from '@ant-design/icons';
import { chatgptApi } from '../../../../service/chatgptApi';
import Wrap from '../Wrap';
import "./index.css";

function UnitTest(props) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [targetData, setData] = useState(``);
  const [form] = Form.useForm();

  useEffect(() => {}, []);

  const openComponent = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
    setData(``);
    setLoading(false);
    form.resetFields();
  };

  const handleCancel = () => {
    setVisible(false);
    setData(``);
    setLoading(false);
    form.resetFields();
  };

  const generate = async () => {
    setLoading(true);
    const data = await form.validateFields();
    console.log('表单提交数据', data);
    try {
      const opt = {};
      if ( props?.temperature || props?.temperature === 0 ) {
        opt.temperature = props?.temperature;
      }
      let result = await chatgptApi(props.prompt(data.target), opt);
      setData(result);
    } catch (error) {
      console.log('error', error);
      message.error(`请检查api key是否有效，或者检查输入数据的正确性`)
    }
    setLoading(false);
  };

  return (
    <div className="chatgpt_unit_test">
      <Wrap text={props.title} icon={props.icon} onClick={openComponent}/>
      <Modal
        title={props.title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={'完成'}
        footer={<Button type="primary" onClick={handleOk}>完成</Button>}
      >
        <Form
          form={form}
          initialValues={{
            target: ``,
          }}
        >
          <Form.Item name="target">
            <Input.TextArea placeholder="请输入内容" rows={8} />
          </Form.Item>
        </Form>
        <Button
          type="primary"
          style={{ marginBottom: "24px" }}
          onClick={generate}
          loading={loading}
        >
          执行
        </Button>
        <Input.TextArea value={targetData} placeholder="结果" rows={8} />
      </Modal>
    </div>
  );
}

export default UnitTest;
