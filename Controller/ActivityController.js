const Activity = require('../Model/Activities');



const createActivity = async (req, res) =>{
    const {activity , duration, date, description } = req.body

    const newActivity = new Activity({
        activity: activity,
        duration: duration,
        date : date,
        description: description,
        userId : req.userId
    })

    try {
        const newactivity = await newActivity.save()
        res.status(200).json({newActivity : newactivity})
        
    } catch (error) {
        res.status(500).json({error: error, message: "Something went Wrong"})
    }

}


const updateActivity = async (req, res) =>{

    const id = req.params.id
    const {activity , duration, date, description } = req.body

    const newActivity = new Activity({
        activity: activity,
        duration: duration,
        date : date,
        description: description,
        userId : req.userId
    })

    try {
       const updateActivity=  await Activity.findByIdAndUpdate(id, newActivity, { new: true })
        res.status(200).json({updateActivity: updateActivity})

    } catch (error) {
        res.status(500).json({error: error, message: "Something went Wrong"})
    }
}

const deleteActivity = async (req, res) =>{
    const id = req.params.id
    try {
         await Activity.findByIdAndRemove(id)
        res.status(200).json("Delete Activity Successfully")
    } catch (error) {
        res.status(500).json({error: error, message: "Something went Wrong"})
    }
}

const getActivity = async (req, res) =>{
    try {
        const activities  = await Activity.find({userId : req.userId})
        res.status(200).json({activities: activities})
        
    } catch (error) {
        res.status(500).json({error: error, message:"Something went wrong"})
    }
}

module.exports = {
    getActivity,
    createActivity,
    deleteActivity,
    updateActivity
}

