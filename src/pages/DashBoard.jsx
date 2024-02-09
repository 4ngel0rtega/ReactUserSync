
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../config/firebase";
import { deleteDoc, where, query, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

// Componentes de botón CRUD
function CreateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4"
    >
      Create
    </button>
  );
}

function UpdateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-4"
    >
      Update
    </button>
  );
}

function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4"
    >
      Delete
    </button>
  );
}


function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [stations, setStations] = useState([]);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs[0].data();
      setName(userData.name);
      setPhotoURL(user?.photoURL);
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("An error occurred while fetching user data");
    }
  };

  const fetchStations = async () => {
    try {
      const q = query(collection(db, "Estación"));
      const querySnapshot = await getDocs(q);
      const stationData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStations(stationData);
    } catch (error) {
      console.error("Error fetching stations:", error);
      alert("An error occurred while fetching stations");
    }
  };

  useEffect(() => {
    if (!user) return navigate("/");
    fetchUserData();
    fetchStations();
  }, [user, navigate]);

  const handleCreate = async () => {
    try {
      const nombre = prompt("Ingrese el nombre de la estación:");
      const ubicacion = prompt("Ingrese la ubicación de la estación:");
      if (!nombre || !ubicacion) {
        alert("Por favor, ingrese nombre y ubicación de la estación.");
        return;
      }
      await setDoc(doc(db, "Estación", nombre), { nombre, ubicacion });
      alert("Estación de camión creada exitosamente.");
      fetchStations(); // Actualizar la lista de estaciones después de crear una nueva
    } catch (error) {
      console.error("Error creating station:", error);
      alert("Ocurrió un error al crear la estación de camión.");
    }
  };


  const handleUpdate = async () => {
    try {
      const newName = prompt("Nuevo nombre de estacion")
      const newUbi = prompt("Nueva ubicacion de estacion")

      // Actualizar la estación de camión con el ID proporcionado
      await setDoc(doc(db, "Estación", newName), {
        nombre: newName,
        ubicacion: newUbi,
      });

      alert("Estación de camión actualizada exitosamente.");
    } catch (error) {
      console.error("Error updating station:", error);
      alert("Ocurrió un error al actualizar la estación de camión.");
    }
  };

  const handleDelete = async () => {
    try {
      const idToDelete = prompt("Ingrese ID de estación a borrar")

      await deleteDoc(doc(db, "Estación", idToDelete));
      alert("Estación de camión eliminada exitosamente.");
      fetchStations(); // Actualizar la lista de estaciones después de eliminar una
    } catch (error) {
      console.error("Error deleting station:", error);
      alert("Ocurrió un error al eliminar la estación de camión.");
    }
  };


  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome, {name}</h1>
        {photoURL && (
          <img src={photoURL} alt="User" className="w-20 h-20 rounded-full mx-auto mb-4" />
        )}
        <p>Email: {user?.email}</p>
        <div className="mt-8">
          <CreateButton onClick={handleCreate} />
          <UpdateButton onClick={handleUpdate} />
          <DeleteButton onClick={handleDelete} />
        </div>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-8"
        >
          Logout
        </button>
      </div>
      <div className="w-full max-w-md mx-auto">
        <Table aria-label="Estaciones de Camión">
          <TableHeader>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>Ubicación</TableColumn>
          </TableHeader>
          <TableBody>
            {stations.map((station) => (
              <TableRow key={station.id}>
                <TableCell>{station.nombre}</TableCell>
                <TableCell>{station.ubicacion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
