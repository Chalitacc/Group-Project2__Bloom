import styles from "./AddPlant.module.css";

const AddPlant = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked the submit button");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <section className={styles.inputSection}>
        <div className={styles.textInputContainer}>
          {/* Plant name */}
          <div className={styles.inputGroup}>
            <label htmlFor="plantName">Plant Name</label>
            <input
              type="text"
              name="plantName"
              id="plantName"
              maxLength={50}
              placeholder="e.g. Aloe Vera"
            />
          </div>
          {/* Scientific Name */}
          <div className={styles.inputGroup}>
            <label htmlFor="scientificName">Scientific Name</label>
            <input
              type="text"
              name="scientificName"
              id="scientificName"
              maxLength={50}
              placeholder="e.g. Aloe barbadensis miller"
            />
          </div>
          {/* Watering Schedule */}
          <div className={styles.inputGroup}>
            <label htmlFor="wateringSchedule">Watering Schedule</label>
            <select name="wateringSchedule" id="wateringSchedule">
              <option value="none">None</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="when-dry">When soil is dry</option>
            </select>
          </div>
          {/* Soil Type */}
          <div className={styles.inputGroup}>
            <label htmlFor="soilType">Soil Type</label>
            <select name="soilType" id="soilType">
              <option value="none">None</option>
              <option value="loamy">Loamy</option>
              <option value="sandy">Sandy</option>
              <option value="clay">Clay</option>
              <option value="chalky">Chalky</option>
              <option value="well-draining">Well-draining</option>
            </select>
          </div>
          {/* Minimum Temperature */}
          <div className={styles.inputGroup}>
            <label htmlFor="minTemperature">Minimum Temperature °C</label>
            <input
              type="number"
              name="minTemperature"
              id="minTemperature"
              placeholder="e.g. 10"
            />
          </div>
          {/* Maximum Temperature */}
          <div className={styles.inputGroup}>
            <label htmlFor="maxTemperature (°C)">Maximum Temperature °C</label>
            <input
              type="number"
              name="maxTemperature"
              id="maxTemperature"
              placeholder="e.g. 30"
            />
          </div>
          {/* Humidity */}
          <div className={styles.inputGroup}>
            <label htmlFor="humidity">Humidity</label>
            <select name="humidity" id="humidity">
              <option value="none">None</option>
              <option value="low">Low (10-30%)</option>
              <option value="medium">Medium (30-60%)</option>
              <option value="high">High (60-90%)</option>
            </select>
          </div>
          {/* Toxicity */}
          <div className={styles.inputGroup}>
            <label htmlFor="toxicity">Toxicity</label>
            <select name="toxicity" id="toxicity">
              <option value="none">None</option>
              <option value="non-toxic">Non-toxic</option>
              <option value="toxic-to-pets">Toxic to pets</option>
              <option value="toxic-to-humans">Toxic to humans</option>
              <option value="toxic-to-both">Toxic to humans and pets</option>
            </select>
          </div>
        </div>

        {/* Image input */}
        <div className={styles.imageInputContainer}>
          <input
            type="file"
            name="image"
            id="image"
            accept=".jpg, .jpeg, .webp, .png"
          />
        </div>
      </section>
      <section className={styles.submitContainer}>
        <button className={styles.submitButton}>Add Plant</button>
      </section>
    </form>
  );
};

export default AddPlant;
