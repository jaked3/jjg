import React from 'react';
import 'tachyons';
import './About.css';
import Nav from '../Nav/Nav';

const About = () => {

return (

	
	
	<div className="athelas bg-black-80 aboutpic">

	  	<header className="sans-serif">
		  <div className="cover bg-left bg-center-l aboutpic" >
		    <div className="bg-black-80 pb5 pb6-m pb7-l">
		      <nav className="dt w-100 mw8 center"> 
		     	<Nav />
		      </nav> 
		     
		    	<div className="center measure-wide f5 pv5 lh-copy ph2 white">
				    <h1 className="f1 lh-title center white">Who Are We?</h1>

				    	
				    	<div className=" mt4-l">
					  		 <p>
					     		Jungle Juice Games is startup based in Ottawa, Canada. The focus of our
					     		company	is to provide the world with amazing mobile games.

							 </p>

							  <p>
					     		We are currently in development of our first mobile game that will be 
					     		available for IOS and Android. Stay tuned for more updates and please feel
					     		free to check out our social medias!
							 </p>
						</div>

						 <footer className=" mt6-l pv4 ph3 tc">
						<a className="link hover-silver near-black dib mh3 tc" href="https://twitter.com/JungleJGames" 
						target="_blank"
						 rel="noopener noreferrer"
					     title="Twitter">
					    <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
					    <span class="f6 db">Twitter</span>
					  </a>
					  
					  <a className="link hover-silver near-black dib mh3 tc" href="https://www.instagram.com/junglejuicegames/"
					   target="_blank"
					     rel="noopener noreferrer"
					     title="Instagram">
					    <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
					    <span className="f6 db">Instagram</span>
					  </a>	  
					</footer>
				    
				  </div>
		      

		      	
		    </div>
		  </div> 
		</header>






	  
	</div>



	);
}


export default About;