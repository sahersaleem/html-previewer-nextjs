
'use client'

import React from 'react'
import { useState , ChangeEvent } from 'react'
import { Textarea} from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {predefinedHtml } from "./predefinedhtml";



const HtmlPreview = () => {

const [htmlCode , setHtmlCode] = useState<string>("")
const [previewHtml, setPreviewHtml] = useState<string>("")



const handlePreview = ()=>{

    setPreviewHtml(htmlCode)
}

const handlePasteHtmlCode = ()=>{
    setHtmlCode(predefinedHtml)
}

const handleChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
  setHtmlCode(e.target.value)
}




  return (
    <div className='h-screen w-full flex items-center justify-center bg-slate-100  flex-col'>
        <div className='w-[450px] h-[500px] bg-white rounded-md p-8 flex flex-col'>

<div>
            <h1 className='text-4xl font-bold text-center mb-4'>HTML Previewer</h1>
            <p className='text-lg text-center mb-5'> Enter your HTML code and see the preview.</p>

            <Textarea 
            value={htmlCode}
            onChange={handleChange}
            rows={8}
            className='text-black'
            />
            </div>
            <div className='mt-7 flex gap-3 justify-center items-center'>
                <Button onClick={handlePasteHtmlCode}>Paste Html</Button>
                <Button onClick={handlePreview}>Preview Html</Button>
            </div> 
        </div>
        <div className="p-4 rounded-lg border border-input" dangerouslySetInnerHTML={{__html:previewHtml}}>

        </div>
      
    </div>
  )
}

export default HtmlPreview
