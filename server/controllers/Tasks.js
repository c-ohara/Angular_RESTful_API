const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: (req, res) => {
        Task.findByIdAndUpdate(req.params.id)
        Task.find().then(
            allTasks => {
                console.log(allTasks)
                res.json({status: true, Tasks: allTasks})
            }
        ).catch(
            err => {
                console.log(err)
                res.jason({status: false, errors: err})
            })
    },
    show: (req, res) => {
        Task.findById({_id: req.params.id})
        .then( currentTask =>{
            console.log(currentTask);
            res.json({status: true, currentTask});
        })
        .catch( err => {
            res.json({status: false, errors: err})
        })
    },
    create: (req, res)=>{
        console.log(req.body)
        Task.create(req.body)
        .then(
            addedTask => {
                console.log(addedTask);
                res.json({status: true, addedTask});
            })
        .catch(err => {
            console.log(err);
            let messages = [];
            if ("description" in err['errors'].errors) {
                messages.push(err['errors'].errors.description.message);
            }
            if ("title" in err['errors'].errors) {
                messages.push(err['errors'].errors.title.message);
            }
            res.json({status: false, errors: messages});
        })
    },
    update: (req,res) =>{
        Task.updateOne({_id: req.params.id}, {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        })
        .then(oneTask => res.json(oneTask))
        .catch(err => res.json({err:err}))
    },
    remove: (req, res)=>{
        Task.deleteOne({_id : req.params.id})
        .then( result => {
            console.log(result);
            res.json({status:true});
        })
        .catch(err => {
            console.log(err);
            res.json({status: false, errors: err});
        })
    }
}