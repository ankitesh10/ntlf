import axios from 'axios';


// https://nasscomtechnologyleadership2019.sched.com/api/site/sync?api_key=a279dc441b8e6b2f46cb0a2f325b38d7&format=json&modify_date=0
// https://nasscomtechnologyleadership2019.sched.com/api/session/export?api_key=a279dc441b8e6b2f46cb0a2f325b38d7&format=json


export default axios.create({
    baseURL: 'https://nasscomtechnologyleadership2019.sched.com/api',
})