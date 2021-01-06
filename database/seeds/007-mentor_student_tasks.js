
exports.seed = function(knex) {
  return knex('mentor_student_tasks').insert([
    {mentor_id: 1, student_id: 1, mentor_tasks_id: 1, mentor_tasks_description: 'meet with your mentee via zoom and introduce yourself. Find out more about your mentee'},
    {mentor_id: 1, student_id: 1, mentor_tasks_id: 2, mentor_tasks_description: 'Come up with a plan to help your mentee achieve their goals and agree to tasks and deadlines that will help reach the goal'}
  ]);
};
