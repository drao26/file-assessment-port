import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Upload, File } from '@phosphor-icons/react'

interface FileUploadProps {
  label: string
  placeholder: string
  onFileSelect: (file: File | null) => void
  selectedFile: File | null
}

export function FileUpload({ label, placeholder, onFileSelect, selectedFile }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onFileSelect(file)
  }

  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
      <Label className="min-w-[180px] text-base font-medium">{label}</Label>
      <div className="flex-1">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.doc,.docx"
        />
        <Button
          type="button"
          variant="outline"
          onClick={handleButtonClick}
          className="w-full justify-start gap-2 h-12 border-2 border-accent/30 hover:border-accent/60 text-left"
        >
          {selectedFile ? (
            <>
              <File size={20} className="text-accent shrink-0" />
              <span className="truncate">{selectedFile.name}</span>
            </>
          ) : (
            <>
              <Upload size={20} className="text-muted-foreground shrink-0" />
              <span className="text-muted-foreground">{placeholder}</span>
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
