function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      let courseIndex = this.courses.findIndex(obj => obj.code === code);
      if (!this.courses[courseIndex].note) {
        this.courses[courseIndex].note = note;
      } else {
        this.courses[courseIndex].note += "; " + note;
      };
    },

    viewNotes() {
      this.courses.forEach(obj => {
        if (obj.note) {
          console.log(obj.name + ': ' + obj.note);
        }
      });
    },

    updateNote(code, newNote) {
      let courseIndex = this.courses.findIndex(obj => obj.code === code);
      this.courses[courseIndex].note = newNote;
    },

  };
}

let steve = createStudent('Steve', '1st');
steve.info();
steve.listCourses();

steve.addCourse({ name: 'Math', code: 101 });
steve.addCourse({ name: 'Advanced Math', code: 102 });
steve.addCourse({ name: 'Intro to Programming', code: 105 });

steve.listCourses();

steve.addNote(101, 'Great teacher');
steve.addNote(101, 'Aced my midterm!');
steve.addNote(102, 'Learn advanced methods');
steve.viewNotes();

steve.updateNote(101, 'Loving it!');
steve.viewNotes();