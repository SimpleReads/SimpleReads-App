
'use client'

import {use, useState} from 'react'
import FileDrop from './fileDrop'
import ScrollBox from './ScrollBox2'

export default function ReadHub() {

    const [uploadCheck, setUploadCheck] = useState<number>(0)
    const [text, setText] = useState<string>("")
    const [headerCheck, setHeaderCheck] = useState<number>(0)
    const [headers, setHeaders] = useState<string[]>([])


    const upload = (info) => {
        setText(info)
        setUploadCheck(1)
    }

    const uploadHeaders = (headers) => {
        setHeaderCheck(1)
        setHeaders(headers)
    }

    const meh = () => {
    }

    const scrollTo = () => {
        return 
    }

    return (
        <>
            {uploadCheck <= 0 ? (
                <FileDrop childToParent={upload}/>
            ) : (
                <ScrollBox parentToChild={text} childToParent={headerCheck == 0 ? (uploadHeaders) : (meh)}/>
            )}
        </>
    )


}