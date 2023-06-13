import ReactDom from "react-dom/client"
import { App } from "./app"

ReactDom.createRoot(document.getElementById("app") as HTMLElement).render(
 <App />
)
