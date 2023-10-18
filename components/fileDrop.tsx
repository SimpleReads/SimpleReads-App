'use client'
import { DragEvent, useState } from 'react';
import readPDF from '@/app/lib/pdfApi'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { handleDrop } from '@/app/lib/handleDrop';
/**
 * A user interface box that accepts dropped files. When a file is uploaded, its name is displayed in a list. 
 * The user is then prompted to either confirm or remove their uploaded file.
 * @param childToParent is where the uploaded file information is sent 
 * @returns a rendered JSX Box Component that accepts dropped files
 */
export default function FileDrop({childToParent}) {
  const [isOver, setIsOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploaded, setUploaded] =useState<boolean>(false);
  const [status, setStatus] = useState<string>("Drag and drop a pdf file here")
  const [info, setInfo] = useState<string>("Waiting for text");

  // Function to handle when a file is being dragged onto the element. Sets IsOver to true and blocks default behaviour of drop events
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(true);
  };

  // Function to handle when a file is being has been leaft onto the element. Sets IsOver to flalse and blocks default behaviour of drop events
  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);
  };

  // Function that take file and read content. Updates setInfo with pdf contxt. Set uploadpff to true
  const updateText = async(file) => {
      let info = await readPDF(file)
      setInfo(info)
      setUploaded(true)
  }

  return (
    <>
      <div className = "row-span-4 col-span-4">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <section>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, setIsOver, setStatus, setFiles, updateText)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '300px',
                  width: '800px',
                  border: '1px dotted',
                  backgroundColor: isOver ? 'lightgray' : 'white',
                }}>
              
              {uploaded ? (
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))} 
                </ul>
                ) : (
                  <div>
                    {status === "LOADING" ? (
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <CircularProgress />
                        <p>Loading</p>
                      </Box>
                    ) : (
                      status
                    )}
                  </div>
                )}
                  
                </div>
                  <div>
                    {uploaded && (
                      <section>
                        <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                          type = "button" onClick = {() => childToParent(info)}>CONFIRM</button>
                        
                        <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                          type = "button" onClick = {() => {setUploaded(false); setStatus("Drag and drop a pdf file here")}}>
                          REMOVE
                        </button>
                      </section>
                    )}
                </div>
              </section>
            </div>
          </div>
        </div>
    </>
  );
}