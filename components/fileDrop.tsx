'use client'
import { DragEvent, useState } from 'react';
import readPDF from '@/app/lib/pdfApi'
import CircularProgress from '@mui/material/CircularProgress'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Box from '@mui/material/Box'
import { handleDrop } from '@/app/lib/handleDrop';
import { fileDropStyle, fileDropStyleHover } from './style';
/**
 * A user interface box that accepts dropped files. When a file is uploaded, its name is displayed in a list. 
 * The user is then prompted to either confirm or remove their uploaded file.
 * @param childToParent is where the uploaded file information is sent 
 * @return a rendered JSX Box Component that accepts dropped files
 */
export default function FileDrop({childToParent}) {
  // State variables to handle the components behaviour 
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
            <section> {/* Place outlined box that user drops pdf onto and it registers the events of being dropped*/}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, setIsOver, setStatus, setFiles, updateText)}
                style={isOver ? fileDropStyleHover : fileDropStyle}>
              
              {uploaded ? (
                <ul> {/*  Display the name of the pdf */}
                  {files.map((file, index) => (
                    <li key={index} style= {{fontSize: '25px', fontWeight:'400'}}>{file.name}</li>
                  ))} 
                </ul>
                ) : (
                  <div> {/* Displays "loading" while pdf is being read */}
                    {status === "LOADING" ? (
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '35px', fontWeight:'400'}}>
                        <CircularProgress sx={{width: '120', height: '120'}} /> <p>Loading</p>
                      </Box>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <FileUploadIcon style={{ fontSize: '40px', marginRight: '10px' }} />
                          <span>Drag and drop a pdf file here</span>
                        </div>
                    )}
                  </div>
                )}
              </div>

              <div> {/* Place two buttons "confirm and remove" that either directs page to scrollbox or to reupload pdf*/}
                {uploaded && (
                  <section style = {{marginTop: '10px'}}> 
                    <div style= {{display: 'flex', justifyContent: 'space-evenly', marginBottom: '10px'}}>
                      <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                        type = "button" style={{borderRadius: '5px',  fontSize: '25px', padding: '15px 25px', fontWeight:'400' }} onClick = {() => {setUploaded(false); setStatus("Drag and drop a pdf file here")}}>
                          REMOVE
                      </button>
                      <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                        type = "button" style={{borderRadius: '5px',  fontSize: '25px', padding: '15px 25px', fontWeight:'400' }} onClick = {() => childToParent(info)}>
                          CONFIRM
                      </button>     
                    </div>        
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