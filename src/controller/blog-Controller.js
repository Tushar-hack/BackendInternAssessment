import BlogService from "../services/blog-Service.js";

const blogService = new BlogService();

const createBlog = async (req, res) => {
    try {
        console.log(req.body);
        const blog = await blogService.create(req.body);
        return res.status(201).json({
            data: blog,
            success: true,
            message: "Successfully created the blog",
            err: {}
        });
    } catch (error) {
        throw error;
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong!!",
            err: error
        });
    }
}
const getBlog = async (req, res) => {
    try {
        const blog = await blogService.get(req.body);
        return res.status(200).json({
            data: blog,
            success: true,
            message: "Successfully created the blog",
            err: {}
        });
    } catch (error) {
        throw error;
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong!!",
            err: error
        });
    }
}
const updateBlog = async (req, res) => {
    try {
        const blog = await blogService.update(req.body.id, req.body.data);
        return res.status(202).json({
            data: blog,
            success: true,
            message: "Successfully created the blog",
            err: {}
        });
    } catch (error) {
        throw error;
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong!!",
            err: error
        });
    }
}
const deleteBlog = async (req, res) => {
    try {
        const blog = await blogService.destroy(req.body.id);
        return res.status(201).json({
            data: blog,
            success: true,
            message: "Successfully created the blog",
            err: {}
        });
    } catch (error) {
        throw error;
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong!!",
            err: error
        });
    }
}

export{
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
}