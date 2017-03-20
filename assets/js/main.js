//Fix up the data so it's written write
//Make a list of types of form fields (so you make your function
//finish formMaker function: loops through the fields object inside formInfo and makes a form input and label for each one

// window.onload = getData();

var DefaultForm = function(options) {
	var publicVars = options || {};

	publicVars.name = "Electronics";
	
	publicVars.fields = {
		model: {
			label: "Model Name",
			type: "text"
		},
		manufacturer: {
			label: "Manufacturer:",
			type: "text",
		},
		ratings: {
			label: "Rating:",
			type: "select",
			options: [
				"1: Hated it",
				"2: Not Worth the Money",
				"3: Nothing Special",
				"4: Good Buy",
				"5: Great Experience",
			]
		},
		recommend: {
			label: "Would you recommend?",
			type: "radio",
			options: [
				"yes",
				"no",
			]
		},
	};

	return publicVars;
}

//child class example
var LaptopForm = function(options) {
	var publicVars = DefaultForm(options);

	publicVars.fields.price = {
		label: "Price:",
		type: "radio",
		options: [
			"under $500",
			"$500-$600",
			"$600-$800",
			"$800-$1000",
			"$1000 and Above",
		]
	};

	publicVars.fields.laptopType = {
		label: "Laptop Type:",
		type: "select",
		options: [
			"Chromebook",
			"Notebook",
			"2in1 Tablet",
			"Ultrabook",
		]
	};

	publicVars.name = "Laptop";

	return publicVars;
}





 var PhoneForm = function(options) {
     var publicVars = DefaultForm(options);
     publicVars.fields.price = {
        label: "Price",
        type: "radio",
        options: [
            "under $10",
            "$10-$25",
            "$25-$50",
            "$50-$100",
            "$100 and Above",
        ]
     };
     publicVars.fields.input = {
        label: "Input Options:",
        type: "radio",
        options: [
            "Physical Keyboard",
            "TouchScreen",
        ]
     };
     publicVars.fields.system = {
        label: "Operating System:",
        type: "select",
        options: [
            "Andriod",
            "IOS",
            "Windows",
            "Other",
        ]
     };
     publicVars.fields.design = {
        label: "Phone Design:",
        type: "select",
        options: [
            "Candybar",
            "Flip Phone",
            "Swivel Phone",
        ]
     };
 
     publicVars.name = "Phone";
     return publicVars;
 }


 var TabletForm = function(options) {
     var publicVars = DefaultForm(options);
     publicVars.fields.price = {
        label: "Price",
        type: "radio",
        options: [
            "under $25",
            "$25-$50",
            "$50-$100",
            "$100-$200",
            "$200 and Above",
        ]
     };
     publicVars.fields.features = {
        label: "Features:",
        type: "checkbox",
        options: [
            "Bluetooth",
            "Expandable storage",
            "front camera", 
            "full USB",
            "GPS",
            "micro HDMI",
        ]
     };
     publicVars.fields.size = {
        label: "Screen Size:",
        type: "radio",
        options: [
            "Small(7-7.9 inches)",
            "Medium(8-8.9 inches)",
            "Large(9-18.8 inches)"
        ]
     };
     
     publicVars.name = "Tablet";
     return publicVars;
 }


 var TVForm = function(options) {
     var publicVars = DefaultForm(options);
     publicVars.fields.price = {
        label: "Price",
        type: "radio",
        options: [
            "under $500",
            "$500-$1000",
            "$1000-$2000",
            "$2000-$3000",
            "$3000 and Above",
        ]
     };
     publicVars.fields.display = {
        label: "Display Format:",
        type: "radio",
        options: [
            "4K",
            "1080p",
            "720p", 
        ]
     };
     publicVars.fields.type = {
        label: "TV Type:",
        type: "checkbox",
        options: [
            "3D",
            "4K",
            "LCD", 
            "LED",
            "OLED",
            "HDR",
            "Curved TV",
        ]
     };
     
     publicVars.name = "TV";
     return publicVars;
 }


 var GamingForm = function(options) {
     var publicVars = DefaultForm(options);
     publicVars.fields.network = {
        label: "Online Network",
        type: "radio",
        options: [
            "Playstation Network",
            "Google play",
            "Xbox Live",
            "Steam",
        ]
     };
     publicVars.fields.company = {
        label: "Company:",
        type: "select",
        options: [
            "Nintendo",
            "Sony Corpotation",
            "Microsoft Corporation",
            "Nvidia Corporation",
            "Atari",
            "Other",
        ]
     };
     publicVars.fields.portable = {
        label: "Portable:",
        type: "radio",
        options: [
            "Yes",
            "No",
        ]
     };

     publicVars.name = "Gaming System";
     return publicVars;
 }

