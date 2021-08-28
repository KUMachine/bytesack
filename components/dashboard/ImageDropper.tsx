import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { BsUpload as UploadIcon } from 'react-icons/bs'

interface ImageDroperProps {
    files: any
    setFiles: any
    multiple: boolean
}

export default function ImageDropper({
    files,
    setFiles,
    multiple,
}: ImageDroperProps) {
    const onDrop = useCallback((acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file: File) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        )
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: multiple,
    })

    const thumbs = files.map((file: any) => (
        <div className="mx-1 my-3" key={file.name}>
            <img
                src={file.preview}
                alt="..."
                className="w-full md:max-w-md"
                style={{ objectFit: 'cover' }}
            />
        </div>
    ))

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach((file: any) => URL.revokeObjectURL(file.preview))
        },
        [files]
    )

    return (
        <section className="container">
            <div
                {...getRootProps({
                    className:
                        'dropzone focus:outline-none border-2 rounded-lg border-dashed px-5 py-10 md:w-1/2 mx-auto cursor-pointer',
                })}
            >
                <input {...getInputProps()} />
                <p className="text-center">
                    <span className="text-gray-700 text-opacity-75">
                        Drop or Select Images
                    </span>
                    <UploadIcon
                        className="mx-auto mt-4 text-gray-400"
                        size={32}
                    />
                </p>
            </div>
            <aside className="flex flex-wrap justify-around">{thumbs}</aside>
        </section>
    )
}
