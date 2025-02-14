import mongoose from 'mongoose';

const favSchema=new mongoose.Schema({
    movieId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    dateReleased:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
});

const userSchema=new mongoose.Schema(
    {
        clerkId:{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        profilePicture:{
            type:String,
            required:true,
        },
        navs:{
            type:[favSchema],
            default:[],
        },
    },
    { timestamps:true }
);

const User = mongoose.model.User || mongoose.model('User',userSchema);
export default User;