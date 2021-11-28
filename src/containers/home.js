import React from 'react'



const Home = () => {

    return (
      <div class="center">
        <div className="border">
          <h1>Hello! I'm ABAS FDAS :)</h1>
          <p>
            I am from <strong>Dallas Texas</strong>
          </p>
          <p>
            I like to <strong>code for fun</strong>
          </p>
          <p>I am looking for a role in ___</p>
          <p>
            My life story: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit
          </p>
        </div>
        <img
          class="image"
          src={process.env.PUBLIC_URL + `/images/headshot.jpg`}
          alt="img"
        ></img>
        <br />
        <div className="border">
          <h3>My Hobbies</h3>
          <ul>
            <li>Eating</li>
            <li>Cooking</li>
            <li>Repeating step 1 and 2</li>
          </ul>
        </div>
        <div className="border">
          <h3>My classes</h3>
          <ul>
            <li>2.009</li>
            <li>18.600</li>
            <li>6.042</li>
          </ul>
        </div>

        <div className="border">
          <h3>My snacks</h3>
          <img
            class="image"
            src={process.env.PUBLIC_URL + `/images/paleta.jpg`}
            alt="img"
          ></img>
        </div>
      </div>
    );
} 

export default Home;