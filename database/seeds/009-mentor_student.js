
exports.seed = function(knex) {
  return knex('mentor_student').insert([
    {mentor_id: 1, student_id: 1},
    {mentor_id: 1, student_id: 2}
  ]);
};
