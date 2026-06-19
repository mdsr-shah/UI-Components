import "./FileUpload.css";

function FileUpload({
  onChange,
  multiple = false,
  accept = "*",
  label = "Upload File",
}) {
  return (
    <div className="file-upload-wrapper">

      <label className="file-label">
        {label}

        <input
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={onChange}
        />
      </label>

    </div>
  );
}

export default FileUpload;