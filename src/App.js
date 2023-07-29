import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth }  from "./firebase";
import ChatBox from "./Components/ChatBox";

import './App.css';
import NavBar from "./Components/NavBar";
import GoogleSignInImg from "./img/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png";

const Main = () => {
  const signInHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const signOutHandler = () => {
    auth.signOut();
  }

  return (
    <div className="main">
      <div>Wellcome to React Chat!!!</div>
      <button className="auth-btn" onClick={signInHandler}>
        <img
          type="button"
          alt="sign in with google"
          src={GoogleSignInImg}
         />
        Sign in with Google
      </button>
    </div>
  );
}

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {user ? <ChatBox />: <Main />}
    </div>
  );
}

export default App;
