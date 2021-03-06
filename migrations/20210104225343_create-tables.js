
exports.up = function(knex) {
  return knex.schemea
    .createTable('admin', admin => {
        admin.increments();
        admin.integer('admin_id').notNullable().unique();
        admin.string('school_district', 128).notNullable();
        admin.string('school_name', 128).notNullable();
        admin.string('state', 100).notNullable();
        admin.string('country', 100).notNullable();
    })
    .createTable('mentor', mentors => {
        mentors.increments();
        mentors.integer('mentor_id').notNullable().unique();
        mentors.string('first_name', 128).notNullable();
        mentors.string('last_name', 128).notNullable();
        mentors.string('state', 100).notNullable();
        mentors.string('country', 100).notNullable();
        mentors.string('interests', 100).notNullable();
        mentors.string('career', 100).notNullable();
        mentors.varchar('available_time', 100).notNullable();
    })
    .createTable('student', students => {
        students.increments();
        students.integer('student_id').notNullable().unique();
        students.string('first_name', 128).notNullable();
        students.string('last_name', 128).notNullable();
        students.string('state', 100).notNullable();
        students.string('country', 100).notNullable();
        students.string('interests', 100).notNullable();
        students.string('career_goal', 100).notNullable();
        students.varchar('available_time', 100).notNullable();
    })
    .createTable('admin_tasks', admin_tasks => {
        admin_tasks.increments();
        admin_tasks.integer('admin_id').notNullable().unique();
        admin_tasks.integer('admin_tasks_id').notNullable().unique();
        admin_tasks.string('admin_tasks_description', 255).notNullable();
    })
    .createTable('mentor_tasks', mentor_tasks => {
        mentor_tasks.increments();
        mentor_tasks.integer('mentor_id').notNullable().unique();
        mentor_tasks.integer('mentor_tasks_id').notNullable().unique();
        mentor_tasks.string('mentor_tasks_description', 255).notNullable();
    })
    .createTable('admin_mentor_tasks', admin_mentor_tasks => {
        admin_mentor_tasks.increments();
        admin_mentor_tasks.integer('admin_id').notNullable().unique();
        admin_mentor_tasks.integer('mentor_id').notNullable().unique();
        admin_mentor_tasks.integer('admin_tasks_id').notNullable().unique();
    })
    .createTable('mentor_student_tasks', mentor_student_tasks => {
        mentor_student_tasks.increments();
        mentor_student_tasks.integer('mentor_id').notNullable().unique();
        mentor_student_tasks.integer('student_id').notNullable().unique();
        mentor_student_tasks.integer('mentor_tasks_id').notNullable().unique();
    })
    .createTable('admin_mentor', admin_mentor => {
        admin_mentor.increments();
        admin_mentor.integer('admin_id').notNullable().unique();
        admin_mentor.integer('mentor_id').notNullable().unique();
    })
    .createTable('mentor_student', mentor_student => {
        mentor_student.increments();
        mentor_student.integer('mentor_id').notNullable().unique();
        mentor_student.integer('student_id').notNullable().unique();
    })
    .createTable('admin_profile', admin_profile => {
        admin_profile.increments();
        admin_profile.integer('admin_id').notNullable().unique();
        admin_profile.integer('username').notNullable().unique();
    })
    .createTable('mentor_profile', mentor_profile => {
        mentor_profile.increments();
        mentor_profile.integer('mentor_id').notNullable().unique();
        mentor_profile.integer('username').notNullable().unique();
    })
    .createTable('student_profile', student_profile => {
        student_profile.increments();
        student_profile.integer('student_id').notNullable().unique();
        student_profile.integer('username').notNullable().unique();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('student_profile').dropTableIfExists('mentor_profile').dropTableIfExists('admin-profile').dropTableIfExists('mentor-student').dropTableIfExists('admin-mentor').dropTableIfExists('mentor_student_tasks').dropTableIfExists('admin_mentor_tasks').dropTableIfExists('mentor_tasks').dropTableIfExists('admin_tasks').dropTableIfExists('student').dropTableIfExists('mentor').dropTableIfExists('admin');
};
