import { inline } from "./inline.js"; //Inline o nome tem que ser o mesmo da function
import d from "./inline.js"; //Export defaultInline permite definir um export padrão sem que seja nescessario ser igual a function
import { group } from "./non-inline.js";
import exportDefault from "./non-inline.js";
//import exportDefault , { group } from "./non-inline.js"; //Podemos passar o inline e o default na mesma linha
inline();
d();

group();
exportDefault();
