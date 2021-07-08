import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID OMfqRmqzCy4u4c5WNUpHR1939VGcLz6S6Ki_tOFLuHo' }
})