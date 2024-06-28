(define (test-proc)

  (define (number->3string n)
    (let ((s (number->string n)))
      (string-append (make-string (- 3 (string-length s)) #\0) s)))

  (define (get-input-filename n)
    (string-append "./frames-up/out-" (number->3string n) ".png"))

  (define (get-output-filename n)
    (string-append "./result/out-" (number->3string n) ".png"))
  
  (define (process input output)
    (let* ((image (car (gimp-file-load RUN-NONINTERACTIVE input input)))
           (layer (car (gimp-image-get-active-layer image))))
      (gimp-layer-add-alpha layer)
      (gimp-image-select-color image CHANNEL-OP-REPLACE layer '(0 0 255))
      (gimp-drawable-edit-clear layer)
      (gimp-file-save RUN-NONINTERACTIVE image layer output output)
      (gimp-image-delete image)))

  (define BEGIN 1)
  (define END 840)

  (define (loop i)
    (if (> i END)
        '()
        (begin (process (get-input-filename i) (get-output-filename i))
               (loop (+ i 1)))))

  (gimp-context-set-feather FALSE)
  (gimp-context-set-sample-threshold 0.25)
  (loop BEGIN))