import { useEffect, useState } from "react";
import { fetchAdvice } from "./services/adviceService";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [advice, setAdvice] = useState<string>("");
  const [adviceId, setAdviceId] = useState<number>(Number);
  const [loaded, setLoaded] = useState<boolean>(false);

  const getAdvice = async () => {
    setAdvice("");
    try {
      const newAdvice = await fetchAdvice();
      setAdvice(newAdvice.advice);
      setAdviceId(parseInt(newAdvice.id));
    } catch (err) {
      setAdvice("Ups... hubo un error");
    }
  };
  useEffect(() => {
    if (!loaded) {
      getAdvice();
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <>
      <div className="bg-[#202632] h-screen w-screen flex justify-center items-center">
        <Card
          advice={advice}
          adviceId={adviceId}
          handleClick={() => getAdvice()}
        />
      </div>
    </>
  );
}

export default App;
