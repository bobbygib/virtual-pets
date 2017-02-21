
function Controller(model) {
	// reference to the model (so we can update it & ask it questions)
	this.model = model;

	// Add a new pet, given its name and species
	this.addPet = function(name, species) {
		// pass through the data to the model
		//console.log(name)
		return this.model.addPet(name, species);
	}

	// Return a pet at index `index`
	this.getPetByIndex = function(index) {
		return this.model.getPetByIndex(index);
	}

	// get a copy of the entire array of pets
	this.getAllPets = function(index) {
		return this.model.getAllPets(index);
	}

	// Feed the pet at index `index`
	this.feedPet = function(index) {
		var pet = this.getPetByIndex(index);
		pet.hunger -= 10; // maybe write pet.feed(10)?
		pet.boredom += 5;
	}

	// Reduce the boredom of the pet at index `index`
	this.playWithPet = function(index) {
		var pet = this.getPetByIndex(index);
		pet.boredom -= 10; // maybe write pet.play(10)?
		pet.hunger += 5; 
	}


}
