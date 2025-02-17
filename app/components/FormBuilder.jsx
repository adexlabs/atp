import React from 'react'

export default function FormBuilder  () {
  return (
    <div>

<iframe
      title="Preview Bar"
      id="preview-bar-iframe"
      src="https://atp-data-services.myshopify.com/preview_bar"
      sandbox="allow-same-origin allow-scripts"
      style={{
        display: "block", 
        width: "100%",
        height: "60px",
        border: "none",
      }}
    />
    </div>
  )
}

