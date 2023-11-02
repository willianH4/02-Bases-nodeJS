const axios = require('axios');

const httpClientPlugin = {

    get: async(url) => {
        try {
            const { data } = await axios.get(url);
            return data;
          } catch (error) {
            console.error(error);
          }
    }

    // post
    // put
    // delete
};

module.exports = {
    httpClientPlugin,
}