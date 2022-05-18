import { Alert } from "./Alert";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Alert type="information" heading="Success">
        Everything is really good!
      </Alert>
    </div>
  );
}
