import "../App.css";
import CountUp from 'react-countup';

const Loader = () => {
  return <div className="flex h-screen 
  justify-center items-center 
  font-mono text-3xl bg-black 
  text-white">
     downloading&nbsp;<CountUp className="text-purple-700" end={100} duration={3}/>%...
    </div>
};

export default Loader;