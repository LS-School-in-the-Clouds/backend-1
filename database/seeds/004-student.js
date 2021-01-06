
exports.seed = function(knex) {
  return knex('student').insert([
    {first_name: 'Debbie', last_name: 'Doe', state: 'Washington', country: 'USA', interests: 'organic gardening', career_goal: 'airplane mechanic', available_time: '9:00 PM - 10:00 AM weekdays PST'},
    {first_name: 'Burt', last_name: 'Vanderwall', state: 'Virginia', country: 'USA', interests: 'soccer, model building', career: 'sales executive', available_time: '3:00 PM - 4:30 PM weekdays EST'},
  ]);
};
