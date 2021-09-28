class Api {
    httpOptions;
    _entryPoint = process.env.VUE_APP_API_ENDPOINT;

    constructor() {
        this.httpOptions = {
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
        };
    }

    build(params) {
        let r = "";
        if (params === null || params == undefined) {
            return r;
        }
        for (let i = 0, len = params.length; i < len; i++) {
            if (i === 0) {
                r = "?";
            }
            r += params[i][0] + "=" + encodeURIComponent(params[i][1]);
            if (i !== len - 1) {
                r += "&";
            }
        }
        return r;
    }

    /**
     * Get an entity from an id
     * @param path name of the group of entities asked
     * @param params array of parameters for the query
     * @param id
     * @returns Promise
     */
    get(path, params, id) {
        const itemId = id ? "/" + id : ""
        const url = this._entryPoint + path + itemId + this.build(params);
        return fetch(url, this.httpOptions).then((res) => this.handleResponse(res));
    }

    /**
     * Get an array of asked entity
     * @param path name of the group of entities asked
     * @param params array of parameters for the query
     * @returns Promise
     */
    getAll(path, params) {
        const url = this._entryPoint + path + this.build(params);
        return fetch(url, this.httpOptions).then((res) => this.handleResponse(res));
    }

    handleError() {
        throw new Error('Une erreur est survenue');
    }

    handleResponse(res) {
        if (!res.ok) {
            this.handleError();
        }
        if (res.status === 204) {
            return Promise.resolve(true);
        }
        return res.json()
    }
}

export default Api;