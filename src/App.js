import './App.css';
// import './script';
import HeaderComponent from "./components/HeaderComponent";
import WelcomeComponent from "./components/WelcomeComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import OwnerListComponent from "./components/OwnerListComponent";
import FooterComponent from "./components/FooterComponent";
import JoinWithUs from "./components/JoinWithUsComponent";
// import SuggesrComponent from "./components/SuggestComponent";
import CommentComponent from "./components/CommentComponent";
import LibraryComponent from "./components/LibraryComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
        <WelcomeComponent />
      {/*<OwnerListComponent />*/}
        {/*<SuggesrComponent />*/}
        {/*<CommentComponent />*/}
        {/*<JoinWithUs />*/}
        {/*<LibraryComponent />*/}
        {/*<FooterComponent />*/}
    </div>
  );
}

export default App;
