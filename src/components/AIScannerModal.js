import { useEffect, useRef, useState } from 'react'
import { X, Camera, Upload, ScanLine, Loader2 } from 'lucide-react'

const scanResult = {
  material: 'Aluminium',
  priceRange: '₹300–₹450',
  confidence: '99.4%',
}

function AIScannerModal({ open, onClose }) {
  const fileInputRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if (!open) {
      setStatus('idle')
      setPreview(null)
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  const runScan = (imageUrl) => {
    setPreview(imageUrl)
    setStatus('scanning')

    window.setTimeout(() => {
      setStatus('result')
    }, 1800)
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    const imageUrl = URL.createObjectURL(file)
    runScan(imageUrl)
  }

  const handleDemoScan = () => {
    runScan(null)
  }

  const handleScanAgain = () => {
    setStatus('idle')
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="scanner-modal" role="dialog" aria-modal="true" aria-labelledby="scanner-modal-title">
      <button
        type="button"
        className="scanner-modal__backdrop"
        aria-label="Close scanner"
        onClick={onClose}
      />

      <div className="scanner-modal__panel">
        <div className="scanner-modal__header">
          <div className="scanner-modal__header-left">
            <ScanLine size={18} strokeWidth={2} />
            <h2 id="scanner-modal-title">AI Scanner</h2>
          </div>
          <button type="button" className="scanner-modal__close" aria-label="Close" onClick={onClose}>
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        <div className="scanner-modal__body">
          <div className="scanner-modal__viewfinder">
            {status === 'scanning' && (
              <div className="scanner-modal__scanning">
                <Loader2 size={32} className="scanner-modal__spinner" strokeWidth={2} />
                <p>Analyzing scrap material…</p>
              </div>
            )}

            {status === 'result' && (
              <div className="scanner-modal__result-card">
                <p className="scanner-modal__result-label">Material detected</p>
                <p className="scanner-modal__result-material">{scanResult.material}</p>
                <div className="scanner-modal__result-row">
                  <span>Estimated range (before weighing)</span>
                  <strong>{scanResult.priceRange}</strong>
                </div>
                <p className="scanner-modal__result-confidence">
                  Confidence: {scanResult.confidence}
                </p>
              </div>
            )}

            {status === 'idle' && (
              <>
                <span className="scanner-modal__corner scanner-modal__corner--tl" />
                <span className="scanner-modal__corner scanner-modal__corner--tr" />
                <span className="scanner-modal__corner scanner-modal__corner--bl" />
                <span className="scanner-modal__corner scanner-modal__corner--br" />

                {preview ? (
                  <img src={preview} alt="Scrap preview" className="scanner-modal__preview" />
                ) : (
                  <div className="scanner-modal__placeholder">
                    <Camera size={36} strokeWidth={1.5} />
                    <p>Upload or capture a photo of your scrap</p>
                  </div>
                )}
              </>
            )}
          </div>

          {status === 'idle' && (
            <div className="scanner-modal__actions">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="scanner-modal__file-input"
                onChange={handleFileChange}
              />
              <button
                type="button"
                className="btn btn--outline scanner-modal__action-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={18} strokeWidth={2} />
                Upload photo
              </button>
              <button
                type="button"
                className="btn btn--primary scanner-modal__action-btn"
                onClick={handleDemoScan}
              >
                <Camera size={18} strokeWidth={2} />
                Try demo scan
              </button>
            </div>
          )}

          {status === 'result' && (
            <div className="scanner-modal__actions">
              <button type="button" className="btn btn--outline scanner-modal__action-btn" onClick={handleScanAgain}>
                Scan again
              </button>
              <button type="button" className="btn btn--primary scanner-modal__action-btn" onClick={onClose}>
                Done
              </button>
            </div>
          )}

          <p className="scanner-modal__disclaimer">
            Estimate only. Final value depends on actual weight, grade, and live market rate.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AIScannerModal
