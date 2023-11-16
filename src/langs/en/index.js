import error from "./error";
import common from "./common";
import validation from "./validation";

const messages ={...common, ...error, ...validation};
export default messages;
