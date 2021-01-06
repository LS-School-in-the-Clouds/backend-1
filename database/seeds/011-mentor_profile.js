
exports.seed = function(knex) {
  return knex('mentor_profile').insert([
    {mentor_id: 1, username: 'JJackman', password: 'password'},
    {mentor_id: 1, username: 'LWalton', password: 'password'}
  ]);
};
