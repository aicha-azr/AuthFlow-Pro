
import { Provider } from "react-redux"
import store from "../Store/store";

 function Providers(){
    return <Provider store={store}></Provider>
 }
 export default Providers;