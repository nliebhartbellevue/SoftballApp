[
  '{{repeat(5)}}',
  {
    Username: '{{firstName("female")}}',
    Gender: 'female',
    DateOfBirth: '{{date(new Date(1950,0,1), new Date(1999, 11, 31), "YYYY-MM-dd")}}',
    Password: 'password',
    KnownAs: function(){ return this.Username; },
    Created: '{{date(new Date(2017,0,1), new Date(2017, 7, 31), "YYYY-MM-dd")}}',
    LastActive: function(){return this.Created; },
    Introduction: '{{lorem(1, "paragraphs")}}',
    Position: '{{random("Pitcher", "Catcher", "First Base", "Second Base", "Third Base", "Shortstop", "Left Field", "Left-Center", "Right-Center", "Right Field", "Manager")}}',
    Association: '{{random("ASA", "USSSA")}}',
    City: '{{random("Grand Island", "Hastings", "Kearney", "Omaha", "Lincoln", "Fremont", "North Plate")}}',
    State: '{{"Nebraska"}}',
    Photos: [
        {
          url: function(num) {
          return 'https://randomuser.me/api/portraits/women/' + num.integer(1,99) + '.jpg';
        },
        isMain: true,
        description: '{{lorem()}}'
      }
    ]
  }
]