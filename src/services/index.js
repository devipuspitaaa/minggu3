const domainPath = 'http://localhost:3001';
const GetAPI = (path) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`)
            .then(response => response.json())
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

const PostAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result: Response) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    return promise;
}
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim);

const API = {
    getNewsBlog,
    postNewsBlog
}
export default API;