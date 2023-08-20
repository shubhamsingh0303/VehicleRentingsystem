const Car = require("../models/carModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const { getDataUri } = require("../utils/dataUri");
const ApiFeatures = require("../utils/apifeatures");

// Create Vehicle(Admin) 
exports.createCar = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id;

    const { VehicleName, fuelType, category,location, KMPL, TransMatin, Units, PricePerDay } = req.body;

    const file = req.file;

    const fileUri = getDataUri(file);

    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

    const car = await Car.create({
        VehicleName, fuelType, category,location, KMPL, TransMatin, Units, PricePerDay,
        photo: {
            public_id: myCloud.public_id,
            secure_url: myCloud.secure_url,
        },
    });

    res.status(200).json({
        success: true,
        car
    });
});

// Update Vehicle (Admin)
exports.updateCar = catchAsyncErrors(async (req, res, next) => {
    const newCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        newCar
    });
});

// Delete Vehicle
exports.deleteCar = catchAsyncErrors(async (req, res, next) => {

    const newCar = await Car.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        message: "Blog delete successfully"
    });
});



// Get All Vehicle 
exports.getAllCars = catchAsyncErrors(async (req, res, next) => {

 
    const apiFeature = new ApiFeatures(Car.find(), req.query).filter()
    const car = await apiFeature.query;

    res.status(200).json({
        success: true,
        car
    })
});

//  Get Single Vehicle
exports.getSingleCar = catchAsyncErrors(async (req, res, next) => {
    const car = await Car.findById(req.params.id);

    res.status(200).json({
        car
    })
});

// Update Car Status(Admin) 
exports.updateCarStatus = catchAsyncErrors(async (req, res, next) => {
    const car = await Car.findById(req.params.id)
    if (car.statusCode == 0) {
        const newStatusCode = {
            statusCode: 1
        };

        const car = await Car.findByIdAndUpdate(req.params.id, newStatusCode, {
            new: true,
            runValidators: true,
            useFindAndModify: true,
        })
        res.status(200).json({
            success: true,
            message: 'User statusCode 1'
        })
    } else {
        const newStatusCode = {
            statusCode: 0
        };

        const car = await Car.findByIdAndUpdate(req.params.id, newStatusCode, {
            new: true,
            runValidators: true,
            useFindAndModify: true,
        })
        res.status(200).json({
            success: true,
            message: 'car statusCode 0'
        })
    }

});

// Create new Review or Update Review 
// exports.Review = catchAsyncErrors(async (req, res, next) => {
//     const { rating, comment, productId } = req.body;
//     const review = {
//         user: req.body._id,
//         name: req.body.name,
//         rating: Number(rating),
//         comment
//     };

//     const car = await Car.findById(productId);
//     const isReviewed = car.reviews.find(rev => rev.user.toString() === req.user._id.toString());

//     if (isReviewed) {
//         car.reviews.forEach(rev => {
//             if (rev.user.toString() === req.user._id.toString())
//                 (rev.rating = rating), (rev.comment = comment);
//         });
//     } else {
//         car.reviews.push(review);
//         car.numofReviews = car.reviews.length;
//     }

//     let avg = 0;
//     car.reviews.forEach(rev => {
//         avg += rev.rating;
//     });
//     car.ratings = avg / car.reviews.length;

//     await car.save({ validateBeforeSave: false });

//     res.status(200).json({
//         success: true,
//     })
// });