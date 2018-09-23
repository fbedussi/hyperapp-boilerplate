import { h, app } from 'hyperapp';

const state = {
    message: 'hello world!',
}

const actions = {
    updateMessage: message => state => ({message}),
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
    </div>
)
        
app(state, actions, view, document.querySelector('#app'));