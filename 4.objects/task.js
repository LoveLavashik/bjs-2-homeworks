function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.excluded) {
		console.log(` ${this.name}  отчислен`);
		return;
	}
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}
	const sum = this.marks.reduce(function(AccumulationOfMarks, Value) {
		return AccumulationOfMarks + Value;
	});
	return +(sum / this.marks.length).toFixed(1);
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
};