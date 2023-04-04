import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [png, setPNG] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePNGChange = (e) => {
    setPNG(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('png', png);

    //get the file extension
    const fileExtension = file.name.split('.').pop();
    const pngExtension = png.name.split('.').pop();

    let newWin = window.open("about:blank", "result", "width=200,height=200");

    if (fileExtension === "csv" && pngExtension === "png") {
      try {
        const { data } = await axios.post('http://localhost:8080/api/upload', formData);
        console.log(data);
        newWin.document.write(data.code + ", " + data.type);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Error : Le fichier n'est pas un fichier CSV valide ou l'image n'est pas un PNG.");
      newWin.document.write("Error : Le fichier n'est pas un fichier CSV valide.");
    }
  };

  return (
    <div className="pt-2 pl-[16%] pb-3">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className='flex justify-start'>
            <label htmlFor="input-students" className="px-6 py-3 font-semibold rounded-lg bg-[#4641e6] text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#3b37c6] duration-200">Étudiants</label>
            <p class="ml-2 my-3 mr-4 font-semibold text-[15px]">fichier.csv</p>
            <input type="file" id="input-students" className="hidden" accept="*,.csv" onChange={handleFileChange} />
          </div>
          <div>
            <button type="submit" className="px-6 py-3 font-semibold rounded-lg bg-[#4641e6] text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#3b37c6] duration-200">Previews</button>
          </div>
          <div className='flex justify-start'>
            <label htmlFor="input-file" className="px-7 py-3 font-semibold rounded-lg bg-[#4641e6] text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#3b37c6] duration-200">Diplome</label>
            <p className="ml-2 my-3 mr-4 font-semibold text-[15px]">fichier.png</p>
            <input type="file" id="input-file" className="hidden" accept="*,.png" onChange={handlePNGChange} />
          </div>
          <div>
            <button type="submit" className="px-7 py-3 font-semibold rounded-lg bg-[#4641e6] text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#3b37c6] duration-200">Envoyer</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadFile;