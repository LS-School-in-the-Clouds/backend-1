
exports.seed = function(knex) {
  return knex('admin_tasks').insert([
    {admin_tasks_id: 1, admin_tasks_description: 'meet with your mentee via zoom and introduce yourself. Find out more about your mentee'},
    {admin_tasks_id: 2, admin_tasks_description: 'Come up with a plan to help your mentee achieve their goals and agree to tasks and deadlines that will help reach the goal'}
  ]);
};
