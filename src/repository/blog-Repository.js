import Blog from '../model/blog.js';

class BlogRepository {
    async create (data) {
        try {
            const blog = await Blog.create(data);
            return blog;
        } catch (error) {
            throw error;
            console.log("Something went wrong at create repository");
        }
    }

    async get(data) {
        try {
            const blog = await Blog.find(data);
            return blog;
        } catch (error) {
            throw error;
            console.log("Something went wrong at get repository");
        }
    }

    async update(id , data) {
        try {
            const blog = await Blog.findByIdAndUpdate(id, data,{new: true});
            return blog;
        } catch (error) {
            throw error;
            console.log("Something went wrong at create repository");
        }
    }

    async destroy (id) {
        try {
            const blog = await Blog.findByIdAndDelete(id);
            return blog;
        } catch (error) {
            throw error;
            console.log("Something went wrong at create repository");
        }
    }
}

export default BlogRepository;