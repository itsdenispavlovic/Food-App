import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ku15JJxmfJZBnTSW8iShuAkZPGXm8wsyeav_BTQ1DEk-nNB7bgYboGLUM8N9n2IOQqkdkfm2hJKLbwcG2XnwkQ2NuLMLfne69SpJXJ00kjXB-r4Ky6Xx8rOQokgmXnYx'
    }
});

