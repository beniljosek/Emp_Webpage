const e1 = {
    name : 'Benil',
    doj : '24-03-2022',
    role : 'Developer'
  };
  
  console.log(e1);
  
  var id = '';
  
  function getID(e) {
      e.doj = e.doj.replaceAll('-','_');
    id = e.name + '_' + e.doj + '_' + e.role;
  }
  getID(e1);
  /* console.log(id); */
  e1.id = id;
  
  e1.id = 'KeyValue' + '_' + id;
  console.log(e1.id);