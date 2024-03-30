const { carModel } = require('../models');

function getCars(req, res, next) {
    carModel.find()
        .populate('userId')
        .then(cars => res.json(cars))
        .catch(next);
}

function getCar(req, res, next) {
    const { carId } = req.params;
    console.log(carId)

    carModel.findById(carId)
        .populate('userId')
        .then(cars => res.json(cars))
        .catch(next);
}

function createCar(req, res, next) {
    const carData = req.body;

    carModel.create(carData)
}

function editCar(req, res, next) {
    const { carId } = req.params;
    const car = req.body;

    carModel.findByIdAndUpdate(carId, car)
}

function deleteCar(req, res, next) {
    const { carId } = req.params;
    carModel.findByIdAndDelete(carId)
}

function like(req, res, next) {
    const carId = req.params.carId;
    const { _id: userId } = req.user;
    carModel.findByIdAndUpdate({ _id: carId }, { $addToSet: { likes: userId } }, { new: true })
        .then(updatedcar => {
            res.status(200).json(updatedcar)
        })
        .catch(next);
}

module.exports = {
    getCars,
    createCar,
    getCar,
    like,
    editCar,
    deleteCar,
}
