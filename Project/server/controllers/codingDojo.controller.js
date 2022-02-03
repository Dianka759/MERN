const CodingDojo = require("../models/codingDojo.model");

module.exports.allStacks = (request, response) => {
    CodingDojo.find({})
        .then(stacks => response.json(stacks))
        .catch(err => response.json(err))
}

module.exports.createStack = (request, response) => {
    const { stack } = request.body;
    CodingDojo.create({
        stack
    })
        .then(stack => response.json(stack))
        .catch(err => response.json(err))
}

module.exports.oneStack = (request, response) => {
    CodingDojo.findOne({_id : request.params._id})
        .then(chapter =>  response.json(chapter))
        .catch(err => response.json(err))
}


module.exports.oneChapter = (request, response) => {
    CodingDojo.findOne({ chapter: {$elemMatch: {_id : request.params._id}} })
        .then(chapter =>  response.json(chapter))
        .catch(err => response.json(err))
}








// module.exports.updatePet = (req, res) => {
//     Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
//         .then(updatedPet => res.json({ user: updatedPet }))
//         .catch(err => res.json(err));
// };

module.exports.deleteStack = (request, response) => {
    CodingDojo.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.deleteAll = (request, response) => {
    CodingDojo.remove({})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

