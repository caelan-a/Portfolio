import Link from 'next/link';
import styles from '../components/navbar.module.css'
import { useRouter } from 'next/router'

export default function NavBar({ }) {

    if (process.browser) {
        var nav = document.getElementById('site-menu');
        var header = document.getElementById('top');

        window.addEventListener('scroll', function () {
            if (window.scrollY >= 200) { // adjust this value based on site structure and header image height

                nav.classList.add(styles.nav_sticky);
                header.classList.add(styles.pt_scroll);

            } else {
                nav.classList.remove(styles.nav_sticky);
                header.classList.remove(styles.pt_scroll);
            }
        });
    }

    function navToggle() {
        console.log("Toggle")

        var btn = document.getElementById('menuBtn');
        var nav = document.getElementById('menu');

        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    }

    const router = useRouter()
    var currentRoute = router.route;

    function isNavLinkBold(route) {
        return route == currentRoute
    }

    return (
        <>
            <header id="top" class="pb-10 ">
                <nav id="site-menu" class="flex sm:flex-row flex-col w-full bg-white shadow-sm text-primary z-10 fixed p-2 ">
                    <div class="flex flex-row w-full " style={{ justifyContent: 'space-between' }}>
                        <Link href='/'>

                            <a className='inline-flex p-2 '>
                                <img class="w-32" src={require('../public/assets/images/logo.svg')} />
                            </a>

                        </Link>

                        <button id="menuBtn" class={styles.hamburger + "  sm:hidden focus:outline-none pr-5"} type="button" onClick={navToggle}>
                            <span class={styles.hamburger__top_bun}></span>
                            <span class={styles.hamburger__bottom_bun}></span>
                        </button>

                    </div>

                    <div id="menu" className='sm:flex sm:flex-row flex-col text-lg sm:space-x-4 hidden w-full sm:w-auto items-center self-end  h-full '>
    
                        <Link href='/about'>
                            <a className={'inline-flex w-auto  px-3 py-2 rounded text-white  items-center  hover:bg-gray-100 hover:text-white ' + (isNavLinkBold('/about') ? 'font-bold' : '')} >About</a>
                        </Link>
                        <Link href='/project_list'>
                            <a className={'inline-flex w-auto  px-3 py-2 rounded text-white  items-center hover:bg-gray-100 hover:text-white ' + (isNavLinkBold('/project_list') ? 'font-bold' : '')}>
                                Work</a>

                        </Link>
                        <Link href='/contact'>
                            <a className={'inline-flex w-auto  px-3 py-2 rounded text-white items-center  hover:bg-gray-100 hover:text-white ' + (isNavLinkBold('/contact') ? 'font-bold' : '')}>
                                Contact
</a>

                        </Link>
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