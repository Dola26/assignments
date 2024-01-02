const zod = require('zod');

const createAdmin=zod.object({
    username:zod.string().email(),
    password:zod.string().min(3)
})

const createUser=zod.object({
    username:zod.string().email(),
    password:zod.string().min(3)
})

const createPost=zod.object({
    title:zod.string(),
    description:zod.string(),
    price:zod.number(),
    image:zod.string()
})

module.exports = {
   createAdmin:createAdmin,
   createUser:createUser,
   createPost:createPost
}