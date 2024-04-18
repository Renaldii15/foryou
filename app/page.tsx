"use client";
import Link from "next/link";
import Image from 'next/image';
import React from "react";
import Particles from "./components/particles";
import './assets/Home.css'
import Image1 from '../public/me.png'
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import { MotionConfig } from "framer-motion";
// import StickyNavbar from "./components/navbar";
const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<main className="min-h-screen">
        {/* <NavBar/> */}
		<section>
			<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
				<nav className="my-16 animate-fade-in">
					{/* <ul className="flex flex-wrap items-center justify-center gap-4">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
							>
								{item.name}
							</Link>
						))}
					</ul> */}
				</nav>
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<Particles
					className="absolute inset-0 -z-10 animate-fade-in"
					quantity={100}
				/>
				<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
					W e l c o m e
				</h1>

				<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<div className="my-16 text-center animate-fade-in z-10 text-4xl text-transparent">
					<h3 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display	 md:text-2xl whitespace-nowrap bg-clip-text mx-6">
						To My Portfolio Website
					</h3>
				</div>
			</div>
		</section>
		<div className="body">
			<section style={{ position:'relative' }}>
			<div className="text-zinc-500 lg:flex flex-row" style={{ position:'sticky',top:0,zIndex:1 }}>
				<Hero/>
				<div className="max-w-screen-lg w-full mb-20 px-auto">
					<Image className="w-100 h-auto"
						src={Image1} // Path gambar di dalam folder public
						alt="My Photo"
					/>
			</div>
			</div>
			</section>
			<section className="text-zinc-500 ">
			</section>
			<section className="text-zinc-500 ">hai</section>
		</div>
		</main>
	);
}
