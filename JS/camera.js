class Camera extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }).innerHTML = `
         <style>
                :host {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    
                    font-family: "PMingLiU", "標楷體", serif;
                    font-size: 11pt;
                    line-height: 1.2;
                }
                #main {
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    background-color: white;
                    box-sizing: border-box;

                    
                }
        </style>
        <label for="camera">開啟相機拍照：</label>
        <input type="file" id="camera" accept="image/*" capture="environment"></input>
        `;

        // this._div = this.shadowRoot.querySelector('#main');
    }

    connectedCallback() {
        // this._typesetOne(this._div);
    }

    // async _typesetOne(el) {
    //     const MJ = window.MathJax;
    //     if (!MJ) return;
    //     if (MJ.startup?.promise) await MJ.startup.promise;
    //     await MJ.typesetPromise([el]);
    // }

} customElements.define("camera-pic", Camera);

