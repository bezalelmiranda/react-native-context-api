import Rotas from "./src/rotas";

import { TemaProvider } from "./src/contexts/GlobalContext";

export default function App() {
  return (
    <TemaProvider>
      <Rotas />
    </TemaProvider>
  );
}