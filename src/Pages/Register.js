import React, { useState } from "react";
import { Form } from "react-bootstrap"; // Import Form from react-bootstrap
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import LoginComponent from "./Login";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState({ profession: "", proof: null });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: name === "proof" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const file = userDetails.proof;

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            // Create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // Create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});

            // Navigate to "/"
            navigate("/");

            // Show Login Component upon successful registration
            setShowLoginForm(true);
          } catch (err) {
            console.error(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      console.error(err);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      {showLoginForm ? (
        <LoginComponent /> // Render LoginComponent if showLoginForm is true
      ) : (
        <div className="formWrapper">
          <span className="logo">Commencez maintenant</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="display name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProfession">
              <Form.Label>Profession</Form.Label>
              <Form.Select name="profession" value={userDetails.profession} onChange={handleChange} className="custom-input"> {/* Added custom class name */}
                <option value="">Sélectionnez une profession</option>
                <option value="commerçant">Commerçant</option>
                <option value="consommateur">Consommateur</option>
                <option value="ingenieur_agriculteur">Ingénieur Agricole</option>
                <option value="agriculteur">Agriculteur</option>
              </Form.Select>
            </Form.Group>
            {userDetails.profession === 'commerçant' ||
              userDetails.profession === 'ingenieur_agriculteur' ||
              userDetails.profession === 'agriculteur' ? (
              <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProof">
                <Form.Label>Justificatif (facultatif pour consommateur)</Form.Label>
                <Form.Control type="file" name="proof" onChange={handleChange} className="custom-input" /> {/* Added custom class name */}
              </Form.Group>
            ) : null}
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <button disabled={loading}>Sign up</button>
            {loading && "Uploading and compressing the image please wait..."}
            {err && <span>Something went wrong</span>}
          </form>
          <p>
            Already have an account?{" "}
            <button onClick={() => setShowLoginForm(true)}>Sign in</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