var typeSelector = document.querySelector("#type-selector");
typeSelector.addEventListener("change", function(e) {
	var form = document.querySelector("#dynamic-fields");
	form.innerHTML = "";

    var button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.innerHTML = "submit"

    // var myModal = document.createElement('div');
    // myModal.setAttribute("class", "modal");
    // myModal.setAttribute("id", "myModal");
    // document.body.append(myModal);

    // var modalContent = document.createElement('div');
    // modalContent.setAttribute("class", "modalContent");
    // myModal.appendChild(modalContent);

    // button.addEventListener("click", function() {
    //     myModal.setAttribute("display", "block");
    // });

	if (this.value == "Laptop") {
		var newLaptop = LaptopForm();
		formMaker(newLaptop);
        form.appendChild(button);
	} else if (this.value == "Tablet") {
        var newTablet = TabletForm();
		formMaker(newTablet);
        form.appendChild(button);
	} else if (this.value == "TV") {
        var newTV = TVForm();
		formMaker(newTV);
        form.appendChild(button);
	} else if (this.value == "Phone") {
        var newPhone = PhoneForm();
		formMaker(newPhone);
        form.appendChild(button);
	} else if (this.value == "Gaming System") {
        var newGame = GamingForm();
		formMaker(newGame);
        form.appendChild(button);
	} 
});



function formMaker (formInfo){
	var form = document.querySelector("#dynamic-fields");
	var formFields = formInfo.fields;
	for(var key in formFields) {
//		console.log(key + ":", formFields[key]);
		var type = formFields[key].type;
		var input; 
		var label = document.createElement("label");
		label.innerHTML = formFields[key].label;
		form.appendChild(label);
		if (type == "text") {
			input = document.createElement("input");
			input.setAttribute("class", "plain-input");
			input.setAttribute("type", "text");
			input.setAttribute("name", key);
			form.appendChild(input);
		} else if (type == "select") {
			input = document.createElement("select");
			input.setAttribute("name", key);
			for (let i = 0; i < formFields[key].options.length; i++) {
				var option = document.createElement("option");
				option.setAttribute("value", formFields[key].options[i]);
				option.innerHTML = formFields[key].options[i]
				input.appendChild(option);
			}
			form.appendChild(input);
		} else if (type == "radio") {
			for (let i = 0; i < formFields[key].options.length; i++) {
				input = document.createElement("input");
				input.setAttribute("type", "radio");
				input.setAttribute("name", key);
				input.setAttribute("value", formFields[key].options[i]);
				form.appendChild(input);

				let subLabel = document.createElement("subLabel");
				subLabel.innerHTML = formFields[key].options[i];
				form.appendChild(subLabel);
			}
		} else if (type == "checkbox") {
			for (let i = 0; i < formFields[key].options.length; i++) {
				input = document.createElement("input");
				input.setAttribute("type", "checkbox");
				input.setAttribute("name", key);
				input.setAttribute("value", formFields[key].options[i]);
				form.appendChild(input);

				let subLabel = document.createElement("subLabel");
				subLabel.innerHTML = formFields[key].options[i];
				form.appendChild(subLabel);
			}
		}

	}
}

//To grab form data upon submission, do something along the lines of the following.
var form = document.getElementById("form");
form.addEventListener("submit", function(e){
	e.preventDefault();
	// console.log("submit");
	var myFormInfo = new FormData(form);
	var inputInfo = {};
	for(var inputInfoPair of myFormInfo.entries()){
		// console.log(inputInfoPair);
		inputInfo[inputInfoPair[0]] = inputInfoPair[1];
	}
	// console.log(inputInfo);
	var JSONData = JSON.stringify(inputInfo);
	localStorage.setItem(inputInfo.type, JSONData);
	// console.log(localStorage);

    function getData(){
        for( var item in localStorage ) {
            var newData = JSON.parse(localStorage.getItem(inputInfo.type));
            console.log(newData);
            var header = document.createElement("h2");
            document.body.appendChild(header);
            header.innerHTML = newData.type;
            // header.innerHTML = newData.model;
            // header.innerHTML = newData.manufacturer;
            // header.innerHTML = newData.ratings;
            // header.innerHTML = newData.recommend;


            var reviewHeader = document.createElement("div");
            reviewHeader.setAttribute("class", "reviewHeader")
            reviewHeader.appendChild(header);
            reviewHeader.appendChild(header);
            document.body.appendChild(reviewHeader);
        };
    }

	getData();
});



