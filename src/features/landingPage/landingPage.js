import React, { PureComponent } from 'react';
import './landingPage.css';

export class LandingPage extends PureComponent {
  render() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
            
                <link rel="stylesheet" href="{% static 'css/index.css' %}"/>
            </head>
            <body >
                <header>
                    <div id="navbar1">
                        <div id="name">
                            <a href="{% url 'index' %}" id="login">
                                <h1>BOOKEEPER</h1>
                            </a>
                        </div>
                        <div id="access">
                            <a href='{% url "index-register"%}'  id="register">
                                <h1>REGISTER</h1>
                            </a>
            
                            <a href="{% url 'index' %}" id="login">
                                <h1>LOG IN</h1>
                            </a>
                        </div>
                    </div>
            
                    <div id="navbar2">
                        <ul>
                            <li><a  class="active" href="#home"><h1>Home</h1></a></li>
                            <li><a  href="#about"><h1>About</h1></a></li>
                            <li><a  href="#contact"><h1>Contact</h1></a></li>
                        </ul>
                    </div>
                </header>
            
                <section>
                    <div id="row1">
            
                    </div>
            
                    <div id="row2">
            
                    </div>
            
                    <div id="row3">
            
                    </div>
            
                    <div id="row4">
            
                    </div>
            
                    <div id="row5">
            
                    </div>
            
                    <div id="row6">
            
                    </div>
                </section>
            
                <footer>
            
                </footer>
            </body>
        </html>
    )
  }
}

export default LandingPage