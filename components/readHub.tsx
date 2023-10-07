
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

    return (
        <>
        <div className="row-span-2">
          <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
            {/* Side Buttons */}
            <div className="max-w-sm mx-auto">
              <form>
                <div className="flex flex-wrap -mx-3 mt-6 ml-2">
                  {headers.map((label, index) => (
                    <div className="w-full px-3 mb-7">
                      <button className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full">{label}</button>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className = "row-span-4 col-span-4">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                {uploadCheck <= 0 ? (
                    <FileDrop childToParent={upload}/>
                ) : (
                    <ScrollBox parentToChild={text} childToParent={headerCheck == 0 ? (uploadHeaders) : (meh)}/>
                )}
            </div>
          </div>
        </div>
      </>
    )


}