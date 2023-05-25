import "./index.css";
import { Button, Modal, Input, Form, message } from "antd";
import { useEffect, useState } from "react";
import { PicLeftOutlined } from '@ant-design/icons';
import axios from 'axios';
import Wrap from '../Wrap';
import { chatgptImageApi } from '../../../../service/chatgptApi';

function GenImage() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [targetData, setData] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {}, []);

  const initProjct = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
    setData([]);
    setLoading(false);
    form.resetFields();
  };

  const handleCancel = () => {
    setVisible(false);
    setData([]);
    setLoading(false);
    form.resetFields();
  };

  const generate = async () => {
    setLoading(true);
    const data = await form.validateFields();
    try {
      let result = await chatgptImageApi(data.code);
      console.log('result', result);
      setData(result);
    } catch (error) {
      console.log('error', error);
      message.error(`请输入正确格式的数据`)
    }
    setLoading(false);
  };

  return (
    <div className="gen_image">
      <Wrap text={'图片生成'} icon={<PicLeftOutlined />} onClick={initProjct}/>
      <Modal
        title="图片生成"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={'完成'}
        footer={<Button type="primary" onClick={handleOk}>完成</Button>}
      >
        <Form
          form={form}
          initialValues={{
            code: ``,
          }}
        >
          <Form.Item name="code">
            <Input.TextArea placeholder="请输入" rows={8} />
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
        {/* <Input.TextArea value={targetData} placeholder="结果" rows={8} /> */}
        {
          targetData?.map((e, i) => {
            return <img src={e.url} width={472} style={{marginBottom: "15px", border: "1px solid #bcbcbc"}} key={i} alt="" />
          })
        }
      </Modal>
    </div>
  );
}

export default GenImage;
