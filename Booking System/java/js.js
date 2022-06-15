
let allButtons = document.getElementsByClassName("demo-button");//Return an array storing all buttons
let allDemoAreas = document.getElementsByClassName("demo-box");//Return an array storing all demo boxes
let demoAreaColor = ["#DADADA", "#DADADA", "#DADADA", "#DADADA"];
function showDemo(index) {
	
	//Set all buttons to white color
	for (let i=0; i < allButtons.length; i++) {
		allButtons[i].style.backgroundColor = "white";
		allDemoAreas[i].style.display = "none";
	}
	
	//Set the background color of the demo-button-1 to orange
	allButtons[index].style.background = "#FF9633";
	allDemoAreas[index].style.display = "block";
	allDemoAreas[index].style.backgroundColor = demoAreaColor[index];
};

/* code for nav bar */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


let allButtons2 = document.getElementsByClassName("demo-button2");//Return an array storing all buttons
let allDemoAreas2 = document.getElementsByClassName("demo-box2");//Return an array storing all demo boxes
let demoAreaColor2 = ["white", "white", "white", "white" ];
function showDemo2(index) {
	console.log(allButtons2)
	//Set all buttons to white color
	for (let i=0; i < allButtons2.length; i++) {
		allButtons2[i].style.backgroundColor = "white";
		allDemoAreas2[i].style.display = "none";
	}
	
	//Set the background color of the demo-button-1 to orange
	allButtons2[index].style.background = "#FF9633";
	allDemoAreas2[index].style.display = "block";
	allDemoAreas2[index].style.backgroundColor = demoAreaColor2[index];
};

let allButtons3 = document.getElementsByClassName("demo-button3");//Return an array storing all buttons
let allDemoAreas3 = document.getElementsByClassName("demo-box3");//Return an array storing all demo boxes

function showDemo3(index) {
	console.log(allButtons3)
	//Set all buttons to white color
	for (let i=0; i < allButtons3.length; i++) {
		allButtons3[i].style.backgroundColor = "white";
		allDemoAreas3[i].style.display = "none";
	}
	
	//Set the background color of the demo-button-1 to orange
	allButtons3[index].style.background = "#FF9633";
	allDemoAreas3[index].style.display = "block";
	
};


