import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import CryptoPage from "../cryptoPage";
import Layout from "../layout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><App /></Layout>,
    },
    {
      path: "/crypto",
      element: <Layout><CryptoPage /></Layout>,
    },
    
  ]);
  
export default router;