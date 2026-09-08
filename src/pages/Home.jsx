import TextEditor from "../components/Editor/TextEditor"


function Home() {
  return (
    <>
      <section className="main-banner">
        <div className="conatiner">
          <div className="heading-blk">
            <h1>Accidentally left the caps lock on and typed something,<br/> but <strong>can't be bothered </strong>to start again and retype it all?</h1>
            <p>Don't worry, we've got you covered! Our online tool can quickly and easily convert your text to the correct case, so you can get back to typing without any hassle.</p>  
          </div>

          <div className="text-editor-blk">
            <TextEditor />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
