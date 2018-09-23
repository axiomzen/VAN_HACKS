import { fetchUtils } from 'react-admin';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({
            'Accept': 'application/json'
        });
    }

    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    console.log(url);
    //parse and if path certain thing mkaing a request to this
    return fetchUtils.fetchJson(url, options);
};

export default httpClient;
