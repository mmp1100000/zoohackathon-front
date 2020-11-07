import Axios from 'axios';
import config from '@/config';

export const uploadModule = {
  state: {},
  mutations: {},
  actions: {
    async validateColumns
    ({ commit }: any, file: File) {
      console.log(file)
      const reader = new FileReader();
      reader.onload = (file: any) => {
        console.log((file.target.result as string).split('\n').shift())
      };
      reader.readAsText(file);
      // const formData = new FormData();
      // formData.append("image", images.target.files[0]);

      // Axios.post(config.api.baseUrl+config.api.data.upload as string, formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // }).then(response=>console.log(response.data));
    }
  }
};
