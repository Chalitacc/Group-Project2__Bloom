import { useRef, useState } from "react";
import styles from "./AddPlant.module.css";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AddPlant = () => {
  const [plantDetails, setPlantDetails] = useState({
    name: "",
    type: "",
    scientificName: "",
    wateringSchedule: "",
    lightRequirements: "",
    soilType: "",
    temperatureRange: "",
    humidity: "",
    toxicity: "",
    image: null,
    previewUrl: null,
  });

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const [uploadStatus, setUploadStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState([""]);
  const [formIsValid, setFormIsValid] = useState(true);
  const [plantList, setPlantList] = useState([]);

  const handleValidation = (inputName, inputValue) => {
    const error = { ...errorMessage };
    let isValid = true;

    if (!plantDetails.name.trim()) {
      error.nameError = "Please enter plant name";
      isValid = false;
    } else {
      error.nameError = "";
    }

    if (!plantDetails.type.trim()) {
      error.typeError = "Please enter plant type";
      isValid = false;
    } else {
      error.nameError = "";
    }

    if (!plantDetails.scientificName.trim()) {
      error.scientificNameError = "Please enter the scientific name!";
      isValid = false;
    } else {
      error.scientificNameError = "";
    }

    if (!plantDetails.wateringSchedule) {
      error.wateringScheduleError = "Please enter watering schedule!";
      isValid = false;
    } else {
      error.wateringScheduleError = "";
    }

    if (!plantDetails.lightRequirements) {
      error.lightRequirementsError = "Please choose light requirement!";
      isValid = false;
    } else {
      error.lightRequirementsError = "";
    }

    if (!plantDetails.soilType.trim()) {
      error.soilTypeError = "Please enter soil type!";
      isValid = false;
    } else {
      error.soilTypeError = "";
    }

    if (!plantDetails.temperatureRange.trim()) {
      error.temperatureRangeError = "Please enter temperature range!";
      isValid = false;
    } else {
      error.temperatureRangeError = "";
    }
    if (!plantDetails.humidity.trim()) {
      error.humidityError = "Please enter humidity for plant!";
      isValid = false;
    } else {
      error.humidityError = "";
    }

    if (!plantDetails.toxicity) {
      error.toxicityError = "Please choose toxicity!";
      isValid = false;
    } else {
      error.toxicityError = "";
    }

    if (!plantDetails.image) {
      error.imageError = "Please upload an image of plant!";
      isValid = false;
    } else {
      error.imageError = "";
    }

    setErrorMessage(error);
    return isValid;
  };

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "file") return;
    setPlantDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    setErrorMessage((prevDetails) => ({
      ...prevDetails,
      [`${name}Error`]: "",
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const previewUrl = URL.createObjectURL(file);
      setPlantDetails((prevDetails) => ({
        ...prevDetails,
        image: file,
        previewUrl: previewUrl,
      }));
      console.log("file", file);
    } else {
      setPlantDetails((prevDetails) => ({
        ...prevDetails,
        image: null,
        previewUrl: null,
      }));
      console.log("Pleas upload a valid image");
    }
  };

  const handleRemoveImage = () => {
    setPlantDetails((prevDetails) => ({
      ...prevDetails,
      image: null,
      previewUrl: null,
    }));
    if (fileInputRef.current) {
      fileInputRef.current = "";
    }
  };

  // upload image to cloudinary
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", plantDetails.image);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      console.log("imageUrl", data.secure_url);
      console.log("public id", data.public_id);

      setPlantDetails((prevDetails) => ({
        ...prevDetails,
        previewUrl: data.secure_url,
      }));

      return data.secure_url;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  // save data to firestorec
  const storeDataToFirestore = async (plant) => {
    try {
      const docRef = await addDoc(collection(database, "plants"), plant);
      console.log("Document has been added with an id:", docRef.id);
    } catch (error) {
      console.log("Failed to store document");
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = handleValidation();

    if (!isFormValid) return;

    try {
      const imageUrl = await uploadImage();

      /// firebase database
      const plantData = { ...plantDetails, image: imageUrl };
      await storeDataToFirestore(plantData);

      if (imageUrl) {
        const newPlant = { ...plantDetails, previewUrl: imageUrl };
        setPlantList((prev) => [...prev, newPlant]);

        setUploadStatus("Form submitted successfully ☀️");

        navigate("/");
      }

      setPlantDetails({
        name: "",
        type: "",
        scientificName: "",
        wateringSchedule: "",
        lightRequirements: "",
        soilType: "",
        temperatureRange: "",
        humidity: "",
        toxicity: "",
        image: null,
        previewUrl: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setErrorMessage({});
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.addPlantContainer}>
      <h1>Add plant</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <section className={styles.inputSection}>
          <div className={styles.inputContainer}>
            {/* ----------------------------- */}
            <div>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Plant Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={plantDetails.name}
                />
                <p className={styles.errorMessage}>{errorMessage.nameError}</p>
              </div>

              {/* ----------------------------- */}

              <div className={styles.inputGroup}>
                <label htmlFor="type">Plant Type:</label>

                <select
                  name="type"
                  id="type"
                  onChange={handleChange}
                  value={plantDetails.type}
                >
                  <option value="">Choose a type</option>
                  <option value="herb">Herb</option>
                  <option value="tree">Tree</option>
                  <option value="shrub">Shrub</option>
                  <option value="climber">Climber</option>
                  <option value="creeper">Creeper</option>
                </select>

                <p className={styles.errorMessage}>{errorMessage.typeError}</p>
              </div>

              {/* ----------------------------- */}
              <div className={styles.inputGroup}>
                <label htmlFor="scientific-name">Scientific Name:</label>
                <input
                  type="text"
                  name="scientificName"
                  id="scientific-name"
                  onChange={handleChange}
                  value={plantDetails.scientificName}
                />
                <p className={styles.errorMessage}>
                  {errorMessage.scientificNameError}
                </p>
              </div>
              {/* ----------------------------- */}
              <div className={styles.inputGroup}>
                <label htmlFor="watering-schedule">Watering Schedule:</label>
                <input
                  type="text"
                  name="wateringSchedule"
                  id="watering-schedule"
                  placeholder="e.g. twice a week"
                  onChange={handleChange}
                  value={plantDetails.wateringSchedule}
                />
                <p className={styles.errorMessage}>
                  {errorMessage.wateringScheduleError}
                </p>
              </div>
              {/* ----------------------------- */}
              <div className={styles.inputGroup}>
                <label htmlFor="light-requirements">Light requirements:</label>
                <select
                  name="lightRequirements"
                  id="requirements"
                  onChange={handleChange}
                  value={plantDetails.lightRequirements}
                >
                  <option value="">Select</option>
                  <option value="full-sun">Full Sun ☀️</option>
                  <option value="partial-sun">Partial Sun 🌤️</option>
                  <option value="shade">Shade ☁️</option>
                </select>
                <p className={styles.errorMessage}>
                  {errorMessage.lightRequirementsError}
                </p>
              </div>
              {/* ----------------------------- */}
              <div className={styles.inputGroup}>
                <label htmlFor="soil-type">Soil Type:</label>
                <input
                  type="text"
                  name="soilType"
                  id="soil-type"
                  placeholder="e.g. well draining"
                  onChange={handleChange}
                  value={plantDetails.soilType}
                />
                <p className={styles.errorMessage}>
                  {errorMessage.soilTypeError}
                </p>
              </div>
              {/* ----------------------------- */}
              <div className={styles.inputGroup}>
                <label htmlFor="temperature-range">
                  Temperature range in Celsius:
                </label>
                <input
                  type="text"
                  name="temperatureRange"
                  id="temperature-range"
                  placeholder="e.g. 15-25 C"
                  onChange={handleChange}
                  value={plantDetails.temperatureRange}
                />
                <p className={styles.errorMessage}>
                  {errorMessage.temperatureRangeError}
                </p>
              </div>
              {/* ----------------------------- */}
              <div className={styles.inputGroup}>
                <label htmlFor="humidity">Humidity in %</label>
                <input
                  type="text"
                  name="humidity"
                  id="humidity"
                  placeholder="e.g. 60"
                  onChange={handleChange}
                  value={plantDetails.humidity}
                />
                <p className={styles.errorMessage}>
                  {errorMessage.humidityError}
                </p>
              </div>
              {/* ----------------------------- */}
              <div className={styles.inputGroup}>
                <label htmlFor="toxicity">Toxicity</label>
                <select
                  name="toxicity"
                  id="toxicity"
                  onChange={handleChange}
                  value={plantDetails.toxicity}
                >
                  <option value="">Select</option>
                  <option value="non-toxic">Non-toxic</option>
                  <option value="toxic-to-pets">Toxic to pets</option>
                  <option value="toxic-to-human">Toxic to humans</option>
                </select>
                <p className={styles.errorMessage}>
                  {errorMessage.toxicityError}
                </p>
              </div>
            </div>
          </div>

          {/* Image Input Container */}
          <div className={styles.imageInputContainer}>
            <div className={styles.imageUrlContainer}>
              <label htmlFor="image">Upload Image:</label>
              <p className={styles.errorMessage}>{errorMessage.imageError}</p>
              <input
                type="file"
                name="image"
                id="image"
                className={styles.fileInput}
                accept=".jpig , .jpg , .png"
                onChange={handleImageChange}
                ref={fileInputRef}
              />
              {plantDetails.previewUrl && (
                <div className={styles.imagePreviewContainer}>
                  <img
                    src={plantDetails.previewUrl}
                    alt="plant image preview"
                    className={styles.imagePreview}
                  />
                  <button
                    className={styles.imageRemoveButton}
                    onClick={handleRemoveImage}
                  >
                    Remove Image
                  </button>
                </div>
              )}
              {uploadStatus && <p>{uploadStatus}</p>}
            </div>
          </div>
        </section>

        <section className={styles.buttonSection}>
          <button type="submit" className={styles.submitButton}>
            SAVE PLANT
          </button>
        </section>
      </form>
    </div>
  );
};

export default AddPlant;
