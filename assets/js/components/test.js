let _ = require("lodash");
import serviceobj from "../service/serviceApiHandler.2.0";

const hello = () => {
  return {
    skrik: callback => {
      let reqobj = serviceobj();
      let url =
        "http://frontdata.se/DesktopModules/aj_QuizEngineAPI_vb/API/Andreas/Quiztest";
      let svar = reqobj.Getjson(url, data => {
        console.log("visa data: " + data);
        callback(data);
      });
      console.log("TEST igen dettaeller" + _.add(6, 4) + " --- ");
    },
    alfvalue: "detta är ett simpelt värde från hello test!"
  };
};
export default hello;
