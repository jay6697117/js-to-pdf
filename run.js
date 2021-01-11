import pkg from 'jspdf';
import moment from 'moment'
import 'jspdf-autotable';
const { jsPDF } = pkg;

let styles = { valign: 'middle' };

if (typeof font !== 'undefined') {
  const callAddFont = function () {
    this.addFileToVFS('font-normal.ttf', font);
    this.addFont('font-normal.ttf', 'font', 'normal');
  };
  jsPDF.API.events.push(['addFonts', callAddFont]);
  styles = { font: 'font', valign: 'middle' };
}

const doc = new jsPDF();

doc.autoTable({
  head: [['Name', 'Email', 'Country']],
  body: [
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain']
  ],
  styles
});


const date = moment(Date.now()).format("YYYY_MM_DD_HH_mm_ss");
doc.save(`table_${date}.pdf`);