/* code for java slideshows */
/* ------------------------------------------------------ */
let topMovies = [{id: 0, title: "The The Shawshank Redemption", year: 1994, image_url: "https://www.filmsite.org/posters/shawshankredemption.jpg"},
				 {id: 1, title: "The Godfather", year: 1992, image_url: "https://media.timeout.com/images/105455970/750/562/image.jpg"},
				 {id: 2, title: "The Dark Knight", year: 2008, image_url: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"},
			   {id: 3, title: "Star Wars", year: 1977, image_url: "https://media.timeout.com/images/105456000/750/562/image.jpg"},
			   {id: 4, title: " Schindler\'s List", year: 1993, image_url: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"},
];


//Slideshow: Manual
let slideIndex = 0;//Initial slide = 0
function nextSlide() {
	//Change the slide_index
	if (slideIndex < topMovies.length - 1) {
		slideIndex++;
	} else {
		slideIndex = 0;
	}
	//Change the image source for the img
	document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
	document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;	
};

function previousSlide() {
	//Change the slide_index
	if (slideIndex > 0) {
		slideIndex--;
	} else {
		slideIndex = topMovies.length - 1;
	}
	//Change the image source for the img
	document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
	document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;		
};

//Slideshow: Automatic
let autoSlideIndex = 0;
autoSlideShow();

function autoSlideShow() {
//Change the slide_index
	if (autoSlideIndex < topMovies.length - 1) {
		autoSlideIndex++;
	} else {
		autoSlideIndex = 0;
	}
	//Change the image source for the img
	document.getElementById("auto-slide-title").innerHTML = topMovies[autoSlideIndex].title;
	document.getElementById("auto-slide-image").src = topMovies[autoSlideIndex].image_url;
	//
	setTimeout(autoSlideShow, 3000);//Auto change slide every 3 seconds
};
/* ------------------------------------------------------------------------------------------------------------------auth-------------------------------------- */
/* authentication code  */

//Authentication

let allAccounts = [{user: "admin", pass: "1234"}];	

function createAccount() {
	// data entered
	let userInput = document.getElementById("signup_user").value;
	let paswordInput = document.getElementById("signup_password").value;
	
	//check if the user exists 
	let existing = false;
	for (var i=0; i < allAccounts.length; i++) {
		if (userInput == allAccounts[i].user) {
			alert("Account is allready registered to a user");			
			existing = true;
			break;//quit
		} 
	}
	
	if (existing == false) {
		//Add a new user
		allAccounts.push({user: userInput, pass: paswordInput});	
		alert("Your account has been created!");		
	}	
};


function validateAccount() {
	//Get entered data
	let enteredUser = document.getElementById("login_username").value;
	let enteredPass = document.getElementById("login_password").value;
	
	//Loop through all users check if they exist
	let valid = false;
	for (var i=0; i < allAccounts.length; i++) {
		if (enteredUser == allAccounts[i].user && enteredPass == allAccounts[i].pass) {
			alert("CONGRATS! YOU ARE LOGED IN!");			
			valid = true;
			break;
		} 
	}

	if (valid == false) {
		alert("SORRY! WRONG ACCOUNT");	
	}	
};	

/* --------------------------------------------------------------------------------------------------------------------------------------------form code */



function readForm() {
	
	var inputval1 = document.getElementsByTagName("input");
	var formArray = [];
	var field = {};
	
	var firstName = {"id": inputval1.firstName.id, "value": inputval1.firstName.value};
	var secondName = {"id": inputval1.secondName.id, "value": inputval1.secondName.value};
	var addressLn1 = {"id": inputval1.addressLn1.id, "value": inputval1.addressLn1.value};
	var addressLn2 = {"id": inputval1.addressLn2.id, "value": inputval1.addressLn2.value};
	var townCity = {"id": inputval1.townCity.id, "value": inputval1.townCity.value};
/* 	debugger */
	var gender1 = {"id": inputval1.gender1.id, "value": inputval1.gender1.value};
	var gender2 = {"id": inputval1.gender2.id, "value": inputval1.gender2.value};
	var gender3 = {"id": inputval1.gender3.id, "value": inputval1.gender3.value};
	var Provider1 = {"id": inputval1.Provider1.id, "value": inputval1.Provider1.value};
	var Provider2 = {"id": inputval1.Provider2.id, "value": inputval1.Provider2.value};
	var Provider3 = {"id": inputval1.Provider3.id, "value": inputval1.Provider3.value};
	var Provider4 = {"id": inputval1.Provider4.id, "value": inputval1.Provider4.value};
	
	formArray.push(firstName);
	formArray.push(secondName);
    formArray.push(addressLn1);
	formArray.push(addressLn2);
	formArray.push(townCity);
	formArray.push(gender1);
	formArray.push(gender2);
    formArray.push(gender3);
	formArray.push(Provider1);
	formArray.push(Provider2);
	formArray.push(Provider3);
	formArray.push(Provider4);
		
	/* inputval1.forEach(getField) */
	/* debugger */
}


/* --------------------------------------------------------------------------------------------------------------------------------------------cutomize page */


function customizeText() {
	let selectedTextSize = document.getElementById("text-size").value;
	document.getElementById("change-text").style.fontSize = selectedTextSize;
	document.getElementById("detailed").style.fontSize = selectedTextSize;
}

//Change background color		
function changeColor() {
	let selectedBGColor = document.getElementById("colorOption").value;
  document.getElementById("page_content").style.backgroundColor = selectedBGColor;
}




/* ------------------------------------------------------------------------------------------------------------------------------------------------------comment code */

// existing comments
let allComments = [{name: "Mason", comment: "I had great use out of this"},
				   {name: "william", comment: "I don't like the taste"},
				   {name: "tasi", comment: "Love it, realy helped me"},
];	
 
//----------
//Load all existing comments 
function loadComments() {
	//Loop through all comments in the array 
	for (var i=0; i < allComments.length; i++) {
		let name = allComments[i].name;
		let comment = allComments[i].comment;		
		
		//Create a new HTML node/element <P> to display this comment
		let node = document.createElement("P");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);
		let parrent_node = document.getElementById("comments");
		parrent_node.appendChild(node);
	}
};

 loadComments();

// add comment
function addComment() {	
	//Get entered value/data by user
	let enteredCommentName = document.getElementById("comment_name").value;
	let enteredCommentText = document.getElementById("comment_text").value;	
	
	//Add this new comment to the array
	allComments.push({name: enteredCommentName, comment: enteredCommentText});	
	alert("Thank you for your comment!");
	
	//Display this new comment on HTML page	
	//Create a new child HTML node/element as "<p>" (paragraph) (as a child node)
	let node = document.createElement("P");
	//Create a new TextNode
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	//Append the content (created TextNode) to the HTML Node (child)
	node.appendChild(textnode);	
	//Get the id of parent node "comment-list"
	let parrent_node = document.getElementById("comments");
	//Append the above child HTML node to the parent node
	parrent_node.appendChild(node);
	
	//Clear comment box
	document.getElementById("comment_name").value = "";
	document.getElementById("comment_text").value = "";
};
/* ------------------------------------------------------------------------------------------------------------------------------------------------------load rss */
function loadOtherRSS() {
	//Use CORS API website as proxy to retrieve RSS file
	let proxy = 'https://cors-anywhere.herokuapp.com/';

	//Declare the URL where we fetch RSS file
	let url = "https://www.nasa.gov/rss/dyn/educationnews.rss";
	//Other rss from nasa: https://www.nasa.gov/content/nasa-rss-feeds

	//Create an XMLHttpRequest Object to request data
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", proxy + url, true);
	xhttp.send();

	//Process RSS file when it has been loaded successfully		
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//Load XML document as "XML" format and process it

			//Load all "items" nodes in the RSS document
			var items = this.responseXML.getElementsByTagName("item");

			let txt, nodes;
			txt = "";

			for (let i = 0; i< items.length; i++) {
				nodes = items[i].children;
				let title, pubdate, description, link;
				for (let j = 0; j < nodes.length; j++) {
					if (nodes[j].tagName == "title") {
						title = nodes[j].innerHTML;
					} else if (nodes[j].tagName == "link") {
						link = nodes[j].innerHTML;
					} else if (nodes[j].tagName == "description") {
						description = nodes[j].innerHTML;
					} else if (nodes[j].tagName == "pubDate") {
						pubdate = nodes[j].innerHTML;
					}
				}

				//Set the txt string as HTML format.
				txt += `<div class="box">
								<a href="${link}">
									<div class="item">
										<h3>${title}</h3>
										<p>${description}</p>
										<p>${pubdate}</p>
								</div>
								</a>
								</div>`;				
			}

			//Write txt in HTML format on webpage
			document.getElementById("RssFeed").innerHTML = txt;
		}
	};
}

