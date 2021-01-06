
exports.seed = function(knex) {
  return knex('mentor').insert([
    {first_name: 'Joe', last_name: 'Jackman', state: 'Virginia', country: 'USA', interests: 'model airplanes, volleyball', career: 'auto mechanic', available_time: '2:00 PM - 6:00 PM weekdays EST'},
    {first_name: 'Laurie', last_name: 'Walton', state: 'Washington', country: 'USA', interests: 'chemistry, gardening', career: 'executive assistant', available_time: '9:00 AM - 2:00 PM weekdays PST'},
  ]);
};
