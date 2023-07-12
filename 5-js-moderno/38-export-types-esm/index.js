import { inline } from "./inline.js";
import defaultInline from "./inline.js" // posso dar o nome que eu quiser.. mas evite, pode cagar o seu codigo..
// a maior diferença é que o export acima (default) só pode ocorrer uma vez por arquivo'
// o que faz sentindo, já que ele é o padrão... se é padrão, não tem outro, só um. (pode ser uma função anonima tb, já que o nome meio que indifere)
// já o named export podem existir quanto forem necessários.

import { group } from "./non-inline.js"
import exportDefault from "./non-inline.js";

inline();
defaultInline();

group();
exportDefault(); 