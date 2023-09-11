let classroom = {
	roomNumber: 129,
	seats: 32,
	teacher: {
		firstName: "Robert",
		lastName: "Hardy",
	},
	students: [
		{ firstName: "Thad", lastName: "Cosley", grade: 11 },
		{ firstName: "Tiler", lastName: "Lackey", grade: 10 },
	],
	lightsOn: true,
	turnLightsOff: function () {
		this.lightsOn = false;
	},
};
console.log(classroom);
classroom.turnLightsOff()
console.log(classroom)
