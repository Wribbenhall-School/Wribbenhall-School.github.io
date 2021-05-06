import React from "react";
import Map from "../../Components/Map";

function Details() {
	return (
		<React.Fragment>
			<h2 style={{ textAlign: "center" }}>Our details</h2>
			<div className='contact-details'>
				<div className='card'>
					<h4>Proprietor/Headteacher</h4>
					<ul>
						<li>Mr Ellis Wells</li>
						<li>Email: ewells@wribbenhallschool.co.uk</li>
						<li>Telephone: 01299 405383</li>
					</ul>
					<h4>Address</h4>
					<ul>
						<li>21 Crundalls Lane</li>
						<li>Bewdley</li>
						<li>Worcestershire</li>
						<li>DY12 1JL</li>
					</ul>
					<img
						src={require("../../Images/qual1.png")}
						alt='qualifactions'
						width='100'
						style={{ padding: "10px" }}
					/>
					<img
						src={require("../../Images/qual2.png")}
						alt='qualifactions'
						width='200'
						style={{ padding: "10px" }}
					/>
				</div>
				<div className='card'>
					<h4>Our Governor</h4>
					<ul>
						<li>Mrs Linda Minnock</li>
						<li>Email: l.minnock@btinternet.com</li>
					</ul>
					<h4>Address</h4>
					<ul>
						<li>21 Crundalls Lane</li>
						<li>Bewdley</li>
						<li>Worcestershire</li>
						<li>DY12 1JL</li>
					</ul>
				</div>
			</div>
			<div className='map'>
				<Map />
			</div>{" "}
			{/* Google Map */}
			<br />
			<div className='contact-details'>
				<div className='card'>
					<h4>School address</h4>
					<ul>
						<li>21 Crundalls Lane</li>
						<li>Bewdley</li>
						<li>Worcestershire</li>
						<li>DY12 1JL</li>
						<li>01299 405383</li>
					</ul>
				</div>
			</div>
			<div style={{ clear: "both" }}></div>
		</React.Fragment>
	);
}

export default Details;
