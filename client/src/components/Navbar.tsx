import { Search2Icon } from '@chakra-ui/icons';
import {
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const Navbar = () => {
	return (
		<nav className='px-40 py-5 flex items-center justify-between border-2'>
			<div className='flex items-center space-x-5'>
				<a href='/'>
					<img src='/vite.svg' alt='logo' />
				</a>
				<InputGroup>
					<Input placeholder='Search games' />
					<InputRightElement>
						<Search2Icon />
					</InputRightElement>
				</InputGroup>
			</div>
			<div className='space-x-5'>
				<Button variant='outline' colorScheme='purple'>Login</Button>
				<Button variant='solid' colorScheme='purple'>Sign up</Button>
			</div>
		</nav>
	);
};

export default Navbar;
