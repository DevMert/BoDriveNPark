import React from 'react';

class App1 extends React.Component {
    state = {
      items: ["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"]
    };
  
    render() {
      return (
        <div className="App1">
          <main>
            <h3>List of items</h3>
            <ul>
              {this.state.items.map(item => (
                <li key={item}>
                  <div className="drag" draggable>
                    
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </main>
        </div>
      );
    }
      }  
      export default App1;