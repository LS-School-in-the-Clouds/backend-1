const db = require('../../database/connection');

module.exports = {
    insertAdminTasks,
    findAdminTasks,
    updateAdminTasks,
    deleteAdminTasks,
    insertAdminMentorTasks,
    findAdminMentorTasks,
    updateAdminMentorTasks,
    removeAdminMentorTasks,
};

function insertAdminTasks(tasks, id) {
    return db('admin_tasks')
    .insert(tasks, id)
    .then(ids => {
        return findById(ids[0]);
    })
}

function findAdminTasks(id) {
    return db('admin_tasks as at')
        .join('admin as a', 'a.user_id', 'at.id')
        .select('a.id', 'at.description')
        .where('a.id', id)
}

function updateAdminTasks(id, changes) {
    return db('admin_tasks')
    .where({ id })
    .update(changes);
}

function deleteAdminTasks(id) {
    return db('admin_tasks')
        .where('id', id)
        .del();
}
