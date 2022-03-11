import React from "react";
import { IoLogOutOutline } from 'react-icons/io5'

export default function Template (props) {
    return (
        // <div className="flex flex-col h-screen justify-between">
        //     <div className='w-full grid grid-cols-12 items-center text-white bg-blue-500 text-xl'>
        //         <div className='col-span-2'></div>
        //         <div className='col-span-8 text-xl text-center'>Aplikasi ABC</div>
        //         <div className='col-span-2 cursor-pointer text-white hover:bg-gray-500 p-3 right-0'>
        //         <IoLogOutOutline />
        //         </div>
        //     </div>
        // </div>
        
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}