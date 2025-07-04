const PostModel = require("../Models/post.model");

module.exports.getPosts = async (req ,res)=>{
    const post = await PostModel.find();
    res.status(200).json(post);
}



module.exports.setPosts = async (req , res)=>{
   if(!req.body.message){
       res.status(400).json({message: "merci de laisse un message"});
   }

   const post = await PostModel.create({
        message: req.body.message,
        auth: req.body.auth
   })

   res.status(200).json(post);
}

module.exports.editPost = async (req , res) => {
    const post = await PostModel.findById(req.params.id);
    if(!post){
      res.status(400).json({message: "ce post n'existe pas"});
    }

    const updatePost = await PostModel.findByIdAndUpdate(
        post, 
        req.body,
        {new: true}
    );

    res.status(200).json({updatePost});
    
}

module.exports.deletePost = async (req ,res) => {
    const post = await PostModel.findById(req.params.id);
    if(!post){
        res.status(400).json({message: "ce post n'existe pas"});
    }

    await post.deleteOne();

    res.status(200).json("message supprime "+ req.params.id);
}

module.exports.likePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$addToSet: {likes: req.body.userId}},
            {new: true}
        ).then((data) => res.status(200).send(data));
    } catch (error) {
        res.status(400).json(err);
    }
}

module.exports.dislikePost = async (req ,res)=>{
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$pull: {likes: req.body.userId}},
            {new: true}
        ).then((data)=>res.status(200).send(data));
    } catch (error) {
        res.status(400).json(err);
    }
}


