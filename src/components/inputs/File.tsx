import React, { useRef } from 'react'
import { KTIcon } from "../../_metronic/helpers";

type Props = {
    title: string;
    onChange: (file: File) => void
}

function InputFile(props: Props) {

    const input = useRef<any>()

    function openInput() {
        if (input) {
            input.current.click()
        }
    }

    function onUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files?.length) {

            const file = event.target.files[0]
            props.onChange(file)
        }
    }
    return (
        <>
            <input ref={input} type='file' style={{ display: "none" }} onChange={onUpload} />
            <button type="button" className="btn btn-secondary me-3 my-3" onClick={openInput}>
                <KTIcon iconName="arrow-up" />
                {props.title}
            </button>

        </>
    )



}


export default InputFile