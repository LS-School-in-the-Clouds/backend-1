const express = require('express');

const Tasks = require('./tasksModel');

const middleware = require('../../middleware/middleware');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.findAdminTasks(req.query)
        .then(adminTasks => {
            res.status(200).json({ adminTasks })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error retrieving admin tasks' })
        })
});

router.get('/:id', middleware.validateTasksId, (req, res) => {
    res.status(200).json({ adminTask })
});

router.delete('/:id', middleware.validateTasksId, (req, res) => {
    Tasks.deleteAdminTasks(req.params.id)
        .then(count => {
            count > 0
            res.status(200).json({ message: 'The admin task has been deleted' })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error retrieving the admin task' })
        })
});

router.post('/:id/admin_tasks', (req, res) => {
    const adminTaskData = req.body;
    const { id } = req.params;

    Tasks.findById(id)
        .then(admin => {
            if (admin) {
                return Tasks.insertAdminTasks(adminTaskData, id);
            } else {
                res.status(404).json({ message: 'Could not find admin task with given id' })
            }
        })
        .then(adminTask => {
            res.status(200).json(adminTask)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to create new admin task' })
        });
});

router.put('/:id', middleware.validateTasksId, (req, res) => {
    const changes = req.body
    Tasks.updateAdminTasks(req.params.id, changes)
        .then(adminTask => {
            res.status(200).json(adminTask);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error updating the admin task' })
        })
});

module.exports = router;
