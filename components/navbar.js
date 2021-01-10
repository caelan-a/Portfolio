import Link from 'next/link';

export default function NavBar({ }) {
    return (
        <>
            <nav className='absolute w-full z-10 flex items-center flex-wrap p-3 shadow-sm text-primary bg-white'>
                <Link href='/'>

                    <a className='inline-flex items-center p-2 mr-4 '>
                        <img class="w-32" src={require('../public/assets/images/logo.svg')} />
                    </a>

                </Link>
                <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto '>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto space-x-8 text-lg pr-4'>
                        <Link href='/about_page'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-100 hover:text-white'>
                                About
              </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-100 hover:text-white'>
                                Work
              </a>

                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-100 hover:text-white'>
                                Contact
              </a>

                        </Link>
                    </div>
                </div>

            </nav>
        </>
    );

}