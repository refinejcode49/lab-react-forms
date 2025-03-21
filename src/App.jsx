import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFullName = (e) => setFullName(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handlePhoneInput = (e) => setPhone(e.target.value);

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleProgram = (e) => setProgram(e.target.value);
  const handleGraduationYear = (e) => setGraduationYear(e.target.value);
  const handleGraduated = (e) => setGraduated(e.target.checked);

  function handleCreateStudent(event) {
    event.preventDefault();
    const newStudentToAdd = {
        fullName: fullName,
        email: email,
        phone: phone,
        program: program,
        image: image,
        graduationYear: graduationYear,
        graduated: graduated
      }
      setStudents([newStudentToAdd, ...studentsData]);
    }

  return (

    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleCreateStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleFullName} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleImageInput}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handlePhoneInput}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmailInput}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgram}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handleGraduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" value={graduated} onChange={handleGraduated}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
