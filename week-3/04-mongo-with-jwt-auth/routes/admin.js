const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { createAdmin,createPost } = require("../type");
const router = Router();
const {Admin,Course}=require("../db/index")
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const load=req.body;
    const parsedPayLoad=createAdmin.safeParse(load);
    
    if(!parsedPayLoad.success){
        res.json({
            message:"Invalid input"
        })
        return;
    }

    const username=req.body.username;
    const password = req.body.password;
    await Admin.create({
        username,
        password
    })

    res.json({
        message:"Admin created successfully"
    })

});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username=req.headers.username;
    const password=req.headers.password;
    console.log(JWT_SECRET)
    const value=await Admin.find({
        username,
        password
    })

    if(value){
        const token=jwt.sign({
           username
        } ,JWT_SECRET)

        res.json({
            token
        })

    }
    else{
        res.status(411).json({
            message:"Incorrect email and password"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic  
    const requiredPayLoad1=req.body;
    const parsedPayLoad1=createPost.safeParse(requiredPayLoad1);

    if(!parsedPayLoad1.success){
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

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const courses=await Course.find({});
    res.json({
        courses
    })

});

module.exports = router;