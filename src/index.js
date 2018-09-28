import { h, app } from 'hyperapp';

const state = {
    message: 'hello world!',
    asyncResult: null,
}

const actions = {
    updateMessage: (message) => (state) => ({message}),
    asyncAction: () => (state, actions) => {
        setTimeout(actions.asyncUpdate, 1000, 'I\'m async ' + Date.now());
    },
    asyncUpdate: (asyncResult) => (state) => ({asyncResult}),
}

const view = (state, actions) => (
    <div>
        <label for="newText">
            Type a text&nbsp;
        </label>
        <input 
            id="newText"
            type="text"
            oninput={(ev) => actions.updateMessage(ev.target.value)}
        />
        <div class="display">
            {state.message}
        </div>
        <button onclick={actions.asyncAction}>Test async action</button>
        {state.asyncResult}
    </div>
)
        
app(state, actions, view, document.querySelector('#app'));