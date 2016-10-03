
    Promise.all([ 
      System.import('./es6md.js'), System.import('./es5md.js') 
    ]).then(function (modules) { 
      var moduleNames = modules 
        .map(function (m) { return m.name; }) 
        .join(', '); 
      console.log('The following modules are loaded: ' + moduleNames);
    });
