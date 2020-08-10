import axios, {AxiosRequestConfig} from 'axios';
import {FormValues} from 'components/Home/Form';

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:8082',
  responseType: 'blob',
  headers: {},
};

const instance = axios.create(config);

export const downloadFile = async (url: string, body: FormValues): Promise<void> => {
  const {data} = await instance.post(url, {...body});
  const oi = window.URL.createObjectURL(new Blob([data]));

  const link = document.createElement('a');
  link.href = oi;
  const fileName = `${body.name}.mp3`;

  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
};

export default instance;
