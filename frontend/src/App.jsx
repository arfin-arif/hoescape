import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Root from "./components/root/Root";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./middleware/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Root />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
