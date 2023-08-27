import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Trending from './components/Trending';

const App = () => {
	return (
		<div className='h-screen w-screen'>
			<Navbar />
      <div className='px-16 py-5 space-y-5'>
        <Hero />
        <div className='px-24'>
          <Trending />
        </div>
      </div>
		</div>
	);
};

export default App;
