import React, { useRef, useState, useEffect } from "react";
import { KTIcon } from "../../../../_metronic/helpers";

type Props = {
    onChange: Function;
    image?: string
};

function InputFile({ onChange, image }: Props) {
    const inputFile = useRef<HTMLInputElement | null>(null);
    const [selectedFile, setSelectedFile] = useState<any>();
    const [preview, setPreview] = useState<any>(image);

    const onUploadClick = () => {
        if (inputFile.current && inputFile.current.click) {
            inputFile.current.click();
        }
    };
    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0]);
        onChange(e.target.files[0])
    };
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);
    useEffect(() => {
        if(image){
            setPreview(image)
        }
    },[image])

    return (
        <>
            {preview && <img className="py-4" style={{ height: "200px" }} src={preview} />}

            <div className="fv-row">
                <div
                    className="btn btn-light"
                    onClick={onUploadClick}
                >
                    <input
                        type="file"
                        id="file"
                        accept=".gif,.png,.jpg,.jpeg"
                        onChange={onSelectFile}
                        ref={inputFile}
                        style={{ display: "none" }}
                    />
                    {selectedFile
                        ? (
                            <>
                                <KTIcon iconName="check" />
                                {selectedFile.name}
                            </>
                        )
                        : (
                            <>
                                <KTIcon iconName="arrow-up" />
                                Subir imagen
                            </>
                        )}
                </div>
                {selectedFile && (
                    <div
                        className="btn btn-secondary mx-2"
                        onClick={() => {
                            setPreview(null);
                            setSelectedFile(null);
                        }}
                    >
                        <KTIcon iconName="trash" />
                        Limpiar
                    </div>
                )}
            </div>
        </>
    );
}

export default InputFile;
