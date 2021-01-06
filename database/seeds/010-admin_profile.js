
exports.seed = function(knex) {
  return knex('admin_profile').insert([
    {admin_id: 1, username: 'WestfieldS', password: 'password'},
    {admin_id: 1, username: 'JonesHS', password: 'password'}
  ]);
};
