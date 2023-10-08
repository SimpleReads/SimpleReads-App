'use client'

import { DragEvent, useState } from 'react';
import readPDF from '@/app/lib/pdfApi'
import Link from 'next/link'
import Router from 'next/router';



export default function FileDrop({childToParent}) {
  const [isOver, setIsOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploaded, setUploaded] =useState<boolean>(false);
  const [status, setStatus] = useState<string>("Drag and drop a pdf file here")
  const [info, setInfo] = useState<string>("Waiting for text");

  // Define the event handlers
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);
  };

  const updateText = async(file) => {
    let info = await readPDF(file)
    setInfo(info)
    setUploaded(true)
  }

  const ReadableBufferStream = (ab) => {
    return new ReadableStream({
      start(controller) {
        controller.enqueue(ab)
        controller.close()
      }
    })
  }
  

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);
    setStatus("LOADING")

    // Fetch the files
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles)

    // Use FileReader to read file content
    droppedFiles.forEach((file) => {
        const reader = new FileReader();
        
        reader.onloadend = () => {
            let arr = new Uint8Array(reader.result)
            let blob = new Blob([arr])
            updateText(file)
        };

        reader.onerror = () => {
            console.error('There was an issue reading the file.');
        };
        // reader.readAsDataURL(file);
        reader.readAsArrayBuffer(file);
        return reader;
    });
  };

  return (

    <>
        <div className = "row-span-4 col-span-4">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <section>
                <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '300px',
                    width: '800px',
                    border: '1px dotted',
                    backgroundColor: isOver ? 'lightgray' : 'white',
                }}
                >
                {uploaded ? (
                    <ul>
                    {files.map((file, index) => (
                        <li key={index}>{file.name}</li>
                    ))}
                    </ul>
                ) : (
                    status
                )}
                </div>
                <div>
                    {uploaded && (
                        <section>
                            <button className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" 
                            type = "button" onClick = {() => childToParent(info)}>
                            CONFIRM
                            </button>
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
