import Container from '../components/container'
import Image from 'next/image'

export default function WelcomePage({ }) {
    return (
        <>
            <Container>
                <div class="h-96 flex flex-wrap items-center justify-center pt-24">


                    <div class="flex flex-wrap items-center justify-center">
                        <img class=" w-96 h-96 transform rotate-11 animate-wiggle" src={require('../public/assets/images/cloud.svg')} />

                        <div class="absolute w-64 h-64 rounded-full border-solid border-18 border-white">
                            <Image class="absolute rounded-full mx-auto " src="/assets/images/profile.jpg" alt="me" layout="fill" />
                        </div>
                    </div>
                    <div class=" text-center w-3/4  ">
                        <p class=" text-4xl">
                            Hi there, I’m <b>Caelan!</b>
                        </p>
                        <br></br>
                        <p class=" text-2xl">
                            I’m a creator who uses technology and design to make things.
                <br></br><br></br>
                I studied physics at university and have been programming for most of my life.
                I love to learn everything from music to science and am always looking for a new challenge.

            </p>

                        <div class="pt-20 space-x-4">
                            <button class='relative text-primary p-10 rounded text-2xl  overflow-visible  hover:bg-gray-100'>
                                Get to know me
                </button>
                            <button class='relative text-primary p-10 rounded text-2xl  overflow-visible  hover:bg-gray-100'>
                                See my work
                </button>
                            <button class='relative text-primary p-10 rounded text-2xl  overflow-visible  hover:bg-gray-100'>
                                Contact me
                </button>
                        </div>

                    </div>
                </div>

            </Container>
        </>
    );

}
