import axios from 'axios';

export const httpClientPlugin = {

    get: async(url: string) => {
        try {
            const { data } = await axios.get(url);
            return data;
          } catch (error) {
            console.error('error axios', error);
          }
    }

    // post
    // put
    // delete
};