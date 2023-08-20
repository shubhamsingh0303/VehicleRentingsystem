const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        
    },
    photo: {
        public_id: {
            type: String,
            required: true,
        },
        secure_url: {
            type: String,
            required: true,
        }
    },
    role: {
        type: String,
        default: "user"
    }

}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    };
    this.password = await bcrypt.hash(this.password, 10);
});

// Jsonwebtoken Token 
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, "Blogs", {
        expiresIn: "1d"
    });
};

// Compare Password 
userSchema.methods.comparePassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
};


module.exports = mongoose.model("User", userSchema);
