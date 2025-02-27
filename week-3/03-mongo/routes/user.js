const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { createUser } = require("../type")
const { User,Course } = require("../db");


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const requiredPayLoad=req.body;
    const parsedPayLoad=createUser.safeParse(requiredPayLoad);

    if(!parsedPayLoad.success){
        res.status(411).json({
            message:"Invalid Format"
        })
        return;
    }
    const username=req.body.username;
    const password=req.body.password;
    await User.create({
        username:username,
        password:password 
    })
        res.json({
            message:"User created"
        })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})

    res.json({
        messgae:response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const username=req.headers.username;

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
        username:req.headers.username
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

module.exports = router;