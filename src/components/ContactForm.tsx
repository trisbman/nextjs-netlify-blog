export default function ContactForm() {
  return (
    <div className={"container contact"}>
      <h2>Contact Me</h2>
      <form name="contact" method="POST" 
        data-netlify="true" action="contact/success">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname">
            Your Name:
          </label> <br />
          <input type="text" name="name" id="yourname" required />
        </p>
        <p>
          <label htmlFor="youremail">
            Your Email:
          </label> <br />
          <input type="email" name="email" id="youremail" required />
        </p>
        <p>
          <label htmlFor="yourmessage">
            Message:
          </label> <br />
          <textarea name="message" id="yourmessage" required ></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <style jsx>{`
        .contact {
          display: flex;
          flex-direction: column;          
        }
        label {
          font-size: 0.8rem;
        }
        input,
        textarea {
          width: 100%;
          height: 40px;
          border: none;
          border-bottom: 1px solid #d6d6d6;
          font-size: 1.3rem;
        }
        input:focus,
        textarea:focus {
          outline: 1px dotted #d6d6d6;
        }
        button {
          padding: 20px;
          background: black;
          color: white;
          border-radius: 10px;
          font-size: 1.3rem;
        }
      `}</style>
    </div>
  )
}