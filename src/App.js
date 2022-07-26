import './App.css';
//import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import infinite from './infinity.png'
import complete from './Clear-Tick-icon.png'
import star from './star_icon_176624.png'
import task from './task.jpg'
import sun from './images.png'
import me from './5170603-middle.png'
import plan from './4838786.png'


function App() {
  return (
    <div className='mainmain'>
      <div className='heading'><h1 className='header'>Todo List</h1></div>
      
    <div className="main">
        
        <div className="container1">
          <div className='namecon'>
            <div className='init'>MK</div>
            <span className='michael'>Michael Kekana</span>
          </div>
          <div className='search'>
            Search
          </div>
          <nav className='navigation'>
            <ul className='ul'>
            <li> <img className='inf' src={sun} alt="all"></img> My day </li>
            

              <li> <img className='inf' src={star} alt="all"></img> Important </li>
              <li> <img className='inf' src={plan} alt="all"></img> Planned </li>
              <li> <img className='inf' src={infinite} alt="all"></img> All </li>
              <li> <img className='inf' src={complete} alt="all"></img> Completed </li>
              <li> <img className='inf' src={me} alt="all"></img> Assigned to me </li>
              <li> <img className='inf' src={task} alt="all"></img> Tasks </li>
            </ul>
          </nav>
         
          
        </div>
        <div className='todo-app'>
            <TodoList />
        </div>
      
    </div>
    </div>
  );
}

export default App;
