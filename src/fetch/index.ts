import axios, {AxiosRequestConfig} from 'axios';

interface FormValues {
  videoUrl: string;
  name: string;
  noVideo: boolean;
  duration: string;
  startTime: string;
}

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_SERVER_URL,
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
