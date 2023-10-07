'use client'

import { DragEvent, useState } from 'react';
import readPDF from '@/app/lib/pdfApi'


export default function FileDrop() {
  const [isOver, setIsOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [text, setText] = useState<String>("Waiting for text");


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
    let text = await readPDF(file)
    setText(text)
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
            console.log(blob);
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
        {files.length > 0 ? (
            <ul>
            {files.map((file, index) => (
                <li key={index}>{file.name}</li>
            ))}
            </ul>
        ) : (
            'Drag and drop some files here'
        )}
        </div>
        <div>
            {text.split("\n").map(function (e) {
                if ((e.split(' ').length < 3) && (e.charAt(0).toUpperCase() === e) && (e.charAt(0).toLowerCase() !== e)) {
                    console.log(e, "A")
                    return <h2>{e}</h2>  
                } 
                else {
                    console.log(e.charAt(0))
                    return <p>{e}</p>
                }
            })}
        </div>
    </>
  );
}
