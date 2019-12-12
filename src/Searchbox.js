import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
	return(
		<div className='pa2'>
		 <input 
		 className='br2 tc pa2 shadow-3' 
		 type='search' 
		 placeholder='search robot' 
		 onChange={searchChange}
		 />
		</div>



	);
}
export default Searchbox;