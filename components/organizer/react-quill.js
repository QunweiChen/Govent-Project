import dynamic from 'next/dynamic'

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export default function Quill() {
  return (
    <div>
      {' '}
      <ReactQuill theme="snow" placeholder="Write description" />
    </div>
  )
}
