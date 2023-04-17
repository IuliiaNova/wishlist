import RouterPaths from './router/Router';
import TaskProvider from './context/TaskProvider';


function App() {

  return (
    <div className="App ">
      <TaskProvider>
        <RouterPaths />
      </TaskProvider>
    </div>
  );
}

export default App;
