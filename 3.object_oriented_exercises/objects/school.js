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

function createSchool() {
  return {
    courses: [ { name: 'Geometry', code: 101, students: [] }], // {name, code, students[]}
    students: [],
    addStudent(name, year) {
      let validYears = ['1st', '2nd', '3rd', '4th', '5th'];
      if (!validYears.includes(year)) {
        console.log('Invalid Year');
      };

      let newStudent = createStudent(name, year);
      this.students.push(newStudent);
      return newStudent;
    },

    enrollStudent(studentName, courseCode) {
      let studentIndex = this.students.findIndex(obj => obj.name === studentName);
      let courseIndex = this.courses.findIndex(obj => obj.code === courseCode);
      let student = this.students[studentIndex];
      console.log(studentIndex, courseIndex, student);
      this.courses[courseIndex].students.push(student);
    },

    addGrade() {
      
    },

    getReportCard() {

    },

    courseReport(courseName) {

    },
  }
}

let harvard = createSchool();
console.log(harvard.addStudent('Steve', '5th'));
// steve.info();
harvard.enrollStudent('Steve', 101);
console.log(harvard.courses[0].students);
// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined