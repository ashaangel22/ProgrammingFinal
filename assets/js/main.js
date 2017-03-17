//Fix up the data so it's written write
//Make a list of types of form fields (so you make your function
//finish formMaker function: loops through the fields object inside formInfo and makes a form input and label for each one

var DefaultForm = function(options) {
	var public = options || {};

	public.name = "Electronics";
	
	public.fields = {
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

	return public;
}

//child class example
var LaptopForm = function(options) {
	var public = DefaultForm(options);

	public.fields.price = {
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

	public.fields.laptopType = {
		label: "Laptop Type:",
		type: "select",
		options: [
			"Chromebook",
			"Notebook",
			"2in1 Tablet",
			"Ultrabook",
		]
	};

	public.name = "Laptop";

	return public;
};





// var PhoneForm = Object.create(DefaultForm);
// PhoneForm.fields.price = {
// 	label: "Price",
// 	type: "radio",
// 	options: [
// 		"under $10",
// 		"$10-$25",
// 		"$25-$50",
// 		"$50-$100",
// 		"$100 and Above",
// 	]
// };
// PhoneForm.fields.input = {
// 	label: "Input Options:",
// 	type: "radio",
// 	options: [
// 		"Physical Keyboard",
// 		"TouchScreen",
// 	]
// };
// PhoneForm.fields.system = {
// 	label: "Operating System:",
// 	type: "select",
// 	options: [
// 		"Andriod",
// 		"IOS",
// 		"Windows",
// 		"Other",
// 	]
// };
// PhoneForm.fields.design = {
// 	label: "Phone Design:",
// 	type: "select",
// 	options: [
// 		"Candybar",
// 		"Flip Phone",
// 		"Swivel Phone",
// 	]
// };
// PhoneForm.name = "Phone";
// console.log(PhoneForm);



// var TabletForm = Object.create(DefaultForm);
// TabletForm.fields.price = {
// 	label: "Price",
// 	type: "radio",
// 	options: [
// 		"under $25",
// 		"$25-$50",
// 		"$50-$100",
// 		"$100-$200",
// 		"$200 and Above",
// 	]
// };
// TabletForm.fields.features = {
// 	label: "Features:",
// 	type: "checkbox",
// 	options: [
// 		"Bluetooth",
// 		"Expandable storage",
// 		"front camera", 
// 		"full USB",
// 		"GPS",
// 		"micro HDMI",
// 	]
// };
// TabletForm.fields.size = {
// 	label: "Screen Size:",
// 	type: "radio",
// 	options: [
// 		"Small(7-7.9 inches)",
// 		"Medium(8-8.9 inches)",
// 		"Large(9-18.8 inches)"
// 	]
// };



// var TVForm = Object.create(DefaultForm);
// TVForm.fields.price = {
// 	label: "Price",
// 	type: "radio",
// 	options: [
// 		"under $500",
// 		"$500-$1000",
// 		"$1000-$2000",
// 		"$2000-$3000",
// 		"$3000 and Above",
// 	]
// };
// TVForm.fields.display = {
// 	label: "Display Format:",
// 	type: "radio",
// 	options: [
// 		"4K",
// 		"1080p",
// 		"720p", 
// 	]
// };
// TVForm.fields.type = {
// 	label: "TV Type:",
// 	type: "checkbox",
// 	options: [
// 		"3D",
// 		"4K",
// 		"LCD", 
// 		"LED",
// 		"OLED",
// 		"HDR",
// 		"Curved TV",
// 	]
// };



// var GamingForm = Object.create(DefaultForm);
// GamingForm.fields.network = {
// 	label: "Online Network",
// 	type: "radio",
// 	options: [
// 		"Playstation Network",
// 		"Google play",
// 		"Xbox Live",
// 		"Steam",
// 	]
// },
// GamingForm.fields.company = {
// 	label: "Company:",
// 	type: "select",
// 	options: [
// 		"Nintendo",
// 		"Sony Corpotation",
// 		"Microsoft Corporation",
// 		"Nvidia Corporation",
// 		"Atari",
// 		"Other",
// 	]
// },
// GamingForm.fields.portable = {
// 	label: "Portable:",
// 	type: "radio",
// 	options: [
// 		"Yes",
// 		"No",
// 	]
// }


var typeSelector = document.querySelector("#type-selector");
typeSelector.addEventListener("change", function(e) {
	var form = document.querySelector("#dynamic-fields");
	form.innerHTML = "";
	if (this.value == "Laptop") {
		var newLaptop = LaptopForm();
		
		formMaker(newLaptop);
	} else if (this.value == "Tablet") {
		formMaker(TabletForm);
	} else if (this.value == "TV") {
		formMaker(TVForm);
	} else if (this.value == "Phone") {
		formMaker(PhoneForm);
	} else if (this.value == "Gaming System") {
		formMaker(GamingForm);
	} 
});


function formMaker (formInfo){
	var form = document.querySelector("#dynamic-fields");
	var formFields = formInfo.fields;
	console.log(formInfo);
	for(var key in formFields) {
		console.log(key + ":", formFields[key]);
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


