import dragon from './dragon.jpg';

function Logo (props) {
const userPic = <img src={dragon} />;
return userPic
}

function App(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Logo/>
    </div>
  )
}

export default App;