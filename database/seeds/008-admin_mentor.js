
exports.seed = function(knex) {
  return knex('admin_mentor').insert([
    {admin_id: 1, mentor_id: 1},
    {admin_id: 1, mentor_id: 2}
  ]);
};
