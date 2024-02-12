import logo from './assets/logo.png';
import tobey from './assets/tobey.png';
import pepperoni from './assets/pepperoni-pizza.jpg';
import newYorkPizza from './assets/new-york-pizza.webp';
import hawaiianPizza from './assets/hawaiian-pizza.jpg';
import JKSimons from './assets/jjj.png';
import miles from './assets/miles.webp';
import newYork from './assets/new-york.webp';
import brooklyn from './assets/brooklyn.webp';
import manhattan from './assets/manhattan.jpg';

import facebook from './assets/facebook-logo.svg';
import instagram from './assets/instagram-logo.svg';
import twitter from './assets/twitter-logo.svg';
import youtube from './assets/youtube-logo.svg';

import pizzaCutter from './assets/pizza-cutter.svg';
import pizza from './assets/pizza.svg';
import cheese from './assets/cheese.svg';

import voucherTop from './assets/voucher-top.svg';
import voucherBottom from './assets/voucher-bottom.svg';

import burger from './assets/burger.svg';
import x from './assets/x.svg';

import './App.css';
import './helper.css';
import { Icon } from './Icon';
import { useEffect, useState } from 'react';

function App() {
	const [headerSeen, setHeaderSeen] = useState(false);
	console.log(headerSeen);
	console.log(window.location);
	const [selected, setSelected] = useState('');

	return (
		<>
			<header>
				<button className='burger' onClick={() => setHeaderSeen(true)}>
					<img src={burger} />
				</button>
				<nav>
					<a href='#home' onClick={() => setSelected('home')} className={selected == 'home' ? 'active' : ''}>Home</a>
					<a href='#about' onClick={() => setSelected('about')} className={selected == 'about' ? 'active' : ''}>About</a>
					<a href='#menu' onClick={() => setSelected('menu')} className={selected == 'menu' ? 'active' : ''}>Menu</a>
					<a href='#blog' onClick={() => setSelected('blog')} className={selected == 'blog' ? 'active' : ''}>Blog</a>
					<a href='#shop' onClick={() => setSelected('shop')} className={selected == 'shop' ? 'active' : ''}>Shop</a>
					<a href='#contact' onClick={() => setSelected('contact')} className={selected == 'contact' ? 'active' : ''}>Contact</a>
				</nav>
				<div className='logo img'>
					<img src={logo} alt='logo' />
					Joe's PIZZA
				</div>
				<div className={`mobile-header ${headerSeen ? 'seen' : 'hidden'}`}>
					<button className='x' onClick={() => setHeaderSeen(false)}>
						<img src={x} alt='' />
					</button>
					<nav>
						<a href='#home' className='active'>
							Home
						</a>
						<a href='#about'>About</a>
						<a href='#menu'>Menu</a>
						<a href='#blog'>Blog</a>
						<a href='#shop'>Shop</a>
						<a href='#contact'>Contact</a>
					</nav>
				</div>
			</header>
			<main>
				<section className='title' id='home'>
					{/* God damn icons */}

					<Icon type={pizza} size='4rem' top='2rem' left='60%' rotate='-30deg' />
					<Icon type={pizzaCutter} size='3.5rem' top='40%' left='50%' rotate='90deg' />
					<Icon type={cheese} size='5rem' top='60%' left='40%' rotate='-60deg' />

					<Icon mobile type={pizza} size='4rem' top='-2rem' left='80%' rotate='-30deg' />
					<Icon mobile type={pizzaCutter} size='3.5rem' top='40%' left='30%' rotate='90deg' />
					<Icon mobile type={cheese} size='5rem' top='70%' left='5%' rotate='-60deg' />

					<div className='align'>
						<h1>Pizza Time</h1>
						<h3>Sponsored by Spider-Man</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse enim
							veritatis nihil quisquam at asperiores labore possimus rem dolore odio.
						</p>
						<button className='primary'>Order Now</button>
					</div>

					<img className='tobey' src={tobey} alt='tobey' />
				</section>
				<section className='wavy' id='menu'>
					{/* God damn icons */}

					<Icon type={pizza} size='5rem' top='-10%' left='30%' rotate='-120deg' />
					<Icon type={pizza} size='3.5rem' top='80%' left='90%' rotate='-30deg' />
					<Icon type={pizza} size='6rem' top='50%' left='45%' rotate='30deg' />
					<Icon type={pizzaCutter} size='3rem' top='20%' left='50%' rotate='90deg' />
					<Icon type={cheese} size='4rem' top='0' left='90%' rotate='-40deg' />
					<Icon type={cheese} size='5rem' top='80%' left='20%' rotate='-60deg' />

					<Icon mobile type={pizza} size='5rem' top='-5%' left='30%' rotate='-120deg' />
					<Icon mobile type={pizza} size='6rem' top='50%' left='10%' rotate='30deg' />
					<Icon mobile type={pizzaCutter} size='3rem' top='20%' left='80%' rotate='90deg' />
					<Icon mobile type={cheese} size='5rem' top='100%' left='20%' rotate='-60deg' />

					<div className='columns center'>
						<div className='align'>
							<h2>
								Pepperoni <br />
								Pizza
							</h2>
							<button className='bg'>Order Now</button>
						</div>
						<div className='align all-center'>
							<div className='all-center'>
								<img src={pepperoni} className='star' alt='pepperoni pizza' />
							</div>
							<p className='short text-right'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
								fugit optio, architecto distinctio veritatis quam fugiat cupiditate
								eum iusto officiis minima voluptatibus illo veniam facilis tempore
								nemo nostrum ratione alias.
							</p>
						</div>
					</div>
				</section>
				<section className='top grid'>
					<div className='columns center'>
						{/* God damn icons */}

						<Icon type={pizzaCutter} size='4rem' top='10%' left='5%' rotate='-120deg' />
						<Icon type={pizza} size='5rem' top='60%' left='45%' rotate='0deg' />
						<Icon
							type={pizzaCutter}
							size='2.5rem'
							top='10%'
							left='50%'
							rotate='-30deg'
						/>
						<Icon type={cheese} size='4rem' top='0' left='90%' rotate='-40deg' />

						<Icon mobile type={pizzaCutter} size='4rem' top='10%' left='5%' rotate='-120deg' />
						<Icon mobile type={pizza} size='5rem' top='80%' left='20%' rotate='0deg' />
						<Icon mobile
							type={pizzaCutter}
							size='2.5rem'
							top='35%'
							left='50%'
							rotate='-30deg'
						/>
						<Icon mobile type={cheese} size='4rem' top='100%' left='80%' rotate='-40deg' />

						<div className='all-center align'>
							<img className='star' src={newYorkPizza} alt='New York Pizza' />
							<p className='short text-left'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								delectus neque cumque placeat, accusantium molestias dolor dolore,
								earum, natus officia modi nisi. Quam debitis repudiandae dignissimos
								blanditiis dolorem est neque?
							</p>
						</div>
						<div className='all-center evenly grid-right reverse'>
							<h2 className='text-right'>
								New York <br />
								Pizza
							</h2>
							<button className='primary'>Order Now</button>
						</div>
					</div>

					<div className='columns center'>
						{/* God damn icons */}

						<Icon type={pizza} size='5rem' top='-10%' left='30%' rotate='-120deg' />
						<Icon type={pizzaCutter} size='6rem' top='50%' left='45%' rotate='30deg' />
						<Icon type={cheese} size='4rem' top='0' left='90%' rotate='-40deg' />
						<Icon type={cheese} size='5rem' top='100%' left='10%' rotate='-60deg' />

						{/* <Icon mobile type={pizza} size='5rem' top='-5%' left='10%' rotate='-120deg' /> */}
						<Icon mobile type={pizzaCutter} size='4rem' top='40%' left='80%' rotate='30deg' />
						<Icon mobile type={cheese} size='5rem' top='100%' left='10%' rotate='-60deg' />

						<div className='all-center evenly grid-left'>
							<h2 className='text-left'>
								Hawaiian <br /> Pizza
							</h2>
							<button className='primary'>Order Now</button>
						</div>
						<div className='all-center align'>
							<img src={hawaiianPizza} className='star' />
							<p className='short text-right'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quos
								atque perspiciatis autem ad modi, dolorem hic doloremque sapiente
								veniam eum. Rem amet consequuntur aperiam fugiat doloremque impedit
								harum odit!
							</p>
						</div>
					</div>

					<div className='all-center align big-gap'>
						{/* Dod damn icons */}

						<Icon type={pizza} size='4rem' top='30%' left='90%' rotate='-60deg' />
						<Icon type={pizzaCutter} size='3rem' top='90%' left='85%' rotate='90deg' />
						<Icon type={cheese} size='4rem' top='70%' left='10%' rotate='40deg' />

						<Icon mobile type={pizza} size='4rem' top='30%' left='80%' rotate='-60deg' />
						<Icon mobile type={pizzaCutter} size='3rem' top='100%' left='85%' rotate='90deg' />
						<Icon mobile type={cheese} size='4rem' top='70%' left='10%' rotate='40deg' />

						<h2>Voucher</h2>
						<div className='voucher'>
							{/* God damn icons */}

							<Icon type={pizza} size='3em' top='7em' left='40em' rotate='50deg' />
							<Icon
								type={pizza}
								size='3.5em'
								top='23em'
								left='65em'
								rotate='-30deg'
							/>
							<Icon
								type={pizzaCutter}
								size='2.5em'
								top='9em'
								left='55em'
								rotate='-90deg'
							/>
							<Icon type={cheese} size='5em' top='23em' left='30em' rotate='-40deg' />

							<div className='logo img'>
								<img src={logo} alt='logo' />
								Joe's PIZZA
							</div>
							<img src={voucherTop} alt='' className='top' />
							<img src={voucherBottom} alt='' className='bottom' />
							<div className='main-text align'>
								<div>
									<h2>Voucher Discount</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
										ex, autem animi facilis corrupti porro asperiores
										reprehenderit iusto nam. Aliquam.
									</p>
									<p className='highlight'>VALIDATE UNTIL: 01.05.2020</p>
								</div>
							</div>
							<div className='left-img'>
								<div className='discount'>
									<div>45% OFF</div>
								</div>
							</div>
							<div className='absolute flex gap-2'>
								<div className='flex'>
									<img src={facebook} alt='facebook' />
									Facebook
								</div>
								<div className='flex'>
									<img src={instagram} alt='instagram' />
									Instagram
								</div>
								<div className='flex'>
									<img src={twitter} alt='twitter' />
									Twitter
								</div>
							</div>
						</div>
						<button className='primary'>Get voucher Now</button>
					</div>

					<h2 id='blog' className='text-center-allways smaller'>
						Customer Reviews
					</h2>
					<div className='columns center'>
						{/* Dod damn icons */}

						<Icon type={pizza} size='5rem' left='47%' />
						<Icon type={pizzaCutter} size='4rem' top='70%' left='0%' rotate='-70deg' />
						<Icon type={cheese} size='4rem' top='60%' left='90%' rotate='40deg' />

						<Icon mobile type={pizza} size='4rem' left='80%' />
						<Icon mobile type={pizzaCutter} size='4rem' top='75%' left='0%' rotate='-70deg' />
						<Icon mobile type={cheese} size='4rem' top='50%' left='80%' rotate='40deg' />

						<div className='all-center align'>
							<img src={JKSimons} className='star small' alt='Happy customer' />
							<h4 className='text-center'>J. Jonah Jameson</h4>
							<p className='short'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet
								iure consequatur, asperiores accusamus eos cum ipsam nobis delectus
								totam aliquam obcaecati dignissimos? Non voluptatem rerum eos,
								doloribus fugit enim!
							</p>
						</div>
						<div className='all-center align'>
							<img src={miles} className='star small' alt='Happy customer' />
							<h4 className='text-center'>Miles Morales</h4>
							<p className='short'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
								accusantium eius est tempora corrupti ducimus delectus. Aperiam
								alias nihil optio vitae ut ipsam laboriosam placeat eveniet debitis
								exercitationem, esse veniam.
							</p>
						</div>
					</div>
				</section>
				<section className='wavy top-margin all-center big-gap' id='about'>
					{/* Dod damn icons */}

					<Icon type={pizza} size='3rem' left='10%' top='10%' rotate='50deg' />
					<Icon type={pizza} size='6rem' left='80%' top='90%' rotate='50deg' />
					<Icon type={pizzaCutter} size='4rem' top='20%' left='90%' rotate='80deg' />
					<Icon type={cheese} size='5rem' top='75%' left='15%' rotate='140deg' />

					<Icon mobile type={pizza} size='4rem' left='80%' top='90%' rotate='50deg' />
					<Icon mobile type={pizzaCutter} size='4rem' top='-10%' left='60%' rotate='80deg' />
					<Icon mobile type={cheese} size='4rem' top='105%' left='15%' rotate='140deg' />


					<h2 className='smaller'>We are Open</h2>
					<div className='all-center'>
						<p className='big strong text-center-allways'>Monday - Friday</p>
						<p className='big'>10:00am - 10:00pm</p>
					</div>

					<div className='all-center'>
						<p className='big strong text-center-allways'>Saturday and Sunday</p>
						<p className='big'>10:00am - 10:10pm</p>
					</div>
				</section>
				<section className='top align' id='shop'>
					{/* Dod damn icons */}

					<Icon type={pizza} size='3em' left='20%' top='20%' rotate='240deg' />
					<Icon type={pizza} size='3rem' left='90%' top='25%' rotate='60deg' />
					<Icon type={pizzaCutter} size='4rem' top='95%' left='30%' rotate='-10deg' />
					<Icon type={cheese} size='4rem' top='100%' left='80%' rotate='-50deg' />

					<Icon mobile type={pizza} size='3em' left='20%' top='7%' rotate='240deg' />
					<Icon mobile type={pizzaCutter} size='3rem' left='85%' top='25%' rotate='60deg' />
					<Icon mobile type={cheese} size='4rem' top='97%' left='70%' rotate='-50deg' />

					<h2 className='smaller text-center-allways'>Our Branches</h2>
					<div className='columns center three'>
						<div className='align all-center'>
							<img src={newYork} alt='' className='box' />
							<button className='chat'>New York</button>
							<p className='shorter text-center'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
								cupiditate quidem laboriosam soluta maxime in dolor, amet rerum,
								impedit velit voluptas vel. Illum enim modi, molestias minima
								molestiae corporis quasi.
							</p>
						</div>
						<div className='align all-center'>
							<img src={brooklyn} alt='' className='box' />
							<button className='chat'>Brooklyn</button>
							<p className='shorter text-center'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
								quisquam ut explicabo eligendi doloribus quia eveniet deserunt
								veniam! Eveniet, dignissimos quam. Delectus aliquam animi dolorum
								provident, modi iure non consequatur!
							</p>
						</div>
						<div className='align all-center'>
							<img src={manhattan} alt='' className='box' />
							<button className='chat'>Manhattan</button>
							<p className='shorter text-center'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
								accusantium, impedit architecto explicabo quaerat reprehenderit sint
								magni alias asperiores, doloribus nobis? Dignissimos, voluptatum
								corrupti odit accusantium quas laboriosam iste quod?
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer id='contact'>
				<section>
					<div className='columns four'>
						<div className='logo img bigger-text'>
							<img src={logo} alt='logo' />
							Joe's PIZZA
						</div>
						<div className='evenly'>
							<h5>Information.</h5>

							<div className='grid'>
								<a href='#aboutUs'>About us</a>
								<a href='#'>Branches</a>
								<a href='#'>Menu</a>
								<a href='#'>Contact</a>
								<a href='#'>Map</a>
							</div>
						</div>
						<div className='grid gap-3'>
							<h5>Contact Us.</h5>
							<div className='grid'>
								<a href=''>Support</a>
								<a href=''>babadongus@gmail.com</a>
							</div>
						</div>
					</div>
				</section>
				<div className='links'>
					<nav>
						<a href='#home'>Home</a>
						<a href='#about'>About</a>
						<a href='#menu'>Menu</a>
						<a href='#blog'>Blog</a>
						<a href='#shop'>Shop</a>
						<a href='#contact'>Contact</a>
					</nav>
					<nav>
						<a href=''>
							<img src={facebook} alt='facebook' />
						</a>
						<a href=''>
							<img src={instagram} alt='instagram' />
						</a>
						<a href=''>
							<img src={twitter} alt='twitter' />
						</a>
						<a href=''>
							<img src={youtube} alt='youtube' />
						</a>
					</nav>
				</div>
			</footer>
		</>
	);
}

export default App;
