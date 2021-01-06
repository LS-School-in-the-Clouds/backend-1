const Tasks = require('../api/tasks/tasksModel')

const validateTasksId = async (req, res, next) => {
    const { id } = req.params;
    try {
        const adminTask = await Tasks.getById(id);
        if (!adminTask) {
            res.status(404).json({ message: `Admin task with id ${id} not found` });
        } else {
            req.adminTask = adminTask;
            next();
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving the admin task', error: error.message })
    }
};

module.exports = {
    validateTasksId
}
