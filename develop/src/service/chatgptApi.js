import axios from 'axios';

export const chatgptApi = async (data, opt={}) => {

  const params: any = {
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: data}],
  };

  if ( opt?.temperature || opt?.temperature === 0 ) {
    params.temperature = opt?.temperature;
  }

  const result = await axios({
    method: 'post',
    url: 'https://api.openai.com/v1/chat/completions',
    data: params,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.CHATGPT_API_KEY}`
    }
  }).then(res => res.data);

  console.log('result', result?.choices[0]?.message?.content);

  return result?.choices[0]?.message?.content || '无数据';

}

export const chatgptImageApi = async (data, opt={}) => {

  const params: any = {
    prompt: data,
    n: 3,
    size: "1024x1024"
  };

  const result = await axios({
    method: 'post',
    url: 'https://api.openai.com/v1/images/generations',
    data: params,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.CHATGPT_API_KEY}`
    }
  }).then(res => res.data);

  return result?.data || [];

}