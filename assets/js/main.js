import testobj from "./components/test";

//console.log(ny.skrik());
//(alert(ny.alfvalue);
//let _ = require('lodash');
//dt.testarold('funkar detta');
$(function() {
  let init = () => {
    let obj = testobj();
    let svar = obj.skrik(svar => {
      $("#quizMainContainer").text(svar);
    });
  };
  init();
  //alert(' och igen..nu utan ' + ny.skrik(dt.testarold('funkar detta')));
  //console.log('innan jplist2');
  //jplist.init();
});
