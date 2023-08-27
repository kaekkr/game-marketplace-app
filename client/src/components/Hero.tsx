import { Button } from '@chakra-ui/react';

const Hero = () => {
	return (
		<div className='rounded-3xl bg-hero bg-cover bg-center max-w-7xlxl h-[400px] py-16 px-16 space-y-5 flex flex-col justify-center'>
			<h1 className='text-5xl text-white'>
				Buy most new games!
			</h1>
			<h2 className='text-2xl text-white'>
				Some text
			</h2>
			<Button colorScheme='purple' className='max-w-xs'>
				Buy Now!
			</Button>
		</div>
	);
};

export default Hero;
