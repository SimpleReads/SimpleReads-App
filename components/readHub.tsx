'use client'

import {useState} from 'react'
import FileDrop from './fileDrop'
import ScrollBox from './ScrollBox2'

/**
 * The parent of fileDrop.tsx and the child to ScrollBox, this component manages the state of uploaded files and displays the
 * 'FileDrop' component for file upload or 'ScrollBox' component for displaying text and headers.
 * @returns a component that either displays 'FileDrop' or 'ScrollBox' componenent pending 'uploadcheck'
 */
export default function ReadHub() {
    // State variables to handle the components behaviour 
    const [uploadCheck, setUploadCheck] = useState<number>(0)
    const [text, setText] = useState<string>("")
    const [headerCheck, setHeaderCheck] = useState<number>(0)
    const [headers, setHeaders] = useState<string[]>([])

    // Function to handle a file upload and set text
    const upload = (info) => {
        setUploadCheck(1)
        setText(info)
    }

    // Function to handle header upload and set headers
    const uploadHeaders = (headers) => {
        setHeaderCheck(1)
        setHeaders(headers)
    }

    // Function to reset the upload check state
    const uploadFile = () => {
        setUploadCheck(0)
    }

    // When life gives you lemons, make orange juice and leave the world wondering how
    const meh = () => {
    }

    return (
        <>
            {uploadCheck <= 0 ? (
                // Display the FileDrop Component for File Upload
                <FileDrop childToParent={upload}/>
            ) : (
                // Display the ScrollBox component with text and header handling
                <ScrollBox parentToChild={text} childToParent={headerCheck == 0 ? (uploadHeaders) : (meh)} uploadFile = {uploadFile}/>
            )}
        </>
    )


}