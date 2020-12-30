export default class BlogService {
    apiBase = 'https://conduit.productionready.io/api/'

    async getResource(url) {
        try {
            const res = await fetch(`${this.apiBase}${url}`);
            if (!res.ok) {
                throw new Error(`Could not fetch ${url} received ${res.status}`);
            }
            return await res.json();
        } catch (err) {
            if (!navigator.onLine) throw new Error('Ops. Check your network connection.');
            throw new Error('Ops. Something went wrong.');
        }
    }

    getArticles = async (pagination, limit) => {
        const { articles } = await this.getResource(`articles?limit=${limit}&offset=${pagination}&tag=AngularJS`)
        return articles
    }

    getArticle = async (slug) => {
        const article = await this.getResource(`articles/${slug}`)
        return article
    }
}