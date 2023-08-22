import BlogRepository from "../repository/blog-Repository.js";

class BlogService {
    constructor() {
        this.BlogRepository = new BlogRepository();
    }

    async create (data) {
        try {
            const blog = await this.BlogRepository.create(data);
            return blog;
        } catch (error) {
            throw error;
            console.log("Something went wrong at create repository");
        }
    }

    async get(data) {
        try {
            const blog = await this.BlogRepository.get(data);
            return blog;
        } catch (error) {
            throw error;
            console.log("Something went wrong at get repository");
        }
    }

    async update(id , data) {
        try {
            const blog = await this.BlogRepository.update(id, data);
            return blog;
        } catch (error) {
            throw error;
            console.log("Something went wrong at create repository");
        }
    }

    async destroy (id) {
        try {
            const blog = await this.BlogRepository.destroy(id);
            return blog;
        } catch (error) {
            throw error;
            console.log("Something went wrong at create repository");
        }
    }
}

export default BlogService;