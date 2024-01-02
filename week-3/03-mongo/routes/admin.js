const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();
const {createAdmin,createPost}=require("../type")

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const requiredPayLoad=req.body;
    const parsedPayLoad=createAdmin.safeParse(requiredPayLoad);

    if(!parsedPayLoad.success){
        res.status(411).json({
            message:"Invalid Format"
        })
        return;
    }


    const username=req.body.username;
    const password=req.body.password;
    await Admin.create({
        username:username,
        password:password 
    })
        res.json({
            message:"Admin created"
        })
   

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const requiredPayLoad=req.body;
    const parsedPayLoad=createPost.safeParse(requiredPayLoad);

    if(!parsedPayLoad.success){
        res.status(411).json({
            message:"Invalid Format"
        })
        return;
    }
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const image=req.body.image;

    const course =await Course.create({
        title,
        description,
        price,
        image
    })

    if(course){
        res.json({
            message:"course created successfully"
        })
    }else{
        res.status(403).json({
            message:"course was not created "
        })
    }

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        message:response
    })
});

module.exports = router;