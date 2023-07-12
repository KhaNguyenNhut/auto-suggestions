import './App.css';
import AutoSuggestion from './components/auto-suggestion/AutoSuggestion';
import TextField from '@mui/material/TextField';
import Setting from './components/setting/Setting';

function App() {
  return (
    <div className="flex justify-center items-center pt-10 flex-col">
      <div className="md:w-1/2 lg:w-1/3 w-full md:px-0 px-4">
        <h1 className="font-bold text-xl mb-6 text-center">
          Auto Suggestion Demo
        </h1>
        <Setting />
        <AutoSuggestion />
      </div>
    </div>
  );
}

export default App;
