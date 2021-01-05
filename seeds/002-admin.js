
exports.seed = function(knex) {
  return knex('admin').insert([
    {school_district: 'Columbine 12', school_name: 'Westfield School', state: 'Virginia', country: 'USA'},
    {school_district: 'Westbury', school_name: 'Jones High School', state: 'Washington', country: 'USA'},
  ]);
};
