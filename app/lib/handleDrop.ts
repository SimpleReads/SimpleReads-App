import { DragEvent, useState } from 'react';

export const handleDrop = (event: DragEvent<HTMLDivElement>, setIsOver, setStatus, setFiles, updateText) => {
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
            if (reader.result instanceof ArrayBuffer) {
                let arr = new Uint8Array(reader.result);
                let blob = new Blob([arr]);
                updateText(file);
            } else {
                console.error('Expected ArrayBuffer but got string');
            }
        };
        reader.onerror = () => {
            console.error('There was an issue reading the file.');
        };
        reader.readAsArrayBuffer(file);
        return reader;
    });
  };