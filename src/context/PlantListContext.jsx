import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { database } from "../firebaseConfig";

export const PlantListContext = createContext();

export const PlantListProvider = ({ children }) => {
  const [plantList, setPlantList] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "plants"),
      (snapshot) => {
        const plantsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlantList(plantsData);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <PlantListContext.Provider value={plantList}>
      {children}
    </PlantListContext.Provider>
  );
};
