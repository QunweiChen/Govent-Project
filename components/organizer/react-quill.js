import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css';

export default function Quill() {
  const [quill, setQuill] = useState(null);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // 粗體, 斜體, 底線, 刪除線
      ['image', 'code-block'],
      [{ header: 1 }, { header: 2 }], // 標題
      [{ 'size': ['small', false, 'large', 'huge'] }] // 內文尺寸，false 表示預設值
    ]
  }

  return (
    <div>
      <QuillNoSSRWrapper theme="snow" id="editor" modules={modules}/>
    </div>
  )
}

