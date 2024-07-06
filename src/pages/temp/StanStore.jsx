import React from 'react'
import { motion } from 'framer-motion'
import ShadowButton from '../../components/ShadowButton'
import MaskSvg from '../../components/MaskSvg'


const StanStore = () => {
    return (
        <div className="h-full w-full overflow-hidden bg-[#efefef]">
            <nav className="flex items-center justify-center">
                <motion.div
                    variants={{
                        start: {
                            scale: 0.7
                        },
                        end: {
                            scale: 1
                        }
                    }}
                    initial="start"
                    whileHover={{
                        scale: 1.1
                    }}
                    animate="end"
                    transition={{
                        type: 'spring',
                        stiffness: 70,
                        duration: 2
                    }}
                    className="relative mt-12 h-12 w-20"
                >
                    <img
                        src="./temp/stanstore/logo.png"
                        layout="fill"
                        draggable={false}
                        alt="Topicon"
                    />
                </motion.div>
            </nav>
            <main>
                {/* Hero */}
                <div className="mb-56 flex flex-col items-center justify-center">
                    <div className="mt-24 mb-6 flex flex-col items-center justify-center">
                        <motion.h1
                            variants={{
                                start: {
                                    x: 0,
                                    rotate: 30
                                },
                                end: {
                                    x: 50,
                                    rotate: 0
                                }
                            }}
                            whileHover={{
                                scale: 1.05
                            }}
                            initial="start"
                            animate="end"
                            transition={{
                                type: 'spring',
                                stiffness: 70,
                                duration: 2
                            }}
                            className="mr-20 whitespace-nowrap font-[Roslindale] text-[3rem] font-medium text-black sm:text-[4.5rem]"
                        >
                            Hey John 👋
                        </motion.h1>
                        <motion.h1
                            variants={{
                                start: {
                                    x: 50,
                                    rotate: -30
                                },
                                end: {
                                    x: 0,
                                    rotate: 0
                                }
                            }}
                            whileHover={{
                                scale: 1.05
                            }}
                            initial="start"
                            animate="end"
                            transition={{
                                type: 'spring',
                                stiffness: 70,
                                duration: 2
                            }}
                            className="ml-20 whitespace-nowrap font-[Roslindale] text-black text-[3rem] font-medium sm:text-[4.5rem]"
                        >
                            Hi Vitalii 👋
                        </motion.h1>
                    </div>
                    <div className="relative flex flex-col items-center justify-center">
                        <div className="z-10 mb-24 h-24 w-[2px] bg-black" />
                        <motion.p
                            variants={{
                                start: {
                                    scale: 0.5
                                },
                                end: {
                                    scale: 1
                                }
                            }}
                            initial="start"
                            animate="end"
                            transition={{
                                type: 'spring',
                                stiffness: 70,
                                duration: 3
                            }}
                            whileHover={{
                                scale: 1.05
                            }}
                            className="z-10 whitespace-nowrap bg-[#F7E825] p-6 rounded-md font-[Helvetica,sans-serif] text-[1.5rem] font-bold md:text-[2.5rem] lg:text-[4rem]"
                        >
                            so you need a teammate, huh?
                        </motion.p>
                        <div className="z-10 mt-6 animate-bounce rounded-xl bg-white p-2">
                            <div className="relative h-9 w-9">
                                <img
                                    src="./temp/blankstudio/scroll.svg"
                                    layout="fill"
                                    draggable={false}
                                    alt="Scroll suggestion icon"
                                />
                            </div>
                        </div>
                        <div className="absolute top-10">
                            <div className="relative h-[450px] w-[700px] opacity-50">
                                {/* <img
                                    src="./temp/blankstudio/colinandsamir.jpg"
                                    layout="fill"
                                    draggable={false}
                                    alt="Colin and Samir"
                                /> */}
                                <video autoPlay muted loop className='h-full w-full object-cover'>
                                    <source src="./temp/blankstudio/blankstudiomp4.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About */}
                <div className="flex w-full items-center justify-center bg-[#161513] py-32 text-white">
                    <div className="flex w-[800px] max-w-[800px] flex-col items-center justify-between gap-16 lg:flex-row lg:gap-0 xl:w-[1000px] xl:max-w-[1000px]">
                        <div className="flex flex-col gap-12">
                            <div className="relative">
                                <motion.h1
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        duration: 1,
                                        delay: 0.1
                                    }}
                                    whileHover={{
                                        scale: 1.05
                                    }}
                                    className="font-[Roslindale] text-[3rem] font-bold leading-tight sm:text-[4rem]"
                                >
                                    I've got you
                                    <br />
                                    covered.
                                </motion.h1>
                                <motion.h2
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 70,
                                        duration: 1,
                                        delay: 0.2
                                    }}
                                    whileHover={{
                                        scale: 1.05
                                    }}
                                    className="font-[Roslindale] text-[1.5rem] font-medium opacity-80 sm:text-[2rem]"
                                >
                                    (if you want me to 😉)
                                </motion.h2>
                                <div className="absolute -top-24 sm:-top-20 sm:-left-20">
                                    <div className="relative h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]">
                                        <img
                                            src="./temp/blankstudio/starcircle.svg"
                                            layout="fill"
                                            draggable={false}
                                            alt="Star illustration"
                                        />
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 70,
                                    duration: 1,
                                    delay: 0.3
                                }}
                                className="flex h-[12.5rem] items-center justify-center gap-3"
                            >
                                <div className="h-full w-[6px] bg-white opacity-50"></div>
                                <div className="flex flex-col gap-4 text-[0.9rem] sm:text-lg">
                                    <p>
                                        I&apos;m <strong className="text-[#FBD512]">Gracjan</strong>;
                                        a 21 y/o full-stack{' '}
                                        <strong>developer</strong>
                                        <br /> and emerging entrepreneur.
                                    </p>
                                    <p className="opacity-50 transition-opacity duration-300 hover:opacity-100">
                                        I&apos;ve been developing <strong>websites and apps for{' '}
                                            6 years</strong>,
                                        <br />
                                        and currently intern at <strong>Amazon in Barcelona.</strong>
                                    </p>
                                    <p className="opacity-50 transition-opacity duration-300 hover:opacity-100">
                                        I can pretty much create <i>anything</i> you want,
                                        <br />
                                        and I use your tech stack.
                                    </p>
                                </div>
                            </motion.div>
                            <a className="underline decoration-wavy" href='/'>
                                Check out my virtual CV
                            </a>
                        </div>
                        <div className="relative h-[450px] w-[300px] sm:h-[600px] sm:w-[400px]">
                            <img
                                src="./temp/blankstudio/personalimage.PNG"
                                layout="fill"
                                draggable={false}
                                alt="Personal image"
                            />
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        stiffness: 70,
                        duration: 2,
                        delay: 0.5
                    }}
                    className="flex items-center justify-center py-48"
                >
                    <div className="grid w-[300px] max-w-[300px] grid-cols-1 gap-10 sm:w-[400px] sm:max-w-[400px] lg:w-[1000px] lg:max-w-[1000px] lg:grid-cols-2 xl:grid-cols-3">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-full"
                        >
                            <img
                                src="./temp/blankstudio/projects/1.png"
                                layout="fill"
                                draggable={false}
                                alt="project1"
                                className='w-full aspect-video object-cover rounded-lg'
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-full"
                        >
                            <img
                                src="./temp/blankstudio/projects/2.png"
                                layout="fill"
                                draggable={false}
                                alt="project2"
                                className='w-full aspect-video object-cover rounded-lg'
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-full"
                        >
                            <img
                                src="./temp/blankstudio/projects/3.png"
                                layout="fill"
                                draggable={false}
                                alt="project3"
                                className='w-full aspect-video object-cover rounded-lg'
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-full"
                        >
                            <img
                                src="./temp/blankstudio/projects/4.png"
                                layout="fill"
                                draggable={false}
                                alt="project4"
                                className='w-full aspect-video object-cover rounded-lg'
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-full"
                        >
                            <img
                                src="./temp/blankstudio/projects/5.png"
                                layout="fill"
                                draggable={false}
                                alt="project5"
                                className='w-full aspect-video object-cover rounded-lg'
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-full"
                        >
                            <img
                                src="./temp/blankstudio/projects/6.png"
                                layout="fill"
                                draggable={false}
                                alt="project6"
                                className='w-full aspect-video object-cover rounded-lg'
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        stiffness: 70,
                        duration: 2,
                        delay: 0.5
                    }}
                    className="mb-56 mt-10 flex flex-col items-center justify-center gap-4"
                >
                    <div className="relative">
                        <motion.h1
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                duration: 0.2
                            }}
                            className="text-center text-black font-[Roslindale] text-[3.5rem] lg:text-[4.5rem]"
                        >
                            Let&apos;s work together!
                        </motion.h1>
                        <div className="absolute left-36 -top-12 sm:-top-8 sm:-left-12 lg:-top-14 lg:-left-28">
                            <div className="relative h-[40px] w-[40px] lg:h-[90px] lg:w-[90px]">
                                <img
                                    src="./temp/blankstudio/star.png"
                                    layout="fill"
                                    draggable={false}
                                    alt="Star illustration"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <ShadowButton href="mailto:gchmielnicki3005@gmail.com?subject=I'd%20like%20to%20talk!">
                            <MaskSvg
                                className="h-[90%] w-[90%]"
                                url="./temp/icons/mail.svg"
                                color="#161513"
                            />
                        </ShadowButton>
                        <ShadowButton href="https://github.com/gracjaan">
                            <MaskSvg
                                className="h-[90%] w-[90%]"
                                url="./temp/icons/github.svg"
                                color="#2B3137"
                            />
                        </ShadowButton>
                        <ShadowButton href="https://www.linkedin.com/in/gracjanchmielnicki/">
                            <MaskSvg
                                className="h-[90%] w-[90%]"
                                url="./temp/icons/linkedin.svg"
                                color="#0D62BC"
                            />
                        </ShadowButton>
                        <ShadowButton href="https://www.gracjanchmielnicki.tech/">
                            <MaskSvg
                                className="h-[100%] w-[100%]"
                                url="./temp/icons/logo-icon.svg"
                                color="#FFB800"
                            />
                        </ShadowButton>
                    </div>
                </motion.div>

                {/* Footer */}
                <footer className="flex items-center justify-center gap-1 pb-12">
                    <p className="text-center font-[Roslindale] text-lg sm:text-2xl">
                        Made by <strong>Gracjan</strong>, for <strong>John & Vitalii</strong>,
                        with
                    </p>
                    <div className="relative h-5 w-5">
                        <img
                            src="./temp/blankstudio/heart.svg"
                            layout="fill"
                            draggable={false}
                            alt="Yellow heart icon"
                        />
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default StanStore
