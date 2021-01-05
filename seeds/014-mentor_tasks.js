
exports.seed = function(knex) {
  return knex('mentor_tasks').insert([
    {mentor_tasks_id: 1, mentor_tasks_description: 'introduce yourself and what your life aspirations are prior to the first zoom meeting'},
    {mentor_tasks_id: 2, mentor_tasks_description: 'Complete goals worksheet before the next zoom meeting'}
  ])
};
