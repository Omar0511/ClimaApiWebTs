import styles from "./App.module.css";
import Form from "./components/Form/Form";
import useWeather from "./components/hook/useWeather";

function App() {
  const { fetchWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de CLima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />

        <p>2</p>
      </div>
    </>
  );
}

export default App;
