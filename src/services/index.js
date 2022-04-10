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

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

const API = {
    getNewsBlog
}
export default API;