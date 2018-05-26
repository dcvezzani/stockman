
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {
          keywords: 'one,two,three', 
          title: 'Broccoli is great!', 
          description: 'Dolor quae recusandae vitae hic magni. Iure tempore error assumenda laudantium quidem Architecto maxime possimus facere dicta eligendi Exercitationem a ipsum itaque tempore eaque possimus. Dignissimos nesciunt officiis dicta numquam!', 
          category: 'category 1', 
          // releaseForm: '/stock/static/doc/releaseForm.pdf', 
          editorial: 1, 
          illustration: 0, 
          adult: 0,
        },
      ]);
    });
};
