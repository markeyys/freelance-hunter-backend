// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-database
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.punggolDB;
ds.automigrate('Company', function(err) {
  if (err) throw err;

  var companies = [
    {
      email: 'john.doe@ibm.com',
      password: '1234',
      description: 'hello',
      sector: 'IT industry',
    },
    {
      email: 'jane.doe@ibm.com',
      password: '2234',
      description: 'hellos',
      sector: 'IT industry',
    },
  ];
  var count = companies.length;
  companies.forEach(function(company) {
    app.models.Company.create(company, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});
