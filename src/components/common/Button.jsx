

function Button({text , className  , disabled , strongText , onClick}) {
  return (
     <>
        <button type="button" onClick={onClick} disabled={disabled} className={`${className}`}><strong>{strongText}</strong>{text}</button>
     </>
  )
}

export default Button
