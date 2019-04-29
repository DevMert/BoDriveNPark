import React, { Component } from 'react';
import './App.css';

export default class AppDragDropDemo extends Component {
    state = {
        tasks: [
            { name: "WT Project", category: "wip", bgcolor: "blue" },
            { name: "WT2", category: "wip", bgcolor: "green" },
            { name: "Elektro U", category: "wip", bgcolor: "red" },
            { name: "Mathe V", category: "wip", bgcolor: "skyblue" },
            { name: "Sonstiges", category: "wip", bgcolor: "grey" }
        ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:', id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");

        let tasks = this.state.tasks.filter((task) => {
            if (task.name == id) {
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach((t) => {
            tasks[t.category].push(

                <td key={t.name}
                    onDragStart={(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style={{ backgroundColor: t.bgcolor }}
                >
                    {t.name}
                </td>
            );
        });

        return (
            <div className="container-drag">
                <div class="header">
                    <div class="header-right">
                        <a >Dashboard</a>
                        <a>Map</a>
                        <a>Auslastung</a>

                        <a>Profile</a>
                        <a >Logout</a>

                    </div>
                </div>
                <table className="droppable"
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => this.onDrop(e, "complete")}>

                    <tr id="tr">
                        <th>Montag</th>
                        <th>Dienstag</th>
                        <th>Mittwoch</th>
                        <th>Donnerstag</th>
                        <th>Freitag</th>

                    </tr>
                    <tr>
                        {tasks.complete}
                    </tr>

                </table>
                <div id="wip" className="wip"
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => { this.onDrop(e, "wip") }}>
                    <div id='div'>
                        <h3>+ <span>Component</span></h3>
                        {tasks.wip}

                    </div>
                </div>

             



            </div>
        );
    }
}