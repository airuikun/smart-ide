import react, { useEffect } from 'react';
import { Collapse } from "antd";
import { RocketOutlined, WalletOutlined, TagsOutlined, ScheduleOutlined, ProjectOutlined, NodeExpandOutlined, InteractionOutlined, AimOutlined } from '@ant-design/icons';
import CheckApiKeyCom from './components/CheckApiKeyCom';
import GenImage from './components/GenImage';
import CommonGpt from './components/CommonGpt';
import SwitchLanguage from './components/SwitchLanguage';
import "./index.css";

const { Panel } = Collapse;

function Cli() {

  useEffect(() => {}, []);

  return (
    <div className="Cli">
      <Collapse defaultActiveKey={["chatgpt"]} >
        <Panel header="智能研发" key="chatgpt">
          <div className='flex'>
            <CommonGpt title="ChatGpt" prompt={(text)=>text} icon={<ProjectOutlined/>}/>
            {/* <ChatGpt/> */}
            <CommonGpt title="智能CR" prompt={(text)=>`帮忙code review下面这段代码：${text}`} icon={<RocketOutlined/>}/>
            {/* <CR/> */}
            <CommonGpt title="智能单测" prompt={(text)=>`下面这段代码写单元测试：${text}`} icon={<TagsOutlined/>}/>
            {/* <UnitTest/> */}
            <CommonGpt title="错误检测" prompt={(text)=>`检测下面这段代码的错误：${text}`} icon={<AimOutlined/>}/>
            <CommonGpt title="添加类型" prompt={(text)=>`下面这段代码添加类型：${text}`} icon={<InteractionOutlined/>} temperature={0}/>
            <CommonGpt title="优化代码" prompt={(text)=>`优化代码下面这段代码：${text}`} icon={<NodeExpandOutlined/>}/>
            <CommonGpt title="添加注释" prompt={(text)=>`下面这段代码添加注释：${text}`} icon={<ProjectOutlined/>} temperature={0}/>
            <CommonGpt title="生成react代码" prompt={(text)=>`用react写一段代码，功能描述如下：${text}`} icon={<ScheduleOutlined/>}/>
            <CommonGpt title="解释代码" prompt={(text)=>`解释代码下面这段代码：${text}`} icon={<TagsOutlined/>}/>
            <CommonGpt title="重构代码" prompt={(text)=>`重构下面这段代码：${text}`} icon={<WalletOutlined/>}/>
            <CommonGpt title="生成文档" prompt={(text)=>`下面这段代码生成说明文档：${text}`} icon={<RocketOutlined/>}/>
            <SwitchLanguage title="语言转换" icon={<ProjectOutlined/>}/>
            <GenImage/>
          </div>
        </Panel>
      </Collapse>
      <CheckApiKeyCom/>
    </div>
  );
}

export default Cli;
