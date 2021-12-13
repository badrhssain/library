function addRow()
{
    // get input values
    var titre = document.getElementById('titre').value;
     var auteur = document.getElementById('auteur').value;
      var prix = document.getElementById('prix').value;
      var date = document.getElementById('date').value;
      var langue = document.getElementById('langue').value;
      var type = document.getElementById('Roman').value;
      
      // get the html table
      var table = document.getElementsByTagName('table')[0];
      
      // add new empty row to the table
      var newRow = table.insertRow(table.rows.length);
      
      // add cells to the row
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      var cel4 = newRow.insertCell(3);
      var cel5 = newRow.insertCell(4);
      var cel6 = newRow.insertCell(5);
      
      // add values to the cells
      cel1.innerHTML = titre;
      cel2.innerHTML = auteur;
      cel3.innerHTML = prix;
      cel4.innerHTML = date;
      cel5.innerHTML = langue;
      cel6.innerHTML = type;
}
