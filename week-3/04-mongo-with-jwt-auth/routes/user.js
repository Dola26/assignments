const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User , Course} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const {createUser} =require("../type")
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const load=req.body;
    const parsedPayLoad=createUser.safeParse(load);
    
    if(!parsedPayLoad.success){
        res.json({
            message:"Invalid input"
        })
        return;
    }

    const username=req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    })

    res.json({
        message:"User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.headers.username;
    const password=req.headers.password;
    const value=await User.find({
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses=await Course.find({});
    res.json({
        courses
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const username=req.username;

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })
    res.json({
        message:"course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.username
    })

    const courses= await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
     res.json({
        courses:courses
     })
});


module.exports=router;