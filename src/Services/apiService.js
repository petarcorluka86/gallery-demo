
class API {
    async getUrls() {
        const response = await fetch("https://dev.flom.app/api/v2/product/list",{ method: "POST" });
        const json = await response.json();
        const products = json.data.products;
        const serverNames = products.map(product => product.file[0].file.nameOnServer);
        const promises = serverNames.map( async serverName => {
            const response = await fetch(`https://dev.flom.app/api/v2/avatar/user/${serverName}`);
            return response.url;
        });
        const urls = await Promise.all(promises);
        return urls;
    }
}

export default new API();