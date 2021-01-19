import Link from 'next/link';

function navToggle() {
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}

export default function NavBar({ }) {
    return (
        <>
            <header id="top" class="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
                <nav id="site-menu" class="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-red-900">
                    <div class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                        <a href="#" class="no-underline py-1">
                            <h1 class="font-bold text-lg tracking-widest">LOGO</h1>
                        </a>
                        <button id="menuBtn" class="hamburger block sm:hidden focus:outline-none" type="button" onclick="navToggle();">
                            <span class="hamburger__top-bun"></span>
                            <span class="hamburger__bottom-bun"></span>
                        </button>
                    </div>
                    <div id="menu" class="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
                        <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="https://ttntm.me/blog/tailwind-responsive-menu/" target="_blank">About</a>
                        <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#bottom">Features</a>
                    </div>
                </nav>
            </header>
            {/* <nav className='absolute w-full z-10 flex items-center flex-wrap p-3 shadow-sm text-primary bg-white'>
                <Link href='/'>

                    <a className='inline-flex items-center p-2 mr-4 '>
                        <img class="w-32" src={require('../public/assets/images/logo.svg')} />
                    </a>

                </Link>
                <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto '>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto space-x-8 text-lg pr-4'>
                        <Link href='/about'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-100 hover:text-white'>
                                About
              </a>
                        </Link>
                        <Link href='/project_list'>
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

            </nav> */}
        </>
    );

}