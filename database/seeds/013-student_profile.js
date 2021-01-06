
exports.seed = function(knex) {
  return knex('student_profile').insert([
    {student_id: 1, username: 'DDoe', password: 'password'},
    {student_id: 1, username: 'BVanderwall', password: 'password'}
  ]);
};