function loadJSONFile() {
	//1: Use CORS API website as proxy to retrieve XML file
	let proxy = 'https://cors-anywhere.herokuapp.com/';
	//Declare the URL indicates the location of the XML file			
	let url = "https://raw.githubusercontent.com/SCANLM1/jasonText/main/asses";
			
	//2: Create XMLHttpRequest object
	let ourRequest = new XMLHttpRequest();
	//Set ourRequest to URL to get data (not send data)
	ourRequest.open('GET', proxy + url, true);
	//Send XMLHttpRequest object or ourRequest to URL
	try{
		ourRequest.send();
				
		//3: Receive response (reply) from URL and Process that data
		ourRequest.onload = function() {
			//Check if the response status is OK (o error), render data on web page
			if (ourRequest.status >= 200 && ourRequest.status < 400) {
				//
				let receivedData = JSON.parse(ourRequest.responseText);									
				//Build an html string which will be rendered on browser as an html-formated element
				let htmlString = "";	
						
				//Retrieve question and relevant answer
				for (var i = 0; i < receivedData.length; i++) {
					//Add a <div> open tag
					htmlString += `<div style="background-color: yellow; margin: 10px; padding: 5px;">`;
					//Get name
					htmlString += "<h4>" + receivedData[i].name + "</h4>";
					//Get email
					htmlString += "<p4>" + receivedData[i].email + "</p4>";
					//Add the closing tag of div
					htmlString += "</div>";
				}
						
				//Render the whole htmlString to web page					
				let faqContainer = document.getElementById("json-data");
				faqContainer.innerHTML = htmlString;
						
				//Add style to the html elements: add the <div> tag
				//Set style for "faq_format" class in css file					
				} else {
					//Exception handling
					console.log("Connected to the server successfully but it returned an error!");
				}
			
		};
	} 
	catch (error){
		
	}			
}



