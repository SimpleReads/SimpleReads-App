import { DragEvent, useState } from 'react';

/**
 * Handles the file drop event that a user will enact over the pdf dropbox.
 *
 * @param event - The DragEvent that triggered the drop event.
 * @param setIsOver - A function to set the 'isOver' state.
 * @param setStatus - A function to set the 'status' state.
 * @param setFiles - A function to set the 'files' state.
 * @param updateText - A function to update the text based on the dropped files.
 */
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

        // Read the file as an ArrayBuffer
        reader.onerror = () => {
            console.error('There was an issue reading the file.');
        };
        reader.readAsArrayBuffer(file);
        return reader;
    });
  };