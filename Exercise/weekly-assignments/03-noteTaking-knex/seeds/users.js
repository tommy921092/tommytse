exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "user1", password: "password1" },
        { id: 2, username: "user2", password: "password2" }
      ]);
    });
};
