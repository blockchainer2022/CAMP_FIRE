import "../style.css";
import { ButtonPrimary } from "../../componenets/button";

const NewsLetter = () => {
  return (
    <section className="news-letter">
      <div className="container">
        <div className="custom-container  border-t-2 border-dark-400 py-20">
          <div className="form-wrapper">
            <h2 className="title">Stay up to date</h2>
            <p>Never miss out on an update from the Bonfire team!</p>
            <form action="">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-10 items-end">
                <div className=" lg:col-span-9">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                    <div>
                      <legend className="mb-2">Full name</legend>
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g John Doe"
                      ></input>
                    </div>
                    <div>
                      <legend className="mb-2">Email</legend>
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g John Doe"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className=" lg:col-span-3">
                  <ButtonPrimary>Submit</ButtonPrimary>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
